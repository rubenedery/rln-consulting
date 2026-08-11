import type {
  AiUseCase,
  AiUseCaseType,
  AiSectorProfile,
  AiImplementationStep,
} from "@/types/ai-sectors"
import { aiSectorProfilesServices } from "@/lib/ai-sectors/services"
import { aiSectorProfilesSante } from "@/lib/ai-sectors/sante"
import { aiSectorProfilesCommerce } from "@/lib/ai-sectors/commerce"
import { aiSectorProfilesArtisanat } from "@/lib/ai-sectors/artisanat"
import { aiSectorProfilesTech } from "@/lib/ai-sectors/tech"

// ═══════════════════════════════════════════════════════════════
// Cas d'usage IA mutualisés
// Chaque profil métier référence 4 à 6 clés — le contenu commun vit ici,
// la valeur différenciante (exemples, FAQ, answer-first) vit dans les profils.
// ═══════════════════════════════════════════════════════════════

export const aiUseCasesData: Record<AiUseCaseType, AiUseCase> = {
  chatbot_client: {
    type: "chatbot_client",
    title: "Chatbot & assistant client 24/7",
    description:
      "Un assistant IA entraîné sur votre activité répond instantanément aux questions de vos clients : horaires, tarifs, disponibilités, suivi de dossier. Il qualifie les demandes et ne transmet que les cas complexes.",
    benefits: [
      "Réponse immédiate, même la nuit et le week-end",
      "Jusqu'à 70 % des demandes récurrentes traitées sans intervention",
      "Qualification automatique des prospects avant prise de contact",
      "Intégration site web, WhatsApp et Instagram",
    ],
    relatedServiceSlug: "ia-entreprise",
    relatedGlossaryTerms: ["chatbot-ia", "llm", "rag"],
    icon: "MessageSquare",
  },
  automatisation_admin: {
    type: "automatisation_admin",
    title: "Automatisation administrative",
    description:
      "Devis, factures, relances, planification : l'IA prend en charge les tâches répétitives qui grignotent vos journées. Les documents se génèrent, s'envoient et se classent sans saisie manuelle.",
    benefits: [
      "5 à 10 heures administratives économisées par semaine",
      "Relances de paiement automatiques et personnalisées",
      "Zéro ressaisie entre vos outils (agenda, compta, emails)",
      "Moins d'erreurs et d'oublis dans le suivi",
    ],
    relatedServiceSlug: "ia-entreprise",
    relatedGlossaryTerms: ["automation", "llm"],
    icon: "FileCheck",
  },
  crm_ia: {
    type: "crm_ia",
    title: "IA intégrée au CRM",
    description:
      "Votre CRM devient intelligent : scoring automatique des prospects, enrichissement des fiches, suggestions de relance au bon moment et résumés d'échanges générés automatiquement.",
    benefits: [
      "Priorisation automatique des prospects les plus chauds",
      "Fiches clients enrichies sans saisie manuelle",
      "Relances suggérées au moment optimal",
      "Historique résumé en quelques lignes avant chaque rendez-vous",
    ],
    relatedServiceSlug: "crm-applications-metier",
    relatedGlossaryTerms: ["crm", "automation", "llm"],
    icon: "Users",
  },
  generation_contenu: {
    type: "generation_contenu",
    title: "Génération de contenu",
    description:
      "Fiches produits, posts réseaux sociaux, newsletters, réponses aux avis : l'IA rédige dans votre ton, à partir de vos informations, et vous gardez la validation finale.",
    benefits: [
      "Présence régulière sur les réseaux sans y passer vos soirées",
      "Réponses aux avis Google professionnelles et rapides",
      "Descriptions et fiches toujours à jour",
      "Ton de marque cohérent sur tous les canaux",
    ],
    relatedServiceSlug: "ia-entreprise",
    relatedGlossaryTerms: ["gpt-4", "claude", "llm"],
    icon: "PenTool",
  },
  analyse_predictive: {
    type: "analyse_predictive",
    title: "Analyse prédictive",
    description:
      "L'IA analyse votre historique pour anticiper : prévision d'activité, détection des rendez-vous à risque de désistement, optimisation des stocks et des plannings.",
    benefits: [
      "Prévisions d'activité fiables pour dimensionner vos équipes",
      "Détection des créneaux et périodes creuses à combler",
      "Réduction du gaspillage et des ruptures de stock",
      "Décisions appuyées sur vos données réelles",
    ],
    relatedServiceSlug: "ia-entreprise",
    relatedGlossaryTerms: ["llm", "automation"],
    icon: "TrendingUp",
  },
  extraction_documents: {
    type: "extraction_documents",
    title: "Extraction & tri de documents",
    description:
      "Factures, contrats, actes, dossiers : l'IA lit vos documents entrants, en extrait les informations clés et les classe automatiquement dans vos outils.",
    benefits: [
      "Fini la saisie manuelle des documents reçus",
      "Classement automatique et recherche instantanée",
      "Détection des informations manquantes ou incohérentes",
      "Conformité renforcée grâce à la traçabilité",
    ],
    relatedServiceSlug: "ia-entreprise",
    relatedGlossaryTerms: ["rag", "llm", "automation"],
    icon: "FileSearch",
  },
  assistant_vocal: {
    type: "assistant_vocal",
    title: "Standard téléphonique IA",
    description:
      "Un assistant vocal décroche quand vous ne pouvez pas : il renseigne, prend les rendez-vous directement dans votre agenda et transfère les appels urgents.",
    benefits: [
      "Plus aucun appel manqué pendant vos interventions",
      "Prise de rendez-vous automatique dans votre agenda",
      "Filtrage des appels commerciaux indésirables",
      "Messages transcrits et résumés par écrit",
    ],
    relatedServiceSlug: "ia-entreprise",
    relatedGlossaryTerms: ["chatbot-ia", "llm"],
    icon: "Phone",
  },
  transcription_comptes_rendus: {
    type: "transcription_comptes_rendus",
    title: "Comptes rendus automatiques",
    description:
      "Consultations, visites, réunions : l'IA transcrit vos échanges et en génère des comptes rendus structurés, prêts à archiver ou à envoyer.",
    benefits: [
      "Comptes rendus rédigés en quelques secondes",
      "Concentration totale sur l'échange, pas sur la prise de notes",
      "Archivage structuré et recherche dans l'historique",
      "Modèles adaptés à vos obligations professionnelles",
    ],
    relatedServiceSlug: "ia-entreprise",
    relatedGlossaryTerms: ["llm", "gpt-4"],
    icon: "Mic",
  },
}

// ═══════════════════════════════════════════════════════════════
// Étapes de mise en place par défaut (interpolées par métier)
// Un profil peut les surcharger via implementationSteps.
// ═══════════════════════════════════════════════════════════════

export function aiImplementationTemplate(namePlural: string): AiImplementationStep[] {
  return [
    {
      name: "Audit de votre activité",
      description: `Nous analysons le quotidien des ${namePlural} : tâches répétitives, outils en place, points de friction. Vous repartez avec une liste de cas d'usage IA priorisés par retour sur investissement.`,
      duration: "1 semaine",
    },
    {
      name: "Preuve de concept",
      description:
        "Nous développons le cas d'usage le plus rentable en version test, branché sur vos données réelles. Vous validez l'utilité avant tout engagement.",
      duration: "2 à 3 semaines",
    },
    {
      name: "Déploiement & intégration",
      description:
        "La solution est intégrée à vos outils existants (agenda, CRM, facturation) et votre équipe est formée à son utilisation.",
      duration: "3 à 6 semaines",
    },
    {
      name: "Suivi & optimisation",
      description:
        "Nous mesurons les résultats (temps gagné, demandes traitées, conversions) et améliorons la solution en continu.",
      duration: "En continu",
    },
  ]
}

// ═══════════════════════════════════════════════════════════════
// Profils métiers (rédigés par catégorie pour garantir la
// différenciation intra-catégorie — voir lib/ai-sectors/)
// ═══════════════════════════════════════════════════════════════

export const aiSectorProfiles: AiSectorProfile[] = [
  ...aiSectorProfilesServices,
  ...aiSectorProfilesSante,
  ...aiSectorProfilesCommerce,
  ...aiSectorProfilesArtisanat,
  ...aiSectorProfilesTech,
]

// ═══════════════════════════════════════════════════════════════
// Helpers (convention du repo)
// ═══════════════════════════════════════════════════════════════

export function getAiSectorBySlug(slug: string): AiSectorProfile | undefined {
  return aiSectorProfiles.find((profile) => profile.slug === slug)
}

export function getAllAiSectorSlugs(): string[] {
  return aiSectorProfiles.map((profile) => profile.slug)
}

export function getAiSectorsByCategory(
  category: AiSectorProfile["category"]
): AiSectorProfile[] {
  return aiSectorProfiles.filter((profile) => profile.category === category)
}

export function getAiUseCase(type: AiUseCaseType): AiUseCase {
  return aiUseCasesData[type]
}
