import { NextResponse } from "next/server"
import { z } from "zod"
import { siteConfig } from "@/lib/constants"

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

type ContactData = z.infer<typeof contactSchema>

/**
 * Génère le contenu HTML de l'email
 */
function generateEmailHtml(data: ContactData): string {
  const serviceLabels: Record<string, string> = {
    developpement: "Développement Web",
    ads: "Gestion Publicités",
    both: "Développement + Publicités",
    other: "Autre",
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau contact</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">via ${siteConfig.url}</p>
        </div>

        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Nom</strong><br>
                <span style="font-size: 16px;">${data.name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Email</strong><br>
                <a href="mailto:${data.email}" style="font-size: 16px; color: #2563eb; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Entreprise</strong><br>
                <span style="font-size: 16px;">${data.company}</span>
              </td>
            </tr>
            ` : ""}
            ${data.phone ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Téléphone</strong><br>
                <a href="tel:${data.phone}" style="font-size: 16px; color: #2563eb; text-decoration: none;">${data.phone}</a>
              </td>
            </tr>
            ` : ""}
            ${data.service ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Service souhaité</strong><br>
                <span style="font-size: 16px;">${serviceLabels[data.service] || data.service}</span>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 12px 0;">
                <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Message</strong><br>
                <div style="font-size: 16px; white-space: pre-wrap; margin-top: 8px; padding: 16px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">${data.message}</div>
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
            <a href="mailto:${data.email}?subject=Re: Votre demande - ${siteConfig.name}" style="display: inline-block; background: #f59e0b; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500;">
              Répondre à ${data.name}
            </a>
          </div>
        </div>

        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
          Email envoyé automatiquement depuis le formulaire de contact de ${siteConfig.name}
        </p>
      </body>
    </html>
  `
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // Check if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      // Dynamic import to avoid issues if resend is not installed
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(resendApiKey)

        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || `contact@${new URL(siteConfig.url).host}`,
          to: siteConfig.contact.email,
          replyTo: validatedData.email,
          subject: `[Contact] ${validatedData.name} - ${validatedData.service || "Demande générale"}`,
          html: generateEmailHtml(validatedData),
        })

      } catch {
        // Continue anyway - we don't want to fail the user's request
      }
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
