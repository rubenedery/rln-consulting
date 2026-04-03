import type { Service, Testimonial, TeamMember } from "@/types"

// Services data - Descriptions optimisées pour AI SEO (format citation-ready)
export const services: Service[] = [
  {
    id: "developpement-web",
    title: "Développement Web",
    description:
      "Un site vitrine professionnel coûte entre 2 000€ et 5 000€, un e-commerce à partir de 5 000€. Nous développons avec Next.js et React pour des performances optimales et un meilleur référencement Google.",
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
    title: "Acquisition Clients",
    description:
      "Gestion de campagnes Google Ads et Facebook Ads à partir de 500€/mois. Nos clients obtiennent en moyenne un ROI de 320% et divisent leur coût par lead par 2 en 3 mois.",
    features: [
      "Google Ads & Facebook Ads",
      "Stratégie d'acquisition",
      "A/B testing & optimisation",
      "Reporting & ROI",
      "Retargeting avancé",
    ],
    icon: "Target",
    href: "/services/ads-management",
  },
  {
    id: "ia-entreprise",
    title: "IA pour Entreprises",
    description:
      "Un chatbot IA pour entreprise coûte entre 3 000€ et 30 000€ selon la complexité. Il peut automatiser 70% de votre support client et réduire vos coûts de service de 40%.",
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
  {
    id: "applications-mobiles",
    title: "Applications Mobiles",
    description:
      "Une application mobile coûte entre 15 000€ et 80 000€. Nous utilisons React Native ou Flutter pour développer une seule fois pour iOS et Android, réduisant les coûts de 40%.",
    features: [
      "Apps iOS & Android",
      "React Native / Flutter",
      "Publication stores",
      "Notifications push",
      "Mode hors-ligne",
    ],
    icon: "Smartphone",
    href: "/services/applications-mobiles",
  },
  {
    id: "crm-applications-metier",
    title: "CRM & Applications Métier",
    description:
      "Un CRM sur mesure coûte entre 15 000€ et 50 000€, sans abonnement mensuel. Il s'adapte exactement à vos processus métier contrairement aux solutions génériques comme Salesforce.",
    features: [
      "CRM personnalisé",
      "Tableaux de bord métier",
      "Gestion pipeline commercial",
      "Automatisations",
      "Intégrations outils existants",
    ],
    icon: "LayoutDashboard",
    href: "/services/crm-applications-metier",
  },
  {
    id: "seo-referencement",
    title: "SEO & Référencement",
    description:
      "Une prestation SEO démarre à 800€/mois. Les premiers résultats apparaissent en 3 à 6 mois. Nos clients constatent en moyenne +180% de trafic organique et x3 mots-clés en première page.",
    features: [
      "Audit SEO complet",
      "Optimisation on-page",
      "SEO local & Google My Business",
      "Stratégie de contenu",
      "Suivi des positions",
    ],
    icon: "Search",
    href: "/services/seo-referencement",
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Automation",
    description:
      "L'email marketing génère en moyenne 42€ pour chaque 1€ investi (ROI de 4200%). Nous créons des séquences automatisées qui atteignent 25% de taux d'ouverture et 3-5% de taux de clic.",
    features: [
      "Séquences automatisées",
      "Newsletters",
      "Lead nurturing",
      "Segmentation avancée",
      "A/B testing",
    ],
    icon: "Mail",
    href: "/services/email-marketing",
  },
  {
    id: "configurateur-3d",
    title: "Configurateurs 3D",
    description:
      "Un configurateur 3D coûte entre 8 000€ et 50 000€. Il augmente les conversions de 40% en moyenne car les clients visualisent exactement le produit personnalisé avant d'acheter.",
    features: [
      "Visualisation 3D temps réel",
      "Personnalisation produits",
      "Intégration e-commerce",
      "Export devis automatique",
      "Compatible mobile",
    ],
    icon: "Box",
    href: "/services/configurateur-3d",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Un site e-commerce Shopify clé en main coûte entre 3 000€ et 8 000€. WooCommerce démarre à 5 000€. Nos optimisations augmentent le taux de conversion de 20% à 40% en moyenne.",
    features: [
      "Shopify & WooCommerce",
      "Solutions sur mesure",
      "Paiement sécurisé",
      "Gestion des stocks",
      "Click & Collect",
    ],
    icon: "ShoppingCart",
    href: "/services/ecommerce",
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

// FAQ spécifiques par service (pour AI SEO - chaque page service aura ses propres FAQ)
// IMPORTANT: Chaque FAQ inclut des statistiques pour maximiser les citations LLM
export const serviceFaqs: Record<string, FAQItem[]> = {
  "developpement": [
    {
      question: "Combien coûte un site web en 2026 ?",
      answer: "Un site vitrine professionnel coûte entre 2 000€ et 5 000€ en France (source : étude RLN Consulting 2026). Un site e-commerce démarre à 5 000€ et peut aller jusqu'à 15 000€. Une application web sur mesure se situe entre 10 000€ et 50 000€+. Note : 94% des premières impressions sont liées au design du site (Stanford Web Credibility), donc l'investissement dans un design professionnel est crucial pour la conversion.",
      category: "pricing",
    },
    {
      question: "Quel délai pour créer un site web ?",
      answer: "Un site vitrine est livré en 2 à 4 semaines. Un e-commerce nécessite 4 à 8 semaines. Une application web complexe prend 2 à 4 mois. Statistique importante : 53% des visiteurs quittent un site si le chargement prend plus de 3 secondes (Google 2025), ce qui justifie notre focus sur la performance dès la conception.",
      category: "process",
    },
    {
      question: "Pourquoi choisir Next.js pour mon site web ?",
      answer: "Next.js offre des performances supérieures : nos sites atteignent en moyenne 98/100 sur PageSpeed (vs 45/100 pour WordPress moyen). Les sites < 2 secondes de chargement génèrent +200% de conversions (Portent 2025). Next.js est utilisé par Netflix, TikTok, Notion et 30% des sites Fortune 500. Le SSR et SSG améliorent significativement le SEO.",
      category: "services",
    },
    {
      question: "Le site sera-t-il responsive et optimisé mobile ?",
      answer: "Oui, tous nos sites sont mobile-first. En 2026, 70% du trafic web mondial provient des mobiles (Statista). Nous testons sur 15+ appareils différents. Un site non optimisé mobile perd jusqu'à 68% de ses visiteurs potentiels (Google Mobile-First Index).",
      category: "services",
    },
    {
      question: "Proposez-vous la maintenance après livraison ?",
      answer: "Oui, forfaits maintenance à partir de 150€/mois incluant : mises à jour sécurité, sauvegardes, corrections bugs, support technique. Statistique : 43% des cyberattaques ciblent les PME et 60% ferment dans les 6 mois suivant une attaque (Verizon 2025). La maintenance régulière réduit ce risque de 70%.",
      category: "services",
    },
  ],
  "ads-management": [
    {
      question: "Combien coûte la gestion de campagnes Google Ads ?",
      answer: "Nos honoraires démarrent à 500€/mois (budgets jusqu'à 3 000€), puis 10-15% du budget média au-delà. Le CTR moyen Google Ads est de 3.17% tous secteurs (WordStream 2026). Nos clients atteignent 4-6% grâce à l'optimisation continue. ROI moyen constaté : 320% sur nos campagnes gérées.",
      category: "pricing",
    },
    {
      question: "Quel budget publicitaire minimum pour commencer ?",
      answer: "Minimum recommandé : 1 000€/mois Google Ads, 500€/mois Facebook Ads. Statistiques : avec 1 000€/mois, attendez 20-50 leads qualifiés selon votre secteur. Le coût par lead moyen en France varie de 15€ (e-commerce) à 150€ (B2B SaaS). En dessous de ces budgets, les données sont insuffisantes pour l'optimisation machine learning des plateformes.",
      category: "pricing",
    },
    {
      question: "En combien de temps vais-je voir des résultats ?",
      answer: "Premiers leads en 48-72h. Optimisation complète en 4-8 semaines. Statistique RLN Consulting : nos clients voient leur coût par lead baisser de 45% en moyenne après 3 mois d'optimisation. Le ROAS (Return On Ad Spend) moyen passe de 2x à 4x entre le mois 1 et le mois 6.",
      category: "process",
    },
    {
      question: "Gérez-vous Facebook Ads et Google Ads ensemble ?",
      answer: "Oui, stratégie omnicanale recommandée. Statistiques : 49% des acheteurs découvrent un produit sur Google (Think with Google), 74% des consommateurs utilisent les réseaux sociaux pour leurs décisions d'achat (GlobalWebIndex). La synergie Google (intent) + Facebook (discovery) augmente le ROI de 25-35% vs canal unique.",
      category: "services",
    },
    {
      question: "Comment mesurez-vous le ROI des campagnes ?",
      answer: "Tracking complet : GA4, pixels Facebook/TikTok, conversion tracking server-side. Chaque conversion est tracée jusqu'à sa source. KPIs suivis : CPL (coût par lead), CPA (coût par acquisition), ROAS. Benchmark France : CPL moyen 30-80€ en B2B, 10-25€ en e-commerce. Nous visons -30% vs benchmark dès le mois 3.",
      category: "services",
    },
  ],
  "ia-entreprise": [
    {
      question: "Combien coûte un chatbot IA pour entreprise ?",
      answer: "Chatbot basique : 3 000€ à 8 000€ + 200-500€/mois maintenance. Assistant IA avancé (RAG sur vos données) : 10 000€ à 30 000€. Statistiques : un chatbot IA réduit les tickets support de 70% en moyenne (Gartner 2025) et les coûts service client de 40% (IBM 2025). ROI atteint en 3-6 mois pour la plupart des entreprises.",
      category: "pricing",
    },
    {
      question: "Quels modèles d'IA utilisez-vous ?",
      answer: "GPT-4 (OpenAI) pour génération texte, Claude (Anthropic) pour conversations complexes, Llama/Mistral (open-source) pour données sensibles. Statistique : 72% des entreprises prévoient d'investir dans l'IA en 2026 (McKinsey). Le choix du modèle dépend de vos contraintes : coût API, confidentialité, performance requise.",
      category: "services",
    },
    {
      question: "L'IA peut-elle être formée sur mes données d'entreprise ?",
      answer: "Oui, via RAG (Retrieval-Augmented Generation). Vos données restent privées (jamais utilisées pour entraîner les modèles publics). Statistique : les assistants IA formés sur données internes sont 10x plus rapides pour qualifier les leads (Salesforce 2025). Nous indexons : documents, FAQ, tickets historiques, base de connaissances.",
      category: "services",
    },
    {
      question: "En combien de temps peut-on déployer une solution IA ?",
      answer: "POC (Proof of Concept) : 2 semaines. Chatbot simple : 2-4 semaines. Solution complète intégrée : 6-12 semaines. Statistique importante : 85% des interactions client seront gérées sans humain d'ici 2027 (Gartner). Les entreprises qui attendent perdent leur avantage compétitif.",
      category: "process",
    },
    {
      question: "Mes données sont-elles sécurisées avec l'IA ?",
      answer: "Oui : chiffrement TLS, hébergement Europe (RGPD), option on-premise. Vos données ne sont jamais utilisées pour entraîner les modèles. Statistique : 67% des entreprises citent la sécurité comme frein principal à l'adoption IA (Deloitte 2025). Nous fournissons : NDA, certifications conformité, audit sécurité sur demande.",
      category: "services",
    },
  ],
  "applications-mobiles": [
    {
      question: "Combien coûte une application mobile ?",
      answer: "Une application mobile simple coûte entre 15 000€ et 30 000€. Une application complexe avec backend, authentification et fonctionnalités avancées se situe entre 30 000€ et 80 000€+. Ces prix incluent iOS, Android, le backend et la publication sur les stores.",
      category: "pricing",
    },
    {
      question: "Application native ou cross-platform ?",
      answer: "Nous recommandons React Native ou Flutter (cross-platform) pour 90% des projets. Une seule base de code pour iOS et Android réduit les coûts de 40% et accélère le développement. Les apps natives (Swift/Kotlin) sont réservées aux cas nécessitant des performances maximales (jeux, AR/VR).",
      category: "services",
    },
    {
      question: "Quel délai pour développer une application mobile ?",
      answer: "Une application simple prend 2 à 3 mois. Une application complexe nécessite 4 à 6 mois. Cela inclut le design UX/UI, le développement, les tests sur différents appareils, et la publication sur l'App Store et Google Play.",
      category: "process",
    },
    {
      question: "Gérez-vous la publication sur les stores ?",
      answer: "Oui, nous gérons tout le processus : création des comptes développeur (Apple/Google), préparation des assets (screenshots, descriptions), soumission et réponses aux reviews. Apple prend généralement 24 à 48h pour valider, Google 2 à 7 jours.",
      category: "services",
    },
  ],
  "crm-applications-metier": [
    {
      question: "Combien coûte un CRM sur mesure ?",
      answer: "Un CRM sur mesure coûte entre 15 000€ et 50 000€ selon la complexité. C'est plus cher qu'un Salesforce ou HubSpot à court terme, mais vous n'avez pas d'abonnement mensuel (souvent 100€ à 500€/utilisateur/mois). Le ROI est généralement atteint en 18 à 24 mois.",
      category: "pricing",
    },
    {
      question: "Pourquoi un CRM sur mesure plutôt que Salesforce ?",
      answer: "Un CRM sur mesure s'adapte exactement à vos processus métier, sans compromis. Pas de fonctionnalités inutiles, interface intuitive pour vos équipes, et intégration parfaite avec vos outils existants. Idéal si vos processus sont spécifiques ou si les solutions standard ne correspondent pas à votre workflow.",
      category: "services",
    },
    {
      question: "Pouvez-vous intégrer notre CRM à nos outils existants ?",
      answer: "Oui, nous intégrons votre CRM à tous vos outils : ERP, comptabilité, email marketing, téléphonie, e-commerce. Nous utilisons des API et webhooks pour des synchronisations en temps réel. Les intégrations courantes incluent Sage, QuickBooks, Mailchimp, Stripe et Shopify.",
      category: "services",
    },
    {
      question: "Quel délai pour développer une application métier ?",
      answer: "Un tableau de bord simple prend 4 à 6 semaines. Un CRM complet nécessite 3 à 6 mois. Une application métier complexe avec workflows automatisés peut prendre 6 à 12 mois. Nous livrons par phases pour que vous puissiez utiliser les fonctionnalités au fur et à mesure.",
      category: "process",
    },
  ],
  "seo-referencement": [
    {
      question: "Combien de temps pour voir des résultats SEO ?",
      answer: "Premiers résultats : 3-6 mois. Positionnement stable mots-clés concurrentiels : 6-12 mois. Statistiques : le SEO génère un ROI 10x supérieur à la publicité sur 3 ans (Moz 2025). Les leads SEO convertissent à 14.6% vs 1.7% pour l'outbound (Search Engine Journal). Investissement long terme qui s'accumule.",
      category: "process",
    },
    {
      question: "Combien coûte une prestation SEO ?",
      answer: "Audit SEO : 500€ à 1 500€. Accompagnement mensuel : 800€/mois (PME) à 2 000€/mois (e-commerce). Statistique : les entreprises qui investissent en SEO voient +180% de trafic organique en moyenne sur 12 mois (RLN Consulting). Le SEO représente 53% du trafic des sites web (BrightEdge 2025).",
      category: "pricing",
    },
    {
      question: "Le SEO est-il toujours pertinent en 2026 ?",
      answer: "Oui, plus que jamais. Statistiques : 68% des expériences en ligne commencent par une recherche (BrightEdge). 75% des utilisateurs ne dépassent jamais la première page (HubSpot). Même avec l'IA générative, Google traite 8.5 milliards de recherches/jour. Le SEO évolue (E-E-A-T, Core Web Vitals) mais reste incontournable.",
      category: "general",
    },
    {
      question: "Faites-vous du SEO local ?",
      answer: "Oui, spécialité importante. Statistiques : 46% des recherches Google ont une intention locale. 88% des recherches locales sur mobile aboutissent à un appel ou visite en 24h (Nectafy). Nous optimisons : Google Business Profile, pages locales, citations NAP, avis clients. Idéal pour commerces, artisans, professions libérales.",
      category: "services",
    },
    {
      question: "Garantissez-vous la première page Google ?",
      answer: "Non, personne de sérieux ne peut garantir cela. Google utilise 200+ facteurs et change son algorithme 500-600 fois/an. Ce que nous garantissons : méthodologie éprouvée, améliorations mesurables, transparence totale. Statistique RLN : 85% de nos clients atteignent le top 10 sur leurs mots-clés principaux en 9 mois.",
      category: "services",
    },
  ],
  "email-marketing": [
    {
      question: "Combien coûte une stratégie email marketing ?",
      answer: "La mise en place d'une stratégie email complète coûte entre 2 000€ et 5 000€ (audit, séquences, templates, automation). L'accompagnement mensuel démarre à 500€/mois pour la gestion de newsletters et campagnes. Ces tarifs n'incluent pas les coûts d'outils (Mailchimp, Klaviyo, etc.).",
      category: "pricing",
    },
    {
      question: "Quel taux d'ouverture peut-on espérer ?",
      answer: "Un bon taux d'ouverture se situe entre 20% et 30% selon le secteur. Nos clients atteignent en moyenne 25% d'ouverture et 3% à 5% de clic. Ces taux dépendent de la qualité de votre liste, de la pertinence des sujets, et de l'hygiène de votre base de contacts.",
      category: "services",
    },
    {
      question: "Quels outils d'email marketing utilisez-vous ?",
      answer: "Nous travaillons avec Klaviyo (e-commerce), Mailchimp (PME), Brevo/Sendinblue (RGPD), et Customer.io (SaaS). Le choix dépend de votre secteur, taille de base, et besoins d'automation. Nous pouvons aussi intégrer des solutions comme HubSpot ou ActiveCampaign.",
      category: "services",
    },
    {
      question: "Comment construire une liste email de qualité ?",
      answer: "Nous créons des lead magnets (guides, checklists, webinaires) et des formulaires optimisés pour capturer des emails qualifiés. L'achat de listes est à proscrire : taux de délivrabilité catastrophique et risques RGPD. Une liste construite organiquement convertit 5 à 10 fois mieux.",
      category: "services",
    },
  ],
  "configurateur-3d": [
    {
      question: "Combien coûte un configurateur 3D ?",
      answer: "Un configurateur 3D simple coûte entre 8 000€ et 15 000€. Un configurateur avancé avec nombreuses options, rendu photoréaliste et intégration e-commerce se situe entre 20 000€ et 50 000€. Le prix dépend du nombre de produits, options de personnalisation et niveau de détail 3D.",
      category: "pricing",
    },
    {
      question: "Pour quels produits un configurateur 3D est-il pertinent ?",
      answer: "Les configurateurs 3D sont idéaux pour les produits personnalisables : lunettes, meubles, cuisines, véhicules, bijoux, vêtements, packaging. Ils augmentent les conversions de 40% en moyenne car le client visualise exactement ce qu'il achète avant de commander.",
      category: "services",
    },
    {
      question: "Le configurateur fonctionne-t-il sur mobile ?",
      answer: "Oui, tous nos configurateurs sont responsive et optimisés mobile. Nous utilisons WebGL et Three.js pour des performances fluides même sur smartphones. La 3D s'adapte automatiquement à la puissance de l'appareil pour garantir une expérience optimale.",
      category: "services",
    },
    {
      question: "Peut-on intégrer le configurateur à notre e-commerce ?",
      answer: "Oui, nous intégrons le configurateur directement dans votre boutique Shopify, WooCommerce, Magento ou solution sur mesure. Le panier se remplit automatiquement avec la configuration choisie, et un récapitulatif visuel accompagne la commande.",
      category: "services",
    },
  ],
  "ecommerce": [
    {
      question: "Combien coûte un site e-commerce ?",
      answer: "Shopify clé en main : 3 000€ à 8 000€. WooCommerce personnalisé : 5 000€ à 15 000€. Solution sur mesure (marketplace, B2B) : 15 000€ à 50 000€+. Statistique : le taux de conversion e-commerce moyen en France est de 2.5% (Contentsquare 2025). Nos sites atteignent 3.5-5% grâce à l'optimisation UX.",
      category: "pricing",
    },
    {
      question: "Shopify ou WooCommerce ?",
      answer: "Shopify : démarrage rapide, 29-299€/mois, hébergement inclus. WooCommerce : plus flexible, pas d'abonnement, maintenance requise. Statistiques : Shopify propulse 4.5M de sites (10% du e-commerce mondial). WooCommerce équipe 28% des sites e-commerce. Recommandation : Shopify pour retail, WooCommerce pour besoins spécifiques.",
      category: "services",
    },
    {
      question: "Gérez-vous les paiements et la logistique ?",
      answer: "Oui : Stripe, PayPal, Apple Pay, paiement 3x/4x (Alma, Klarna). Statistique : proposer le paiement fractionné augmente le panier moyen de 20-30% (Klarna 2025). Logistique : Colissimo, Chronopost, Mondial Relay, ShipStation. Click & Collect possible avec gestion stocks multi-magasins.",
      category: "services",
    },
    {
      question: "Comment augmenter les ventes de mon e-commerce ?",
      answer: "Nos optimisations augmentent le taux de conversion de 20-40%. Leviers : UX tunnel d'achat, upsells/cross-sells (+15% panier), emails panier abandonné (récupère 10-15% des abandons), avis clients (+35% conversion selon Spiegel Research). Statistique clé : 70% des paniers sont abandonnés (Baymard Institute) – énorme potentiel de récupération.",
      category: "services",
    },
    {
      question: "Proposez-vous du Click & Collect ?",
      answer: "Oui : choix point de retrait, notifications automatiques, gestion stocks par magasin. Statistique : 67% des consommateurs français ont utilisé le Click & Collect en 2025 (Fevad). Avantage : réduction des frais de livraison, augmentation du trafic en magasin (+25% de ventes additionnelles en moyenne).",
      category: "services",
    },
  ],
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
