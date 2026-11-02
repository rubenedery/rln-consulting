import { NextResponse, type NextRequest } from "next/server"

import { instancesAutorisees, urlRetourInstance } from "@/lib/tiktok-relais"

export const dynamic = "force-dynamic"
// Données d'acheteurs en transit : la fonction s'exécute en France (Paris), jamais hors UE.
export const preferredRegion = "cdg1"

/** Retour du vendeur depuis TikTok : redirigé vers le back-office de sa bijouterie. */
export function GET(request: NextRequest) {
  const cible = urlRetourInstance(request.nextUrl.searchParams, instancesAutorisees(process.env.TIKTOK_INSTANCES))
  if (!cible) {
    return new NextResponse(
      "Ce lien d'autorisation TikTok Shop n'est rattaché à aucune boutique connue. Relancez la connexion depuis votre back-office.",
      { status: 400, headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" } }
    )
  }
  return NextResponse.redirect(cible, { status: 302, headers: { "cache-control": "no-store" } })
}
