import { NextResponse, after } from "next/server"
import { z } from "zod"
import { siteConfig } from "@/lib/constants"
import { validateAntiSpam } from "@/lib/antispam"
import { escapeHtml } from "@/lib/email-utils"
import { validateAuditUrl } from "@/lib/audit/validate-url"
import { runHtmlChecks } from "@/lib/audit/checks"
import { runPageSpeed } from "@/lib/audit/pagespeed"
import { buildAuditResult } from "@/lib/audit/scoring"
import {
  generateAuditReportHtml,
  generateAuditNotificationHtml,
} from "@/lib/emails/audit"

// L'audit (PageSpeed inclus) prend 15-60 s : il tourne dans after() une fois
// la réponse envoyée. Fluid Compute autorise 300 s ; 120 s suffisent largement.
export const maxDuration = 120

const auditSchema = z.object({
  email: z.string().email("Email invalide"),
  url: z.string().min(4).max(200),
})

function normalizeUrl(raw: string): string {
  const trimmed = raw.trim()
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
}

async function runAuditAndSendEmails(
  targetUrl: URL,
  email: string,
  from: string,
  resendApiKey: string
): Promise<void> {
  const { Resend } = await import("resend")
  const resend = new Resend(resendApiKey)
  const safeEmail = escapeHtml(email)

  // La notification interne part en premier : même si l'audit ou l'envoi du
  // rapport échoue ensuite, le lead n'est jamais perdu.
  const notifyEarly = await resend.emails.send({
    from,
    to: siteConfig.contact.email,
    replyTo: email,
    subject: `[Audit] Nouveau lead : ${email}`,
    html: generateAuditNotificationHtml(safeEmail, targetUrl.href, null),
  })
  if (notifyEarly.error) {
    console.error(`[Audit] Échec notification interne pour ${email}:`, notifyEarly.error)
  }

  try {
    const htmlResult = await runHtmlChecks(targetUrl)
    const pageSpeed = await runPageSpeed(htmlResult.finalUrl)
    const result = buildAuditResult(htmlResult.finalUrl, htmlResult, pageSpeed)

    const report = await resend.emails.send({
      from,
      to: email,
      subject: `Votre audit : ${result.globalScore}/100 pour ${targetUrl.hostname}`,
      html: generateAuditReportHtml(result),
    })
    if (report.error) {
      console.error(`[Audit] Échec envoi rapport à ${email}:`, report.error)
    }
  } catch (error) {
    console.error(`[Audit] Audit en échec pour ${targetUrl.href}:`, error)
    // Le site cible n'a pas pu être analysé : on prévient quand même le
    // prospect plutôt que de le laisser attendre un email qui ne viendra pas
    const fallback = await resend.emails.send({
      from,
      to: email,
      subject: `Votre audit de ${targetUrl.hostname}`,
      html: `
        <p>Bonjour,</p>
        <p>Nous n'avons pas réussi à analyser automatiquement <strong>${escapeHtml(targetUrl.href)}</strong>
        (site inaccessible ou protégé). Répondez à cet email et nous réaliserons l'audit manuellement, gratuitement.</p>
        <p>${siteConfig.name} — ${siteConfig.url}</p>
      `,
    })
    if (fallback.error) {
      console.error(`[Audit] Échec email de repli à ${email}:`, fallback.error)
    }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Rate-limit renforcé : un audit coûte de vraies ressources (3/jour/IP)
    const spamResult = validateAntiSpam(request, body, {
      max: 3,
      windowMs: 24 * 60 * 60 * 1000,
      scope: "audit",
    })
    if (spamResult) {
      // Return 200 to not reveal detection to bots
      console.log(`[Anti-spam] Blocked audit: ${spamResult}`)
      return NextResponse.json({ success: true, message: "Audit lancé" })
    }

    const { email, url } = auditSchema.parse(body)

    const validation = await validateAuditUrl(normalizeUrl(url))
    if (!validation.ok || !validation.url) {
      return NextResponse.json(
        { error: validation.error ?? "URL invalide" },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error(`[Audit] RESEND_API_KEY manquante — lead perdu: ${email} (${validation.url.href})`)
      return NextResponse.json(
        {
          error: `Le service d'envoi est temporairement indisponible. Écrivez-nous à ${siteConfig.contact.email} pour recevoir votre audit.`,
        },
        { status: 500 }
      )
    }

    const from =
      process.env.RESEND_FROM_EMAIL || `contact@${new URL(siteConfig.url).host}`
    const targetUrl = validation.url

    after(() => runAuditAndSendEmails(targetUrl, email, from, resendApiKey))

    return NextResponse.json({
      success: true,
      message: "Audit lancé : votre rapport arrive par email d'ici 2 minutes",
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Données invalides" }, { status: 400 })
    }
    console.error("[Audit] Erreur inattendue:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
