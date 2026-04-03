import type { BlogPost, CaseStudy } from "@/types"
import { siteConfig } from "@/lib/constants"
import { faqData } from "@/lib/content"

/**
 * WebSite Schema - Active la boîte de recherche sitelinks dans Google
 */
export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description:
      "RLN Consulting : agence web française fondée en 2020. Développement Next.js/React, e-commerce, CRM sur mesure, Google Ads et Meta Ads. Tarifs à partir de 1 500€.",
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface OrganizationJsonLdProps {
  url?: string
}

export function OrganizationJsonLd({ url = siteConfig.url }: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: siteConfig.name,
    legalName: "RLN Consulting",
    url,
    logo: {
      "@type": "ImageObject",
      url: `${url}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${url}/og-image.png`,
    description:
      "RLN Consulting est une agence web française fondée en 2020, spécialisée en développement Next.js/React et gestion Google Ads/Meta Ads. Services : création de sites web (à partir de 1 500€), e-commerce, applications web, CRM sur mesure et intégration IA pour entreprises.",
    slogan: "Votre partenaire digital pour des projets web sur mesure",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone.replace(/\s/g, "-"),
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: ["French", "English"],
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
    },
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 5,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "AdministrativeArea",
        name: "Europe francophone",
      },
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Vercel",
      "Shopify",
      "Stripe",
      "WooCommerce",
      "Google Ads",
      "Meta Ads",
      "Facebook Ads",
      "SEO",
      "Google Analytics",
      "OpenAI GPT-4",
      "Claude AI",
      "LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "Chatbots IA",
      "Automatisation IA",
      "Generative Engine Optimization",
      "GEO",
      "LLM Optimization",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services digitaux RLN Consulting",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Création de site web vitrine",
            description: "Site web responsive sur mesure avec Next.js et React",
            url: `${url}/services/developpement`,
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: 1500,
            price: "1500-5000",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site e-commerce",
            description: "Boutique en ligne Shopify ou sur mesure avec paiement Stripe",
            url: `${url}/services/ecommerce`,
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: 3000,
            price: "3000-15000",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestion Google Ads & Meta Ads",
            description: "Création et optimisation de campagnes publicitaires",
            url: `${url}/services/ads-management`,
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: 500,
            price: "500/mois minimum",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intégration IA pour entreprises",
            description: "Chatbots, automatisation et solutions IA sur mesure avec GPT-4 et Claude",
            url: `${url}/services/ia-entreprise`,
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: 2000,
            price: "Sur devis",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM et applications métier",
            description: "Développement d'applications web sur mesure pour la gestion d'entreprise",
            url: `${url}/services/crm-applications-metier`,
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: 5000,
            price: "Sur devis",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GEO - Référencement IA",
            description: "Optimisation pour les moteurs de recherche IA (ChatGPT, Perplexity, Google AI)",
            url: `${url}/services/geo`,
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * LocalBusiness Schema - Améliore la visibilité dans les recherches locales
 */
interface LocalBusinessJsonLdProps {
  url?: string
}

export function LocalBusinessJsonLd({ url = siteConfig.url }: LocalBusinessJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    name: siteConfig.name,
    description:
      "RLN Consulting : agence web parisienne fondée en 2020. Développement Next.js/React, e-commerce Shopify, CRM sur mesure, Google Ads et Meta Ads. Tarifs à partir de 1 500€ pour un site web vitrine.",
    url,
    telephone: siteConfig.contact.phone.replace(/\s/g, "-"),
    email: siteConfig.contact.email,
    logo: `${url}/logo.png`,
    image: `${url}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      postalCode: "75000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Paris",
      },
      {
        "@type": "State",
        name: "Île-de-France",
      },
      {
        "@type": "Country",
        name: "France",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * FAQPage Schema - Affiche les FAQ dans les résultats Google (rich snippets)
 */
interface FAQPageJsonLdProps {
  /** Questions à inclure (par défaut toutes les FAQ) */
  questions?: typeof faqData
}

export function FAQPageJsonLd({ questions = faqData }: FAQPageJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface ServiceJsonLdProps {
  name: string
  description: string
  url: string
  provider?: string
  priceRange?: string
  minPrice?: number
  maxPrice?: number
  features?: string[]
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
  }
  reviews?: Array<{
    author: string
    reviewBody: string
    ratingValue: number
    datePublished?: string
  }>
  estimatedDuration?: string
}

export function ServiceJsonLd({
  name,
  description,
  url,
  provider = "RLN Consulting",
  priceRange,
  minPrice,
  maxPrice,
  features,
  aggregateRating,
  reviews,
  estimatedDuration,
}: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: provider,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: name,
    ...(priceRange || minPrice) && {
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        ...(priceRange && { price: priceRange }),
        ...(minPrice && {
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice,
            ...(maxPrice && { maxPrice }),
            ...(minPrice && !maxPrice && { price: minPrice }),
          },
        }),
        availability: "https://schema.org/InStock",
        validFrom: new Date().toISOString().split("T")[0],
      },
    },
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: aggregateRating.bestRating || 5,
        worstRating: 1,
      },
    }),
    ...(reviews && reviews.length > 0 && {
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        reviewBody: review.reviewBody,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.ratingValue,
          bestRating: 5,
          worstRating: 1,
        },
        ...(review.datePublished && { datePublished: review.datePublished }),
      })),
    }),
    ...(estimatedDuration && {
      providerMobility: estimatedDuration,
    }),
    ...(features && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${name} - Fonctionnalités`,
        itemListElement: features.map((feature) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
          },
        })),
      },
    }),
    termsOfService: `${siteConfig.url}/mentions-legales`,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "PME et Startups",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface BlogPostingJsonLdProps {
  post: BlogPost
  url: string
}

export function BlogPostingJsonLd({ post, url }: BlogPostingJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image.startsWith("http")
      ? post.image
      : `https://rln-consulting.com${post.image}`,
    url,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "RLN Consulting",
      logo: {
        "@type": "ImageObject",
        url: "https://rln-consulting.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface CaseStudyJsonLdProps {
  caseStudy: CaseStudy
  url: string
}

export function CaseStudyJsonLd({ caseStudy, url }: CaseStudyJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
    image: caseStudy.image.startsWith("http")
      ? caseStudy.image
      : `${siteConfig.url}${caseStudy.image}`,
    url,
    datePublished: caseStudy.date,
    dateModified: caseStudy.date,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "RLN Consulting",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "RLN Consulting",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    about: {
      "@type": "Organization",
      name: caseStudy.client,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: caseStudy.industry,
    keywords: caseStudy.services.join(", "),
    ...(caseStudy.testimonial && {
      review: {
        "@type": "Review",
        reviewBody: caseStudy.testimonial.quote,
        author: {
          "@type": "Person",
          name: caseStudy.testimonial.author,
          jobTitle: caseStudy.testimonial.role,
        },
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface WebPageJsonLdProps {
  title: string
  description: string
  url: string
}

export function WebPageJsonLd({ title, description, url }: WebPageJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "RLN Consulting",
      url: "https://rln-consulting.com",
    },
    publisher: {
      "@type": "Organization",
      name: "RLN Consulting",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * LocalBusiness Schema pour les pages villes (SEO local par région)
 */
interface CityLocalBusinessJsonLdProps {
  cityName: string
  region: string
  postalCode: string
  latitude: number
  longitude: number
  url: string
}

export function CityLocalBusinessJsonLd({
  cityName,
  region,
  postalCode,
  latitude,
  longitude,
  url,
}: CityLocalBusinessJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    name: `${siteConfig.name} - ${cityName}`,
    description: `Agence de développement web et marketing digital à ${cityName}. Sites web Next.js, Google Ads, Facebook Ads et solutions IA pour les entreprises de ${cityName} et ${region}.`,
    url,
    telephone: siteConfig.contact.phone.replace(/\s/g, "-"),
    email: siteConfig.contact.email,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: region,
      postalCode,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: cityName,
      },
      {
        "@type": "State",
        name: region,
      },
      {
        "@type": "Country",
        name: "France",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services digitaux à ${cityName}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Création de site web à ${cityName}`,
            url: `${siteConfig.url}/services/developpement`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Gestion Google Ads à ${cityName}`,
            url: `${siteConfig.url}/services/ads-management`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Solutions IA à ${cityName}`,
            url: `${siteConfig.url}/services/ia-entreprise`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `GEO - Référencement IA à ${cityName}`,
            url: `${siteConfig.url}/services/geo`,
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Person Schema - Établit l'autorité E-E-A-T du fondateur
 * Améliore la crédibilité auprès des moteurs de recherche et LLM
 */
interface PersonJsonLdProps {
  name?: string
  jobTitle?: string
  url?: string
  image?: string
  sameAs?: string[]
  worksFor?: string
  knowsAbout?: string[]
  description?: string
}

export function PersonJsonLd({
  name = siteConfig.founder.name,
  jobTitle = siteConfig.founder.role,
  url = siteConfig.url,
  image = `${siteConfig.url}/images/team/ruben-edery.jpg`,
  sameAs = [
    siteConfig.founder.social.linkedin,
    siteConfig.founder.social.twitter,
    siteConfig.founder.social.github,
  ],
  worksFor = siteConfig.name,
  knowsAbout = [
    "Développement Web",
    "Next.js",
    "React",
    "TypeScript",
    "Marketing Digital",
    "Google Ads",
    "Meta Ads",
    "SEO",
    "Intelligence Artificielle",
    "E-commerce",
    "CRM",
    "Shopify",
  ],
  description = "Fondateur et Lead Developer de RLN Consulting, agence web française spécialisée dans le développement Next.js/React et le marketing digital. Expert en création de sites web, applications mobiles, solutions IA et gestion de campagnes publicitaires.",
}: PersonJsonLdProps = {}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name,
    jobTitle,
    url,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 400,
      height: 400,
    },
    description,
    sameAs,
    worksFor: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: worksFor,
      url: siteConfig.url,
    },
    knowsAbout,
    alumniOf: {
      "@type": "Organization",
      name: "Formation autodidacte et certifications professionnelles",
    },
    nationality: {
      "@type": "Country",
      name: "France",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Google Ads Certification",
        credentialCategory: "Professional Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Meta Blueprint Certification",
        credentialCategory: "Professional Certification",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * HowTo Schema - Structure les guides et tutoriels pour les rich snippets
 * Optimisé pour les réponses directes des LLM et AI Overviews
 */
interface HowToStep {
  name: string
  text: string
  url?: string
  image?: string
}

interface HowToJsonLdProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string // Format ISO 8601 (ex: "PT30M" pour 30 minutes)
  estimatedCost?: {
    value: number | string
    currency?: string
  }
  image?: string
  tool?: string[]
  supply?: string[]
}

export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  image,
  tool,
  supply,
}: HowToJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
      },
    }),
    ...(estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: estimatedCost.currency || "EUR",
        value: estimatedCost.value,
      },
    }),
    ...(tool && {
      tool: tool.map((t) => ({
        "@type": "HowToTool",
        name: t,
      })),
    }),
    ...(supply && {
      supply: supply.map((s) => ({
        "@type": "HowToSupply",
        name: s,
      })),
    }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && {
        image: {
          "@type": "ImageObject",
          url: step.image.startsWith("http")
            ? step.image
            : `${siteConfig.url}${step.image}`,
        },
      }),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * DefinedTerm Schema - Pour le glossaire technique
 * Permet aux LLM de comprendre et citer les définitions
 */
interface DefinedTermJsonLdProps {
  term: string
  definition: string
  url: string
  inDefinedTermSet?: string
  relatedTerms?: string[]
}

export function DefinedTermJsonLd({
  term,
  definition,
  url,
  inDefinedTermSet = "Glossaire Marketing Digital & Développement Web",
  relatedTerms,
}: DefinedTermJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    description: definition,
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: inDefinedTermSet,
      url: `${siteConfig.url}/glossaire`,
    },
    ...(relatedTerms && {
      relatedLink: relatedTerms.map((t) => ({
        "@type": "DefinedTerm",
        name: t,
      })),
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * SoftwareApplication Schema - Pour les outils/configurateurs
 */
interface SoftwareApplicationJsonLdProps {
  name: string
  description: string
  url: string
  applicationCategory?: string
  operatingSystem?: string
  offers?: {
    price: number | string
    priceCurrency?: string
  }
  aggregateRating?: {
    ratingValue: number
    ratingCount: number
  }
}

export function SoftwareApplicationJsonLd({
  name,
  description,
  url,
  applicationCategory = "BusinessApplication",
  operatingSystem = "Web",
  offers,
  aggregateRating,
}: SoftwareApplicationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    ...(offers && {
      offers: {
        "@type": "Offer",
        price: offers.price,
        priceCurrency: offers.priceCurrency || "EUR",
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        ratingCount: aggregateRating.ratingCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Speakable Schema - Optimise le contenu pour les assistants vocaux
 * Indique aux AI quelles parties du contenu sont appropriées pour la lecture vocale
 */
interface SpeakableJsonLdProps {
  url: string
  cssSelectors?: string[]
  xpaths?: string[]
}

export function SpeakableJsonLd({
  url,
  cssSelectors = ["article h1", "article h2", "article p:first-of-type", ".speakable"],
  xpaths,
}: SpeakableJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      ...(cssSelectors && { cssSelector: cssSelectors }),
      ...(xpaths && { xpath: xpaths }),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * ItemList Schema - Pour les listes structurées (services, articles, etc.)
 * Améliore l'affichage dans les rich snippets et AI Overviews
 */
interface ItemListJsonLdProps {
  name: string
  description?: string
  items: Array<{
    name: string
    url: string
    description?: string
    image?: string
    position?: number
  }>
  itemListOrder?: "ItemListOrderAscending" | "ItemListOrderDescending" | "ItemListUnordered"
}

export function ItemListJsonLd({
  name,
  description,
  items,
  itemListOrder = "ItemListUnordered",
}: ItemListJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    ...(description && { description }),
    itemListOrder,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: item.position || index + 1,
      item: {
        "@type": "Thing",
        name: item.name,
        url: item.url,
        ...(item.description && { description: item.description }),
        ...(item.image && {
          image: item.image.startsWith("http")
            ? item.image
            : `${siteConfig.url}${item.image}`,
        }),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
