import {
  Globe,
  Layout,
  ShoppingCart,
  AppWindow,
  BookOpen,
  Users,
  Languages,
  Calendar,
  Database,
  CreditCard,
  BarChart3,
  Palette,
  Award,
  Crown,
  Clock,
  Zap,
  AlertTriangle,
  Bot,
  MessageSquare,
  Cog,
  TrendingUp,
} from "lucide-react"
import type {
  ServiceType,
  WebProjectType,
  WebFeature,
  DesignLevel,
  DeliveryTimeline,
  AdsPlatform,
  AdsEngagement,
  AISolutionType,
  AIComplexity,
  SelectOption,
  CalculatorState,
  PriceEstimate,
  PriceBreakdownItem,
} from "@/types/calculator"

// ============================================
// Service Options
// ============================================

export const serviceOptions: SelectOption<ServiceType>[] = [
  {
    value: "web",
    label: "Développement Web",
    description: "Site vitrine, e-commerce, application web",
    icon: Globe,
  },
  {
    value: "ads",
    label: "Gestion Publicités",
    description: "Facebook, Google, Instagram Ads",
    icon: TrendingUp,
  },
  {
    value: "ai",
    label: "Solutions IA",
    description: "Chatbot, automatisation, assistant IA",
    icon: Bot,
  },
]

// ============================================
// Web Development Options
// ============================================

export const webProjectOptions: SelectOption<WebProjectType>[] = [
  {
    value: "vitrine",
    label: "Site Vitrine",
    description: "1 à 5 pages pour présenter votre activité",
    icon: Layout,
    price: "2 000€",
  },
  {
    value: "avance",
    label: "Site Avancé",
    description: "6 à 15 pages avec fonctionnalités étendues",
    icon: Globe,
    price: "4 000€",
    popular: true,
  },
  {
    value: "ecommerce",
    label: "E-commerce",
    description: "Boutique en ligne complète",
    icon: ShoppingCart,
    price: "6 000€",
  },
  {
    value: "webapp",
    label: "Application Web",
    description: "Solution sur mesure avec dashboard",
    icon: AppWindow,
    price: "10 000€",
  },
]

export const webFeatureOptions: SelectOption<WebFeature>[] = [
  {
    value: "blog",
    label: "Blog",
    description: "Section actualités avec CMS",
    icon: BookOpen,
    price: "+800€",
  },
  {
    value: "espace_membre",
    label: "Espace Membre",
    description: "Connexion et profils utilisateurs",
    icon: Users,
    price: "+1 500€",
  },
  {
    value: "multilingue",
    label: "Multilingue",
    description: "Support de plusieurs langues",
    icon: Languages,
    price: "+600€/langue",
  },
  {
    value: "calendrier",
    label: "Calendrier / Réservations",
    description: "Système de prise de RDV",
    icon: Calendar,
    price: "+1 200€",
  },
  {
    value: "crm",
    label: "Intégration CRM",
    description: "HubSpot, Salesforce, etc.",
    icon: Database,
    price: "+1 000€",
  },
  {
    value: "paiement",
    label: "Paiement en ligne",
    description: "Stripe, PayPal intégrés",
    icon: CreditCard,
    price: "+800€",
  },
  {
    value: "analytics",
    label: "Analytics avancé",
    description: "Dashboard personnalisé",
    icon: BarChart3,
    price: "+600€",
  },
]

export const webDesignOptions: SelectOption<DesignLevel>[] = [
  {
    value: "standard",
    label: "Standard",
    description: "Design moderne avec templates",
    icon: Palette,
    price: "Inclus",
  },
  {
    value: "premium",
    label: "Premium",
    description: "Design personnalisé + animations",
    icon: Award,
    price: "+2 000€",
    popular: true,
  },
  {
    value: "haut_de_gamme",
    label: "Haut de Gamme",
    description: "Design unique par un DA senior",
    icon: Crown,
    price: "+4 000€",
  },
]

export const webTimelineOptions: SelectOption<DeliveryTimeline>[] = [
  {
    value: "normal",
    label: "Normal",
    description: "6 à 8 semaines",
    icon: Clock,
    price: "×1",
  },
  {
    value: "accelere",
    label: "Accéléré",
    description: "3 à 4 semaines",
    icon: Zap,
    price: "×1.3",
  },
  {
    value: "urgent",
    label: "Urgent",
    description: "2 semaines",
    icon: AlertTriangle,
    price: "×1.5",
  },
]

// ============================================
// Ads Management Options
// ============================================

export const adsPlatformOptions: SelectOption<AdsPlatform>[] = [
  {
    value: "google",
    label: "Google Ads",
    description: "Search, Display, YouTube",
    price: "500€/mois",
  },
  {
    value: "facebook",
    label: "Facebook Ads",
    description: "Feed, Stories, Messenger",
    price: "500€/mois",
    popular: true,
  },
  {
    value: "instagram",
    label: "Instagram Ads",
    description: "Feed, Stories, Reels",
    price: "500€/mois",
  },
  {
    value: "linkedin",
    label: "LinkedIn Ads",
    description: "B2B et recrutement",
    price: "500€/mois",
  },
  {
    value: "tiktok",
    label: "TikTok Ads",
    description: "Vidéos courtes virales",
    price: "500€/mois",
  },
]

export const adsEngagementOptions: SelectOption<AdsEngagement>[] = [
  {
    value: "mensuel",
    label: "Sans engagement",
    description: "Facturation mensuelle",
    price: "Tarif standard",
  },
  {
    value: "3_mois",
    label: "3 mois",
    description: "Engagement trimestriel",
    price: "-5%",
  },
  {
    value: "6_mois",
    label: "6 mois",
    description: "Engagement semestriel",
    price: "-10%",
    popular: true,
  },
  {
    value: "12_mois",
    label: "12 mois",
    description: "Engagement annuel",
    price: "-15%",
  },
]

// ============================================
// AI Solutions Options
// ============================================

export const aiSolutionOptions: SelectOption<AISolutionType>[] = [
  {
    value: "chatbot",
    label: "Chatbot IA",
    description: "Service client automatisé 24/7",
    icon: MessageSquare,
    price: "3 000€",
    popular: true,
  },
  {
    value: "assistant",
    label: "Assistant Interne",
    description: "IA pour vos équipes (docs, FAQ)",
    icon: Bot,
    price: "5 000€",
  },
  {
    value: "automatisation",
    label: "Automatisation",
    description: "Workflows et processus IA",
    icon: Cog,
    price: "4 000€",
  },
  {
    value: "analyse",
    label: "Analyse de données",
    description: "Extraction et insights IA",
    icon: BarChart3,
    price: "6 000€",
  },
]

export const aiComplexityOptions: SelectOption<AIComplexity>[] = [
  {
    value: "simple",
    label: "Simple",
    description: "Cas d'usage standard",
    price: "×1",
  },
  {
    value: "moyen",
    label: "Moyen",
    description: "Personnalisations modérées",
    price: "×1.5",
    popular: true,
  },
  {
    value: "complexe",
    label: "Complexe",
    description: "Intégrations multiples, sur mesure",
    price: "×2.5",
  },
]

// ============================================
// Pricing Constants
// ============================================

export const PRICING = {
  web: {
    projectTypes: {
      vitrine: 2000,
      avance: 4000,
      ecommerce: 6000,
      webapp: 10000,
    },
    features: {
      blog: 800,
      espace_membre: 1500,
      multilingue: 600, // per language
      calendrier: 1200,
      crm: 1000,
      paiement: 800,
      analytics: 600,
    },
    design: {
      standard: 0,
      premium: 2000,
      haut_de_gamme: 4000,
    },
    timeline: {
      normal: 1,
      accelere: 1.3,
      urgent: 1.5,
    },
    maintenance: 150, // monthly
  },
  ads: {
    platformBase: 500, // per platform per month
    managementFee: 0.12, // 12% of ad spend
    discounts: {
      mensuel: 0,
      "3_mois": 0.05,
      "6_mois": 0.1,
      "12_mois": 0.15,
    },
  },
  ai: {
    solutionTypes: {
      chatbot: 3000,
      assistant: 5000,
      automatisation: 4000,
      analyse: 6000,
    },
    complexity: {
      simple: 1,
      moyen: 1.5,
      complexe: 2.5,
    },
    training: 1500,
    integration: 2000,
  },
} as const

// ============================================
// Price Calculation Functions
// ============================================

export function calculateWebPrice(state: CalculatorState): PriceEstimate {
  const { web } = state
  const breakdown: PriceBreakdownItem[] = []
  let baseTotal = 0

  // Base project price
  if (web.projectType) {
    const basePrice = PRICING.web.projectTypes[web.projectType]
    baseTotal += basePrice
    breakdown.push({
      label: webProjectOptions.find((o) => o.value === web.projectType)?.label || "",
      amount: basePrice,
      type: "base",
    })
  }

  // Features
  web.features.forEach((feature) => {
    let featurePrice = PRICING.web.features[feature]
    if (feature === "multilingue") {
      featurePrice *= Math.max(1, web.languageCount - 1) // First language is free
    }
    baseTotal += featurePrice
    breakdown.push({
      label: webFeatureOptions.find((o) => o.value === feature)?.label || "",
      amount: featurePrice,
      type: "feature",
    })
  })

  // Design
  const designPrice = PRICING.web.design[web.designLevel]
  if (designPrice > 0) {
    baseTotal += designPrice
    breakdown.push({
      label: `Design ${webDesignOptions.find((o) => o.value === web.designLevel)?.label}`,
      amount: designPrice,
      type: "option",
    })
  }

  // Timeline multiplier
  const timelineMultiplier = PRICING.web.timeline[web.timeline]
  if (timelineMultiplier > 1) {
    const extraCost = baseTotal * (timelineMultiplier - 1)
    breakdown.push({
      label: `Délai ${webTimelineOptions.find((o) => o.value === web.timeline)?.label}`,
      amount: extraCost,
      type: "multiplier",
    })
    baseTotal *= timelineMultiplier
  }

  // Calculate range (±15%)
  const total = Math.round(baseTotal)
  const min = Math.round(total * 0.85)
  const max = Math.round(total * 1.15)

  return {
    total,
    min,
    max,
    breakdown,
    isRecurring: web.maintenance,
    recurringPeriod: web.maintenance ? "monthly" : undefined,
  }
}

export function calculateAdsPrice(state: CalculatorState): PriceEstimate {
  const { ads } = state
  const breakdown: PriceBreakdownItem[] = []

  // Platform base costs
  const platformCount = ads.platforms.length
  const platformCost = platformCount * PRICING.ads.platformBase
  if (platformCost > 0) {
    breakdown.push({
      label: `Gestion ${platformCount} plateforme${platformCount > 1 ? "s" : ""}`,
      amount: platformCost,
      type: "base",
    })
  }

  // Management fee based on ad spend
  const managementFee = Math.round(ads.monthlyBudget * PRICING.ads.managementFee)
  if (managementFee > 0) {
    breakdown.push({
      label: "Frais de gestion (12%)",
      amount: managementFee,
      type: "feature",
    })
  }

  let total = platformCost + managementFee

  // Engagement discount
  const discount = PRICING.ads.discounts[ads.engagement]
  if (discount > 0) {
    const discountAmount = Math.round(total * discount)
    breakdown.push({
      label: `Réduction engagement ${adsEngagementOptions.find((o) => o.value === ads.engagement)?.label}`,
      amount: -discountAmount,
      type: "discount",
    })
    total -= discountAmount
  }

  return {
    total: Math.round(total),
    min: Math.round(total * 0.9),
    max: Math.round(total * 1.1),
    breakdown,
    isRecurring: true,
    recurringPeriod: "monthly",
  }
}

export function calculateAIPrice(state: CalculatorState): PriceEstimate {
  const { ai } = state
  const breakdown: PriceBreakdownItem[] = []
  let baseTotal = 0

  // Solution type base price
  if (ai.solutionType) {
    const basePrice = PRICING.ai.solutionTypes[ai.solutionType]
    baseTotal += basePrice
    breakdown.push({
      label: aiSolutionOptions.find((o) => o.value === ai.solutionType)?.label || "",
      amount: basePrice,
      type: "base",
    })
  }

  // Complexity multiplier
  const complexityMultiplier = PRICING.ai.complexity[ai.complexity]
  if (complexityMultiplier > 1) {
    const extraCost = baseTotal * (complexityMultiplier - 1)
    breakdown.push({
      label: `Complexité ${aiComplexityOptions.find((o) => o.value === ai.complexity)?.label}`,
      amount: extraCost,
      type: "multiplier",
    })
    baseTotal *= complexityMultiplier
  }

  // Training option
  if (ai.training) {
    baseTotal += PRICING.ai.training
    breakdown.push({
      label: "Formation équipe",
      amount: PRICING.ai.training,
      type: "option",
    })
  }

  // Integration option
  if (ai.integration) {
    baseTotal += PRICING.ai.integration
    breakdown.push({
      label: "Intégration systèmes existants",
      amount: PRICING.ai.integration,
      type: "option",
    })
  }

  const total = Math.round(baseTotal)
  return {
    total,
    min: Math.round(total * 0.85),
    max: Math.round(total * 1.2),
    breakdown,
    isRecurring: false,
  }
}

export function calculatePrice(state: CalculatorState): PriceEstimate {
  switch (state.service) {
    case "web":
      return calculateWebPrice(state)
    case "ads":
      return calculateAdsPrice(state)
    case "ai":
      return calculateAIPrice(state)
    default:
      return {
        total: 0,
        min: 0,
        max: 0,
        breakdown: [],
        isRecurring: false,
      }
  }
}

// ============================================
// Step Configuration
// ============================================

export function getStepsForService(service: ServiceType | null): string[] {
  const baseSteps = ["service"]

  switch (service) {
    case "web":
      return [...baseSteps, "web-project", "web-features", "web-options", "results"]
    case "ads":
      return [...baseSteps, "ads-platforms", "ads-budget", "results"]
    case "ai":
      return [...baseSteps, "ai-type", "ai-options", "results"]
    default:
      return baseSteps
  }
}

export function getTotalSteps(service: ServiceType | null): number {
  return getStepsForService(service).length
}
