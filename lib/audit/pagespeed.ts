export interface PageSpeedResult {
  performance: number | null
  seo: number | null
  accessibility: number | null
  bestPractices: number | null
  lcpMs: number | null
  cls: number | null
}

const PSI_TIMEOUT_MS = 60_000

interface PsiCategory {
  score?: number
}

interface PsiResponse {
  lighthouseResult?: {
    categories?: {
      performance?: PsiCategory
      seo?: PsiCategory
      accessibility?: PsiCategory
      "best-practices"?: PsiCategory
    }
    audits?: {
      "largest-contentful-paint"?: { numericValue?: number }
      "cumulative-layout-shift"?: { numericValue?: number }
    }
  }
}

function toScore(category?: PsiCategory): number | null {
  return typeof category?.score === "number" ? Math.round(category.score * 100) : null
}

/**
 * PageSpeed Insights API v5 (Lighthouse, stratégie mobile). Retourne null si
 * l'API échoue : l'audit continue alors avec les checks HTML seuls.
 */
export async function runPageSpeed(url: string): Promise<PageSpeedResult | null> {
  const apiKey = process.env.PAGESPEED_API_KEY
  if (!apiKey) {
    console.error("[Audit] PAGESPEED_API_KEY manquante — audit sans scores Lighthouse")
    return null
  }

  const endpoint = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed")
  endpoint.searchParams.set("url", url)
  endpoint.searchParams.set("strategy", "mobile")
  endpoint.searchParams.set("key", apiKey)
  for (const category of ["performance", "seo", "accessibility", "best-practices"]) {
    endpoint.searchParams.append("category", category)
  }

  try {
    const response = await fetch(endpoint, {
      signal: AbortSignal.timeout(PSI_TIMEOUT_MS),
    })
    if (!response.ok) {
      console.error(`[Audit] PSI a répondu ${response.status} pour ${url}`)
      return null
    }
    const data = (await response.json()) as PsiResponse
    const categories = data.lighthouseResult?.categories
    const audits = data.lighthouseResult?.audits

    return {
      performance: toScore(categories?.performance),
      seo: toScore(categories?.seo),
      accessibility: toScore(categories?.accessibility),
      bestPractices: toScore(categories?.["best-practices"]),
      lcpMs: audits?.["largest-contentful-paint"]?.numericValue ?? null,
      cls: audits?.["cumulative-layout-shift"]?.numericValue ?? null,
    }
  } catch (error) {
    console.error(`[Audit] PSI en échec pour ${url}:`, error)
    return null
  }
}
