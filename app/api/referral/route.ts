import { NextResponse } from "next/server"
import { z } from "zod"
import { siteConfig } from "@/lib/constants"
import { validateAntiSpam } from "@/lib/antispam"
import { escapeHtml } from "@/lib/email-utils"

const referralSchema = z.object({
  profile: z.string().max(40),
  name: z.string().trim().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional().default(""),
  company: z.string().trim().min(1).max(160),
  contact: z.string().max(200).optional().default(""),
  needs: z.array(z.string().max(40)).max(10).default([]),
  budget: z.string().max(40),
  context: z.string().max(3000).optional().default(""),
  informed: z.literal(true),
  consent: z.literal(true),
})

type Referral = z.infer<typeof referralSchema>

const esc = escapeHtml

function row(label: string, value: string) {
  if (!value) return ""
  return `<tr><td style="padding:12px 0;border-bottom:1px solid #D9DBE2"><strong style="color:#5A5F6E;font-size:12px;text-transform:uppercase;letter-spacing:.06em">${label}</strong><br><span style="font-size:16px;white-space:pre-wrap">${esc(value)}</span></td></tr>`
}

function emailHtml(d: Referral) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.6;color:#0B0D12;max-width:600px;margin:0 auto;padding:20px;background:#F2F3F5">
<div style="background:#1F2BFF;color:#fff;padding:28px">
<div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.8">Apport d'affaires</div>
<h1 style="margin:6px 0 0;font-size:24px">${esc(d.company)} recommandé par ${esc(d.name)}</h1>
</div>
<div style="background:#fff;padding:28px"><table style="width:100%;border-collapse:collapse">
${row("Apporteur", `${d.name} (${d.profile})`)}
${row("E-mail apporteur", d.email)}
${row("Téléphone apporteur", d.phone)}
${row("Entreprise recommandée", d.company)}
${row("Contact de l'entreprise", d.contact)}
${row("Besoin", d.needs.join(", "))}
${row("Budget estimé", d.budget)}
${row("Contexte", d.context)}
${row("Contact informé", d.informed ? "Oui" : "Non")}
</table></div></body></html>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const spam = validateAntiSpam(request, body)
    if (spam) {
      console.log(`[Anti-spam] Blocked referral form: ${spam}`)
      return NextResponse.json({ message: "Recommandation envoyée" }, { status: 200 })
    }

    const data = referralSchema.parse(body)
    const resendApiKey = process.env.RESEND_API_KEY
    const unavailableError = NextResponse.json(
      {
        error: `Le service d'envoi est temporairement indisponible. Écrivez-nous directement à ${siteConfig.contact.email}`,
      },
      { status: 500 }
    )

    if (!resendApiKey) {
      console.error(`[Referral] RESEND_API_KEY manquante — recommandation perdue: ${data.email} → ${data.company}`)
      return unavailableError
    }

    const { Resend } = await import("resend")
    const resend = new Resend(resendApiKey)

    // Resend v6 ne throw pas sur une erreur API : elle est retournée dans `error`
    const { error: sendError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || `contact@${new URL(siteConfig.url).host}`,
      to: siteConfig.contact.email,
      replyTo: data.email,
      subject: `[Apport d'affaires] ${data.company} — recommandé par ${data.name}`,
      html: emailHtml(data),
    })

    if (sendError) {
      console.error(`[Referral] Échec envoi Resend pour ${data.email}:`, sendError)
      return unavailableError
    }

    return NextResponse.json({ message: "Recommandation envoyée" }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Données invalides", details: error.issues }, { status: 400 })
    }
    console.error("[Referral] Erreur inattendue:", error)
    return NextResponse.json({ error: "Une erreur est survenue" }, { status: 500 })
  }
}
