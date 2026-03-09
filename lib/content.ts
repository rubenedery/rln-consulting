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
export const serviceFaqs: Record<string, FAQItem[]> = {
  "developpement": [
    {
      question: "Combien coûte un site web en 2026 ?",
      answer: "Un site vitrine professionnel coûte entre 2 000€ et 5 000€. Un site e-commerce démarre à 5 000€ et peut aller jusqu'à 15 000€ selon les fonctionnalités. Une application web sur mesure se situe entre 10 000€ et 50 000€+. Ces prix incluent le design, le développement Next.js/React, et l'optimisation SEO.",
      category: "pricing",
    },
    {
      question: "Quel délai pour créer un site web ?",
      answer: "Un site vitrine est livré en 2 à 4 semaines. Un e-commerce nécessite 4 à 8 semaines. Une application web complexe prend 2 à 4 mois. Ces délais incluent la conception, le développement, les tests et la mise en production.",
      category: "process",
    },
    {
      question: "Pourquoi choisir Next.js pour mon site web ?",
      answer: "Next.js offre des performances supérieures grâce au Server-Side Rendering (SSR) et au Static Site Generation (SSG). Résultat : des sites 2 à 3 fois plus rapides, un meilleur référencement Google, et une expérience utilisateur optimale. C'est la technologie utilisée par Netflix, TikTok et Notion.",
      category: "services",
    },
    {
      question: "Le site sera-t-il responsive et optimisé mobile ?",
      answer: "Oui, tous nos sites sont mobile-first. 60% du trafic web vient des mobiles, donc nous concevons d'abord pour mobile puis adaptons pour desktop. Chaque site passe des tests sur iPhone, Android et tablettes avant livraison.",
      category: "services",
    },
    {
      question: "Proposez-vous la maintenance après livraison ?",
      answer: "Oui, nous proposons des forfaits maintenance à partir de 150€/mois. Cela inclut les mises à jour de sécurité, les sauvegardes, les corrections de bugs et le support technique. Vous pouvez aussi nous solliciter ponctuellement selon vos besoins.",
      category: "services",
    },
  ],
  "ads-management": [
    {
      question: "Combien coûte la gestion de campagnes Google Ads ?",
      answer: "Nos honoraires de gestion démarrent à 500€/mois pour des budgets publicitaires jusqu'à 3 000€. Au-delà, nous facturons entre 10% et 15% du budget média. Ce tarif inclut la création des campagnes, l'optimisation continue, et un reporting mensuel détaillé.",
      category: "pricing",
    },
    {
      question: "Quel budget publicitaire minimum pour commencer ?",
      answer: "Nous recommandons un minimum de 1 000€/mois en budget média pour Google Ads et 500€/mois pour Facebook Ads. En dessous, les données collectées sont insuffisantes pour optimiser efficacement les campagnes. Ces budgets permettent de générer entre 20 et 50 leads qualifiés par mois selon votre secteur.",
      category: "pricing",
    },
    {
      question: "En combien de temps vais-je voir des résultats ?",
      answer: "Les premiers leads arrivent généralement dans les 48 à 72 heures après lancement. L'optimisation complète prend 4 à 8 semaines, le temps de collecter assez de données pour identifier les meilleures audiences et mots-clés. Après 3 mois, le coût par lead diminue en moyenne de 30 à 50%.",
      category: "process",
    },
    {
      question: "Gérez-vous Facebook Ads et Google Ads ensemble ?",
      answer: "Oui, nous gérons les deux plateformes de manière complémentaire. Google Ads capture la demande existante (recherches actives), tandis que Facebook Ads génère de la demande (prospection). La combinaison des deux maximise votre couverture et votre ROI.",
      category: "services",
    },
    {
      question: "Comment mesurez-vous le ROI des campagnes ?",
      answer: "Nous installons un tracking complet : Google Analytics 4, pixels Facebook, et conversion tracking. Chaque lead, appel et vente est tracé jusqu'à sa source publicitaire. Vous recevez un rapport mensuel avec le coût par lead, le coût par acquisition, et le ROAS (retour sur investissement publicitaire).",
      category: "services",
    },
  ],
  "ia-entreprise": [
    {
      question: "Combien coûte un chatbot IA pour entreprise ?",
      answer: "Un chatbot IA basique coûte entre 3 000€ et 8 000€ en développement initial, plus 200€ à 500€/mois d'hébergement et maintenance. Un assistant IA avancé (formé sur vos données, intégré à votre CRM) se situe entre 10 000€ et 30 000€. Le ROI est généralement atteint en 3 à 6 mois grâce à la réduction des tickets support.",
      category: "pricing",
    },
    {
      question: "Quels modèles d'IA utilisez-vous ?",
      answer: "Nous utilisons GPT-4 d'OpenAI pour la génération de texte, Claude d'Anthropic pour les assistants conversationnels complexes, et des modèles open-source (Llama, Mistral) quand la confidentialité des données l'exige. Le choix dépend de votre cas d'usage, budget et contraintes de sécurité.",
      category: "services",
    },
    {
      question: "L'IA peut-elle être formée sur mes données d'entreprise ?",
      answer: "Oui, c'est notre spécialité. Nous créons des assistants IA formés sur vos documents, FAQ, bases de connaissances et historiques clients. Vos données restent privées et ne sont jamais utilisées pour entraîner les modèles publics. Nous utilisons des techniques de RAG (Retrieval-Augmented Generation) pour des réponses précises basées sur vos contenus.",
      category: "services",
    },
    {
      question: "En combien de temps peut-on déployer une solution IA ?",
      answer: "Un chatbot simple peut être déployé en 2 à 4 semaines. Une solution IA complète (intégrée à vos outils, formée sur vos données) prend 6 à 12 semaines. Nous commençons toujours par un POC (Proof of Concept) de 2 semaines pour valider la faisabilité avant le développement complet.",
      category: "process",
    },
    {
      question: "Mes données sont-elles sécurisées avec l'IA ?",
      answer: "Oui, la sécurité est notre priorité. Nous utilisons des API sécurisées avec chiffrement TLS, hébergement en Europe (RGPD), et options de déploiement on-premise si nécessaire. Aucune donnée client n'est utilisée pour entraîner les modèles. Nous pouvons signer des NDA et fournir des certifications de conformité.",
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
      answer: "Les premiers résultats SEO apparaissent en 3 à 6 mois. Un positionnement stable sur des mots-clés concurrentiels prend 6 à 12 mois. Le SEO est un investissement long terme : les résultats s'accumulent et perdurent, contrairement à la publicité qui s'arrête quand vous arrêtez de payer.",
      category: "process",
    },
    {
      question: "Combien coûte une prestation SEO ?",
      answer: "Un audit SEO complet coûte entre 500€ et 1 500€. Un accompagnement SEO mensuel démarre à 800€/mois pour les PME et 2 000€/mois pour les sites e-commerce. Ce tarif inclut l'optimisation technique, la création de contenu, le netlinking et le reporting mensuel.",
      category: "pricing",
    },
    {
      question: "Le SEO est-il toujours pertinent en 2026 ?",
      answer: "Oui, le SEO reste essentiel. 68% des expériences en ligne commencent par un moteur de recherche. Même avec l'IA générative, Google reste la première source de trafic pour les sites web. Le SEO évolue mais son importance ne diminue pas.",
      category: "general",
    },
    {
      question: "Faites-vous du SEO local ?",
      answer: "Oui, le SEO local est une de nos spécialités. Nous optimisons votre fiche Google Business Profile, créons des pages locales optimisées, et travaillons les citations locales. Idéal pour les commerces, restaurants, artisans et professions libérales qui ciblent une zone géographique.",
      category: "services",
    },
    {
      question: "Garantissez-vous la première page Google ?",
      answer: "Non, aucun professionnel sérieux ne peut garantir un positionnement précis. Google utilise plus de 200 facteurs de ranking et change son algorithme régulièrement. Ce que nous garantissons : une méthodologie éprouvée, des améliorations mesurables, et une transparence totale sur les actions et résultats.",
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
      answer: "Un e-commerce Shopify clé en main coûte entre 3 000€ et 8 000€. Un site WooCommerce personnalisé se situe entre 5 000€ et 15 000€. Une solution e-commerce sur mesure avec fonctionnalités avancées (marketplace, B2B, abonnements) coûte entre 15 000€ et 50 000€+.",
      category: "pricing",
    },
    {
      question: "Shopify ou WooCommerce ?",
      answer: "Shopify est idéal pour démarrer rapidement avec peu de technique (hébergement inclus, 29€ à 299€/mois). WooCommerce offre plus de flexibilité et pas d'abonnement mensuel, mais nécessite un hébergement et plus de maintenance. Nous recommandons Shopify pour le retail, WooCommerce pour les besoins sur mesure.",
      category: "services",
    },
    {
      question: "Gérez-vous les paiements et la logistique ?",
      answer: "Nous intégrons tous les moyens de paiement : Stripe, PayPal, Apple Pay, paiement en 3x/4x (Alma, Klarna). Pour la logistique, nous connectons votre e-commerce à Colissimo, Chronopost, Mondial Relay, et gestionnaires de stock (ShipStation, Sendcloud).",
      category: "services",
    },
    {
      question: "Comment augmenter les ventes de mon e-commerce ?",
      answer: "Nous optimisons les conversions via : amélioration UX du tunnel d'achat, upsells et cross-sells automatisés, emails de panier abandonné, programme de fidélité, et SEO produit. En moyenne, nos optimisations augmentent le taux de conversion de 20% à 40%.",
      category: "services",
    },
    {
      question: "Proposez-vous du Click & Collect ?",
      answer: "Oui, nous implémentons le Click & Collect avec choix du point de retrait, notifications automatiques (commande prête, rappel), et gestion des stocks par magasin. Solution idéale pour les commerces ayant des points de vente physiques.",
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
