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
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"

export const metadata: Metadata = {
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
    title: "Gestion Publicités | RLN Consulting",
    description:
      "Gestion et optimisation de vos campagnes publicitaires Facebook Ads et Google Ads.",
    url: "https://rln-consulting.com/services/ads-management",
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
    icon: "📘",
  },
  {
    name: "Google Ads",
    description: "Apparaissez en tête des résultats de recherche",
    icon: "🔍",
  },
  {
    name: "LinkedIn Ads",
    description: "Ciblez les décideurs B2B",
    icon: "💼",
  },
  {
    name: "TikTok Ads",
    description: "Engagez la génération Z",
    icon: "🎵",
  },
]

const results = [
  { value: "320%", label: "ROI moyen" },
  { value: "-45%", label: "Coût par acquisition" },
  { value: "+180%", label: "Taux de conversion" },
  { value: "24/7", label: "Monitoring" },
]

export default function AdsManagementPage() {
  return (
    <>
      <ServiceJsonLd
        name="Gestion Publicités Digitales"
        description="Gestion et optimisation de vos campagnes publicitaires Facebook Ads, Google Ads et LinkedIn Ads."
        url="https://rln-consulting.com/services/ads-management"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          {
            name: "Gestion Publicités",
            url: "https://rln-consulting.com/services/ads-management",
          },
        ]}
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              <Target className="h-4 w-4" />
              Gestion Publicités
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Maximisez votre{" "}
              <span className="text-accent">ROI publicitaire</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Gestion experte de vos campagnes Facebook Ads, Google Ads et
              LinkedIn Ads. Stratégie personnalisée, optimisation continue et
              reporting transparent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90"
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
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
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

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une gestion complète de vos campagnes publicitaires.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-accent/30 transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Plateformes gérées
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                  <div className="text-4xl mb-4">{platform.icon}</div>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
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

      <CTA />
    </>
  )
}
