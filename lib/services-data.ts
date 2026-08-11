import type { LucideIcon } from "lucide-react"
import {
  BarChart2,
  BarChart3,
  Bell,
  Box,
  Cloud,
  Code,
  CreditCard,
  Database,
  Download,
  Eye,
  FileText,
  Glasses,
  Globe,
  Layers,
  LayoutDashboard,
  Luggage,
  Mail,
  MapPin,
  MousePointerClick,
  Package,
  Palette,
  Rocket,
  Search,
  Send,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sofa,
  Store,
  Tablet,
  Truck,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react"

/**
 * Rich text segment: plain string, or bold segment rendered as <strong>.
 * Whitespace is significant and must be preserved as-is (SEO content).
 */
export type RichTextSegment = string | { strong: string }

export interface AnswerFirstSection {
  type: "answer-first"
  items: Array<{
    heading: string
    body: RichTextSegment[]
  }>
}

export interface FeaturesSection {
  type: "features"
  heading: string
  subtitle?: string
  items: Array<{
    icon: LucideIcon
    title: string
    description: string
  }>
}

export interface BadgesSection {
  type: "badges"
  heading: string
  subtitle?: string
  items: string[]
}

export interface ProcessSection {
  type: "process"
  heading: string
  subtitle: string
  steps: Array<{
    step: string
    title: string
    description: string
  }>
}

export interface UseCasesSection {
  type: "use-cases"
  heading: string
  items: Array<{
    icon: LucideIcon
    name: string
  }>
}

export interface StatsSection {
  type: "stats"
  items: Array<{
    label: string
    value: string
  }>
}

export type ServiceSection =
  | AnswerFirstSection
  | FeaturesSection
  | BadgesSection
  | ProcessSection
  | UseCasesSection
  | StatsSection

export interface ServiceData {
  slug: string
  /** Name used in the visual breadcrumb and BreadcrumbJsonLd */
  breadcrumbName: string
  meta: {
    title: string
    description: string
    keywords: string[]
    ogTitle: string
    ogDescription: string
    /** Only set when the original page declared an explicit og:image */
    ogImage?: string
  }
  jsonLd: {
    name: string
    description: string
    minPrice?: number
    maxPrice?: number
    features?: string[]
    estimatedDuration?: string
  }
  hero: {
    icon: LucideIcon
    badge: string
    h1: {
      before: string
      highlight: string
      after?: string
    }
    subtitle: string
    primaryCta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
  }
  sections: ServiceSection[]
}

export const services: ServiceData[] = [
  {
    slug: "developpement",
    breadcrumbName: "Développement Web",
    meta: {
      title: "Développement Web | Next.js, React & Applications Sur Mesure",
      description:
        "Services de développement web sur mesure. Création de sites vitrines, e-commerce et applications web avec Next.js, React et TypeScript. Optimisation performance et SEO.",
      keywords: [
        "développement web",
        "Next.js",
        "React",
        "TypeScript",
        "site vitrine",
        "e-commerce",
        "application web",
        "freelance développeur",
      ],
      ogTitle: "Développement Web | RLN Consulting",
      ogDescription:
        "Services de développement web sur mesure avec Next.js et React.",
      ogImage:
        "/api/og?title=D%C3%A9veloppement+Web&description=Next.js%2C+React+%26+Applications+Sur+Mesure&type=service",
    },
    jsonLd: {
      name: "Développement Web - Sites & Applications Sur Mesure",
      description:
        "Services de développement web sur mesure avec Next.js et React. Création de sites vitrines (à partir de 2 000€), e-commerce (à partir de 5 000€) et applications web personnalisées. Optimisation SEO et performance incluses.",
      minPrice: 2000,
      maxPrice: 50000,
      features: [
        "Sites vitrines Next.js",
        "E-commerce Shopify & sur mesure",
        "Applications web React",
        "Intégrations API & CMS",
        "Optimisation Core Web Vitals",
        "SEO technique avancé",
      ],
      estimatedDuration: "2-12 semaines selon complexité",
    },
    hero: {
      icon: Code,
      badge: "Développement Web",
      h1: {
        before: "Sites web et applications ",
        highlight: "sur mesure",
      },
      subtitle:
        "Création de solutions digitales performantes avec les dernières technologies : Next.js, React, TypeScript. Des sites rapides, accessibles et optimisés pour le SEO.",
      primaryCta: { label: "Discutons de votre projet", href: "/contact" },
      secondaryCta: { label: "Voir nos réalisations", href: "/cas-etudes" },
    },
    sections: [
      {
        type: "answer-first",
        items: [
          {
            heading: "💰 Combien coûte un site web ?",
            body: [
              { strong: "Site vitrine : 2 000€ à 5 000€" },
              ". E-commerce : 5 000€ à 15 000€. Application sur mesure : 10 000€ à 50 000€+. Nos sites Next.js atteignent",
              { strong: " 90+ sur PageSpeed" },
              " (vs ~45 pour un WordPress moyen).",
            ],
          },
          {
            heading: "⏱️ Quel délai de réalisation ?",
            body: [
              { strong: "Site vitrine : 2-4 semaines" },
              ". E-commerce : 4-8 semaines. Application complexe : 2-4 mois. Statistique : 53% des visiteurs quittent un site si le chargement prend >3 secondes (Google 2025).",
            ],
          },
          {
            heading: "🚀 Pourquoi Next.js ?",
            body: [
              "Sites ",
              { strong: "2-3x plus rapides" },
              ", meilleur SEO, expérience utilisateur optimale. Utilisé par Netflix, TikTok, Notion. Les sites rapides (<2s) génèrent",
              { strong: " +200% de conversions" },
              " (Portent 2025).",
            ],
          },
          {
            heading: "📱 Mobile-first inclus ?",
            body: [
              "Oui, tous nos sites sont ",
              { strong: "mobile-first" },
              ". 70% du trafic web mondial vient des mobiles (Statista 2026). Tests sur 15+ appareils. Un site non optimisé mobile perd jusqu'à ",
              { strong: "68% de ses visiteurs" },
              ".",
            ],
          },
        ],
      },
      {
        type: "features",
        heading: "Nos expertises",
        subtitle: "Des solutions adaptées à tous vos besoins digitaux.",
        items: [
          {
            icon: Globe,
            title: "Sites Vitrines",
            description:
              "Sites web professionnels et modernes pour présenter votre entreprise et vos services.",
          },
          {
            icon: Layers,
            title: "E-commerce",
            description:
              "Boutiques en ligne performantes avec gestion des paiements et des stocks.",
          },
          {
            icon: Code,
            title: "Applications Web",
            description:
              "Applications sur mesure pour répondre à vos besoins métier spécifiques.",
          },
          {
            icon: Database,
            title: "Intégrations API",
            description:
              "Connexion avec vos outils existants : CRM, ERP, CMS et services tiers.",
          },
          {
            icon: Rocket,
            title: "Optimisation Performance",
            description:
              "Sites ultra-rapides avec Core Web Vitals optimisés pour le référencement.",
          },
          {
            icon: Zap,
            title: "SEO Technique",
            description:
              "Structure technique optimisée pour un meilleur positionnement sur Google.",
          },
        ],
      },
      {
        type: "badges",
        heading: "Technologies utilisées",
        subtitle:
          "Nous utilisons les technologies les plus modernes et performantes.",
        items: [
          "Next.js 14+",
          "React 18",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
          "Vercel",
          "AWS",
          "Stripe",
          "Shopify",
          "Contentful",
        ],
      },
      {
        type: "process",
        heading: "Notre processus",
        subtitle: "Une méthodologie éprouvée pour des projets réussis.",
        steps: [
          {
            step: "01",
            title: "Découverte",
            description:
              "Analyse de vos besoins, objectifs et contraintes pour définir le scope du projet.",
          },
          {
            step: "02",
            title: "Conception",
            description:
              "Design UX/UI et architecture technique validés avant le développement.",
          },
          {
            step: "03",
            title: "Développement",
            description:
              "Développement itératif avec points réguliers et livraisons intermédiaires.",
          },
          {
            step: "04",
            title: "Livraison",
            description:
              "Tests, mise en production et formation pour une autonomie maximale.",
          },
        ],
      },
    ],
  },
  {
    slug: "ecommerce",
    breadcrumbName: "E-commerce",
    meta: {
      title: "E-commerce | Boutiques en Ligne Performantes",
      description:
        "Création de boutiques en ligne e-commerce. Shopify, WooCommerce ou sur mesure. Paiement sécurisé, gestion des stocks, Click & Collect.",
      keywords: [
        "e-commerce",
        "boutique en ligne",
        "Shopify",
        "WooCommerce",
        "vente en ligne",
        "paiement en ligne",
      ],
      ogTitle: "E-commerce | RLN Consulting",
      ogDescription: "Création de boutiques en ligne e-commerce performantes.",
    },
    jsonLd: {
      name: "E-commerce - Boutiques en Ligne Performantes",
      description:
        "Création de boutiques e-commerce Shopify (3 000€-8 000€) ou WooCommerce (5 000€-15 000€). Optimisations qui augmentent le taux de conversion de 20-40%. Paiement sécurisé Stripe, gestion stocks, Click & Collect.",
      minPrice: 3000,
      maxPrice: 50000,
      features: [
        "Boutique Shopify clé en main",
        "E-commerce WooCommerce",
        "Paiement Stripe, PayPal, 3x/4x",
        "Gestion stocks temps réel",
        "Click & Collect",
        "SEO produits optimisé",
      ],
      estimatedDuration: "4-8 semaines selon complexité",
    },
    hero: {
      icon: ShoppingCart,
      badge: "E-commerce",
      h1: {
        before: "Vendez ",
        highlight: "24h/24",
        after: " en ligne",
      },
      subtitle:
        "Boutique en ligne clé en main pour vendre vos produits. Shopify, WooCommerce ou solution sur mesure selon vos besoins.",
      primaryCta: { label: "Lancer ma boutique", href: "/contact" },
    },
    sections: [
      {
        type: "answer-first",
        items: [
          {
            heading: "💰 Combien coûte un site e-commerce ?",
            body: [
              { strong: "Shopify : 3 000€ à 8 000€" },
              ". WooCommerce : 5 000€ à 15 000€. Sur mesure : 15 000€ à 50 000€+. Taux de conversion moyen France : 2.5%. Nos sites atteignent ",
              { strong: "3.5-5%" },
              " grâce à l'optimisation UX.",
            ],
          },
          {
            heading: "🛒 Shopify ou WooCommerce ?",
            body: [
              { strong: "Shopify" },
              " : démarrage rapide, 29-299€/mois, hébergement inclus.",
              { strong: "WooCommerce" },
              " : plus flexible, pas d'abonnement. Shopify = 10% du e-commerce mondial. WooCommerce = 28% des sites e-commerce.",
            ],
          },
          {
            heading: "📈 Comment augmenter mes ventes ?",
            body: [
              "Nos optimisations : ",
              { strong: "+20-40% conversions" },
              ". Leviers : UX tunnel d'achat, emails panier abandonné (récupère 10-15%), avis clients (+35%).",
              { strong: "70% des paniers sont abandonnés" },
              " (Baymard Institute).",
            ],
          },
          {
            heading: "💳 Paiement fractionné inclus ?",
            body: [
              { strong: "Oui" },
              " : Stripe, PayPal, Apple Pay, Alma, Klarna. Statistique : le paiement 3x/4x augmente le panier moyen de ",
              { strong: "20-30%" },
              "(Klarna 2025). Click & Collect disponible avec gestion multi-magasins.",
            ],
          },
        ],
      },
      {
        type: "features",
        heading: "Tout ce qu'il faut pour vendre",
        items: [
          {
            icon: Store,
            title: "Boutique Complète",
            description:
              "Catalogue produits, panier, checkout optimisé pour la conversion.",
          },
          {
            icon: CreditCard,
            title: "Paiement Sécurisé",
            description:
              "Stripe, PayPal, paiement en plusieurs fois avec Alma ou Klarna.",
          },
          {
            icon: Package,
            title: "Gestion des Stocks",
            description:
              "Suivi des stocks en temps réel, alertes de réapprovisionnement.",
          },
          {
            icon: Truck,
            title: "Livraison Intégrée",
            description:
              "Colissimo, Mondial Relay, transporteurs personnalisés.",
          },
          {
            icon: ShoppingCart,
            title: "Click & Collect",
            description:
              "Commande en ligne, retrait en magasin. Le meilleur des deux mondes.",
          },
          {
            icon: BarChart2,
            title: "Analytics E-commerce",
            description:
              "Suivi des ventes, panier moyen, taux de conversion.",
          },
        ],
      },
      {
        type: "badges",
        heading: "Plateformes & Intégrations",
        items: [
          "Shopify",
          "WooCommerce",
          "Next.js Commerce",
          "Stripe",
          "PayPal",
          "Alma",
          "Colissimo",
          "Mondial Relay",
        ],
      },
    ],
  },
  {
    slug: "applications-mobiles",
    breadcrumbName: "Applications Mobiles",
    meta: {
      title: "Applications Mobiles | iOS & Android Sur Mesure",
      description:
        "Développement d'applications mobiles iOS et Android. Apps natives ou cross-platform avec React Native et Flutter. Publication sur les stores.",
      keywords: [
        "application mobile",
        "iOS",
        "Android",
        "React Native",
        "Flutter",
        "app sur mesure",
        "développement mobile",
      ],
      ogTitle: "Applications Mobiles | RLN Consulting",
      ogDescription:
        "Développement d'applications mobiles iOS et Android sur mesure.",
    },
    jsonLd: {
      name: "Applications Mobiles",
      description:
        "Développement d'applications mobiles iOS et Android. Apps natives ou cross-platform avec React Native et Flutter.",
    },
    hero: {
      icon: Smartphone,
      badge: "Applications Mobiles",
      h1: {
        before: "Applications ",
        highlight: "iOS & Android",
      },
      subtitle:
        "Développement d'applications mobiles performantes pour toucher vos clients sur leurs smartphones. Apps natives ou cross-platform selon vos besoins.",
      primaryCta: { label: "Discutons de votre app", href: "/contact" },
    },
    sections: [
      {
        type: "features",
        heading: "Nos expertises",
        subtitle: "Des applications mobiles adaptées à tous vos besoins.",
        items: [
          {
            icon: Smartphone,
            title: "Apps iOS",
            description:
              "Applications iPhone et iPad optimisées pour l'écosystème Apple.",
          },
          {
            icon: Tablet,
            title: "Apps Android",
            description:
              "Applications pour smartphones et tablettes Android, toutes versions.",
          },
          {
            icon: Zap,
            title: "Cross-Platform",
            description:
              "Un seul code pour iOS et Android avec React Native ou Flutter.",
          },
          {
            icon: Bell,
            title: "Notifications Push",
            description:
              "Engagez vos utilisateurs avec des notifications ciblées.",
          },
          {
            icon: Cloud,
            title: "Mode Hors-ligne",
            description:
              "Vos utilisateurs peuvent utiliser l'app même sans connexion.",
          },
          {
            icon: Download,
            title: "Publication Stores",
            description:
              "Nous gérons la publication sur App Store et Google Play.",
          },
        ],
      },
      {
        type: "badges",
        heading: "Technologies",
        items: [
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Firebase",
          "Expo",
          "App Store Connect",
          "Google Play Console",
        ],
      },
    ],
  },
  {
    slug: "crm-applications-metier",
    breadcrumbName: "CRM & Applications Métier",
    meta: {
      title: "CRM & Applications Métier | Solutions Sur Mesure",
      description:
        "Développement de CRM et applications métier sur mesure. Tableaux de bord, gestion pipeline, automatisations. Solutions adaptées à vos processus.",
      keywords: [
        "CRM sur mesure",
        "application métier",
        "tableau de bord",
        "gestion commerciale",
        "automatisation",
        "ERP",
      ],
      ogTitle: "CRM & Applications Métier | RLN Consulting",
      ogDescription:
        "Solutions CRM et applications métier sur mesure pour votre entreprise.",
    },
    jsonLd: {
      name: "CRM & Applications Métier",
      description:
        "Développement de CRM et applications métier sur mesure. Tableaux de bord, gestion pipeline, automatisations.",
    },
    hero: {
      icon: LayoutDashboard,
      badge: "CRM & Applications Métier",
      h1: {
        before: "Outils ",
        highlight: "sur mesure",
        after: " pour votre métier",
      },
      subtitle:
        "Fini les outils génériques qui ne correspondent pas à vos process. Nous créons des solutions adaptées à votre façon de travailler.",
      primaryCta: { label: "Discutons de vos besoins", href: "/contact" },
    },
    sections: [
      {
        type: "features",
        heading: "Ce qu'on peut créer pour vous",
        items: [
          {
            icon: Users,
            title: "CRM Personnalisé",
            description:
              "Gérez vos contacts, prospects et clients avec un outil adapté à votre façon de travailler.",
          },
          {
            icon: LayoutDashboard,
            title: "Tableaux de Bord",
            description:
              "Visualisez vos KPIs métier en temps réel avec des dashboards sur mesure.",
          },
          {
            icon: Workflow,
            title: "Gestion Pipeline",
            description:
              "Suivez vos opportunités commerciales de la prospection à la signature.",
          },
          {
            icon: Settings,
            title: "Automatisations",
            description:
              "Automatisez les tâches répétitives et gagnez du temps chaque jour.",
          },
          {
            icon: Database,
            title: "Intégrations",
            description:
              "Connectez votre CRM à vos outils existants : email, facturation, agenda...",
          },
          {
            icon: BarChart3,
            title: "Reporting",
            description:
              "Rapports automatiques et exports pour piloter votre activité.",
          },
        ],
      },
      {
        type: "badges",
        heading: "Technologies",
        items: [
          "Next.js",
          "React",
          "PostgreSQL",
          "Prisma",
          "Supabase",
          "Airtable",
          "Notion API",
          "Zapier",
          "Make",
        ],
      },
    ],
  },
  {
    slug: "configurateur-3d",
    breadcrumbName: "Configurateurs 3D",
    meta: {
      title: "Configurateurs 3D | Personnalisation Produits en Temps Réel",
      description:
        "Développement de configurateurs 3D interactifs pour personnaliser vos produits : lunettes, valises, meubles, bijoux. Visualisation temps réel et intégration e-commerce.",
      keywords: [
        "configurateur 3D",
        "personnalisation produit",
        "visualisation 3D",
        "three.js",
        "WebGL",
        "configurateur lunettes",
        "configurateur valise",
      ],
      ogTitle: "Configurateurs 3D | RLN Consulting",
      ogDescription:
        "Configurateurs 3D interactifs pour personnaliser vos produits en temps réel.",
    },
    jsonLd: {
      name: "Configurateurs 3D",
      description:
        "Développement de configurateurs 3D interactifs pour personnaliser vos produits en temps réel.",
    },
    hero: {
      icon: Box,
      badge: "Configurateurs 3D",
      h1: {
        before: "Vos produits en ",
        highlight: "3D interactive",
      },
      subtitle:
        "Permettez à vos clients de personnaliser et visualiser vos produits en temps réel. Lunettes, valises, meubles... tout devient configurable.",
      primaryCta: { label: "Discutons de votre projet", href: "/contact" },
    },
    sections: [
      {
        type: "use-cases",
        heading: "Types de produits configurables",
        items: [
          { icon: Glasses, name: "Lunettes & Optique" },
          { icon: Luggage, name: "Bagagerie & Maroquinerie" },
          { icon: Sofa, name: "Mobilier & Décoration" },
          { icon: Box, name: "Packaging & Coffrets" },
        ],
      },
      {
        type: "features",
        heading: "Fonctionnalités",
        items: [
          {
            icon: Eye,
            title: "Visualisation Temps Réel",
            description:
              "Vos clients voient le produit se transformer instantanément selon leurs choix.",
          },
          {
            icon: Palette,
            title: "Personnalisation Complète",
            description:
              "Couleurs, matériaux, gravures, dimensions... tout est configurable.",
          },
          {
            icon: Box,
            title: "Modèles 3D Haute Qualité",
            description: "Rendu photoréaliste pour une expérience immersive.",
          },
          {
            icon: ShoppingBag,
            title: "Intégration E-commerce",
            description: "Ajout au panier direct avec les options sélectionnées.",
          },
          {
            icon: Sofa,
            title: "Tout Type de Produit",
            description:
              "Lunettes, valises, meubles, bijoux, vêtements, accessoires...",
          },
          {
            icon: Luggage,
            title: "Export & Devis",
            description:
              "Génération automatique de devis et récapitulatif de configuration.",
          },
        ],
      },
      {
        type: "badges",
        heading: "Technologies",
        items: [
          "Three.js",
          "React Three Fiber",
          "WebGL",
          "Blender",
          "glTF",
          "Next.js",
          "Shopify",
        ],
      },
    ],
  },
  {
    slug: "seo-referencement",
    breadcrumbName: "SEO & Référencement",
    meta: {
      title: "SEO & Référencement | Apparaissez en Premier sur Google",
      description:
        "Stratégie SEO complète pour améliorer votre visibilité sur Google. Audit SEO, optimisation on-page, SEO local, stratégie de contenu.",
      keywords: [
        "SEO",
        "référencement naturel",
        "Google",
        "SEO local",
        "audit SEO",
        "stratégie de contenu",
        "backlinks",
      ],
      ogTitle: "SEO & Référencement | RLN Consulting",
      ogDescription:
        "Stratégie SEO complète pour apparaître en premier sur Google.",
    },
    jsonLd: {
      name: "SEO & Référencement",
      description:
        "Stratégie SEO complète pour améliorer votre visibilité sur Google. Audit SEO, optimisation on-page, SEO local.",
    },
    hero: {
      icon: Search,
      badge: "SEO & Référencement",
      h1: {
        before: "Soyez ",
        highlight: "premier sur Google",
      },
      subtitle:
        "Stratégie SEO sur mesure pour attirer des clients qualifiés via Google. Audit, optimisation et suivi des résultats inclus.",
      primaryCta: { label: "Audit SEO gratuit", href: "/contact" },
    },
    sections: [
      {
        type: "stats",
        items: [
          { label: "Trafic organique moyen", value: "+180%" },
          { label: "Mots-clés en 1ère page", value: "x3" },
          { label: "Leads organiques", value: "+120%" },
        ],
      },
      {
        type: "features",
        heading: "Notre approche SEO",
        items: [
          {
            icon: Search,
            title: "Audit SEO Complet",
            description:
              "Analyse technique, sémantique et concurrentielle pour identifier les opportunités.",
          },
          {
            icon: FileText,
            title: "Optimisation On-Page",
            description:
              "Balises, structure, maillage interne et contenu optimisés pour Google.",
          },
          {
            icon: MapPin,
            title: "SEO Local",
            description:
              "Google My Business, avis, citations locales pour capter les clients de votre zone.",
          },
          {
            icon: Globe,
            title: "Stratégie de Contenu",
            description:
              "Création de contenus optimisés qui attirent du trafic qualifié.",
          },
          {
            icon: TrendingUp,
            title: "Suivi des Positions",
            description:
              "Monitoring de vos mots-clés et reporting mensuel de progression.",
          },
          {
            icon: BarChart2,
            title: "Analytics & ROI",
            description:
              "Mesure du trafic organique et des conversions générées.",
          },
        ],
      },
    ],
  },
  {
    slug: "email-marketing",
    breadcrumbName: "Email Marketing & Automation",
    meta: {
      title: "Email Marketing & Automation | Convertissez vos prospects",
      description:
        "Stratégies d'email marketing et automatisation. Séquences automatisées, newsletters, lead nurturing. Convertissez et fidélisez vos prospects.",
      keywords: [
        "email marketing",
        "automation",
        "newsletter",
        "lead nurturing",
        "séquence email",
        "emailing",
        "CRM",
      ],
      ogTitle: "Email Marketing & Automation | RLN Consulting",
      ogDescription:
        "Stratégies d'email marketing et automatisation pour convertir vos prospects.",
    },
    jsonLd: {
      name: "Email Marketing & Automation",
      description:
        "Stratégies d'email marketing et automatisation. Séquences automatisées, newsletters, lead nurturing.",
    },
    hero: {
      icon: Mail,
      badge: "Email Marketing & Automation",
      h1: {
        before: "Convertissez vos ",
        highlight: "prospects en clients",
      },
      subtitle:
        "L'email reste le canal avec le meilleur ROI. Automatisez vos séquences pour convertir et fidéliser sans effort.",
      primaryCta: { label: "Parlons de votre stratégie", href: "/contact" },
    },
    sections: [
      {
        type: "features",
        heading: "Nos services email",
        items: [
          {
            icon: Settings,
            title: "Séquences Automatisées",
            description:
              "Emails déclenchés automatiquement selon les actions de vos prospects.",
          },
          {
            icon: Mail,
            title: "Newsletters",
            description:
              "Newsletters régulières pour garder le contact avec votre audience.",
          },
          {
            icon: MousePointerClick,
            title: "Lead Nurturing",
            description:
              "Accompagnez vos prospects jusqu'à la conversion avec le bon message.",
          },
          {
            icon: Users,
            title: "Segmentation",
            description:
              "Ciblez vos emails selon le profil et le comportement de vos contacts.",
          },
          {
            icon: BarChart2,
            title: "A/B Testing",
            description:
              "Testez et optimisez vos emails pour améliorer les performances.",
          },
          {
            icon: Send,
            title: "Délivrabilité",
            description:
              "Configuration technique pour que vos emails arrivent en boîte de réception.",
          },
        ],
      },
      {
        type: "badges",
        heading: "Outils utilisés",
        items: [
          "Mailchimp",
          "Brevo",
          "ActiveCampaign",
          "HubSpot",
          "Resend",
          "ConvertKit",
          "Klaviyo",
        ],
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
