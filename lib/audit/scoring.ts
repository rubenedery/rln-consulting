import type { AuditCheck, HtmlChecksResult } from "./checks"
import type { PageSpeedResult } from "./pagespeed"

export interface CategoryScore {
  label: string
  score: number
}

export interface AuditResult {
  auditedUrl: string
  globalScore: number
  categories: CategoryScore[]
  checks: AuditCheck[]
  pageSpeed: PageSpeedResult | null
}

function scoreFromChecks(checks: AuditCheck[], ids: string[]): number {
  const selected = checks.filter((c) => ids.includes(c.id))
  if (selected.length === 0) return 50
  const points = selected.reduce((sum, c) => {
    if (c.status === "pass") return sum + 100
    if (c.status === "warn") return sum + 50
    return sum
  }, 0)
  return Math.round(points / selected.length)
}

export function buildAuditResult(
  auditedUrl: string,
  htmlResult: HtmlChecksResult,
  pageSpeed: PageSpeedResult | null
): AuditResult {
  const contentScore = scoreFromChecks(htmlResult.checks, [
    "title",
    "meta-description",
    "h1",
    "og",
    "lang",
  ])
  const technicalSeoBase = scoreFromChecks(htmlResult.checks, [
    "canonical",
    "robots",
    "sitemap",
    "viewport",
  ])
  // Le score SEO Lighthouse affine le volet technique quand il est disponible
  const technicalSeo =
    pageSpeed?.seo != null
      ? Math.round((technicalSeoBase + pageSpeed.seo) / 2)
      : technicalSeoBase
  const security = scoreFromChecks(htmlResult.checks, ["https", "reachable"])
  const performance = pageSpeed?.performance ?? null

  const categories: CategoryScore[] = [
    ...(performance != null ? [{ label: "Performance", score: performance }] : []),
    { label: "SEO technique", score: technicalSeo },
    { label: "Contenu & balises", score: contentScore },
    { label: "Sécurité", score: security },
  ]

  const globalScore = Math.round(
    categories.reduce((sum, c) => sum + c.score, 0) / categories.length
  )

  return {
    auditedUrl,
    globalScore,
    categories,
    checks: htmlResult.checks,
    pageSpeed,
  }
}
