import type { Sector } from "@/types/sectors"

// Cas d'usage IA mutualisés : le contenu vit dans aiUseCasesData (lib/ai-use-cases-data.ts),
// chaque métier n'en référence que 4 à 6 clés — les combinaisons diffèrent d'un métier à l'autre.
export type AiUseCaseType =
  | "chatbot_client"
  | "automatisation_admin"
  | "crm_ia"
  | "generation_contenu"
  | "analyse_predictive"
  | "extraction_documents"
  | "assistant_vocal"
  | "transcription_comptes_rendus"

export interface AiUseCase {
  type: AiUseCaseType
  title: string
  description: string
  benefits: string[]
  // Slug du service à mettre en avant (ex. "ia-entreprise", "crm-applications-metier")
  relatedServiceSlug: string
  // Slugs de termes du glossaire (catégorie "ia" principalement)
  relatedGlossaryTerms: string[]
  icon: string
}

export interface AiSectorExample {
  title: string
  description: string
  metric?: string
}

export interface AiImplementationStep {
  name: string
  description: string
  duration: string
}

export interface AiAnswerBlock {
  question: string
  answer: string
}

export interface AiSectorProfile {
  // Aligné sur le slug secteur correspondant (pont via sectorSlug)
  slug: string
  sectorSlug: string
  name: string
  namePlural: string
  icon: string
  category: Sector["category"]
  metaTitle: string
  metaDescription: string
  headline: string
  subheadline: string
  // Bloc answer-first : 4 réponses directes citables par les LLM
  answerFirst: {
    what: AiAnswerBlock
    cost: AiAnswerBlock
    duration: AiAnswerBlock
    roi: AiAnswerBlock
  }
  painPoints: string[]
  useCases: AiUseCaseType[]
  // Contenu le plus différenciant : exemples chiffrés propres au métier
  concreteExamples: AiSectorExample[]
  // Optionnel : fallback interpolé via aiImplementationTemplate(name)
  implementationSteps?: AiImplementationStep[]
  roiStats: { label: string; value: string; source?: string }[]
  faqs: { question: string; answer: string }[]
  relatedBlogSlugs?: string[]
}
