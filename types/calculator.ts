// ============================================
// Price Calculator Types
// ============================================

// Service types
export type ServiceType = "web" | "ads" | "ai"

// Web project types
export type WebProjectType = "vitrine" | "avance" | "ecommerce" | "webapp"

// Web features
export type WebFeature =
  | "blog"
  | "espace_membre"
  | "multilingue"
  | "calendrier"
  | "crm"
  | "paiement"
  | "analytics"

// Design levels
export type DesignLevel = "standard" | "premium" | "haut_de_gamme"

// Delivery timeline
export type DeliveryTimeline = "normal" | "accelere" | "urgent"

// Ads platforms
export type AdsPlatform = "google" | "facebook" | "instagram" | "linkedin" | "tiktok"

// Ads engagement period
export type AdsEngagement = "mensuel" | "3_mois" | "6_mois" | "12_mois"

// AI solution types
export type AISolutionType = "chatbot" | "assistant" | "automatisation" | "analyse"

// AI complexity
export type AIComplexity = "simple" | "moyen" | "complexe"

// ============================================
// State Types
// ============================================

export interface WebState {
  projectType: WebProjectType | null
  features: WebFeature[]
  designLevel: DesignLevel
  timeline: DeliveryTimeline
  languageCount: number
  maintenance: boolean
}

export interface AdsState {
  platforms: AdsPlatform[]
  monthlyBudget: number
  engagement: AdsEngagement
}

export interface AIState {
  solutionType: AISolutionType | null
  complexity: AIComplexity
  training: boolean
  integration: boolean
}

export interface CalculatorState {
  // Current step
  currentStep: number
  totalSteps: number

  // Selected service
  service: ServiceType | null

  // Service-specific states
  web: WebState
  ads: AdsState
  ai: AIState

  // Direction for animation
  direction: "forward" | "backward"
}

// ============================================
// Action Types
// ============================================

export type CalculatorAction =
  | { type: "SET_SERVICE"; payload: ServiceType }
  | { type: "SET_WEB_PROJECT_TYPE"; payload: WebProjectType }
  | { type: "TOGGLE_WEB_FEATURE"; payload: WebFeature }
  | { type: "SET_WEB_DESIGN"; payload: DesignLevel }
  | { type: "SET_WEB_TIMELINE"; payload: DeliveryTimeline }
  | { type: "SET_WEB_LANGUAGES"; payload: number }
  | { type: "SET_WEB_MAINTENANCE"; payload: boolean }
  | { type: "TOGGLE_ADS_PLATFORM"; payload: AdsPlatform }
  | { type: "SET_ADS_BUDGET"; payload: number }
  | { type: "SET_ADS_ENGAGEMENT"; payload: AdsEngagement }
  | { type: "SET_AI_SOLUTION_TYPE"; payload: AISolutionType }
  | { type: "SET_AI_COMPLEXITY"; payload: AIComplexity }
  | { type: "SET_AI_TRAINING"; payload: boolean }
  | { type: "SET_AI_INTEGRATION"; payload: boolean }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "GO_TO_STEP"; payload: number }
  | { type: "RESET" }

// ============================================
// Price Breakdown Types
// ============================================

export interface PriceBreakdownItem {
  label: string
  amount: number
  type: "base" | "feature" | "option" | "multiplier" | "discount"
}

export interface PriceEstimate {
  total: number
  min: number
  max: number
  breakdown: PriceBreakdownItem[]
  isRecurring: boolean
  recurringPeriod?: "monthly" | "yearly"
}

// ============================================
// UI Option Types
// ============================================

export interface SelectOption<T extends string> {
  value: T
  label: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  price?: string
  popular?: boolean
}
