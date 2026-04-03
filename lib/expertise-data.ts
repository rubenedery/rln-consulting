/**
 * Données des expertises technologiques pour les pages /expertise/[tech]
 * Structure optimisée pour le ciblage LLM et les requêtes "développeur [tech] Paris"
 */

export type ExpertiseCategory = "frontend" | "backend" | "fullstack" | "ecommerce" | "ia" | "design"

export interface ExpertiseFAQ {
  question: string
  answer: string
}

export interface ExpertiseProject {
  title: string
  description: string
  caseStudySlug?: string
  metrics?: string
}

export interface Expertise {
  slug: string
  name: string
  title: string // Pour le H1 et meta title
  metaDescription: string
  category: ExpertiseCategory
  icon: string // Nom de l'icône lucide-react
  heroDescription: string // Description courte pour le hero

  // Section Answer-First
  answerFirst: {
    cost: { question: string; answer: string }
    duration: { question: string; answer: string }
    advantages: { question: string; answer: string }
    useCase: { question: string; answer: string }
  }

  // Détails techniques
  description: string // Description longue
  features: string[]
  complementaryStack: string[] // Technologies complémentaires
  useCases: string[]

  // Statistiques citables
  stats: {
    label: string
    value: string
    source?: string
  }[]

  // Projets/réalisations
  projects: ExpertiseProject[]

  // FAQ spécifique
  faqs: ExpertiseFAQ[]

  // Prix indicatifs
  pricing: {
    minPrice: number
    maxPrice: number
    unit: string // "jour", "projet", "heure"
    details?: string
  }

  // Services liés
  relatedServices: string[] // slugs des services

  // Termes glossaire liés
  relatedGlossaryTerms?: string[]
}

export const expertises: Expertise[] = [
  {
    slug: "next-js",
    name: "Next.js",
    title: "Expert Next.js | Développement React SSR Paris",
    metaDescription: "Développeur Next.js expert à Paris. Applications web performantes avec React Server Components, SSR et App Router. Devis gratuit sous 24h.",
    category: "fullstack",
    icon: "Layers",
    heroDescription: "Création d'applications web ultra-performantes avec le framework React de référence. Server Components, SSR, App Router et optimisation SEO native.",

    answerFirst: {
      cost: {
        question: "Combien coûte un développeur Next.js ?",
        answer: "Un développeur Next.js freelance facture entre 400€ et 800€/jour selon l'expérience. Une agence comme RLN Consulting propose des projets Next.js de 3 000€ à 50 000€ selon la complexité. Un site vitrine Next.js démarre à 3 000€, une application web complète à 8 000€."
      },
      duration: {
        question: "Combien de temps pour développer un site Next.js ?",
        answer: "Un site vitrine Next.js se développe en 2-4 semaines. Une application web avec authentification et dashboard nécessite 4-8 semaines. Un projet e-commerce ou SaaS complet demande 8-16 semaines selon les fonctionnalités."
      },
      advantages: {
        question: "Pourquoi choisir Next.js ?",
        answer: "Next.js offre des performances exceptionnelles (score Lighthouse 95+), un SEO natif grâce au SSR, et une DX moderne avec React Server Components. Netflix, TikTok et Notion utilisent Next.js. C'est le framework #1 pour les applications React en production."
      },
      useCase: {
        question: "Quand utiliser Next.js vs autre solution ?",
        answer: "Next.js est idéal pour les sites nécessitant un bon SEO (vitrine, blog, e-commerce), les applications avec contenu dynamique, et les projets nécessitant des performances optimales. Pour un simple landing page, Astro peut suffire. Pour une app très interactive, considérez Remix."
      }
    },

    description: "Next.js est le framework React de référence pour la production, utilisé par plus de 1 million de sites web. Chez RLN Consulting, nous maîtrisons l'App Router, les Server Components, le rendu hybride (SSR/SSG/ISR) et l'optimisation des performances. Nos projets Next.js atteignent systématiquement des scores Lighthouse supérieurs à 95.",

    features: [
      "App Router & Server Components pour des performances optimales",
      "Rendu hybride : SSR, SSG, ISR selon les besoins",
      "Optimisation automatique des images et polices",
      "API Routes intégrées pour les backends légers",
      "Middleware et authentification avancée",
      "Déploiement optimisé sur Vercel ou infrastructure custom"
    ],

    complementaryStack: ["React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"],

    useCases: [
      "Sites vitrines haute performance",
      "Applications SaaS et dashboards",
      "Plateformes e-commerce headless",
      "Blogs et sites de contenu SEO-first",
      "Portails clients et intranets"
    ],

    stats: [
      { label: "Score Lighthouse moyen", value: "95+", source: "Projets RLN Consulting 2026" },
      { label: "Temps de chargement", value: "< 1.5s", source: "Core Web Vitals" },
      { label: "Sites utilisant Next.js", value: "1M+", source: "Vercel 2026" },
      { label: "Croissance framework", value: "+67%", source: "State of JS 2025" }
    ],

    projects: [
      {
        title: "Plateforme SaaS B2B",
        description: "Dashboard analytique avec authentification SSO et temps réel",
        metrics: "+40% de temps de chargement amélioré vs ancienne stack"
      },
      {
        title: "E-commerce headless",
        description: "Boutique 10 000+ produits avec Shopify Storefront API",
        caseStudySlug: "ecommerce-mode",
        metrics: "Score Lighthouse 98, +25% de conversion"
      },
      {
        title: "Site institutionnel multilingue",
        description: "50+ pages avec CMS headless et i18n",
        metrics: "SEO : position #1 sur 15 mots-clés principaux"
      }
    ],

    faqs: [
      {
        question: "Next.js est-il adapté aux petits projets ?",
        answer: "Oui, Next.js s'adapte à tous les projets grâce à son architecture modulaire. Pour un site vitrine simple, le coût supplémentaire est minime par rapport à un HTML statique, mais les bénéfices SEO et performances sont significatifs. La maintenance est également simplifiée."
      },
      {
        question: "Quelle est la différence entre Next.js et React ?",
        answer: "React est une bibliothèque pour construire des interfaces, Next.js est un framework complet incluant routage, SSR, optimisation et déploiement. Next.js utilise React comme base mais ajoute tout l'outillage nécessaire pour la production."
      },
      {
        question: "Next.js est-il bon pour le SEO ?",
        answer: "Excellent. Next.js est l'un des meilleurs choix pour le SEO grâce au Server-Side Rendering natif. Les moteurs de recherche reçoivent du HTML pré-rendu, contrairement aux SPA classiques. Google recommande officiellement les frameworks avec SSR."
      },
      {
        question: "Peut-on migrer un site existant vers Next.js ?",
        answer: "Oui, nous réalisons régulièrement des migrations WordPress vers Next.js, React SPA vers Next.js, et autres frameworks. La migration est progressive et peut se faire page par page grâce aux rewrites. Comptez 2-8 semaines selon la complexité."
      },
      {
        question: "Next.js fonctionne-t-il avec n'importe quel hébergeur ?",
        answer: "Next.js se déploie sur Vercel (optimal), mais aussi sur AWS, Google Cloud, Azure, ou tout serveur Node.js. Les fonctionnalités edge et serverless nécessitent un hébergeur compatible, mais le mode statique fonctionne partout."
      }
    ],

    pricing: {
      minPrice: 3000,
      maxPrice: 50000,
      unit: "projet",
      details: "Site vitrine : 3 000-8 000€ | Application web : 8 000-25 000€ | SaaS complexe : 25 000-50 000€+"
    },

    relatedServices: ["/services/developpement", "/services/ecommerce"],
    relatedGlossaryTerms: ["next-js", "react", "typescript", "ssr", "ssg"]
  },

  {
    slug: "react",
    name: "React",
    title: "Développeur React Expert | Applications Web Paris",
    metaDescription: "Expert React.js à Paris. Développement d'applications web modernes, composants réutilisables et interfaces performantes. 5+ ans d'expérience.",
    category: "frontend",
    icon: "Atom",
    heroDescription: "Développement d'interfaces utilisateur modernes et réactives avec la bibliothèque JavaScript #1. Composants réutilisables, state management et performance.",

    answerFirst: {
      cost: {
        question: "Combien coûte un développeur React ?",
        answer: "Un développeur React junior facture 300-450€/jour, un senior 500-800€/jour. En agence, un projet React démarre à 2 500€ pour une interface simple, 5 000-15 000€ pour une application complète. Les tarifs varient selon la complexité et les intégrations requises."
      },
      duration: {
        question: "Combien de temps pour développer une app React ?",
        answer: "Une interface React simple se développe en 1-2 semaines. Une application avec state management, API et tests nécessite 3-6 semaines. Un projet complexe avec multiple intégrations demande 2-4 mois de développement."
      },
      advantages: {
        question: "Pourquoi choisir React ?",
        answer: "React domine le marché avec 42% de parts (State of JS 2025). Son écosystème est le plus riche : 3M+ packages npm, documentation exhaustive, et communauté massive. Facebook, Airbnb, Netflix l'utilisent. Les développeurs React sont facilement recrutables pour la maintenance."
      },
      useCase: {
        question: "Quand utiliser React vs Vue ou Angular ?",
        answer: "React excelle pour les applications interactives, les SPA complexes et quand la flexibilité est prioritaire. Vue est plus simple pour les petits projets. Angular convient aux grandes entreprises avec équipes structurées. Pour le web moderne, React reste le choix par défaut."
      }
    },

    description: "React est la bibliothèque JavaScript la plus populaire pour construire des interfaces utilisateur. Chez RLN Consulting, nous développons avec React depuis 2019, maîtrisant les hooks, le context API, et les patterns avancés comme les compound components et render props. Notre approche privilégie la réutilisabilité et la maintenabilité.",

    features: [
      "Composants fonctionnels avec Hooks modernes",
      "State management avec Context, Redux ou Zustand",
      "Tests unitaires et d'intégration (Jest, Testing Library)",
      "Optimisation des performances (memo, useMemo, lazy loading)",
      "Intégration API REST et GraphQL",
      "Design systems et bibliothèques de composants"
    ],

    complementaryStack: ["TypeScript", "Next.js", "Tailwind CSS", "Redux", "React Query", "Storybook"],

    useCases: [
      "Single Page Applications (SPA)",
      "Dashboards et interfaces admin",
      "Applications métier complexes",
      "Widgets et composants embarqués",
      "Progressive Web Apps (PWA)"
    ],

    stats: [
      { label: "Part de marché frameworks", value: "42%", source: "State of JS 2025" },
      { label: "Packages npm liés", value: "3M+", source: "npm 2026" },
      { label: "Téléchargements/semaine", value: "20M+", source: "npm stats" },
      { label: "Satisfaction développeurs", value: "84%", source: "Stack Overflow 2025" }
    ],

    projects: [
      {
        title: "Dashboard analytique",
        description: "Interface temps réel avec graphiques et filtres avancés",
        metrics: "60+ composants réutilisables, 95% couverture tests"
      },
      {
        title: "Application CRM",
        description: "Gestion clients avec pipeline de vente et automatisations",
        caseStudySlug: "crm-immobilier",
        metrics: "10 000+ utilisateurs actifs, <100ms temps de réponse UI"
      },
      {
        title: "Configurateur produit",
        description: "Interface 3D interactive pour personnalisation produits",
        metrics: "+35% de conversion, temps configuration -50%"
      }
    ],

    faqs: [
      {
        question: "React est-il toujours pertinent en 2026 ?",
        answer: "Absolument. React reste le framework #1 avec une adoption croissante. Les innovations récentes (Server Components, Concurrent Mode) prouvent que Meta continue d'investir massivement. L'écosystème est mature et stable."
      },
      {
        question: "Faut-il utiliser React ou Next.js ?",
        answer: "Next.js est un framework basé sur React. Pour une application avec SEO ou SSR, Next.js est recommandé. Pour une SPA pure (dashboard, app interne), React avec Vite suffit. Nous conseillons Next.js par défaut pour sa polyvalence."
      },
      {
        question: "Comment gérer le state dans une app React complexe ?",
        answer: "Pour le state local, les hooks useState/useReducer suffisent. Pour le state global, nous recommandons Zustand (léger) ou Redux Toolkit (complexe). React Query gère excellemment le state serveur. Le choix dépend de la complexité."
      },
      {
        question: "React Native utilise-t-il le même code que React web ?",
        answer: "La logique métier et les hooks sont réutilisables à 70-80%. Les composants UI diffèrent car React Native utilise des primitives mobiles. Nous proposons des architectures permettant le partage de code maximal entre web et mobile."
      },
      {
        question: "Quelle est la courbe d'apprentissage de React ?",
        answer: "Un développeur JavaScript peut être productif en React en 2-4 semaines. La maîtrise avancée (patterns, optimisation, tests) demande 6-12 mois. C'est plus accessible qu'Angular mais demande une bonne compréhension de JavaScript moderne."
      }
    ],

    pricing: {
      minPrice: 2500,
      maxPrice: 40000,
      unit: "projet",
      details: "Interface simple : 2 500-5 000€ | Application complète : 5 000-15 000€ | Projet enterprise : 15 000-40 000€+"
    },

    relatedServices: ["/services/developpement", "/services/applications-mobiles"],
    relatedGlossaryTerms: ["react", "javascript", "typescript", "spa", "hooks"]
  },

  {
    slug: "typescript",
    name: "TypeScript",
    title: "Expert TypeScript | Code Robuste & Maintenable",
    metaDescription: "Développeur TypeScript expert à Paris. Code typé, robuste et maintenable. Migration JavaScript vers TypeScript. Devis gratuit.",
    category: "fullstack",
    icon: "FileCode",
    heroDescription: "Développement avec typage statique pour un code plus fiable, maintenable et autodocumenté. Réduction des bugs de 40% en production.",

    answerFirst: {
      cost: {
        question: "Le TypeScript coûte-t-il plus cher que JavaScript ?",
        answer: "Le développement TypeScript ajoute environ 10-15% au temps initial, soit un surcoût de 500-2 000€ sur un projet moyen. Mais le ROI est positif : -40% de bugs en production, maintenance facilitée, et onboarding développeurs accéléré. Sur 2 ans, vous économisez généralement 20-30% en maintenance."
      },
      duration: {
        question: "Combien de temps pour migrer vers TypeScript ?",
        answer: "Une migration JavaScript vers TypeScript prend 1-4 semaines selon la taille du projet. Nous recommandons une approche progressive : activation du mode strict, migration fichier par fichier. Un projet de 50 fichiers se migre en 2 semaines environ."
      },
      advantages: {
        question: "Pourquoi utiliser TypeScript ?",
        answer: "TypeScript détecte 40% des bugs avant l'exécution (étude Airbnb). L'autocomplétion IDE accélère le développement de 20%. Le code devient autodocumenté. 78% des projets JavaScript majeurs utilisent maintenant TypeScript. C'est le standard de l'industrie."
      },
      useCase: {
        question: "Quand TypeScript est-il indispensable ?",
        answer: "TypeScript est crucial pour : projets > 5 000 lignes, équipes > 2 développeurs, APIs complexes, applications critiques. Pour un script simple ou prototype rapide, JavaScript suffit. Pour tout projet professionnel destiné à durer, TypeScript est recommandé."
      }
    },

    description: "TypeScript ajoute le typage statique à JavaScript, permettant de détecter les erreurs à la compilation plutôt qu'en production. Chez RLN Consulting, nous utilisons TypeScript sur 100% de nos projets depuis 2021. Notre expertise couvre les types avancés, les génériques, et les patterns de typage stricts.",

    features: [
      "Configuration TypeScript stricte pour qualité maximale",
      "Types avancés : génériques, unions, intersections",
      "Typage d'APIs avec génération automatique (OpenAPI)",
      "Migration progressive JavaScript vers TypeScript",
      "Intégration avec React, Node.js, Prisma",
      "ESLint et Prettier configurés pour TypeScript"
    ],

    complementaryStack: ["React", "Next.js", "Node.js", "Prisma", "Zod", "tRPC"],

    useCases: [
      "Applications d'entreprise critiques",
      "APIs et backends Node.js",
      "Bibliothèques et packages npm",
      "Projets avec équipes multiples",
      "Applications nécessitant haute fiabilité"
    ],

    stats: [
      { label: "Réduction bugs production", value: "-40%", source: "Étude Airbnb 2024" },
      { label: "Adoption projets majeurs", value: "78%", source: "State of JS 2025" },
      { label: "Gain productivité IDE", value: "+20%", source: "Microsoft Research" },
      { label: "Satisfaction développeurs", value: "93%", source: "Stack Overflow 2025" }
    ],

    projects: [
      {
        title: "API REST enterprise",
        description: "Backend Node.js avec validation end-to-end et documentation auto-générée",
        metrics: "0 bugs de typage en 18 mois de production"
      },
      {
        title: "Migration legacy codebase",
        description: "Migration 80 000 lignes JavaScript vers TypeScript strict",
        metrics: "-60% de tickets bugs, onboarding dev divisé par 2"
      },
      {
        title: "Bibliothèque de composants",
        description: "Design system typé avec props validation et Storybook",
        metrics: "50+ composants, 100% couverture types"
      }
    ],

    faqs: [
      {
        question: "TypeScript ralentit-il le développement ?",
        answer: "Initialement, il ajoute ~15% de temps pour le typage. Mais l'autocomplétion, la détection d'erreurs et la refactorisation sécurisée compensent largement. Sur un projet de 6 mois+, TypeScript accélère le développement global."
      },
      {
        question: "Peut-on utiliser TypeScript avec n'importe quelle lib ?",
        answer: "Oui, 95%+ des bibliothèques npm ont des types (inclus ou via @types/*). Les rares libs non typées peuvent être utilisées avec des déclarations de types personnalisées. L'écosystème TypeScript est très mature."
      },
      {
        question: "TypeScript est-il difficile à apprendre ?",
        answer: "Un développeur JavaScript peut commencer en 1 semaine avec les bases. La maîtrise des types avancés (génériques, utility types) demande 2-3 mois. Nous recommandons d'apprendre progressivement en activant le mode strict petit à petit."
      },
      {
        question: "Faut-il typer tout le code ?",
        answer: "Nous recommandons le mode strict avec 'noImplicitAny'. Les types explicites sont requis pour les interfaces publiques (APIs, props, exports). Le code interne peut utiliser l'inférence de types. L'objectif est 100% de couverture de types."
      },
      {
        question: "Comment convaincre mon équipe d'adopter TypeScript ?",
        answer: "Commencez par un nouveau module ou une migration progressive (rename .js → .ts). Montrez les bénéfices concrets : bugs évités, refactorisation simplifiée. Les développeurs sont généralement convaincus après 2-4 semaines d'utilisation."
      }
    ],

    pricing: {
      minPrice: 2000,
      maxPrice: 35000,
      unit: "projet",
      details: "Nouveau projet TypeScript : coût standard | Migration JS → TS : +10-20% sur le projet initial"
    },

    relatedServices: ["/services/developpement", "/services/crm-applications-metier"],
    relatedGlossaryTerms: ["typescript", "javascript", "typage-statique"]
  },

  {
    slug: "shopify",
    name: "Shopify",
    title: "Expert Shopify | Création Boutiques E-commerce",
    metaDescription: "Expert Shopify certifié à Paris. Création boutiques en ligne, thèmes sur-mesure, apps et intégrations. Plus de 50 boutiques lancées.",
    category: "ecommerce",
    icon: "ShoppingCart",
    heroDescription: "Création de boutiques e-commerce performantes avec la plateforme #1 mondiale. Thèmes personnalisés, apps, et optimisation conversion.",

    answerFirst: {
      cost: {
        question: "Combien coûte un site Shopify ?",
        answer: "Un site Shopify avec thème premium personnalisé coûte 2 000-5 000€. Un développement sur-mesure avec thème custom démarre à 5 000€ et peut atteindre 20 000€+ pour des fonctionnalités avancées. L'abonnement Shopify Basic est à 36€/mois, Plus à partir de 2 000€/mois."
      },
      duration: {
        question: "Combien de temps pour créer une boutique Shopify ?",
        answer: "Une boutique Shopify avec thème personnalisé se lance en 2-4 semaines. Un développement sur-mesure nécessite 4-8 semaines. L'import de catalogue produits (500+ références) ajoute 1-2 semaines selon la complexité des données."
      },
      advantages: {
        question: "Pourquoi choisir Shopify ?",
        answer: "Shopify propulse 4.5 millions de boutiques et traite $500 milliards de ventes annuelles. Avantages : hébergement inclus, sécurité PCI-DSS, 8000+ apps, support 24/7. Shopify convertit 15% mieux que la moyenne e-commerce. Idéal pour lancer rapidement et scaler."
      },
      useCase: {
        question: "Shopify vs WooCommerce vs PrestaShop ?",
        answer: "Shopify excelle pour sa simplicité et scalabilité (jusqu'à millions d'€ de CA). WooCommerce convient si vous avez un site WordPress existant. PrestaShop offre plus de contrôle mais demande plus de maintenance. Pour le e-commerce pur, Shopify est notre recommandation #1."
      }
    },

    description: "Shopify est la plateforme e-commerce leader mondial, parfaite pour les marques souhaitant vendre en ligne sans complexité technique. Chez RLN Consulting, nous créons des boutiques Shopify performantes : thèmes sur-mesure en Liquid, apps privées, intégrations ERP/CRM, et optimisation conversion. Plus de 50 boutiques lancées depuis 2020.",

    features: [
      "Thèmes personnalisés en Liquid (Shopify 2.0)",
      "Applications privées sur-mesure (Node.js, Remix)",
      "Intégrations ERP, CRM, logistique (API REST/GraphQL)",
      "Optimisation SEO et vitesse (Core Web Vitals)",
      "Configuration multi-marchés et multi-devises",
      "Checkout personnalisé (Shopify Plus)"
    ],

    complementaryStack: ["Liquid", "JavaScript", "Node.js", "Remix", "GraphQL", "Hydrogen"],

    useCases: [
      "Boutiques de mode et lifestyle",
      "Marques D2C (Direct to Consumer)",
      "Commerce B2B avec catalogue wholesale",
      "Dropshipping et marketplaces",
      "Points de vente omnicanal (POS)"
    ],

    stats: [
      { label: "Boutiques Shopify actives", value: "4.5M", source: "Shopify 2026" },
      { label: "Volume de ventes annuel", value: "$500B+", source: "Shopify 2025" },
      { label: "Amélioration conversion moyenne", value: "+15%", source: "Étude Shopify vs moyenne" },
      { label: "Apps disponibles", value: "8 000+", source: "Shopify App Store" }
    ],

    projects: [
      {
        title: "Boutique mode premium",
        description: "Thème sur-mesure avec lookbook interactif et guide des tailles",
        caseStudySlug: "ecommerce-mode",
        metrics: "+120% CA en 12 mois, conversion 3.8%"
      },
      {
        title: "E-commerce alimentaire",
        description: "Boutique avec abonnements, livraison fraîche et zones de livraison",
        metrics: "2 000+ abonnés actifs, panier moyen +45%"
      },
      {
        title: "Marketplace multi-vendeurs",
        description: "Plateforme avec 50+ vendeurs et commission automatique",
        metrics: "15 000 commandes/mois, 98% satisfaction vendeurs"
      }
    ],

    faqs: [
      {
        question: "Shopify prend-il une commission sur les ventes ?",
        answer: "Shopify prélève 0.5% à 2% par transaction selon le plan (Basic 2%, Plus 0.25%), sauf si vous utilisez Shopify Payments (0%). L'abonnement mensuel va de 36€ (Basic) à 2 000€+ (Plus). Pour les gros volumes, Shopify Plus est rentable."
      },
      {
        question: "Peut-on personnaliser entièrement Shopify ?",
        answer: "Oui, avec Shopify 2.0 et Liquid, la personnalisation est quasi illimitée. Le checkout est personnalisable sur Shopify Plus uniquement. Pour des besoins très spécifiques, nous développons des apps privées. 95% des demandes sont réalisables."
      },
      {
        question: "Shopify est-il adapté au B2B ?",
        answer: "Oui, Shopify B2B (inclus dans Plus) offre : prix personnalisés par client, commandes en gros, conditions de paiement, et portail wholesale. Pour le B2B simple, les apps Wholesale conviennent sur les plans inférieurs."
      },
      {
        question: "Comment migrer vers Shopify depuis une autre plateforme ?",
        answer: "Nous réalisons des migrations complètes : produits, clients, commandes historiques, SEO (redirections 301). Depuis WooCommerce ou PrestaShop, comptez 1-3 semaines. L'import automatisé préserve votre SEO et historique."
      },
      {
        question: "Shopify gère-t-il le multi-langue et multi-devise ?",
        answer: "Oui, Shopify Markets permet de vendre dans 50+ pays avec devises locales et traductions. Le plan Basic inclut 2 marchés, Plus illimité. Les taxes et douanes sont gérées automatiquement selon les destinations."
      }
    ],

    pricing: {
      minPrice: 2000,
      maxPrice: 25000,
      unit: "projet",
      details: "Thème personnalisé : 2 000-5 000€ | Développement sur-mesure : 5 000-15 000€ | Shopify Plus : 15 000-25 000€+"
    },

    relatedServices: ["/services/ecommerce", "/services/developpement"],
    relatedGlossaryTerms: ["shopify", "ecommerce", "liquid", "headless-commerce"]
  },

  {
    slug: "node-js",
    name: "Node.js",
    title: "Développeur Node.js | API & Backend Paris",
    metaDescription: "Expert Node.js à Paris. Développement d'APIs REST et GraphQL, microservices et backends performants. Architecture scalable.",
    category: "backend",
    icon: "Server",
    heroDescription: "Création d'APIs et backends performants avec le runtime JavaScript #1. Microservices, temps réel et scalabilité horizontale.",

    answerFirst: {
      cost: {
        question: "Combien coûte un développeur Node.js ?",
        answer: "Un développeur Node.js facture 400-700€/jour en freelance. En agence, un projet API Node.js démarre à 3 000€ pour une API simple, 8 000-20 000€ pour un backend complet avec authentification, bases de données et intégrations tierces."
      },
      duration: {
        question: "Combien de temps pour développer une API Node.js ?",
        answer: "Une API REST basique (CRUD) se développe en 1-2 semaines. Un backend complet avec auth, rôles, et intégrations nécessite 4-8 semaines. Un système de microservices demande 2-4 mois selon le nombre de services."
      },
      advantages: {
        question: "Pourquoi choisir Node.js pour le backend ?",
        answer: "Node.js excelle pour les I/O intensives (APIs, temps réel). Netflix a réduit son temps de démarrage de 70% en migrant vers Node.js. PayPal a doublé ses requêtes/seconde. L'écosystème npm est le plus riche (2M+ packages). Le JavaScript full-stack simplifie les équipes."
      },
      useCase: {
        question: "Node.js vs Python vs Go pour le backend ?",
        answer: "Node.js est idéal pour les APIs, temps réel (WebSocket), et quand l'équipe front est en JavaScript. Python excelle pour l'IA/ML et data science. Go pour les performances extrêmes et systèmes distribués. Pour 80% des projets web, Node.js est le meilleur choix."
      }
    },

    description: "Node.js permet d'exécuter JavaScript côté serveur, unifiant le langage entre frontend et backend. Chez RLN Consulting, nous développons des APIs REST et GraphQL performantes, des systèmes temps réel avec WebSocket, et des architectures microservices. Notre stack Node.js inclut Express, Fastify, NestJS et tRPC.",

    features: [
      "APIs REST et GraphQL avec documentation OpenAPI",
      "Temps réel : WebSocket, Server-Sent Events",
      "Architecture microservices et event-driven",
      "Authentification JWT, OAuth, SSO",
      "Intégration bases de données (PostgreSQL, MongoDB, Redis)",
      "Containerisation Docker et orchestration Kubernetes"
    ],

    complementaryStack: ["Express", "Fastify", "NestJS", "PostgreSQL", "Redis", "Docker"],

    useCases: [
      "APIs REST pour applications web/mobile",
      "Backends temps réel (chat, notifications)",
      "Microservices et architectures distribuées",
      "BFF (Backend for Frontend)",
      "Serverless functions (AWS Lambda, Vercel)"
    ],

    stats: [
      { label: "Packages npm disponibles", value: "2M+", source: "npm 2026" },
      { label: "Utilisé par Fortune 500", value: "85%", source: "Node.js Foundation" },
      { label: "Réduction temps démarrage (Netflix)", value: "-70%", source: "Netflix Tech Blog" },
      { label: "Amélioration throughput (PayPal)", value: "+100%", source: "PayPal Engineering" }
    ],

    projects: [
      {
        title: "API plateforme SaaS",
        description: "Backend multi-tenant avec rate limiting et webhooks",
        metrics: "50 000+ requêtes/minute, 99.9% uptime"
      },
      {
        title: "Système de notifications",
        description: "Service temps réel avec WebSocket et push notifications",
        metrics: "1M+ notifications/jour, latence <50ms"
      },
      {
        title: "API gateway microservices",
        description: "Orchestration de 12 microservices avec GraphQL Federation",
        metrics: "Temps réponse moyen 45ms, scalabilité x10"
      }
    ],

    faqs: [
      {
        question: "Node.js est-il adapté aux applications CPU-intensive ?",
        answer: "Node.js est optimisé pour les I/O (réseau, fichiers), pas pour le calcul intensif. Pour des tâches CPU-lourdes, nous utilisons des workers threads ou déportons vers des services spécialisés (Python pour ML). Pour 95% des backends web, Node.js est parfait."
      },
      {
        question: "Express ou NestJS : lequel choisir ?",
        answer: "Express est minimaliste et flexible, idéal pour les petites APIs. NestJS apporte structure et patterns (DI, modules) pour les projets complexes. Pour les équipes Angular ou les gros projets, NestJS. Pour la rapidité et la simplicité, Express ou Fastify."
      },
      {
        question: "Comment sécuriser une API Node.js ?",
        answer: "Nous appliquons : validation des entrées (Zod/Joi), authentification JWT, rate limiting, CORS configuré, headers de sécurité (Helmet), et audit des dépendances (npm audit). Les données sensibles sont chiffrées et les logs anonymisés."
      },
      {
        question: "Node.js peut-il gérer beaucoup de trafic ?",
        answer: "Oui, avec clustering (PM2) et load balancing, Node.js scale horizontalement. LinkedIn gère 2 millions de connexions simultanées. La clé est l'architecture stateless et le caching (Redis). Nous concevons des APIs supportant 100K+ requêtes/minute."
      },
      {
        question: "Faut-il utiliser TypeScript avec Node.js ?",
        answer: "Absolument recommandé. TypeScript apporte sécurité de types, meilleure maintenabilité et autocomplétion. Tous nos projets Node.js utilisent TypeScript avec mode strict. Le surcoût initial est compensé par la réduction des bugs et la documentation auto-générée."
      }
    ],

    pricing: {
      minPrice: 3000,
      maxPrice: 30000,
      unit: "projet",
      details: "API simple : 3 000-6 000€ | Backend complet : 8 000-20 000€ | Architecture microservices : 20 000-30 000€+"
    },

    relatedServices: ["/services/developpement", "/services/crm-applications-metier"],
    relatedGlossaryTerms: ["node-js", "api", "rest", "graphql", "backend"]
  },

  {
    slug: "tailwind",
    name: "Tailwind CSS",
    title: "Expert Tailwind CSS | Design System Moderne",
    metaDescription: "Expert Tailwind CSS à Paris. Intégration rapide, design systems et UI modernes. Développement 2x plus rapide avec utility-first CSS.",
    category: "design",
    icon: "Palette",
    heroDescription: "Intégration UI rapide et maintenable avec le framework CSS utility-first #1. Design systems, responsive et dark mode natifs.",

    answerFirst: {
      cost: {
        question: "Tailwind CSS coûte-t-il plus cher ?",
        answer: "Non, Tailwind accélère le développement de 30-50%. L'intégration UI qui prenait 3 jours en CSS classique se fait en 1-2 jours avec Tailwind. Le surcoût initial (apprentissage) est compensé dès le premier projet. Tailwind est gratuit et open-source."
      },
      duration: {
        question: "Combien de temps pour intégrer un design avec Tailwind ?",
        answer: "Une landing page s'intègre en 1-2 jours contre 3-5 jours en CSS classique. Un design system complet (50+ composants) se crée en 2-3 semaines. Le gain de temps vient de l'absence de naming CSS et de la réutilisation des utilitaires."
      },
      advantages: {
        question: "Pourquoi utiliser Tailwind CSS ?",
        answer: "Tailwind réduit le temps d'intégration de 40% (étude Vercel). Le CSS final est optimisé (purge automatique) : fichiers 10x plus légers. Pas de conflits CSS. Le responsive et dark mode sont natifs. 30% des nouveaux projets React utilisent Tailwind."
      },
      useCase: {
        question: "Tailwind vs Bootstrap vs CSS Modules ?",
        answer: "Tailwind offre une flexibilité totale avec une DX moderne. Bootstrap est plus rapide pour des prototypes standards mais moins personnalisable. CSS Modules évitent les conflits mais n'accélèrent pas le développement. Pour du sur-mesure performant, Tailwind est optimal."
      }
    },

    description: "Tailwind CSS est un framework utility-first qui révolutionne l'intégration UI. Plutôt que d'écrire du CSS custom, on compose des classes utilitaires directement dans le HTML. Chez RLN Consulting, nous utilisons Tailwind sur 90% de nos projets depuis 2022, avec des configurations custom, plugins, et design systems réutilisables.",

    features: [
      "Configuration custom avec design tokens",
      "Composants réutilisables (headless UI, shadcn/ui)",
      "Responsive design mobile-first natif",
      "Dark mode avec toggle automatique",
      "Animations et transitions fluides",
      "Purge automatique du CSS inutilisé"
    ],

    complementaryStack: ["React", "Next.js", "shadcn/ui", "Framer Motion", "Headless UI", "Radix"],

    useCases: [
      "Design systems d'entreprise",
      "Applications web modernes",
      "Sites marketing et landing pages",
      "Dashboards et interfaces admin",
      "Composants UI réutilisables"
    ],

    stats: [
      { label: "Réduction temps intégration", value: "-40%", source: "Vercel Survey 2025" },
      { label: "Adoption nouveaux projets React", value: "30%", source: "State of CSS 2025" },
      { label: "Taille CSS finale (purgée)", value: "<10KB", source: "Tailwind benchmarks" },
      { label: "Satisfaction développeurs", value: "92%", source: "State of CSS 2025" }
    ],

    projects: [
      {
        title: "Design system SaaS",
        description: "100+ composants avec variantes, tokens et documentation Storybook",
        metrics: "Temps dev UI -60%, consistance design 100%"
      },
      {
        title: "Site marketing Next.js",
        description: "Landing pages avec animations et responsive parfait",
        metrics: "CSS final 8KB, PageSpeed 100/100"
      },
      {
        title: "Dashboard analytique",
        description: "Interface complexe avec graphiques et tables de données",
        metrics: "50+ écrans intégrés en 4 semaines"
      }
    ],

    faqs: [
      {
        question: "Le HTML devient-il illisible avec toutes ces classes ?",
        answer: "Avec des composants React ou Vue, les classes sont encapsulées et le code reste propre. Les outils comme Prettier et l'extension VS Code formatent automatiquement. Après 2-3 jours d'adaptation, la lisibilité est meilleure qu'avec du CSS externe."
      },
      {
        question: "Comment maintenir la cohérence sans CSS global ?",
        answer: "Tailwind encourage la création de composants réutilisables. Un bouton est défini une fois avec ses classes, puis réutilisé partout. Avec @apply dans CSS modules, on peut aussi extraire des styles communs. La cohérence est meilleure qu'avec du CSS classique."
      },
      {
        question: "Tailwind est-il adapté aux grands projets ?",
        answer: "Oui, des entreprises comme GitHub, Netflix et Shopify l'utilisent. La configuration custom et le design tokens permettent de maintenir la cohérence. Le purge automatique garde le CSS léger quelle que soit la taille du projet."
      },
      {
        question: "Peut-on utiliser Tailwind avec des composants tiers ?",
        answer: "Oui, Tailwind fonctionne avec n'importe quelle bibliothèque. Pour les composants headless (Radix, Headless UI), c'est idéal. Pour les bibliothèques stylées (MUI, Chakra), c'est possible mais moins pertinent. shadcn/ui combine le meilleur des deux mondes."
      },
      {
        question: "Tailwind génère-t-il du CSS en trop ?",
        answer: "Non, le build production purge automatiquement les classes inutilisées. Un projet typique génère 5-15KB de CSS final (gzippé). C'est souvent 10x moins qu'un framework comme Bootstrap ou un CSS custom mal optimisé."
      }
    ],

    pricing: {
      minPrice: 1500,
      maxPrice: 15000,
      unit: "projet",
      details: "Intégration landing : 1 500-3 000€ | Application complète : 5 000-12 000€ | Design system : 10 000-15 000€"
    },

    relatedServices: ["/services/developpement", "/services/design-ux-ui"],
    relatedGlossaryTerms: ["tailwind-css", "css", "design-system", "responsive"]
  },

  {
    slug: "postgresql",
    name: "PostgreSQL",
    title: "Expert PostgreSQL | Bases de Données",
    metaDescription: "Expert PostgreSQL à Paris. Conception de bases de données, optimisation requêtes et architecture scalable. Performance et fiabilité.",
    category: "backend",
    icon: "Database",
    heroDescription: "Conception et optimisation de bases de données relationnelles avec le SGBD open-source #1. Performance, fiabilité et scalabilité.",

    answerFirst: {
      cost: {
        question: "Combien coûte l'expertise PostgreSQL ?",
        answer: "La conception d'un schéma de base de données coûte 1 000-5 000€ selon la complexité. L'optimisation de performances (audit + implémentation) : 2 000-8 000€. La maintenance mensuelle : 500-2 000€/mois. PostgreSQL lui-même est gratuit et open-source."
      },
      duration: {
        question: "Combien de temps pour concevoir une base PostgreSQL ?",
        answer: "Un schéma simple (10-20 tables) se conçoit en 1-2 semaines. Une base complexe avec modélisation avancée nécessite 3-6 semaines. La migration depuis une autre base (MySQL, MongoDB) prend 2-4 semaines selon le volume de données."
      },
      advantages: {
        question: "Pourquoi choisir PostgreSQL ?",
        answer: "PostgreSQL est le SGBD #1 pour 2024-2026 (DB-Engines). Il offre : ACID compliance, types JSON natifs, full-text search, et extensions puissantes (PostGIS, pgvector). Instagram, Spotify et Discord l'utilisent. Performance équivalente ou supérieure à Oracle, mais gratuit."
      },
      useCase: {
        question: "PostgreSQL vs MySQL vs MongoDB ?",
        answer: "PostgreSQL excelle pour les données relationnelles complexes et le JSON hybride. MySQL est plus simple mais moins riche en fonctionnalités. MongoDB pour le NoSQL pur et les données non structurées. Pour 80% des projets, PostgreSQL est le meilleur choix polyvalent."
      }
    },

    description: "PostgreSQL est le système de gestion de bases de données relationnelles open-source le plus avancé. Chez RLN Consulting, nous concevons des schémas optimisés, écrivons des requêtes performantes, et configurons des architectures haute disponibilité. Notre expertise couvre les indexes, partitioning, réplication et extensions.",

    features: [
      "Conception de schémas normalisés et performants",
      "Optimisation de requêtes complexes (EXPLAIN ANALYZE)",
      "Index avancés : GIN, GiST, BRIN, partial indexes",
      "JSON/JSONB pour données semi-structurées",
      "Réplication et haute disponibilité",
      "Intégration ORM (Prisma, Drizzle, TypeORM)"
    ],

    complementaryStack: ["Prisma", "Node.js", "Redis", "pgAdmin", "Supabase", "Neon"],

    useCases: [
      "Applications SaaS multi-tenant",
      "Systèmes transactionnels (finance, e-commerce)",
      "Analytique et reporting",
      "Données géospatiales (PostGIS)",
      "Recherche full-text et vectorielle (pgvector)"
    ],

    stats: [
      { label: "Classement DB-Engines", value: "#1 2025", source: "DB-Engines Ranking" },
      { label: "Utilisé par Fortune 500", value: "75%", source: "EnterpriseDB Survey" },
      { label: "Transactions/seconde", value: "100K+", source: "PostgreSQL benchmarks" },
      { label: "Croissance adoption", value: "+28%", source: "Stack Overflow 2025" }
    ],

    projects: [
      {
        title: "Base e-commerce 10M+ produits",
        description: "Schéma optimisé avec partitioning et indexes composites",
        metrics: "Temps requête moyen <50ms, uptime 99.99%"
      },
      {
        title: "Système analytique temps réel",
        description: "Agrégations sur 1B+ lignes avec materialized views",
        metrics: "Rapports générés en <3s vs 2min avant"
      },
      {
        title: "Application géospatiale",
        description: "PostGIS pour recherche de points d'intérêt",
        metrics: "Requêtes géo <20ms sur 5M+ points"
      }
    ],

    faqs: [
      {
        question: "PostgreSQL est-il adapté aux petits projets ?",
        answer: "Oui, PostgreSQL est léger et facile à configurer. Pour les petits projets, des services managés comme Supabase ou Neon offrent un démarrage gratuit. La complexité n'est nécessaire que quand le projet grandit. Commencez simple, scalez ensuite."
      },
      {
        question: "Comment optimiser les performances PostgreSQL ?",
        answer: "Les gains principaux viennent des indexes appropriés (pas trop, pas trop peu), de la configuration mémoire (shared_buffers, work_mem), et des requêtes bien écrites. EXPLAIN ANALYZE révèle les bottlenecks. Souvent, 2-3 optimisations donnent 80% des gains."
      },
      {
        question: "PostgreSQL peut-il remplacer MongoDB ?",
        answer: "Pour beaucoup de cas, oui. Le type JSONB offre des performances comparables au NoSQL avec la fiabilité ACID en plus. Pour des données vraiment non structurées ou du scaling horizontal massif, MongoDB peut rester pertinent. Analysons votre cas d'usage."
      },
      {
        question: "Comment sécuriser PostgreSQL ?",
        answer: "Nous appliquons : SSL obligatoire, authentification forte (SCRAM-SHA-256), Row Level Security pour le multi-tenant, audit logs, et backups chiffrés. Les accès sont limités par rôles avec principe du moindre privilège. Conformité RGPD assurée."
      },
      {
        question: "Quel hébergement pour PostgreSQL ?",
        answer: "Pour les startups : Supabase (gratuit au départ), Neon (serverless), ou Railway. Pour la production : AWS RDS, Google Cloud SQL, ou Azure Database. Pour le contrôle total : serveur dédié avec réplication. Le choix dépend du budget et des exigences."
      }
    ],

    pricing: {
      minPrice: 1000,
      maxPrice: 15000,
      unit: "projet",
      details: "Conception schéma : 1 000-5 000€ | Optimisation : 2 000-8 000€ | Migration : 3 000-10 000€"
    },

    relatedServices: ["/services/developpement", "/services/crm-applications-metier"],
    relatedGlossaryTerms: ["postgresql", "sql", "base-de-donnees", "orm"]
  },

  {
    slug: "ia-generative",
    name: "IA Générative",
    title: "Expert IA Générative | GPT-4 & Claude",
    metaDescription: "Expert intégration IA générative à Paris. Chatbots, automatisation et solutions GPT-4/Claude sur-mesure pour entreprises. ROI garanti.",
    category: "ia",
    icon: "Brain",
    heroDescription: "Intégration d'IA générative dans vos processus métier. Chatbots intelligents, automatisation et solutions sur-mesure avec GPT-4, Claude et modèles open-source.",

    answerFirst: {
      cost: {
        question: "Combien coûte l'intégration d'IA générative ?",
        answer: "Un chatbot IA basique coûte 3 000-8 000€. Une solution d'automatisation avec RAG (Retrieval Augmented Generation) : 8 000-25 000€. Un projet IA sur-mesure complexe : 25 000-50 000€+. L'utilisation des APIs (OpenAI, Anthropic) ajoute 50-500€/mois selon le volume."
      },
      duration: {
        question: "Combien de temps pour intégrer l'IA générative ?",
        answer: "Un chatbot simple se déploie en 2-4 semaines. Un système RAG avec base de connaissances personnalisée : 4-8 semaines. Un assistant IA complexe avec intégrations multiples : 2-4 mois. Le MVP est généralement livré en 3 semaines."
      },
      advantages: {
        question: "Quel ROI attendre de l'IA générative ?",
        answer: "Un chatbot IA réduit les coûts support de 40-60% en automatisant les questions fréquentes. L'automatisation de tâches répétitives économise 10-20h/semaine par employé. ROI typique : 300-500% sur 12 mois. 72% des entreprises prévoient d'investir dans l'IA en 2026."
      },
      useCase: {
        question: "GPT-4 vs Claude vs modèles open-source ?",
        answer: "GPT-4 excelle pour la créativité et les tâches générales. Claude (Anthropic) pour l'analyse de documents longs et le raisonnement. Llama/Mistral pour l'auto-hébergement et la confidentialité. Nous recommandons souvent un mix selon les use cases."
      }
    },

    description: "L'IA générative transforme les entreprises en automatisant les tâches cognitives. Chez RLN Consulting, nous intégrons GPT-4, Claude et des modèles open-source dans vos processus : chatbots, génération de contenu, analyse de documents, et automatisations intelligentes. Notre approche privilégie le ROI concret et la confidentialité des données.",

    features: [
      "Chatbots intelligents avec base de connaissances (RAG)",
      "Automatisation de tâches avec AI agents",
      "Analyse et extraction de documents (PDF, emails)",
      "Génération de contenu sur-mesure",
      "Intégration APIs (OpenAI, Anthropic, HuggingFace)",
      "Solutions on-premise pour données sensibles"
    ],

    complementaryStack: ["LangChain", "OpenAI API", "Claude API", "Pinecone", "ChromaDB", "Ollama"],

    useCases: [
      "Chatbots service client 24/7",
      "Assistants internes pour équipes",
      "Automatisation back-office",
      "Analyse de documents juridiques/comptables",
      "Génération de rapports et synthèses"
    ],

    stats: [
      { label: "Réduction coûts support", value: "-40-60%", source: "Gartner 2025" },
      { label: "PME investissant dans l'IA", value: "72%", source: "Étude McKinsey 2026" },
      { label: "ROI moyen projets IA", value: "300-500%", source: "Deloitte AI Survey" },
      { label: "Temps économisé/employé", value: "10-20h/sem", source: "Harvard Business Review" }
    ],

    projects: [
      {
        title: "Chatbot support e-commerce",
        description: "Assistant IA répondant à 80% des questions clients automatiquement",
        caseStudySlug: "chatbot-ecommerce",
        metrics: "-50% tickets support, satisfaction 4.5/5"
      },
      {
        title: "Analyseur de contrats",
        description: "Extraction automatique de clauses et alertes de risques",
        metrics: "Analyse en 2min vs 2h manuellement, précision 95%"
      },
      {
        title: "Assistant commercial IA",
        description: "Génération d'emails personnalisés et suivi prospects",
        metrics: "+35% taux de réponse, -70% temps rédaction"
      }
    ],

    faqs: [
      {
        question: "Mes données sont-elles en sécurité avec l'IA ?",
        answer: "Nous proposons plusieurs options : APIs avec DPA (OpenAI, Anthropic n'utilisent pas vos données pour l'entraînement), modèles hébergés en Europe (Azure OpenAI, AWS Bedrock), ou modèles on-premise (Llama, Mistral). Le niveau de confidentialité dépend de vos exigences."
      },
      {
        question: "L'IA peut-elle se tromper (hallucinations) ?",
        answer: "Oui, les LLM peuvent générer des informations incorrectes. Nous mitigeons ce risque avec : RAG (réponses basées sur vos documents), vérification des sources, et garde-fous (filtrage des réponses incertaines). Le taux d'erreur descend sous 5% avec une bonne architecture."
      },
      {
        question: "Faut-il entraîner un modèle custom ?",
        answer: "Rarement. Le fine-tuning est coûteux et souvent inutile. Le RAG (injection de contexte) suffit pour 90% des cas. Un modèle custom n'est pertinent que pour des tâches très spécifiques à haut volume. Nous commençons toujours par les solutions les plus simples."
      },
      {
        question: "Combien coûte l'utilisation des APIs ?",
        answer: "GPT-4 : ~$30/million de tokens (entrée), Claude : ~$15/million. Un chatbot moyen consomme 50-200€/mois. L'optimisation (caching, modèles légers pour tâches simples) réduit les coûts de 50-70%. Nous estimons le budget dès la conception."
      },
      {
        question: "L'IA va-t-elle remplacer mes employés ?",
        answer: "L'IA augmente la productivité, elle ne remplace pas les humains. Un agent support traite plus de tickets, un commercial prospecte plus efficacement. L'objectif est de libérer du temps pour les tâches à haute valeur ajoutée. Les meilleures implémentations sont collaboratives."
      }
    ],

    pricing: {
      minPrice: 3000,
      maxPrice: 50000,
      unit: "projet",
      details: "Chatbot simple : 3 000-8 000€ | Solution RAG : 8 000-25 000€ | Projet complexe : 25 000-50 000€+"
    },

    relatedServices: ["/services/ia-entreprise", "/services/crm-applications-metier"],
    relatedGlossaryTerms: ["ia-generative", "chatbot", "llm", "rag", "gpt"]
  }
]

/**
 * Récupérer une expertise par son slug
 */
export function getExpertiseBySlug(slug: string): Expertise | undefined {
  return expertises.find((e) => e.slug === slug)
}

/**
 * Récupérer toutes les expertises
 */
export function getAllExpertises(): Expertise[] {
  return expertises
}

/**
 * Récupérer les expertises par catégorie
 */
export function getExpertisesByCategory(category: ExpertiseCategory): Expertise[] {
  return expertises.filter((e) => e.category === category)
}

/**
 * Récupérer les slugs pour generateStaticParams
 */
export function getExpertiseSlugs(): string[] {
  return expertises.map((e) => e.slug)
}
