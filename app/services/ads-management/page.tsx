import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  LineChart,
  MousePointerClick,
  PieChart,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CTA, FAQ } from "@/components/sections"
import { serviceFaqs } from "@/lib/content"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  alternates: {
    canonical: "/services/ads-management",
  },
  title: "Gestion Publicités | Facebook Ads & Google Ads",
  description:
    "Gestion et optimisation de vos campagnes publicitaires Facebook Ads, Google Ads et LinkedIn Ads. Stratégie, création, A/B testing et reporting.",
  keywords: [
    "Facebook Ads",
    "Google Ads",
    "publicité digitale",
    "gestion campagnes",
    "agence ads",
    "marketing digital",
    "acquisition clients",
    "ROI publicité",
  ],
  openGraph: {
    title: "Gestion Publicités | Agence RLN",
    description:
      "Gestion et optimisation de vos campagnes publicitaires Facebook Ads et Google Ads.",
    url: `${siteConfig.url}/services/ads-management`,
    images: [{ url: "/api/og?title=Gestion+Publicit%C3%A9s&description=Facebook+Ads+%26+Google+Ads+-+Strat%C3%A9gie%2C+Cr%C3%A9ation+%26+Optimisation&type=service", width: 1200, height: 630 }],
  },
}

const features = [
  {
    icon: Target,
    title: "Stratégie Publicitaire",
    description:
      "Définition des objectifs, cibles et messages pour maximiser l'impact de vos campagnes.",
  },
  {
    icon: MousePointerClick,
    title: "Création de Campagnes",
    description:
      "Configuration et lancement de campagnes optimisées sur les plateformes adaptées.",
  },
  {
    icon: TrendingUp,
    title: "A/B Testing",
    description:
      "Tests continus des visuels, messages et audiences pour améliorer les performances.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Tableaux de bord et rapports détaillés pour suivre vos KPIs en temps réel.",
  },
  {
    icon: Users,
    title: "Retargeting Avancé",
    description:
      "Stratégies de reciblage pour convertir les visiteurs en clients fidèles.",
  },
  {
    icon: Zap,
    title: "Optimisation Continue",
    description:
      "Ajustements quotidiens pour maximiser le ROI de vos investissements publicitaires.",
  },
]

const platforms = [
  {
    name: "Facebook Ads",
    description: "Touchez votre audience sur Facebook et Instagram",
    icon: "META",
  },
  {
    name: "Google Ads",
    description: "Apparaissez en tête des résultats de recherche",
    icon: "SEA",
  },
  {
    name: "LinkedIn Ads",
    description: "Ciblez les décideurs B2B",
    icon: "B2B",
  },
  {
    name: "TikTok Ads",
    description: "Engagez la génération Z",
    icon: "SOCIAL",
  },
]

const results = [
  { value: "320%", label: "ROI moyen" },
  { value: "-45%", label: "Coût par acquisition" },
  { value: "+180%", label: "Taux de conversion" },
  { value: "24/7", label: "Monitoring" },
]

export default function AdsManagementPage() {
  const breadcrumbItems = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    {
      name: "Gestion Publicités",
      url: `${siteConfig.url}/services/ads-management`,
    },
  ]

  return (
    <>
      <ServiceJsonLd
        name="Gestion Publicités Google Ads & Meta Ads"
        description="Gestion et optimisation de vos campagnes publicitaires Facebook Ads, Google Ads et LinkedIn Ads. ROI moyen de 320% et coût par lead divisé par 2 en 3 mois. Honoraires à partir de 290€/mois."
        url={`${siteConfig.url}/services/ads-management`}
        minPrice={290}
        features={[
          "Stratégie publicitaire personnalisée",
          "Création et gestion Google Ads",
          "Gestion campagnes Meta Ads",
          "A/B testing continu",
          "Reporting ROI détaillé",
          "Retargeting avancé",
        ]}
        estimatedDuration="Résultats en 48-72h, optimisation en 4-8 semaines"
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FAQPageJsonLd questions={serviceFaqs["ads-management"]} />

      {/* Hero */}
      <section className="py-20 lg:py-28 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={breadcrumbItems.slice(1).map((item, index, arr) =>
              index < arr.length - 1
                ? { label: item.name, href: new URL(item.url).pathname }
                : { label: item.name }
            )}
            className="mb-6"
          />
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-mono text-xs text-foreground mb-6">
              <Target className="h-4 w-4" />
              Gestion Publicités
            </span>
            <h1 className="v-display text-5xl sm:text-7xl lg:text-[88px] text-foreground mb-6">
              Maximisez votre{" "}
              <span className="v-em text-primary">ROI publicitaire</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Gestion experte de vos campagnes Facebook Ads, Google Ads et
              LinkedIn Ads. Stratégie personnalisée, optimisation continue et
              reporting transparent.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Button
                asChild
                size="lg"
                variant="accent"
              >
                <Link href="/contact">
                  Audit gratuit de vos campagnes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cas-etudes">Voir nos résultats</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-primary-foreground mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Answer-First Section - Réponses directes pour LLM */}
      <section className="py-16 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Combien coûte la gestion Google Ads ?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>À partir de 290€/mois</strong> de frais de gestion. CTR moyen Google Ads : 3.17% tous secteurs. Nos clients
                  atteignent <strong>4-6%</strong> grâce à l&apos;optimisation continue.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Avec quel budget démarrer ?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Dès 300€/mois de budget publicitaire</strong>, à augmenter selon les
                  résultats. Coût par lead France : 15€ (e-commerce) à 150€ (B2B SaaS) selon
                  secteur.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  En combien de temps vais-je voir des résultats ?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Premiers leads en 48-72h</strong>. Optimisation complète : 4-8 semaines.
                  Nos clients voient leur CPL baisser de <strong>45% en 3 mois</strong>.
                  ROAS moyen : de 2x (mois 1) à 4x (mois 6).
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Google Ads ou Facebook Ads ?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Les deux, idéalement</strong>. 49% des acheteurs découvrent un produit sur
                  Google. 74% utilisent les réseaux sociaux pour leurs décisions d&apos;achat.
                  La synergie augmente le ROI de <strong>25-35%</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="v-display text-4xl sm:text-6xl text-foreground mb-4">
              Nos services
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Une gestion complète de vos campagnes publicitaires.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-klein-200 transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="v-display text-4xl sm:text-6xl text-foreground mb-4">
              Plateformes gérées
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Nous gérons vos campagnes sur toutes les plateformes majeures.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/30 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 font-mono text-xs tracking-[0.08em] text-primary">{platform.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h2 className="v-display text-4xl sm:text-6xl text-foreground mb-4">
                Comment ça marche
              </h2>
              <p className="text-muted-foreground">
                Un processus simple et transparent.
              </p>
            </div>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Audit & Stratégie",
                  description:
                    "Analyse de vos campagnes existantes et définition d'une stratégie personnalisée.",
                },
                {
                  step: 2,
                  title: "Configuration & Lancement",
                  description:
                    "Mise en place des campagnes, pixels de tracking et audiences.",
                },
                {
                  step: 3,
                  title: "Optimisation Continue",
                  description:
                    "Tests A/B, ajustements des enchères et optimisation des créatives.",
                },
                {
                  step: 4,
                  title: "Reporting Mensuel",
                  description:
                    "Rapport détaillé des performances avec recommandations d'amélioration.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={serviceFaqs["ads-management"]} />

      <CTA />
    </>
  )
}
