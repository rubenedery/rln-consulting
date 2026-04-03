import { MetadataRoute } from "next"
import { getBlogSlugs, getCaseStudySlugs, getBlogPost, getCaseStudy } from "@/lib/mdx"
import { getAllSectorSlugs } from "@/lib/sectors-data"
import { cities } from "@/lib/cities-data"
import { getAllGlossarySlugs } from "@/lib/glossary-data"
import { getExpertiseSlugs } from "@/lib/expertise-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rln-consulting.com"

  // Static pages - Priorités optimisées pour LLM
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Services - Haute priorité pour les requêtes commerciales
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/developpement`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ads-management`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ia-entreprise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ecommerce`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/seo-referencement`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/applications-mobiles`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/crm-applications-metier`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/email-marketing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/configurateur-3d`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Expertises techniques - Haute priorité pour requêtes "développeur [tech]"
    {
      url: `${baseUrl}/expertise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Secteurs
    {
      url: `${baseUrl}/secteurs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Tarifs - Important pour les requêtes "combien coûte"
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tarifs/simulateur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    // Blog et cas d'études
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cas-etudes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Pages institutionnelles
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Statistiques - Données citables pour LLM
    {
      url: `${baseUrl}/statistiques`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // Pages légales
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // Ressources LLM - Important pour l'indexation AI
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/feed.xml`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
  ]

  // Blog posts - Avec dates réelles pour meilleur crawl AI
  const blogSlugs = getBlogSlugs()
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => {
    const post = getBlogPost(slug)
    const postDate = post?.date ? new Date(post.date) : new Date()

    // Les articles techniques et guides ont une priorité plus élevée
    const isGuide = slug.includes("guide") || slug.includes("comment") || slug.includes("tutorial")
    const isComparison = slug.includes("vs") || slug.includes("comparatif")

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: postDate,
      changeFrequency: "monthly" as const,
      priority: isGuide || isComparison ? 0.8 : 0.7,
    }
  })

  // Case studies - Haute priorité car contenu unique avec résultats
  const caseStudySlugs = getCaseStudySlugs()
  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => {
    const study = getCaseStudy(slug)
    const studyDate = study?.date ? new Date(study.date) : new Date()

    return {
      url: `${baseUrl}/cas-etudes/${slug}`,
      lastModified: studyDate,
      changeFrequency: "monthly" as const,
      priority: 0.8, // Priorité élevée car contenu unique avec métriques
    }
  })

  // Sector pages
  const sectorSlugs = getAllSectorSlugs()
  const sectorPages: MetadataRoute.Sitemap = sectorSlugs.map((slug) => ({
    url: `${baseUrl}/secteurs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // City landing pages (SEO local)
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/agence-web-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Glossaire - Haute priorité pour les définitions (optimisé LLM)
  const glossarySlugs = getAllGlossarySlugs()
  const glossaryPages: MetadataRoute.Sitemap = [
    // Page principale du glossaire
    {
      url: `${baseUrl}/glossaire`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    // Pages individuelles des termes
    ...glossarySlugs.map((slug) => ({
      url: `${baseUrl}/glossaire/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75, // Priorité élevée car contenu définitionnel citable
    })),
  ]

  // Expertises techniques - Haute priorité pour requêtes "expert [tech] Paris"
  const expertiseSlugs = getExpertiseSlugs()
  const expertisePages: MetadataRoute.Sitemap = expertiseSlugs.map((slug) => ({
    url: `${baseUrl}/expertise/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85, // Haute priorité car cible des requêtes spécifiques
  }))

  return [
    ...staticPages,
    ...blogPages,
    ...caseStudyPages,
    ...sectorPages,
    ...cityPages,
    ...glossaryPages,
    ...expertisePages,
  ]
}
