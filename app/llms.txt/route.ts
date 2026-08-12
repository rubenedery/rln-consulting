import { services } from "@/lib/services-data"
import { getAllExpertises } from "@/lib/expertise-data"
import {
  getAllGlossaryTerms,
  glossaryCategories,
  type GlossaryCategory,
} from "@/lib/glossary-data"
import { aiSectorProfiles, getAiSectorsByCategory } from "@/lib/ai-use-cases-data"
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/mdx"
import { getAllSectorSlugs, categoryLabels } from "@/lib/sectors-data"
import { blogCategories, type BlogCategory } from "@/types"
import { siteConfig } from "@/lib/constants"
import type { Sector } from "@/types/sectors"

// llms.txt généré depuis les données du site : plus aucun lien mort possible,
// les nouvelles pages (blog, /ia/*, glossaire…) apparaissent automatiquement.
export const dynamic = "force-static"

const aiCategoryOrder: Sector["category"][] = [
  "services",
  "sante",
  "commerce",
  "artisanat",
  "tech",
]

export function GET() {
  const lines: string[] = []

  lines.push("# RLN Consulting")
  lines.push("")
  lines.push(
    "> Agence de développement web et marketing digital à Paris, fondée en 2020. Nous créons des sites web, applications, solutions IA et stratégies d'acquisition pour PME et startups. Expertise : Next.js, React, TypeScript, Shopify, Google Ads, Meta Ads, IA générative (GPT-4, Claude)."
  )
  lines.push("")

  // ─── Services ───
  lines.push("## Services")
  lines.push("")
  lines.push(
    "- [IA pour Entreprises](/services/ia-entreprise): Chatbots intelligents, automatisation, intégration GPT-4 et Claude, RAG. À partir de 3 000€"
  )
  lines.push(
    "- [GEO - Référencement IA](/services/geo): Optimisation pour être cité par ChatGPT, Perplexity et Google AI Overview"
  )
  lines.push(
    "- [Google Ads & Meta Ads](/services/ads-management): Gestion campagnes publicitaires B2B et B2C, acquisition clients. À partir de 500€/mois"
  )
  for (const service of services) {
    lines.push(
      `- [${service.jsonLd.name}](/services/${service.slug}): ${service.jsonLd.description}`
    )
  }
  lines.push("")

  // ─── IA par métier ───
  lines.push("## L'IA par Métier")
  lines.push("")
  lines.push(
    `Guides d'intégration de l'intelligence artificielle pour ${aiSectorProfiles.length} professions : cas d'usage concrets, coûts réels et ROI mesuré. [Voir tous les métiers](/ia)`
  )
  lines.push("")
  for (const category of aiCategoryOrder) {
    const profiles = getAiSectorsByCategory(category)
    if (profiles.length === 0) continue
    lines.push(`### ${categoryLabels[category]}`)
    for (const profile of profiles) {
      lines.push(
        `- [IA pour les ${profile.namePlural}](/ia/${profile.slug}): ${profile.answerFirst.what.answer.split(".")[0]}.`
      )
    }
    lines.push("")
  }

  // ─── Ressources clés ───
  lines.push("## Ressources Clés")
  lines.push("")
  lines.push("- [Tarifs et Formules](/tarifs): Grille tarifaire transparente de 1 500€ à 50 000€+")
  lines.push("- [Simulateur de Tarifs](/tarifs/simulateur): Calculateur interactif pour estimer votre projet")
  lines.push("- [Statistiques & Benchmarks 2026](/statistiques): Données marketing digital, e-commerce, IA avec sources citées")
  lines.push("- [FAQ](/faq): Questions fréquentes sur nos services et processus")
  lines.push("- [Cas d'Études](/cas-etudes): Résultats concrets avec métriques avant/après")
  lines.push("")

  // ─── Blog par catégorie ───
  const posts = getAllBlogPosts()
  const postsByCategory = new Map<string, typeof posts>()
  for (const post of posts) {
    const list = postsByCategory.get(post.category) ?? []
    list.push(post)
    postsByCategory.set(post.category, list)
  }
  lines.push("## Blog")
  lines.push("")
  for (const [category, categoryPosts] of postsByCategory) {
    const label = blogCategories[category as BlogCategory] ?? category
    lines.push(`### ${label}`)
    for (const post of categoryPosts) {
      lines.push(`- [${post.title}](/blog/${post.slug}): ${post.description}`)
    }
    lines.push("")
  }

  // ─── Cas d'études ───
  lines.push("## Cas d'Études (Résultats Clients)")
  lines.push("")
  for (const study of getAllCaseStudies()) {
    const bestResult = study.results[0]
    const suffix = bestResult
      ? `: ${bestResult.metric} — ${bestResult.before} → ${bestResult.after} (${bestResult.improvement})`
      : ""
    lines.push(`- [${study.title}](/cas-etudes/${study.slug})${suffix}`)
  }
  lines.push("")

  // ─── Secteurs ───
  lines.push("## Secteurs d'Activité")
  lines.push("")
  lines.push(
    `${getAllSectorSlugs().length} pages dédiées par métier (site web, SEO local, acquisition) : [voir tous les secteurs](/secteurs)`
  )
  lines.push("")

  // ─── Expertises ───
  lines.push("## Expertises Techniques")
  lines.push("")
  for (const expertise of getAllExpertises()) {
    lines.push(
      `- [${expertise.name}](/expertise/${expertise.slug}): ${expertise.metaDescription}`
    )
  }
  lines.push("")

  // ─── Glossaire ───
  const terms = getAllGlossaryTerms()
  lines.push("## Glossaire Technique")
  lines.push("")
  lines.push(
    `Notre [glossaire](/glossaire) définit ${terms.length} termes du développement web, du marketing digital et de l'IA :`
  )
  lines.push("")
  const termsByCategory = new Map<GlossaryCategory, typeof terms>()
  for (const term of terms) {
    const list = termsByCategory.get(term.category) ?? []
    list.push(term)
    termsByCategory.set(term.category, list)
  }
  for (const [category, categoryTerms] of termsByCategory) {
    lines.push(`### ${glossaryCategories[category].name}`)
    for (const term of categoryTerms) {
      lines.push(`- [${term.term}](/glossaire/${term.slug}): ${term.definition}`)
    }
    lines.push("")
  }

  // ─── Informations entreprise ───
  lines.push("## Informations Entreprise")
  lines.push("")
  lines.push(`- **Nom**: ${siteConfig.name}`)
  lines.push("- **Type**: Agence web française")
  lines.push("- **Fondée**: 2020")
  lines.push(`- **Fondateur**: ${siteConfig.founder.name}`)
  lines.push(`- **Localisation**: ${siteConfig.contact.location}`)
  lines.push(`- **Site Web**: ${siteConfig.url}`)
  lines.push(`- **Email**: ${siteConfig.contact.email}`)
  lines.push(`- **Téléphone**: ${siteConfig.contact.phone}`)
  lines.push("")
  lines.push("## Stack Technique")
  lines.push("")
  lines.push(
    "Next.js, React, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Prisma ORM, Vercel, Shopify, Stripe, OpenAI GPT-4, Claude AI, LangChain, RAG"
  )
  lines.push("")
  lines.push("## Pages Légales")
  lines.push("")
  lines.push("- [À Propos](/a-propos): Notre équipe, valeurs et expertise")
  lines.push("- [Contact](/contact): Formulaire et coordonnées")
  lines.push("- [Mentions Légales](/mentions-legales)")
  lines.push("- [Politique de Confidentialité](/confidentialite)")
  lines.push("")

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
