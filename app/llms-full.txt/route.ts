import { buildLlmsContent } from "@/lib/llms-content"

/**
 * Variante longue de /llms.txt : mêmes liens, plus les descriptions de chaque
 * page. Sert de destination au pointeur placé dans l'index, qui doit rester
 * sous la limite de 30 000 caractères de la convention llms.txt.
 */
export const dynamic = "force-static"

export function GET() {
  return new Response(buildLlmsContent("full"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
