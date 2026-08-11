import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/constants"
import { verifyNewsletterToken, createNewsletterToken } from "@/lib/newsletter-token"
import {
  generateWelcomeHtml,
  generateDay3Html,
  generateDay7Html,
} from "@/lib/emails/nurturing"

/**
 * Confirmation du double opt-in (lien cliqué dans l'email du guide).
 * Ajoute le contact à l'audience Resend puis déclenche la séquence de
 * bienvenue : immédiat, J+3 et J+7 via scheduledAt — pas de cron ni de base
 * de données. Idempotent : re-cliquer le lien redirige simplement vers /merci.
 */
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token")
  const email = token ? verifyNewsletterToken(token) : null

  if (!email) {
    return NextResponse.redirect(new URL("/merci?statut=lien-invalide", siteConfig.url))
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID
  if (!resendApiKey || !audienceId) {
    console.error("[Newsletter] RESEND_API_KEY ou RESEND_AUDIENCE_ID manquante")
    return NextResponse.redirect(new URL("/merci?statut=erreur", siteConfig.url))
  }

  const { Resend } = await import("resend")
  const resend = new Resend(resendApiKey)
  const from =
    process.env.RESEND_FROM_EMAIL || `contact@${new URL(siteConfig.url).host}`

  const existing = await resend.contacts.get({ email, audienceId })
  const alreadySubscribed = !existing.error && existing.data != null

  const created = await resend.contacts.create({
    email,
    segments: [{ id: audienceId }],
  })
  if (created.error && !alreadySubscribed) {
    console.error(`[Newsletter] Échec création contact ${email}:`, created.error)
    return NextResponse.redirect(new URL("/merci?statut=erreur", siteConfig.url))
  }

  // Re-clic sur le lien : le contact existe déjà, ne pas re-planifier la séquence
  if (alreadySubscribed) {
    return NextResponse.redirect(new URL("/merci", siteConfig.url))
  }

  const unsubscribeToken = createNewsletterToken(email, null)
  const unsubscribeUrl = unsubscribeToken
    ? `${siteConfig.url}/api/newsletter/unsubscribe?token=${unsubscribeToken}`
    : `${siteConfig.url}/contact`

  const sequence = [
    {
      subject: "Bienvenue ! Vos ressources pour un site qui convertit",
      html: generateWelcomeHtml(unsubscribeUrl),
      scheduledAt: undefined as string | undefined,
    },
    {
      subject: "Comment un site devient une machine à clients (cas concrets)",
      html: generateDay3Html(unsubscribeUrl),
      scheduledAt: "in 3 days",
    },
    {
      subject: "30 minutes pour diagnostiquer votre site — gratuit",
      html: generateDay7Html(unsubscribeUrl),
      scheduledAt: "in 7 days",
    },
  ]

  for (const step of sequence) {
    const sent = await resend.emails.send({
      from,
      to: email,
      subject: step.subject,
      html: step.html,
      ...(step.scheduledAt && { scheduledAt: step.scheduledAt }),
    })
    if (sent.error) {
      console.error(
        `[Newsletter] Échec envoi « ${step.subject} » à ${email}:`,
        sent.error
      )
    }
  }

  return NextResponse.redirect(new URL("/merci", siteConfig.url))
}
