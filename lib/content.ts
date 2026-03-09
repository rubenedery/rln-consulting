import type { Service, Testimonial, TeamMember } from "@/types"

// Services data
export const services: Service[] = [
  {
    id: "developpement-web",
    title: "Développement Web",
    description:
      "Création de sites web et applications performantes avec les dernières technologies (Next.js, React, TypeScript).",
    features: [
      "Sites vitrines & e-commerce",
      "Applications web sur mesure",
      "Intégrations API & CMS",
      "Optimisation performance",
      "SEO technique",
    ],
    icon: "Code",
    href: "/services/developpement",
  },
  {
    id: "ads-management",
    title: "Gestion Publicités",
    description:
      "Gestion et optimisation de vos campagnes publicitaires Facebook Ads, Google Ads et autres plateformes.",
    features: [
      "Audit & stratégie publicitaire",
      "Création de campagnes",
      "A/B testing & optimisation",
      "Reporting & analytics",
      "Retargeting avancé",
    ],
    icon: "Target",
    href: "/services/ads-management",
  },
  {
    id: "ia-entreprise",
    title: "IA pour Entreprises",
    description:
      "Intégration de l'intelligence artificielle dans votre entreprise : chatbots, automatisation, analyse de données.",
    features: [
      "Chatbots intelligents 24/7",
      "Automatisation des tâches",
      "Analyse de données IA",
      "Assistants IA internes",
      "Intégrations GPT/Claude",
    ],
    icon: "BrainCircuit",
    href: "/services/ia-entreprise",
  },
]

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Nos campagnes de génération de leads ont complètement décollé. En 3 mois, on a triplé notre volume de prospects qualifiés avec un coût par lead divisé par 2.",
    author: "Yohan Jaoui",
    role: "Dirigeant",
    company: "YJ Consulting",
    image: "/images/testimonials/yohan.jpg",
    rating: 5,
    result: "x3 leads qualifiés",
  },
  {
    id: "testimonial-2",
    quote:
      "La digitalisation de notre cabinet a été un vrai game changer. On a automatisé 80% de nos tâches administratives et nos clients adorent le nouveau portail.",
    author: "Ethan Edery",
    role: "Expert-Comptable",
    company: "Cabinet Trust",
    image: "/images/testimonials/ethan.jpg",
    rating: 5,
    result: "80% tâches automatisées",
  },
  {
    id: "testimonial-3",
    quote:
      "Le CRM sur mesure qu'ils ont développé correspond exactement à nos process. On a enfin une vision 360° de nos clients et notre équipe commerciale est 2x plus efficace.",
    author: "Jean-Baptiste",
    role: "Directeur Commercial",
    company: "JB Solutions",
    image: "/images/testimonials/jb.jpg",
    rating: 5,
    result: "x2 efficacité commerciale",
  },
  {
    id: "testimonial-4",
    quote:
      "RLN Consulting a développé des outils internes qui ont transformé notre façon de travailler. L'intégration avec nos systèmes existants s'est faite sans accroc.",
    author: "Sophie",
    role: "Digital Project Manager",
    company: "Rimowa",
    image: "/images/testimonials/sophie.jpg",
    rating: 5,
    result: "Intégration réussie",
  },
  {
    id: "testimonial-5",
    quote:
      "Le chatbot IA qu'ils ont mis en place gère 70% de nos demandes clients automatiquement. Notre service client peut enfin se concentrer sur les cas complexes.",
    author: "David",
    role: "CEO",
    company: "FastDelivery",
    image: "/images/testimonials/david.jpg",
    rating: 5,
    result: "70% support automatisé",
  },
]

// Team members data
export const teamMembers: TeamMember[] = [
  {
    id: "ruben-edery",
    name: "Ruben Edery",
    role: "Fondateur & Lead Developer",
    bio: "Développeur full-stack avec plus de 8 ans d'expérience dans la création d'applications web performantes. Expert Next.js et React.",
    image: "/images/team/ruben.jpg",
    social: {
      linkedin: "https://linkedin.com/in/rubenedery",
      github: "https://github.com/rubenedery",
      twitter: "https://twitter.com/rubenedery",
    },
  },
]

// Company values
export const companyValues = [
  {
    title: "Excellence technique",
    description:
      "Nous utilisons les dernières technologies et meilleures pratiques pour garantir des solutions performantes et durables.",
    icon: "Sparkles",
  },
  {
    title: "Transparence",
    description:
      "Communication claire et régulière tout au long du projet. Vous savez exactement où en est votre projet.",
    icon: "Eye",
  },
  {
    title: "Résultats mesurables",
    description:
      "Chaque projet est orienté vers des objectifs concrets et mesurables. Nous suivons les KPIs qui comptent.",
    icon: "TrendingUp",
  },
  {
    title: "Partenariat long terme",
    description:
      "Nous construisons des relations durables avec nos clients, au-delà de la simple livraison de projet.",
    icon: "Handshake",
  },
]

// Company stats
export const companyStats = [
  { value: "50+", label: "Projets livrés" },
  { value: "8+", label: "Années d'expérience" },
  { value: "95%", label: "Clients satisfaits" },
  { value: "24h", label: "Temps de réponse" },
]

// FAQ data
export interface FAQItem {
  question: string
  answer: string
  category?: "general" | "services" | "pricing" | "process"
}

export const faqData: FAQItem[] = [
  {
    question: "Quels types de projets web réalisez-vous ?",
    answer:
      "Nous réalisons tous types de projets web : sites vitrines, e-commerce, applications web sur mesure, landing pages et refonte de sites existants. Nous utilisons principalement Next.js, React et TypeScript pour garantir des performances optimales.",
    category: "services",
  },
  {
    question: "Combien coûte un site web ?",
    answer:
      "Le coût d'un site web dépend de plusieurs facteurs : complexité, fonctionnalités, design sur mesure, intégrations. Un site vitrine simple commence autour de 2 000€, tandis qu'une application web complexe peut aller de 10 000€ à 50 000€+. Contactez-nous pour un devis personnalisé gratuit.",
    category: "pricing",
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine peut être livré en 2-4 semaines, un e-commerce en 4-8 semaines, et une application complexe en 2-4 mois. Nous vous communiquons un planning précis dès le début du projet.",
    category: "process",
  },
  {
    question: "Comment se déroule un projet type ?",
    answer:
      "Chaque projet suit 4 étapes : 1) Découverte et définition des besoins, 2) Conception UX/UI et validation, 3) Développement avec points réguliers, 4) Tests, mise en production et formation. Vous êtes impliqué à chaque étape.",
    category: "process",
  },
  {
    question: "Proposez-vous un accompagnement après la livraison ?",
    answer:
      "Oui, nous proposons différentes formules de maintenance : corrections de bugs, mises à jour de sécurité, évolutions fonctionnelles et support technique. Nous restons disponibles même après la livraison du projet.",
    category: "services",
  },
  {
    question: "Gérez-vous aussi les campagnes publicitaires ?",
    answer:
      "Absolument ! Nous proposons la gestion complète de vos campagnes Facebook Ads et Google Ads : stratégie, création, optimisation et reporting. Nous pouvons combiner développement web et publicités pour maximiser vos résultats.",
    category: "services",
  },
  {
    question: "Travaillez-vous avec des clients à distance ?",
    answer:
      "Oui, nous travaillons avec des clients partout en France et à l'international. Nos outils de communication (visio, Slack, email) permettent un suivi efficace à distance. Nous nous adaptons à votre fuseau horaire si nécessaire.",
    category: "general",
  },
  {
    question: "Le site sera-t-il optimisé pour le référencement (SEO) ?",
    answer:
      "Tous nos sites sont développés avec le SEO en tête : structure technique optimisée, temps de chargement rapide, balises méta, schema markup et architecture URL. Nous pouvons également proposer un accompagnement SEO plus approfondi.",
    category: "services",
  },
  {
    question: "Proposez-vous des services d'intelligence artificielle ?",
    answer:
      "Oui, nous proposons l'intégration de l'IA dans votre entreprise : chatbots intelligents pour le service client, automatisation des tâches répétitives, analyse de données, assistants IA internes formés sur vos données, et intégration d'API comme GPT-4 ou Claude dans vos applications existantes.",
    category: "services",
  },
  {
    question: "Comment l'IA peut-elle aider mon entreprise ?",
    answer:
      "L'IA peut transformer votre entreprise de plusieurs façons : support client automatisé 24/7 avec des chatbots, génération de contenu marketing, analyse prédictive de vos données, automatisation des tâches administratives, recommandations personnalisées pour vos clients. Nous commençons par un audit pour identifier les cas d'usage à fort ROI pour votre activité.",
    category: "services",
  },
  {
    question: "Quels modèles d'IA utilisez-vous ?",
    answer:
      "Nous travaillons avec les meilleurs modèles du marché selon les besoins : OpenAI GPT-4 pour la génération de texte, Claude d'Anthropic pour les assistants conversationnels, ainsi que des solutions open-source quand la confidentialité des données l'exige. Nous recommandons la solution la plus adaptée à votre cas d'usage et votre budget.",
    category: "services",
  },
]
