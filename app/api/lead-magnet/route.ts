import { NextResponse } from "next/server"
import { z } from "zod"
import { siteConfig } from "@/lib/constants"
import { validateAntiSpam } from "@/lib/antispam"
import { escapeHtml } from "@/lib/email-utils"
import {
  generateGuideHtml,
  generateLeadNotificationHtml,
} from "@/lib/emails/lead-magnet"
import { generateOptInSectionHtml } from "@/lib/emails/nurturing"
import { createNewsletterToken } from "@/lib/newsletter-token"

const leadMagnetSchema = z.object({
  email: z.string().email("Email invalide"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Anti-spam checks (honeypot + timer + rate limit)
    const spamResult = validateAntiSpam(request, body)
    if (spamResult) {
      // Return 200 to not reveal detection to bots
      console.log(`[Anti-spam] Blocked lead magnet: ${spamResult}`)
      return NextResponse.json({ success: true, message: "Guide envoyé avec succès" })
    }

    const { email } = leadMagnetSchema.parse(body)

    const resendApiKey = process.env.RESEND_API_KEY
    const unavailableError = NextResponse.json(
      {
        error: `Le service d'envoi est temporairement indisponible. Écrivez-nous à ${siteConfig.contact.email} pour recevoir le guide.`,
      },
      { status: 500 }
    )

    if (!resendApiKey) {
      console.error(`[Lead magnet] RESEND_API_KEY manquante — lead perdu: ${email}`)
      return unavailableError
    }

    const { Resend } = await import("resend")
    const resend = new Resend(resendApiKey)
    const from =
      process.env.RESEND_FROM_EMAIL || `contact@${new URL(siteConfig.url).host}`

    // Double opt-in : l'email du guide contient un lien de confirmation signé
    // vers la séquence de conseils (rien n'est envoyé sans ce clic explicite)
    const confirmToken = createNewsletterToken(email)
    const optInSection = confirmToken
      ? generateOptInSectionHtml(
          `${siteConfig.url}/api/newsletter/confirm?token=${confirmToken}`
        )
      : ""

    // Resend v6 ne throw pas sur une erreur API : elle est retournée dans `error`
    const [guideResult, notifyResult] = await Promise.all([
      resend.emails.send({
        from,
        to: email,
        subject: "Votre guide : 10 erreurs qui tuent la conversion",
        html: generateGuideHtml(optInSection),
      }),
      resend.emails.send({
        from,
        to: siteConfig.contact.email,
        replyTo: email,
        subject: `[Lead Magnet] Nouveau lead : ${email}`,
        html: generateLeadNotificationHtml(escapeHtml(email)),
      }),
    ])

    if (guideResult.error) {
      console.error(`[Lead magnet] Échec envoi guide à ${email}:`, guideResult.error)
      return unavailableError
    }

    // Le prospect a reçu son guide : un échec de notification interne
    // ne doit pas lui être présenté comme une erreur.
    if (notifyResult.error) {
      console.error(
        `[Lead magnet] Échec notification interne pour ${email}:`,
        notifyResult.error
      )
    }

    return NextResponse.json({
      success: true,
      message: "Guide envoyé avec succès",
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 })
    }

    console.error("[Lead magnet] Erreur inattendue:", error)
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
