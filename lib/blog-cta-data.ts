import type { BlogCategory } from "@/types"

export interface BlogCtaVariant {
  /** Identifiant pour le tracking (cta_click blog_cta_<variant>) */
  variant: "simulator" | "audit" | "contact"
  title: string
  description: string
  buttonLabel: string
  href: string
}

const simulatorCta: BlogCtaVariant = {
  variant: "simulator",
  title: "Combien coûterait votre projet ?",
  description:
    "Obtenez une estimation personnalisée en 2 minutes avec notre simulateur de prix — sans engagement.",
  buttonLabel: "Estimer mon projet",
  href: "/tarifs/simulateur",
}

const auditCta: BlogCtaVariant = {
  variant: "audit",
  title: "Votre site est-il performant ?",
  description:
    "Recevez gratuitement un audit de votre site par email : performance, SEO technique et points à corriger.",
  buttonLabel: "Auditer mon site gratuitement",
  href: "/audit-gratuit",
}

const contactCta: BlogCtaVariant = {
  variant: "contact",
  title: "Un projet en tête ?",
  description:
    "Parlons-en : réponse sous 24 h, devis gratuit et conseils concrets adaptés à votre activité.",
  buttonLabel: "Discuter de mon projet",
  href: "/contact",
}

const ctaByCategory: Record<BlogCategory, BlogCtaVariant> = {
  business: simulatorCta,
  ecommerce: simulatorCta,
  strategie: simulatorCta,
  seo: auditCta,
  geo: auditCta,
  performance: auditCta,
  developpement: contactCta,
  marketing: contactCta,
  ia: contactCta,
  design: contactCta,
  secteur: contactCta,
  innovation: contactCta,
}

export function getBlogCta(category: BlogCategory): BlogCtaVariant {
  return ctaByCategory[category] ?? contactCta
}
