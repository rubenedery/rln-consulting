import { headers } from "next/headers"
import { getBlogPost, getCaseStudy } from "@/lib/mdx"
import { siteConfig } from "@/lib/constants"
import { decodeEntities, extractElement, htmlToMarkdown } from "@/lib/html-to-markdown"
import { agentResourcesFooter, whenToUseSection } from "@/lib/agent-guidance"

/**
 * Variante markdown de n'importe quelle page du site.
 *
 * proxy.ts réécrit ici les requêtes portant `Accept: text/markdown`, de sorte que
 * /tarifs et /md/tarifs servent le même contenu sous deux représentations — c'est
 * la négociation de contenu HTTP décrite par acceptmarkdown.com.
 *
 * Deux chemins de production :
 *  1. blog et cas d'études sont écrits en markdown → on ressert la source, sans perte ;
 *  2. tout le reste est rendu puis converti → aucune page n'est oubliée, y compris
 *     celles qui seront ajoutées plus tard.
 */

// La conversion dépend du rendu HTML de la requête courante : pas de pré-rendu.
export const dynamic = "force-dynamic"

const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  // Indispensable : sans Vary, un CDN peut servir la variante HTML mise en cache
  // à un agent qui demande du markdown (et inversement).
  Vary: "Accept",
  "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
  "X-Robots-Tag": "noindex, follow",
}

function documentHeader(title: string, description: string, canonical: string): string {
  const lines = [`# ${title}`, ""]
  if (description) lines.push(`> ${description}`, "")
  lines.push(`Source : ${canonical}`, "")
  return lines.join("\n")
}

function notFoundMarkdown(pathname: string): Response {
  const body = [
    "# 404 — Page introuvable",
    "",
    `Le chemin \`${pathname}\` n'existe pas sur ${siteConfig.url}.`,
    "",
    "## Où chercher",
    "",
    `- Index du site pour agents : ${siteConfig.url}/llms.txt`,
    `- Plan du site complet : ${siteConfig.url}/sitemap.xml`,
    `- Services : ${siteConfig.url}/services`,
    `- Tarifs : ${siteConfig.url}/tarifs`,
    `- Blog : ${siteConfig.url}/blog`,
    `- Contact : ${siteConfig.url}/contact`,
    "",
  ].join("\n")

  return new Response(body, { status: 404, headers: MARKDOWN_HEADERS })
}

/** Reconstruit l'origine réelle derrière le proxy Vercel. */
async function requestOrigin(): Promise<string> {
  const headerList = await headers()
  const host = headerList.get("host")
  if (!host) return siteConfig.url
  const protocol = headerList.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https")
  return `${protocol}://${host}`
}

/** Markdown d'origine d'un article ou d'un cas d'étude, frontmatter exclu. */
function sourceMarkdown(pathname: string, canonical: string): string | null {
  const blogMatch = /^\/blog\/([^/]+)$/.exec(pathname)
  if (blogMatch) {
    const post = getBlogPost(decodeURIComponent(blogMatch[1]))
    if (!post) return null
    return [
      documentHeader(post.title, post.description, canonical),
      `*Publié le ${post.date} par ${post.author} — ${post.readingTime} min de lecture.*`,
      "",
      post.content.trim(),
    ].join("\n")
  }

  const caseMatch = /^\/cas-etudes\/([^/]+)$/.exec(pathname)
  if (caseMatch) {
    const study = getCaseStudy(decodeURIComponent(caseMatch[1]))
    if (!study) return null
    const results = study.results.map(
      (result) => `- **${result.metric}** : ${result.before} → ${result.after} (${result.improvement})`
    )
    return [
      documentHeader(study.title, study.description, canonical),
      `*Client : ${study.client} — secteur ${study.industry}.*`,
      "",
      ...(results.length > 0 ? ["## Résultats", "", ...results, ""] : []),
      study.content.trim(),
    ].join("\n")
  }

  return null
}

/** Rend la page HTML puis la convertit. Retourne null si la page n'existe pas. */
async function renderedMarkdown(pathname: string, origin: string, canonical: string): Promise<string | null> {
  const response = await fetch(`${origin}${pathname}`, {
    headers: {
      Accept: "text/html",
      // Empêche proxy.ts de renvoyer cette requête vers la présente route.
      "x-markdown-render": "1",
    },
    cache: "no-store",
  })

  if (response.status === 404) return null
  if (!response.ok) throw new Error(`Rendu HTML indisponible (${response.status})`)

  const html = await response.text()
  const main = extractElement(html, /<main\b[^>]*>/i) ?? extractElement(html, /<body\b[^>]*>/i)
  if (!main) return null

  const body = htmlToMarkdown(main, { baseUrl: siteConfig.url })
  const metaTitle = decodeEntities(/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1]?.trim() ?? "")
  const description = decodeEntities(
    /<meta[^>]+name="description"[^>]+content="([^"]*)"/i.exec(html)?.[1] ??
      /<meta[^>]+content="([^"]*)"[^>]+name="description"/i.exec(html)?.[1] ??
      ""
  )

  // Le H1 de la page devient le titre du document markdown, et disparaît du corps :
  // deux niveaux 1 dans un même document brouillent la hiérarchie que lit l'agent.
  const h1 = /^#\s+(.+)$/m.exec(body)
  const bodyWithoutH1 = h1 ? body.replace(h1[0], "").replace(/\n{3,}/g, "\n\n").trim() : body
  const title =
    h1?.[1].trim() || metaTitle.replace(/\s*\|\s*RLN Consulting\s*$/, "").trim() || siteConfig.name

  return [documentHeader(title, description, canonical), bodyWithoutH1].join("\n")
}

export async function GET(_request: Request, context: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await context.params
  const pathname = `/${(slug ?? []).map(encodeURIComponent).join("/")}`.replace(/\/$/, "") || "/"
  const canonical = `${siteConfig.url}${pathname === "/" ? "/" : pathname}`

  const fromSource = sourceMarkdown(pathname, canonical)
  if (fromSource) {
    return new Response(`${fromSource}\n\n---\n\n${agentResourcesFooter()}\n`, { headers: MARKDOWN_HEADERS })
  }

  try {
    const converted = await renderedMarkdown(pathname, await requestOrigin(), canonical)
    if (!converted) return notFoundMarkdown(pathname)
    // La page d'accueil est le point d'entrée par défaut d'un agent : elle porte
    // les consignes d'usage, que l'agent ait ou non lu /llms.txt au préalable.
    const guidance = pathname === "/" ? `${whenToUseSection()}\n\n---\n\n` : ""
    return new Response(`${converted}\n\n---\n\n${guidance}${agentResourcesFooter()}\n`, {
      headers: MARKDOWN_HEADERS,
    })
  } catch {
    // Plutôt qu'un 500 muet, on renvoie de quoi rebondir : un agent qui reçoit une
    // erreur nue abandonne le domaine, un agent qui reçoit des liens continue.
    const fallback = [
      documentHeader(siteConfig.name, "Variante markdown temporairement indisponible pour cette page.", canonical),
      `La version HTML reste accessible : ${canonical}`,
      "",
      agentResourcesFooter(),
      "",
    ].join("\n")
    return new Response(fallback, { status: 200, headers: MARKDOWN_HEADERS })
  }
}
