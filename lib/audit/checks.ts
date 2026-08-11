import { validateAuditUrl } from "./validate-url"

export type CheckStatus = "pass" | "warn" | "fail"

export interface AuditCheck {
  id: string
  label: string
  status: CheckStatus
  detail: string
}

export interface HtmlChecksResult {
  finalUrl: string
  usedHttps: boolean
  checks: AuditCheck[]
  pageTitle: string | null
}

const FETCH_TIMEOUT_MS = 8000
const MAX_HTML_BYTES = 1_500_000
const MAX_REDIRECTS = 3
const USER_AGENT = "RLN-Audit-Bot/1.0 (+https://rln-consulting.com/audit-gratuit)"

/**
 * Fetch avec redirections suivies manuellement : chaque saut est re-validé
 * contre les IP privées (une redirection vers le réseau interne serait sinon
 * un contournement trivial du filtre SSRF).
 */
async function fetchWithManualRedirects(startUrl: URL): Promise<{ response: Response; finalUrl: URL }> {
  let current = startUrl
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const response = await fetch(current, {
      redirect: "manual",
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    })

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location")
      if (!location) return { response, finalUrl: current }
      const next = new URL(location, current)
      const validation = await validateAuditUrl(next.href)
      if (!validation.ok || !validation.url) {
        throw new Error("Redirection vers une adresse non auditable")
      }
      current = validation.url
      continue
    }

    return { response, finalUrl: current }
  }
  throw new Error("Trop de redirections")
}

async function readBoundedText(response: Response): Promise<string> {
  const reader = response.body?.getReader()
  if (!reader) return ""
  const chunks: Uint8Array[] = []
  let received = 0
  while (received < MAX_HTML_BYTES) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
    received += value.byteLength
  }
  reader.cancel().catch(() => {})
  return Buffer.concat(chunks).toString("utf8")
}

function extract(html: string, regex: RegExp): string | null {
  const match = html.match(regex)
  return match ? match[1].trim() : null
}

function check(
  id: string,
  label: string,
  status: CheckStatus,
  detail: string
): AuditCheck {
  return { id, label, status, detail }
}

/**
 * Analyse la page d'accueil du site cible : balises essentielles au SEO et au
 * partage. Parsing par regex — suffisant pour des balises meta, sans
 * dépendance de parsing HTML.
 */
export async function runHtmlChecks(url: URL): Promise<HtmlChecksResult> {
  const checks: AuditCheck[] = []

  const { response, finalUrl } = await fetchWithManualRedirects(url)
  const usedHttps = finalUrl.protocol === "https:"
  const html = response.ok ? await readBoundedText(response) : ""
  // On ne garde que le <head> quand il est identifiable : les regex meta n'ont
  // pas à parcourir tout le corps de page
  const headEnd = html.indexOf("</head>")
  const head = headEnd > 0 ? html.slice(0, headEnd) : html

  if (!response.ok) {
    checks.push(
      check("reachable", "Page accessible", "fail", `La page répond avec le code ${response.status}.`)
    )
    return { finalUrl: finalUrl.href, usedHttps, checks, pageTitle: null }
  }
  checks.push(check("reachable", "Page accessible", "pass", "La page répond correctement."))

  checks.push(
    usedHttps
      ? check("https", "HTTPS", "pass", "Le site est servi en HTTPS.")
      : check("https", "HTTPS", "fail", "Le site n'est pas servi en HTTPS : les navigateurs le signalent comme non sécurisé et Google le pénalise.")
  )

  const title = extract(head, /<title[^>]*>([\s\S]*?)<\/title>/i)
  if (!title) {
    checks.push(check("title", "Balise title", "fail", "Aucune balise <title> : c'est le texte du résultat Google."))
  } else if (title.length < 10 || title.length > 65) {
    checks.push(check("title", "Balise title", "warn", `Le titre fait ${title.length} caractères (idéal : 10 à 60). Il risque d'être tronqué ou jugé peu descriptif.`))
  } else {
    checks.push(check("title", "Balise title", "pass", `Titre présent et de bonne longueur (${title.length} caractères).`))
  }

  const metaDesc =
    extract(head, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
    extract(head, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i)
  if (!metaDesc) {
    checks.push(check("meta-description", "Meta description", "fail", "Absente : Google génère alors un extrait aléatoire, souvent moins vendeur."))
  } else if (metaDesc.length < 50 || metaDesc.length > 165) {
    checks.push(check("meta-description", "Meta description", "warn", `Elle fait ${metaDesc.length} caractères (idéal : 50 à 160).`))
  } else {
    checks.push(check("meta-description", "Meta description", "pass", `Présente et de bonne longueur (${metaDesc.length} caractères).`))
  }

  const h1Count = (html.match(/<h1[\s>]/gi) || []).length
  if (h1Count === 0) {
    checks.push(check("h1", "Titre principal (h1)", "fail", "Aucun <h1> : le sujet principal de la page n'est pas signalé aux moteurs."))
  } else if (h1Count > 1) {
    checks.push(check("h1", "Titre principal (h1)", "warn", `${h1Count} balises <h1> trouvées : une seule est recommandée.`))
  } else {
    checks.push(check("h1", "Titre principal (h1)", "pass", "Un seul <h1>, structure correcte."))
  }

  checks.push(
    /<link[^>]+rel=["']canonical["']/i.test(head)
      ? check("canonical", "URL canonique", "pass", "Balise canonical présente.")
      : check("canonical", "URL canonique", "warn", "Pas de balise canonical : risque de contenu dupliqué aux yeux de Google.")
  )

  checks.push(
    /<meta[^>]+name=["']viewport["']/i.test(head)
      ? check("viewport", "Affichage mobile (viewport)", "pass", "Meta viewport présente.")
      : check("viewport", "Affichage mobile (viewport)", "fail", "Pas de meta viewport : le site s'affiche mal sur mobile, où se fait la majorité des visites.")
  )

  const hasOgTitle = /<meta[^>]+property=["']og:title["']/i.test(head)
  const hasOgImage = /<meta[^>]+property=["']og:image["']/i.test(head)
  if (hasOgTitle && hasOgImage) {
    checks.push(check("og", "Balises de partage (Open Graph)", "pass", "og:title et og:image présents : les partages sur les réseaux affichent un aperçu correct."))
  } else if (hasOgTitle || hasOgImage) {
    checks.push(check("og", "Balises de partage (Open Graph)", "warn", "Open Graph incomplet (title ou image manquant) : aperçus de partage dégradés."))
  } else {
    checks.push(check("og", "Balises de partage (Open Graph)", "fail", "Aucune balise Open Graph : les partages sur les réseaux sociaux n'affichent pas d'aperçu."))
  }

  checks.push(
    /<html[^>]+lang=/i.test(html)
      ? check("lang", "Langue déclarée", "pass", "L'attribut lang est défini.")
      : check("lang", "Langue déclarée", "warn", "L'attribut lang n'est pas défini sur <html>.")
  )

  const origin = finalUrl.origin
  const [robotsCheck, sitemapCheck] = await Promise.all([
    checkTextResource(`${origin}/robots.txt`, "robots", "Fichier robots.txt", (body) =>
      /^\s*disallow:\s*\/\s*$/im.test(body)
        ? check("robots", "Fichier robots.txt", "fail", "Le robots.txt bloque tout le site (Disallow: /) : aucune page ne peut être indexée.")
        : check("robots", "Fichier robots.txt", "pass", "robots.txt présent et non bloquant.")
    ),
    checkTextResource(`${origin}/sitemap.xml`, "sitemap", "Sitemap XML", () =>
      check("sitemap", "Sitemap XML", "pass", "sitemap.xml présent : Google découvre vos pages plus vite.")
    ),
  ])
  checks.push(robotsCheck, sitemapCheck)

  return { finalUrl: finalUrl.href, usedHttps, checks, pageTitle: title }
}

async function checkTextResource(
  resourceUrl: string,
  id: string,
  label: string,
  onOk: (body: string) => AuditCheck
): Promise<AuditCheck> {
  try {
    const response = await fetch(resourceUrl, {
      headers: { "User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    })
    if (!response.ok) {
      return check(id, label, "warn", `${label} introuvable (${response.status}).`)
    }
    const body = (await response.text()).slice(0, 100_000)
    return onOk(body)
  } catch {
    return check(id, label, "warn", `${label} inaccessible.`)
  }
}
