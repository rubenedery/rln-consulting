export interface SectorFeature {
  title: string
  description: string
}

export interface SectorTestimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface SectorFAQ {
  question: string
  answer: string
}

export type DigitalServiceType =
  | "site_web"
  | "seo_local"
  | "google_ads"
  | "facebook_ads"
  | "avis_google"
  | "crm"
  | "emailing"
  | "automation"
  | "chatbot"
  | "reseaux_sociaux"
  | "reservation"
  | "ecommerce"
  | "analytics"
  | "app_mobile"

export interface DigitalService {
  type: DigitalServiceType
  title: string
  description: string
  benefits: string[]
}

export interface Sector {
  slug: string
  name: string
  namePlural: string

  metaTitle: string
  metaDescription: string

  headline: string
  subheadline: string

  painPoints: string[]

  solutions: SectorFeature[]

  specificFeatures: string[]

  digitalServices: DigitalServiceType[]

  stats: {
    label: string
    value: string
  }[]

  faqs: SectorFAQ[]

  category: "commerce" | "services" | "sante" | "artisanat" | "tech" | "autre"

  icon: string
}
