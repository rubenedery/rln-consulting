import { NextResponse, type NextRequest } from "next/server"

/**
 * Négociation de contenu markdown (acceptmarkdown.com).
 *
 * Un agent qui envoie `Accept: text/markdown` reçoit la page en markdown ; un
 * navigateur reçoit le HTML habituel. La même URL sert les deux — c'est ce que
 * demande la spécification, plutôt qu'un chemin parallèle en .md que personne
 * ne devine.
 *
 * Le `Vary: Accept` est ajouté ici plutôt que dans next.config.ts parce que
 * `headers()` écraserait le `Vary: rsc, next-router-state-tree…` que Next.js
 * pose pour distinguer HTML et payload RSC dans les caches CDN. `append`
 * cohabite avec l'existant.
 */

/** Routes servant déjà un format non-HTML : les convertir n'aurait aucun sens. */
const RAW_PATHS = new Set([
  "/llms.txt",
  "/llms-full.txt",
  "/agent-instructions.md",
  "/.well-known/agent-instructions.md",
  "/robots.txt",
  "/sitemap.xml",
  "/feed.xml",
])

/**
 * Vrai si le client préfère le markdown au HTML, en respectant les q-values :
 * `Accept: text/markdown;q=0.5, text/html` doit rester du HTML.
 */
function prefersMarkdown(accept: string | null): boolean {
  if (!accept || !accept.includes("text/markdown")) return false

  const quality = (type: string): number => {
    const entry = accept
      .split(",")
      .map((part) => part.trim())
      .find((part) => part.split(";")[0].trim() === type)
    if (!entry) return 0
    const q = /;\s*q=([0-9.]+)/.exec(entry)
    return q ? Number.parseFloat(q[1]) : 1
  }

  return quality("text/markdown") >= quality("text/html")
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // La route /md rend la page HTML pour la convertir : sans ce garde-fou, sa
  // propre requête reviendrait ici et boucherait indéfiniment.
  const isInternalRender = request.headers.get("x-markdown-render") === "1"

  if (
    !isInternalRender &&
    !RAW_PATHS.has(pathname) &&
    prefersMarkdown(request.headers.get("accept"))
  ) {
    const target = request.nextUrl.clone()
    target.pathname = `/md${pathname === "/" ? "" : pathname}`
    target.search = search
    const rewritten = NextResponse.rewrite(target)
    rewritten.headers.append("Vary", "Accept")
    return rewritten
  }

  const response = NextResponse.next()
  // Sur les réponses HTML aussi : le CDN doit savoir que la représentation dépend
  // de l'en-tête Accept, sinon il sert la première variante mise en cache.
  // `append` et non `set` : Next.js pose son propre Vary (rsc, next-router-*) pour
  // séparer HTML et payload RSC, et l'écraser casserait le cache du routeur.
  // Sur une page pré-rendue, Next reprend malgré tout la main sur cet en-tête —
  // la garantie porte donc sur la réponse markdown, qui est la variante négociée.
  response.headers.append("Vary", "Accept")
  return response
}

export const config = {
  // Exclut les assets et les routes internes : la négociation ne concerne que
  // les pages, et faire tourner le proxy sur chaque image serait du gaspillage.
  matcher: ["/((?!_next/static|_next/image|api/|md/|favicon|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|woff2?|ttf|xml|txt|pdf)$).*)"],
}
