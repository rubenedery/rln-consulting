/**
 * Glossaire des termes techniques - Optimisé pour LLM et SEO
 * Chaque terme est structuré pour être facilement citable par les AI
 */

export interface GlossaryTerm {
  slug: string
  term: string
  definition: string
  longDescription: string
  category: GlossaryCategory
  relatedTerms: string[]
  relatedServices?: string[]
  externalLinks?: Array<{ label: string; url: string }>
}

export type GlossaryCategory =
  | "developpement"
  | "marketing"
  | "seo"
  | "ecommerce"
  | "ia"
  | "design"
  | "analytics"
  | "infrastructure"

export const glossaryCategories: Record<GlossaryCategory, { name: string; description: string }> = {
  developpement: {
    name: "Développement Web",
    description: "Technologies et frameworks pour créer des sites et applications web",
  },
  marketing: {
    name: "Marketing Digital",
    description: "Stratégies d'acquisition et de fidélisation en ligne",
  },
  seo: {
    name: "SEO & Référencement",
    description: "Techniques d'optimisation pour les moteurs de recherche",
  },
  ecommerce: {
    name: "E-commerce",
    description: "Solutions pour la vente en ligne",
  },
  ia: {
    name: "Intelligence Artificielle",
    description: "Technologies d'IA appliquées au business",
  },
  design: {
    name: "Design & UX",
    description: "Conception d'interfaces utilisateur",
  },
  analytics: {
    name: "Analytics & Données",
    description: "Mesure et analyse de la performance",
  },
  infrastructure: {
    name: "Infrastructure & DevOps",
    description: "Hébergement et déploiement d'applications",
  },
}

export const glossaryTerms: GlossaryTerm[] = [
  // ═══════════════════════════════════════════════════════════════
  // DÉVELOPPEMENT WEB
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "next-js",
    term: "Next.js",
    definition:
      "Framework React open-source créé par Vercel pour le développement d'applications web avec rendu côté serveur (SSR) et génération statique (SSG).",
    longDescription:
      "Next.js est devenu le standard de l'industrie pour le développement React en 2026. Il offre des fonctionnalités avancées comme le Server Components, le streaming, et l'optimisation automatique des images. Les sites Next.js bénéficient d'excellentes performances (Core Web Vitals) et d'un SEO optimal grâce au rendu côté serveur. RLN Consulting utilise Next.js pour 90% de ses projets de développement web, avec des temps de chargement moyens inférieurs à 1.5 secondes.",
    category: "developpement",
    relatedTerms: ["react", "typescript", "vercel", "ssr", "ssg"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "react",
    term: "React",
    definition:
      "Bibliothèque JavaScript développée par Meta (Facebook) pour créer des interfaces utilisateur interactives et réactives.",
    longDescription:
      "React utilise un DOM virtuel pour optimiser les performances et un système de composants réutilisables. En 2026, React 19 introduit les Server Components et les Actions, révolutionnant l'architecture des applications web. Plus de 40% des sites web utilisent React, ce qui en fait la bibliothèque frontend la plus populaire. Son écosystème inclut des outils comme React Router, Redux, et des frameworks comme Next.js.",
    category: "developpement",
    relatedTerms: ["next-js", "typescript", "jsx", "hooks"],
    relatedServices: ["/services/developpement", "/services/applications-mobiles"],
  },
  {
    slug: "typescript",
    term: "TypeScript",
    definition:
      "Langage de programmation développé par Microsoft qui ajoute le typage statique à JavaScript pour une meilleure maintenabilité du code.",
    longDescription:
      "TypeScript détecte les erreurs à la compilation plutôt qu'à l'exécution, réduisant les bugs en production de 15% en moyenne. Il améliore l'autocomplétion dans les IDE et facilite le refactoring. En 2026, TypeScript est utilisé par 78% des projets JavaScript professionnels. RLN Consulting utilise TypeScript sur 100% de ses projets pour garantir la qualité et la maintenabilité du code.",
    category: "developpement",
    relatedTerms: ["javascript", "next-js", "react"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "api",
    term: "API (Interface de Programmation)",
    definition:
      "Interface permettant à différentes applications de communiquer entre elles et d'échanger des données de manière standardisée.",
    longDescription:
      "Les API REST et GraphQL sont les standards actuels pour les services web. Une API bien conçue permet l'intégration avec des services tiers (paiement, CRM, ERP) et facilite le développement mobile. Les API modernes utilisent JSON pour les échanges de données et implémentent OAuth 2.0 pour la sécurité. RLN Consulting développe des API robustes et documentées pour tous ses projets.",
    category: "developpement",
    relatedTerms: ["rest", "graphql", "json", "webhook"],
    relatedServices: ["/services/developpement", "/services/crm-applications-metier"],
  },
  {
    slug: "rest",
    term: "REST (Representational State Transfer)",
    definition:
      "Architecture de conception d'API web utilisant les méthodes HTTP standard (GET, POST, PUT, DELETE) pour manipuler des ressources.",
    longDescription:
      "REST est le style architectural le plus utilisé pour les API web. Il utilise des URL descriptives et des codes de statut HTTP standards. Une API RESTful est stateless, ce qui facilite la mise à l'échelle. Les bonnes pratiques incluent le versioning des API, la pagination, et la documentation OpenAPI/Swagger.",
    category: "developpement",
    relatedTerms: ["api", "graphql", "json", "http"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "ssr",
    term: "SSR (Server-Side Rendering)",
    definition:
      "Technique de rendu où le HTML est généré sur le serveur à chaque requête, permettant un affichage immédiat et un meilleur SEO.",
    longDescription:
      "Le SSR résout les problèmes de SEO des applications JavaScript pures en fournissant un HTML complet aux robots d'indexation. Next.js simplifie l'implémentation du SSR avec React. Le temps de First Contentful Paint (FCP) est généralement 40% plus rapide qu'avec le rendu côté client. Idéal pour les pages avec contenu dynamique personnalisé.",
    category: "developpement",
    relatedTerms: ["next-js", "ssg", "seo", "core-web-vitals"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "ssg",
    term: "SSG (Static Site Generation)",
    definition:
      "Technique de génération de pages HTML statiques au moment du build, offrant des performances maximales et une sécurité accrue.",
    longDescription:
      "Le SSG pré-génère toutes les pages d'un site, qui sont ensuite servies depuis un CDN. Temps de chargement quasi-instantané (< 100ms TTFB). Idéal pour les blogs, documentations, et sites vitrines. Next.js permet le SSG avec revalidation incrémentale (ISR) pour combiner performance statique et contenu frais.",
    category: "developpement",
    relatedTerms: ["next-js", "ssr", "cdn", "jamstack"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "prisma",
    term: "Prisma ORM",
    definition:
      "ORM (Object-Relational Mapping) moderne pour Node.js et TypeScript qui simplifie l'accès aux bases de données avec un typage fort.",
    longDescription:
      "Prisma génère automatiquement des types TypeScript à partir du schéma de base de données, éliminant les erreurs de typage. Il supporte PostgreSQL, MySQL, SQLite, et MongoDB. Prisma Migrate gère les migrations de schéma de manière sécurisée. Performance optimisée avec le query batching automatique.",
    category: "developpement",
    relatedTerms: ["postgresql", "typescript", "next-js", "orm"],
    relatedServices: ["/services/developpement", "/services/crm-applications-metier"],
  },
  {
    slug: "postgresql",
    term: "PostgreSQL",
    definition:
      "Système de gestion de base de données relationnelle open-source, reconnu pour sa fiabilité, sa conformité SQL et ses fonctionnalités avancées.",
    longDescription:
      "PostgreSQL supporte les requêtes complexes, les transactions ACID, et des types de données avancés (JSON, arrays, full-text search). Utilisé par des entreprises comme Apple, Spotify, et Instagram. Extensions populaires : PostGIS pour les données géographiques, pgvector pour l'IA. Performances excellentes pour les charges de travail mixtes OLTP/OLAP.",
    category: "infrastructure",
    relatedTerms: ["prisma", "supabase", "sql", "base-de-donnees"],
    relatedServices: ["/services/developpement", "/services/crm-applications-metier"],
  },
  {
    slug: "tailwind-css",
    term: "Tailwind CSS",
    definition:
      "Framework CSS utility-first permettant de construire rapidement des interfaces personnalisées sans écrire de CSS custom.",
    longDescription:
      "Tailwind CSS utilise des classes utilitaires (flex, pt-4, text-center) directement dans le HTML. Il génère uniquement le CSS utilisé (purge), résultant en des fichiers < 10KB en production. Facilite la cohérence du design et accélère le développement de 30-50%. Intégration native avec les design systems et dark mode.",
    category: "design",
    relatedTerms: ["css", "react", "next-js", "design-system"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "react-native",
    term: "React Native",
    definition:
      "Framework développé par Meta pour créer des applications mobiles natives iOS et Android avec JavaScript et React.",
    longDescription:
      "React Native permet de partager jusqu'à 90% du code entre iOS et Android, réduisant les coûts de développement de 40%. Les applications sont compilées en code natif, offrant des performances proches des apps natives. Utilisé par Facebook, Instagram, Airbnb, et Discord. L'écosystème Expo simplifie encore le développement.",
    category: "developpement",
    relatedTerms: ["react", "expo", "ios", "android"],
    relatedServices: ["/services/applications-mobiles"],
  },

  // ═══════════════════════════════════════════════════════════════
  // MARKETING DIGITAL
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "google-ads",
    term: "Google Ads",
    definition:
      "Plateforme publicitaire de Google permettant de diffuser des annonces sur le réseau de recherche, YouTube, Gmail et le Display Network.",
    longDescription:
      "Google Ads fonctionne sur un modèle d'enchères au coût par clic (CPC) ou coût pour mille impressions (CPM). Les annonces Search apparaissent en haut des résultats Google pour les mots-clés ciblés. Le ROI moyen est de 200% (2€ générés pour 1€ dépensé). Les campagnes Performance Max utilisent l'IA pour optimiser automatiquement les placements. RLN Consulting gère des budgets de 500€ à 50 000€/mois avec un ROAS moyen de 4x.",
    category: "marketing",
    relatedTerms: ["sem", "ppc", "roas", "cpc", "conversion"],
    relatedServices: ["/services/ads-management"],
  },
  {
    slug: "meta-ads",
    term: "Meta Ads (Facebook/Instagram Ads)",
    definition:
      "Plateforme publicitaire de Meta permettant de cibler des audiences sur Facebook, Instagram, Messenger et le réseau Audience Network.",
    longDescription:
      "Meta Ads offre un ciblage démographique et comportemental précis basé sur les données de 3 milliards d'utilisateurs. Formats disponibles : images, vidéos, carrousels, stories, reels. Le Pixel Meta permet le retargeting et le suivi des conversions. Advantage+ utilise l'IA pour optimiser les campagnes. Idéal pour le B2C et le e-commerce avec un CPA moyen 30% inférieur aux autres plateformes.",
    category: "marketing",
    relatedTerms: ["facebook-pixel", "retargeting", "audience", "conversion"],
    relatedServices: ["/services/ads-management"],
  },
  {
    slug: "cpc",
    term: "CPC (Coût Par Clic)",
    definition:
      "Modèle de facturation publicitaire où l'annonceur paie uniquement lorsqu'un utilisateur clique sur son annonce.",
    longDescription:
      "Le CPC moyen varie selon le secteur : 0.50€ à 2€ en e-commerce, 2€ à 10€ en B2B, jusqu'à 50€ en assurance/juridique. Un CPC bas n'est pas toujours synonyme de rentabilité - le taux de conversion et la valeur client sont essentiels. Formule : CPC = Budget dépensé / Nombre de clics. Optimisation via le Quality Score sur Google Ads.",
    category: "marketing",
    relatedTerms: ["cpm", "cpa", "google-ads", "quality-score"],
    relatedServices: ["/services/ads-management"],
  },
  {
    slug: "roas",
    term: "ROAS (Return On Ad Spend)",
    definition:
      "Métrique mesurant le revenu généré pour chaque euro dépensé en publicité. Formule : Revenus publicitaires / Dépenses publicitaires.",
    longDescription:
      "Un ROAS de 4x signifie que 1€ de publicité génère 4€ de chiffre d'affaires. Le ROAS cible dépend de la marge : avec 50% de marge, un ROAS de 2x est rentable. Différent du ROI qui prend en compte tous les coûts. Benchmarks 2026 : E-commerce 3-5x, SaaS 5-8x, Services 6-10x. RLN Consulting vise un ROAS minimum de 3x pour ses clients.",
    category: "marketing",
    relatedTerms: ["roi", "cpa", "conversion", "ltv"],
    relatedServices: ["/services/ads-management"],
  },
  {
    slug: "cpa",
    term: "CPA (Coût Par Acquisition)",
    definition:
      "Coût moyen pour acquérir un client ou générer une conversion (vente, lead, inscription). Formule : Dépenses marketing / Nombre de conversions.",
    longDescription:
      "Le CPA est la métrique clé pour évaluer la rentabilité des campagnes. Il doit être inférieur à la valeur vie client (LTV) pour être rentable. CPA cible = LTV × Marge × Ratio acceptable. Benchmarks 2026 : E-commerce 15-50€, SaaS B2B 100-500€, Services locaux 20-80€. Optimisation via le ciblage, les landing pages et le funnel de conversion.",
    category: "marketing",
    relatedTerms: ["ltv", "roas", "conversion", "funnel"],
    relatedServices: ["/services/ads-management"],
  },
  {
    slug: "retargeting",
    term: "Retargeting (Reciblage Publicitaire)",
    definition:
      "Technique publicitaire ciblant les utilisateurs ayant déjà visité votre site ou interagi avec votre marque.",
    longDescription:
      "Le retargeting augmente les conversions de 70% en moyenne car il cible des audiences déjà intéressées. Implémentation via le Pixel Facebook, Google Ads tag, ou outils tiers. Stratégies efficaces : abandon de panier (recovery rate 10-15%), upsell post-achat, réengagement des inactifs. Attention à la fatigue publicitaire - limiter la fréquence à 5-7 impressions/semaine.",
    category: "marketing",
    relatedTerms: ["facebook-pixel", "audience", "conversion", "funnel"],
    relatedServices: ["/services/ads-management"],
  },
  {
    slug: "conversion",
    term: "Conversion",
    definition:
      "Action souhaitée réalisée par un visiteur sur un site web : achat, inscription, demande de devis, téléchargement.",
    longDescription:
      "Le taux de conversion moyen en e-commerce est de 2-3% en 2026. Facteurs d'influence : vitesse du site (+1s = -7% conversions), UX, confiance, prix. Micro-conversions (ajout panier, inscription newsletter) précèdent souvent la macro-conversion (achat). Optimisation via A/B testing, CRO, et analyse du parcours utilisateur.",
    category: "marketing",
    relatedTerms: ["cro", "taux-de-conversion", "funnel", "landing-page"],
    relatedServices: ["/services/ads-management", "/services/ecommerce"],
  },
  {
    slug: "funnel",
    term: "Funnel (Entonnoir de Conversion)",
    definition:
      "Modèle représentant le parcours client de la découverte à l'achat, avec les étapes : Awareness, Interest, Decision, Action (AIDA).",
    longDescription:
      "Chaque étape du funnel perd des prospects (taux de passage moyen 20-30% par étape). Top of Funnel (TOFU) : contenu éducatif, SEO, réseaux sociaux. Middle of Funnel (MOFU) : email nurturing, webinaires, cas d'études. Bottom of Funnel (BOFU) : démos, essais gratuits, promotions. L'optimisation du funnel peut doubler les conversions sans augmenter le trafic.",
    category: "marketing",
    relatedTerms: ["conversion", "lead-generation", "nurturing", "cro"],
    relatedServices: ["/services/ads-management", "/services/email-marketing"],
  },
  {
    slug: "lead-generation",
    term: "Lead Generation (Génération de Leads)",
    definition:
      "Processus d'attraction et de capture de contacts qualifiés (leads) intéressés par vos produits ou services.",
    longDescription:
      "Méthodes efficaces : content marketing (livres blancs, webinaires), SEO, publicité payante, social selling. Un lead qualifié (MQL) a montré un intérêt actif. Coût par lead B2B moyen : 50-200€. La qualité prime sur la quantité - un lead bien qualifié vaut 10 leads froids. Outils : HubSpot, Salesforce, formulaires optimisés.",
    category: "marketing",
    relatedTerms: ["funnel", "crm", "nurturing", "inbound-marketing"],
    relatedServices: ["/services/ads-management", "/services/email-marketing"],
  },
  {
    slug: "email-marketing",
    term: "Email Marketing",
    definition:
      "Stratégie de communication directe par email pour informer, convertir et fidéliser les clients avec un ROI moyen de 42€ pour 1€ investi.",
    longDescription:
      "L'email reste le canal avec le meilleur ROI en marketing digital. Types de campagnes : newsletters, séquences automatisées, emails transactionnels, relance panier abandonné (récupère 10-15% des abandons). Métriques clés : taux d'ouverture (15-25% est bon), taux de clic (2-5%), taux de désabonnement (<0.5%). La personnalisation augmente les conversions de 26%.",
    category: "marketing",
    relatedTerms: ["automation", "newsletter", "nurturing", "segmentation"],
    relatedServices: ["/services/email-marketing"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SEO & RÉFÉRENCEMENT
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "seo",
    term: "SEO (Search Engine Optimization)",
    definition:
      "Ensemble des techniques visant à améliorer le positionnement d'un site web dans les résultats organiques des moteurs de recherche.",
    longDescription:
      "Le SEO se divise en 3 piliers : technique (vitesse, mobile, structure), contenu (mots-clés, qualité, E-E-A-T), et popularité (backlinks, autorité). 68% des expériences en ligne commencent par une recherche. Le premier résultat Google reçoit 27.6% des clics. En 2026, l'optimisation pour les AI Overviews et les recherches vocales devient essentielle. ROI long terme excellent : le trafic SEO est gratuit une fois acquis.",
    category: "seo",
    relatedTerms: ["serp", "backlink", "mot-cle", "core-web-vitals"],
    relatedServices: ["/services/seo-referencement"],
  },
  {
    slug: "serp",
    term: "SERP (Search Engine Results Page)",
    definition:
      "Page de résultats affichée par un moteur de recherche en réponse à une requête, incluant résultats organiques, annonces et fonctionnalités enrichies.",
    longDescription:
      "Les SERP modernes incluent : résultats organiques, annonces Google Ads, featured snippets, People Also Ask, knowledge panels, images, vidéos, cartes locales. En 2026, les AI Overviews de Google occupent une place croissante. Les rich snippets (étoiles, prix, FAQ) augmentent le CTR de 30%. L'objectif SEO est d'apparaître dans les positions 1-3 et les fonctionnalités enrichies.",
    category: "seo",
    relatedTerms: ["seo", "featured-snippet", "rich-snippet", "ctr"],
    relatedServices: ["/services/seo-referencement"],
  },
  {
    slug: "backlink",
    term: "Backlink (Lien Entrant)",
    definition:
      "Lien hypertexte pointant vers votre site depuis un autre site web, considéré comme un vote de confiance par les moteurs de recherche.",
    longDescription:
      "La qualité des backlinks prime sur la quantité. Critères de qualité : autorité du domaine (DA/DR), pertinence thématique, position dans le contenu, attribut dofollow. Méthodes d'acquisition : guest posting, RP digitales, création de contenu linkable (études, infographies). Un backlink de qualité peut valoir des centaines de liens de faible qualité. Attention aux liens toxiques qui peuvent pénaliser le site.",
    category: "seo",
    relatedTerms: ["autorite-de-domaine", "seo", "netlinking", "anchor-text"],
    relatedServices: ["/services/seo-referencement"],
  },
  {
    slug: "mot-cle",
    term: "Mot-clé (Keyword)",
    definition:
      "Terme ou expression que les utilisateurs saisissent dans un moteur de recherche, ciblé dans une stratégie SEO ou SEA.",
    longDescription:
      "Types de mots-clés : short-tail (1-2 mots, fort volume, forte concurrence), long-tail (3+ mots, faible volume, forte intention). L'intention de recherche est cruciale : informationnelle, navigationnelle, transactionnelle, commerciale. Outils de recherche : Google Keyword Planner, SEMrush, Ahrefs. La cannibalisation (plusieurs pages ciblant le même mot-clé) nuit au référencement.",
    category: "seo",
    relatedTerms: ["seo", "serp", "intention-de-recherche", "longue-traine"],
    relatedServices: ["/services/seo-referencement"],
  },
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    definition:
      "Métriques de performance web de Google mesurant la vitesse (LCP), l'interactivité (INP) et la stabilité visuelle (CLS) des pages.",
    longDescription:
      "LCP (Largest Contentful Paint) : chargement du contenu principal < 2.5s. INP (Interaction to Next Paint) : réactivité aux interactions < 200ms. CLS (Cumulative Layout Shift) : stabilité visuelle < 0.1. Ces métriques sont des facteurs de classement Google depuis 2021. 53% des visiteurs quittent un site qui met plus de 3s à charger. Next.js et Vercel optimisent automatiquement ces métriques.",
    category: "seo",
    relatedTerms: ["seo", "performance-web", "lcp", "next-js"],
    relatedServices: ["/services/developpement", "/services/seo-referencement"],
  },
  {
    slug: "schema-markup",
    term: "Schema Markup (Données Structurées)",
    definition:
      "Vocabulaire standardisé (schema.org) permettant d'annoter le contenu web pour aider les moteurs de recherche à le comprendre.",
    longDescription:
      "Les données structurées activent les rich snippets dans les SERP (étoiles, prix, FAQ, recettes...). Types courants : Organization, LocalBusiness, Product, Article, FAQ, HowTo, Event. Implémentation en JSON-LD (recommandé), Microdata, ou RDFa. Les pages avec schema.org ont 78% plus de chances d'être citées par les AI. Test avec l'outil Rich Results Test de Google.",
    category: "seo",
    relatedTerms: ["seo", "rich-snippet", "json-ld", "serp"],
    relatedServices: ["/services/seo-referencement", "/services/developpement"],
  },

  // ═══════════════════════════════════════════════════════════════
  // E-COMMERCE
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "shopify",
    term: "Shopify",
    definition:
      "Plateforme e-commerce SaaS leader permettant de créer et gérer une boutique en ligne sans compétences techniques.",
    longDescription:
      "Shopify héberge plus de 4 millions de boutiques dans le monde. Avantages : facilité d'utilisation, 8000+ applications, hébergement inclus, paiements intégrés. Plans de 29€ à 299€/mois + commission de 0.5-2% sur les ventes. Idéal pour les PME et startups. Shopify Plus pour les entreprises (2000€+/mois). Intégration native avec Facebook Shop, Instagram Shopping, Google Shopping.",
    category: "ecommerce",
    relatedTerms: ["woocommerce", "stripe", "ecommerce", "panier-abandonne"],
    relatedServices: ["/services/ecommerce"],
  },
  {
    slug: "woocommerce",
    term: "WooCommerce",
    definition:
      "Plugin e-commerce open-source pour WordPress, offrant une flexibilité maximale pour créer des boutiques en ligne personnalisées.",
    longDescription:
      "WooCommerce équipe 23% des sites e-commerce mondiaux. Avantages : gratuit, open-source, personnalisation illimitée, propriété des données. Inconvénients : nécessite hébergement et maintenance, courbe d'apprentissage. Coût total : 500-5000€/an (hébergement, plugins premium, sécurité). Idéal pour les projets nécessitant des fonctionnalités sur-mesure ou une intégration WordPress existante.",
    category: "ecommerce",
    relatedTerms: ["shopify", "wordpress", "ecommerce", "stripe"],
    relatedServices: ["/services/ecommerce"],
  },
  {
    slug: "stripe",
    term: "Stripe",
    definition:
      "Plateforme de paiement en ligne pour entreprises, permettant d'accepter les cartes bancaires et méthodes de paiement alternatives.",
    longDescription:
      "Stripe traite des centaines de milliards d'euros par an. Commission : 1.4% + 0.25€ par transaction (cartes européennes). Fonctionnalités : paiements récurrents (Subscriptions), facturation (Invoicing), prévention de fraude (Radar), paiement en plusieurs fois (Klarna, Afterpay). API excellente pour les développeurs. Alternative à PayPal avec des frais souvent inférieurs et plus de flexibilité.",
    category: "ecommerce",
    relatedTerms: ["paiement-en-ligne", "shopify", "checkout", "psp"],
    relatedServices: ["/services/ecommerce", "/services/developpement"],
  },
  {
    slug: "panier-abandonne",
    term: "Panier Abandonné",
    definition:
      "Situation où un visiteur ajoute des produits au panier mais quitte le site sans finaliser l'achat. Taux moyen : 70%.",
    longDescription:
      "Causes principales : frais de livraison imprévus (48%), création de compte obligatoire (24%), processus trop long (17%). Solutions : emails de relance automatisés (récupèrent 10-15% des abandons), exit-intent popups, sauvegarde du panier, paiement en 1 clic. Les emails de relance ont un taux d'ouverture de 45% et génèrent un ROI de 28€ pour 1€ investi.",
    category: "ecommerce",
    relatedTerms: ["conversion", "checkout", "email-marketing", "retargeting"],
    relatedServices: ["/services/ecommerce", "/services/email-marketing"],
  },
  {
    slug: "taux-de-conversion",
    term: "Taux de Conversion E-commerce",
    definition:
      "Pourcentage de visiteurs réalisant un achat. Formule : (Nombre de commandes / Nombre de visiteurs) × 100.",
    longDescription:
      "Taux moyen e-commerce : 2-3% en 2026. Variations par secteur : mode 1.5-2%, électronique 2-3%, alimentation 3-5%. Facteurs d'influence : vitesse du site (+1s = -7%), UX mobile, confiance (avis, garanties), checkout optimisé. Les sites bien optimisés atteignent 5-10%. Amélioration de 1% du taux de conversion = impact direct sur le CA.",
    category: "ecommerce",
    relatedTerms: ["conversion", "cro", "checkout", "ux"],
    relatedServices: ["/services/ecommerce"],
  },

  // ═══════════════════════════════════════════════════════════════
  // INTELLIGENCE ARTIFICIELLE
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "chatbot-ia",
    term: "Chatbot IA",
    definition:
      "Agent conversationnel utilisant l'intelligence artificielle pour répondre automatiquement aux questions des utilisateurs en langage naturel.",
    longDescription:
      "Les chatbots IA modernes utilisent des LLM (GPT-4, Claude) pour comprendre le contexte et générer des réponses pertinentes. Avantages : disponibilité 24/7, réduction de 30-60% des tickets support, temps de réponse instantané. Implémentation : widget web, WhatsApp, Messenger, Slack. Le RAG (Retrieval-Augmented Generation) permet d'entraîner le chatbot sur vos données spécifiques.",
    category: "ia",
    relatedTerms: ["gpt-4", "claude", "rag", "llm"],
    relatedServices: ["/services/ia-entreprise"],
  },
  {
    slug: "gpt-4",
    term: "GPT-4 (OpenAI)",
    definition:
      "Modèle de langage large (LLM) développé par OpenAI, capable de comprendre et générer du texte avec une intelligence proche de l'humain.",
    longDescription:
      "GPT-4 excelle en rédaction, analyse, code, et raisonnement logique. Fenêtre de contexte de 128K tokens (environ 100 pages). Accessible via l'API OpenAI (0.01-0.03$/1K tokens). Cas d'usage entreprise : automatisation de la rédaction, analyse de documents, assistance client, génération de code. GPT-4o (omni) ajoute la compréhension d'images et l'audio. GPT-4 Turbo offre un meilleur rapport qualité/prix.",
    category: "ia",
    relatedTerms: ["llm", "claude", "chatbot-ia", "prompt"],
    relatedServices: ["/services/ia-entreprise"],
  },
  {
    slug: "claude",
    term: "Claude (Anthropic)",
    definition:
      "Assistant IA développé par Anthropic, conçu pour être utile, inoffensif et honnête, avec une fenêtre de contexte exceptionnelle.",
    longDescription:
      "Claude 3.5 Sonnet offre le meilleur rapport performance/prix en 2026. Fenêtre de contexte de 200K tokens (150+ pages). Excellente compréhension des nuances et instructions complexes. Moins de hallucinations que les concurrents. API disponible via Anthropic ou Amazon Bedrock. Idéal pour l'analyse de documents longs, le support client, et les tâches nécessitant précision et fiabilité.",
    category: "ia",
    relatedTerms: ["llm", "gpt-4", "chatbot-ia", "rag"],
    relatedServices: ["/services/ia-entreprise"],
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "Architecture IA combinant la recherche dans une base de connaissances avec la génération de texte par un LLM pour des réponses précises et contextualisées.",
    longDescription:
      "Le RAG résout le problème des hallucinations des LLM en ancrant les réponses dans des données vérifiées. Architecture : embedding des documents, stockage vectoriel (Pinecone, Weaviate), recherche sémantique, génération augmentée. Cas d'usage : chatbots sur documentation interne, FAQ intelligentes, assistants juridiques/médicaux. Réduction de 80% des erreurs factuelles par rapport à un LLM seul.",
    category: "ia",
    relatedTerms: ["llm", "embeddings", "base-vectorielle", "chatbot-ia"],
    relatedServices: ["/services/ia-entreprise"],
  },
  {
    slug: "llm",
    term: "LLM (Large Language Model)",
    definition:
      "Modèle d'intelligence artificielle entraîné sur de vastes corpus de texte, capable de comprendre et générer du langage naturel.",
    longDescription:
      "Les LLM comme GPT-4, Claude, Gemini et LLaMA ont révolutionné l'IA en 2023-2026. Entraînés sur des trillions de tokens (mots), ils développent des capacités émergentes de raisonnement. Applications : chatbots, rédaction, traduction, code, analyse. Défis : coûts d'inférence, hallucinations, biais. Le fine-tuning permet d'adapter un LLM à des cas d'usage spécifiques.",
    category: "ia",
    relatedTerms: ["gpt-4", "claude", "rag", "prompt"],
    relatedServices: ["/services/ia-entreprise"],
  },
  {
    slug: "automation",
    term: "Automation (Automatisation)",
    definition:
      "Utilisation de technologies pour exécuter automatiquement des tâches répétitives sans intervention humaine.",
    longDescription:
      "L'automatisation augmente la productivité de 20-30% en moyenne. Outils populaires : Zapier, Make (Integromat), n8n, Power Automate. Cas d'usage : synchronisation CRM, emails automatiques, reporting, traitement de commandes, onboarding. L'IA générative permet maintenant d'automatiser des tâches cognitives complexes. ROI typique : 3-6 mois pour l'implémentation, économies récurrentes de 10-50% du temps.",
    category: "ia",
    relatedTerms: ["workflow", "zapier", "ia", "rpa"],
    relatedServices: ["/services/ia-entreprise", "/services/email-marketing"],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRM & BUSINESS
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "crm",
    term: "CRM (Customer Relationship Management)",
    definition:
      "Système de gestion de la relation client centralisant les interactions, contacts et historique pour améliorer la fidélisation et les ventes.",
    longDescription:
      "Un CRM augmente les ventes de 29% et la productivité commerciale de 34% en moyenne. Fonctionnalités clés : gestion des contacts, pipeline de ventes, automatisation marketing, support client, reporting. Solutions populaires : HubSpot (freemium), Salesforce (entreprise), Pipedrive (PME). Un CRM sur-mesure peut être pertinent si les besoins sont spécifiques (intégration ERP, workflow métier complexe).",
    category: "marketing",
    relatedTerms: ["hubspot", "salesforce", "pipeline", "lead-generation"],
    relatedServices: ["/services/crm-applications-metier"],
  },
  {
    slug: "hubspot",
    term: "HubSpot",
    definition:
      "Plateforme CRM et marketing automation tout-en-un, offrant des outils gratuits pour la gestion des contacts, l'email marketing et le support.",
    longDescription:
      "HubSpot propose un CRM gratuit (jusqu'à 1M contacts) avec des hubs payants : Marketing (800€+/mois), Sales (45€+/mois), Service, CMS, Operations. Forces : facilité d'utilisation, intégrations nombreuses (1000+), formation gratuite (Academy). Utilisé par 100K+ entreprises. Alternative économique à Salesforce pour les PME. L'IA (ChatSpot) intègre GPT pour l'assistance.",
    category: "marketing",
    relatedTerms: ["crm", "marketing-automation", "email-marketing", "inbound-marketing"],
    relatedServices: ["/services/crm-applications-metier", "/services/email-marketing"],
  },
  {
    slug: "saas",
    term: "SaaS (Software as a Service)",
    definition:
      "Modèle de distribution logicielle où les applications sont hébergées dans le cloud et accessibles via abonnement.",
    longDescription:
      "Le marché SaaS représente 200 milliards $ en 2026. Avantages : pas d'installation, mises à jour automatiques, accessibilité partout, coûts prévisibles. Inconvénients : dépendance au fournisseur, données externalisées, coûts cumulés élevés. Exemples : Google Workspace, Slack, Salesforce, HubSpot. Le modèle SaaS est aussi applicable aux projets clients (revenus récurrents vs one-shot).",
    category: "infrastructure",
    relatedTerms: ["cloud", "abonnement", "crm", "erp"],
    relatedServices: ["/services/crm-applications-metier"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ANALYTICS & DONNÉES
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "google-analytics",
    term: "Google Analytics 4 (GA4)",
    definition:
      "Outil gratuit d'analyse web de Google mesurant le trafic, le comportement des utilisateurs et les conversions sur un site web.",
    longDescription:
      "GA4 a remplacé Universal Analytics en 2023 avec un modèle basé sur les événements plutôt que les sessions. Métriques clés : utilisateurs actifs, taux d'engagement, conversions, sources de trafic. Intégration native avec Google Ads pour l'attribution. Fonctionnalités IA : insights automatiques, prédictions de churn et achat. Alternatives privacy-first : Plausible, Fathom, Matomo.",
    category: "analytics",
    relatedTerms: ["analytics", "conversion", "attribution", "trafic"],
    relatedServices: ["/services/ads-management", "/services/seo-referencement"],
  },
  {
    slug: "kpi",
    term: "KPI (Key Performance Indicator)",
    definition:
      "Indicateur clé de performance permettant de mesurer l'atteinte des objectifs stratégiques d'une entreprise ou d'un projet.",
    longDescription:
      "Les KPIs doivent être SMART : Spécifiques, Mesurables, Atteignables, Pertinents, Temporels. KPIs marketing : CAC, LTV, ROAS, taux de conversion. KPIs e-commerce : panier moyen, taux d'abandon, CLV. KPIs produit : DAU/MAU, rétention, NPS. Éviter les vanity metrics (followers, pages vues) qui ne reflètent pas l'impact business. Un dashboard avec 5-7 KPIs clés suffit généralement.",
    category: "analytics",
    relatedTerms: ["analytics", "roi", "conversion", "dashboard"],
    relatedServices: ["/services/ads-management"],
  },
  {
    slug: "ltv",
    term: "LTV (Lifetime Value / Valeur Vie Client)",
    definition:
      "Revenu total moyen généré par un client sur toute la durée de sa relation avec l'entreprise.",
    longDescription:
      "Formule simple : LTV = Panier moyen × Fréquence d'achat × Durée de relation. Permet de déterminer le CPA acceptable : si LTV = 500€ et marge = 50%, CPA max = 250€. Augmenter la LTV : upsell/cross-sell, programmes de fidélité, amélioration de l'expérience client. Ratio LTV/CAC sain : > 3x. Les entreprises SaaS visent un ratio de 5x minimum.",
    category: "analytics",
    relatedTerms: ["cpa", "cac", "retention", "fidélisation"],
    relatedServices: ["/services/ads-management", "/services/email-marketing"],
  },

  // ═══════════════════════════════════════════════════════════════
  // INFRASTRUCTURE & DEVOPS
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "vercel",
    term: "Vercel",
    definition:
      "Plateforme de déploiement cloud optimisée pour les frameworks frontend, créée par l'équipe de Next.js.",
    longDescription:
      "Vercel offre un déploiement instantané avec préviews automatiques pour chaque pull request. CDN mondial (Edge Network) avec latence < 50ms partout. Intégration native Next.js avec optimisations automatiques. Plan gratuit généreux (100GB bandwidth). Plans Pro à partir de 20$/mois. Fonctionnalités avancées : Analytics, Speed Insights, Edge Functions, A/B testing. Alternative à Netlify avec de meilleures performances Next.js.",
    category: "infrastructure",
    relatedTerms: ["next-js", "cdn", "deployment", "edge"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "cdn",
    term: "CDN (Content Delivery Network)",
    definition:
      "Réseau de serveurs distribués géographiquement pour servir le contenu au plus près des utilisateurs et réduire la latence.",
    longDescription:
      "Un CDN réduit le temps de chargement de 50-70% pour les utilisateurs éloignés du serveur d'origine. Fonctionnalités : cache statique (images, JS, CSS), protection DDoS, compression automatique, SSL. Fournisseurs populaires : Cloudflare (freemium), Vercel Edge, AWS CloudFront, Fastly. Vercel et Netlify incluent un CDN dans leurs offres. Essentiel pour les Core Web Vitals et l'expérience utilisateur globale.",
    category: "infrastructure",
    relatedTerms: ["vercel", "performance-web", "cache", "edge"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "ci-cd",
    term: "CI/CD (Intégration et Déploiement Continus)",
    definition:
      "Pratiques DevOps automatisant les tests, la construction et le déploiement du code à chaque modification.",
    longDescription:
      "CI (Continuous Integration) : tests automatiques à chaque commit, détection rapide des bugs. CD (Continuous Deployment) : déploiement automatique en production après validation. Outils : GitHub Actions (gratuit), GitLab CI, CircleCI, Jenkins. Réduit le time-to-market de 50%, les bugs en production de 80%. Vercel et Netlify offrent du CI/CD intégré pour les projets frontend.",
    category: "infrastructure",
    relatedTerms: ["git", "devops", "deployment", "testing"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "git",
    term: "Git",
    definition:
      "Système de contrôle de version distribué permettant de suivre les modifications du code et de collaborer en équipe.",
    longDescription:
      "Git est le standard de l'industrie pour la gestion de code source (95%+ des projets). Concepts clés : commit, branch, merge, pull request. Plateformes d'hébergement : GitHub (le plus populaire), GitLab, Bitbucket. Workflow recommandé : Git Flow ou GitHub Flow. Les pull requests permettent la revue de code et maintiennent la qualité. Intégration avec CI/CD pour des déploiements automatisés.",
    category: "infrastructure",
    relatedTerms: ["github", "ci-cd", "developpement", "collaboration"],
    relatedServices: ["/services/developpement"],
  },
  {
    slug: "supabase",
    term: "Supabase",
    definition:
      "Alternative open-source à Firebase offrant une base de données PostgreSQL, authentification, stockage et fonctions serverless.",
    longDescription:
      "Supabase combine PostgreSQL (base de données relationnelle) avec des fonctionnalités temps réel et une API auto-générée. Plan gratuit : 500MB database, 1GB storage, 50K MAU auth. Plans payants à partir de 25$/mois. Avantages vs Firebase : SQL standard, pas de vendor lock-in, self-hosting possible. Idéal pour les MVPs et applications avec besoins relationnels complexes.",
    category: "infrastructure",
    relatedTerms: ["postgresql", "firebase", "backend", "baas"],
    relatedServices: ["/services/developpement", "/services/crm-applications-metier"],
  },
]

// Fonctions utilitaires

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms.sort((a, b) => a.term.localeCompare(b.term, "fr"))
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug)
}

export function getGlossaryTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms
    .filter((term) => term.category === category)
    .sort((a, b) => a.term.localeCompare(b.term, "fr"))
}

export function getAllGlossarySlugs(): string[] {
  return glossaryTerms.map((term) => term.slug)
}

export function searchGlossaryTerms(query: string): GlossaryTerm[] {
  const searchQuery = query.toLowerCase()
  return glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchQuery) ||
      term.definition.toLowerCase().includes(searchQuery) ||
      term.relatedTerms.some((t) => t.toLowerCase().includes(searchQuery))
  )
}

export function getRelatedGlossaryTerms(slug: string): GlossaryTerm[] {
  const term = getGlossaryTermBySlug(slug)
  if (!term) return []

  return term.relatedTerms
    .map((relatedSlug) => getGlossaryTermBySlug(relatedSlug))
    .filter((t): t is GlossaryTerm => t !== undefined)
}
