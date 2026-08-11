import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/constants"
import { verifyNewsletterToken } from "@/lib/newsletter-token"

/**
 * Désinscription en un clic (lien présent dans chaque email de la séquence).
 * Limite sans base de données : les emails déjà planifiés via scheduledAt ne
 * peuvent pas être annulés — la séquence est volontairement courte (J+7 max).
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

  const updated = await resend.contacts.update({
    email,
    audienceId,
    unsubscribed: true,
  })
  if (updated.error) {
    console.error(`[Newsletter] Échec désinscription ${email}:`, updated.error)
    return NextResponse.redirect(new URL("/merci?statut=erreur", siteConfig.url))
  }

  return NextResponse.redirect(new URL("/merci?statut=desinscrit", siteConfig.url))
}
