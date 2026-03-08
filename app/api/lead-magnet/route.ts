import { NextResponse } from "next/server"

interface LeadMagnetRequest {
  email: string
}

export async function POST(request: Request) {
  try {
    const body: LeadMagnetRequest = await request.json()
    const { email } = body

    // Validation
    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "L'email est requis" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      )
    }

    // TODO: Intégrer avec un service d'emailing (Mailchimp, ConvertKit, etc.)
    // Pour l'instant, on simule un succès avec un délai
    console.log("Lead magnet requested by:", email)

    // Simuler un délai réseau
    await new Promise((resolve) => setTimeout(resolve, 500))

    // TODO: Envoyer l'email avec le lien du PDF
    // await sendEmail({
    //   to: email,
    //   subject: "Votre guide : 10 erreurs qui tuent la conversion",
    //   template: "lead-magnet",
    //   data: { downloadLink: "https://..." }
    // })

    // TODO: Sauvegarder le lead dans une base de données
    // await db.leads.create({ email, source: "lead-magnet-conversion-guide" })

    return NextResponse.json({
      success: true,
      message: "Guide envoyé avec succès",
    })
  } catch (error) {
    console.error("Lead magnet error:", error)
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
