import { MetadataRoute } from "next"
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/mdx"
import { getAllSectorSlugs } from "@/lib/sectors-data"
import { getAllServiceSlugs } from "@/lib/services-data"
import { cities } from "@/lib/cities-data"
import { getAllGlossarySlugs } from "@/lib/glossary-data"
import { getExpertiseSlugs } from "@/lib/expertise-data"
import { getAllAiSectorSlugs } from "@/lib/ai-use-cases-data"
import { siteConfig } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Dates de dernière modification réelle par famille de contenu.
  // À mettre à jour lors d'une évolution significative du contenu : un lastmod
  // qui change à chaque build (new Date()) est détecté comme mensonger par
  // Google, qui ignore alors ce signal — précieux pour prioriser le crawl.
  const contentLastModified = {
    staticPages: new Date("2026-08-11"),
    services: new Date("2026-08-11"),
    sectors: new Date("2026-08-12"),
    cities: new Date("2026-08-11"),
    glossary: new Date("2026-08-11"),
    expertise: new Date("2026-08-11"),
    aiSectors: new Date("2026-08-11"),
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/secteurs`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tarifs/simulateur`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/audit-gratuit`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cas-etudes`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/statistiques`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: contentLastModified.staticPages,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Les 3 routes statiques de app/services/ n'existent pas dans services-data
  const staticServiceSlugs = ["ia-entreprise", "geo", "ads-management"]
  const servicePages: MetadataRoute.Sitemap = [
    ...getAllServiceSlugs(),
    ...staticServiceSlugs,
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: contentLastModified.services,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const blogPages: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => {
    const isGuide =
      post.slug.includes("guide") || post.slug.includes("comment") || post.slug.includes("tutorial")
    const isComparison = post.slug.includes("vs") || post.slug.includes("comparatif")

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: isGuide || isComparison ? 0.8 : 0.7,
    }
  })

  const caseStudyPages: MetadataRoute.Sitemap = getAllCaseStudies().map((study) => ({
    url: `${baseUrl}/cas-etudes/${study.slug}`,
    lastModified: study.date ? new Date(study.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const sectorSlugs = getAllSectorSlugs()
  const sectorPages: MetadataRoute.Sitemap = sectorSlugs.map((slug) => ({
    url: `${baseUrl}/secteurs/${slug}`,
    lastModified: contentLastModified.sectors,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/agence-web-${city.slug}`,
    lastModified: contentLastModified.cities,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const glossarySlugs = getAllGlossarySlugs()
  const glossaryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/glossaire`,
      lastModified: contentLastModified.glossary,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...glossarySlugs.map((slug) => ({
      url: `${baseUrl}/glossaire/${slug}`,
      lastModified: contentLastModified.glossary,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ]

  const expertiseSlugs = getExpertiseSlugs()
  const expertisePages: MetadataRoute.Sitemap = expertiseSlugs.map((slug) => ({
    url: `${baseUrl}/expertise/${slug}`,
    lastModified: contentLastModified.expertise,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const aiPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/ia`,
      lastModified: contentLastModified.aiSectors,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...getAllAiSectorSlugs().map((slug) => ({
      url: `${baseUrl}/ia/${slug}`,
      lastModified: contentLastModified.aiSectors,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ]

  return [
    ...staticPages,
    ...servicePages,
    ...aiPages,
    ...blogPages,
    ...caseStudyPages,
    ...sectorPages,
    ...cityPages,
    ...glossaryPages,
    ...expertisePages,
  ]
}
