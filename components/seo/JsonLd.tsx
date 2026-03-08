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
      "Agence de développement web et marketing digital à Paris. Sites web Next.js, applications mobiles, CRM sur mesure.",
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
    url,
    logo: {
      "@type": "ImageObject",
      url: `${url}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${url}/og-image.png`,
    description:
      "Agence de développement web et marketing digital en France. Création de sites web Next.js, gestion de campagnes publicitaires.",
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
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    knowsAbout: [
      "Web Development",
      "Digital Marketing",
      "SEO",
      "Google Ads",
      "Facebook Ads",
      "Next.js",
      "React",
      "Artificial Intelligence",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services digitaux",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Développement Web",
            url: `${url}/services/developpement`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestion Publicités",
            url: `${url}/services/ads-management`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IA pour Entreprises",
            url: `${url}/services/ia-entreprise`,
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
      "Agence de développement web et marketing digital à Paris. Sites web Next.js, React, et gestion de campagnes publicitaires Facebook/Google Ads.",
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
  features?: string[]
}

export function ServiceJsonLd({
  name,
  description,
  url,
  provider = "RLN Consulting",
  priceRange,
  features,
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
    ...(priceRange && {
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: priceRange,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: priceRange,
        },
      },
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
