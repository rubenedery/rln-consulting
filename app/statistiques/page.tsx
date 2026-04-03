import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Globe,
  LineChart,
  Percent,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Zap,
  BrainCircuit,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"

export const metadata: Metadata = {
  title: "Statistiques & Benchmarks 2026 | Marketing Digital, Web & IA",
  description:
    "Données et statistiques clés du digital en 2026 : taux de conversion, coûts d'acquisition, ROI marketing, performance web. Benchmarks sectoriels pour guider vos décisions.",
  keywords: [
    "statistiques marketing digital",
    "benchmarks e-commerce",
    "taux de conversion moyen",
    "coût par lead",
    "ROI publicité",
    "statistiques web 2026",
  ],
  openGraph: {
    title: "Statistiques & Benchmarks 2026 | RLN Consulting",
    description: "Données clés du digital pour guider vos décisions stratégiques.",
    url: "https://rln-consulting.com/statistiques",
  },
}

const webStats = [
  {
    value: "53%",
    label: "des visiteurs quittent un site si le chargement prend > 3 secondes",
    source: "Google 2025",
  },
  {
    value: "70%",
    label: "du trafic web mondial provient des mobiles",
    source: "Statista 2026",
  },
  {
    value: "94%",
    label: "des premières impressions sont liées au design du site",
    source: "Stanford Web Credibility",
  },
  {
    value: "+200%",
    label: "de conversions pour les sites < 2 secondes de chargement",
    source: "Portent 2025",
  },
]

const marketingStats = [
  {
    value: "4200%",
    label: "ROI moyen de l'email marketing (42€ pour 1€ investi)",
    source: "DMA 2025",
  },
  {
    value: "68%",
    label: "des expériences en ligne commencent par un moteur de recherche",
    source: "BrightEdge 2025",
  },
  {
    value: "49%",
    label: "des acheteurs utilisent Google pour découvrir un nouveau produit",
    source: "Think with Google",
  },
  {
    value: "3.17%",
    label: "CTR moyen sur Google Ads (search) tous secteurs",
    source: "WordStream 2026",
  },
]

const ecommerceStats = [
  {
    value: "2.5%",
    label: "taux de conversion e-commerce moyen en France",
    source: "Contentsquare 2025",
  },
  {
    value: "70%",
    label: "des paniers sont abandonnés avant l'achat",
    source: "Baymard Institute 2025",
  },
  {
    value: "+35%",
    label: "de conversion avec les avis clients visibles",
    source: "Spiegel Research 2024",
  },
  {
    value: "12%",
    label: "des achats en ligne se font sur mobile en France",
    source: "Fevad 2025",
  },
]

const iaStats = [
  {
    value: "72%",
    label: "des entreprises prévoient d'investir dans l'IA en 2026",
    source: "McKinsey 2025",
  },
  {
    value: "-70%",
    label: "de tickets support avec un chatbot IA bien configuré",
    source: "Gartner 2025",
  },
  {
    value: "10x",
    label: "plus rapide pour la qualification de leads avec l'IA",
    source: "Salesforce 2025",
  },
  {
    value: "40%",
    label: "d'économies sur les coûts service client avec l'IA",
    source: "IBM 2025",
  },
]

const seoStats = [
  {
    value: "75%",
    label: "des utilisateurs ne dépassent jamais la première page Google",
    source: "HubSpot 2025",
  },
  {
    value: "14.6%",
    label: "taux de conversion des leads SEO (vs 1.7% outbound)",
    source: "Search Engine Journal",
  },
  {
    value: "53%",
    label: "du trafic des sites web provient du SEO organique",
    source: "BrightEdge 2025",
  },
  {
    value: "x10",
    label: "meilleur ROI du SEO vs publicité payante sur 3 ans",
    source: "Moz 2025",
  },
]

const rlnStats = [
  {
    value: "+150%",
    label: "augmentation moyenne du trafic de nos clients en 6 mois",
    icon: TrendingUp,
  },
  {
    value: "320%",
    label: "ROI moyen sur les campagnes publicitaires gérées",
    icon: Target,
  },
  {
    value: "-45%",
    label: "réduction du coût par lead en moyenne",
    icon: Percent,
  },
  {
    value: "98/100",
    label: "score PageSpeed moyen de nos sites Next.js",
    icon: Zap,
  },
  {
    value: "50+",
    label: "projets livrés depuis 2020",
    icon: BarChart3,
  },
  {
    value: "95%",
    label: "de clients satisfaits",
    icon: Users,
  },
]

const sectorBenchmarks = [
  {
    sector: "E-commerce Mode",
    conversionRate: "1.5-2.5%",
    avgOrderValue: "75-120€",
    cpl: "15-30€",
  },
  {
    sector: "SaaS B2B",
    conversionRate: "3-7%",
    avgOrderValue: "500-2000€/an",
    cpl: "50-150€",
  },
  {
    sector: "Immobilier",
    conversionRate: "2-4%",
    avgOrderValue: "N/A",
    cpl: "20-80€",
  },
  {
    sector: "Services Professionnels",
    conversionRate: "4-8%",
    avgOrderValue: "500-5000€",
    cpl: "30-100€",
  },
  {
    sector: "Santé / Médical",
    conversionRate: "3-6%",
    avgOrderValue: "N/A",
    cpl: "25-75€",
  },
  {
    sector: "Formation / E-learning",
    conversionRate: "2-5%",
    avgOrderValue: "200-1500€",
    cpl: "20-60€",
  },
]

export default function StatistiquesPage() {
  return (
    <>
      <WebPageJsonLd
        title="Statistiques & Benchmarks Digital 2026"
        description="Données et statistiques clés du marketing digital, e-commerce et IA en 2026. Benchmarks sectoriels pour guider vos décisions stratégiques."
        url="https://rln-consulting.com/statistiques"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Statistiques", url: "https://rln-consulting.com/statistiques" },
        ]}
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <BarChart3 className="h-4 w-4 mr-2" />
              Données 2026
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Statistiques & Benchmarks{" "}
              <span className="text-primary">Digital</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Les données clés du marketing digital, de la performance web et de
              l&apos;IA pour guider vos décisions stratégiques en 2026.
            </p>
          </div>
        </div>
      </section>

      {/* RLN Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">
            Résultats RLN Consulting
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {rlnStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Performance */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Performance Web
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            La vitesse et l&apos;expérience utilisateur sont critiques pour le succès
            de votre site web. Voici les statistiques clés à connaître.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {webStats.map((stat, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm text-foreground mb-2">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">
                    Source : {stat.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Digital */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">
              Marketing Digital
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Les canaux d&apos;acquisition et leur efficacité en 2026. Données
            essentielles pour orienter votre stratégie marketing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingStats.map((stat, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm text-foreground mb-2">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">
                    Source : {stat.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">E-commerce</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Benchmarks e-commerce France 2026. Comparez vos performances aux
            standards du marché.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecommerceStats.map((stat, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm text-foreground mb-2">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">
                    Source : {stat.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <LineChart className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">
              SEO & Référencement
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            L&apos;importance du référencement naturel et son impact sur votre
            visibilité et vos conversions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoStats.map((stat, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm text-foreground mb-2">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">
                    Source : {stat.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BrainCircuit className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Intelligence Artificielle
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            L&apos;IA transforme les entreprises. Voici les chiffres clés de
            l&apos;adoption et de l&apos;impact de l&apos;IA en 2026.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {iaStats.map((stat, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm text-foreground mb-2">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">
                    Source : {stat.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarks sectoriels */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Benchmarks par Secteur
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comparatif des KPIs moyens par secteur d&apos;activité pour évaluer
              vos performances.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Secteur</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Taux de Conversion
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Panier Moyen
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Coût par Lead
                  </th>
                </tr>
              </thead>
              <tbody>
                {sectorBenchmarks.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-muted/30"
                    }
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {row.sector}
                    </td>
                    <td className="px-6 py-4 text-center text-muted-foreground">
                      {row.conversionRate}
                    </td>
                    <td className="px-6 py-4 text-center text-muted-foreground">
                      {row.avgOrderValue}
                    </td>
                    <td className="px-6 py-4 text-center text-muted-foreground">
                      {row.cpl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Sources : Contentsquare, WordStream, données internes RLN Consulting
            2025-2026
          </p>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Méthodologie
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Les statistiques présentées sur cette page proviennent de sources
                reconnues du secteur (Google, HubSpot, Gartner, Statista, etc.) et
                de données internes anonymisées de RLN Consulting.
              </p>
              <p>
                Les benchmarks sectoriels sont des moyennes indicatives. Les
                performances réelles varient selon la qualité du site, la
                stratégie marketing, le positionnement prix et la maturité
                digitale de l&apos;entreprise.
              </p>
              <p>
                Cette page est mise à jour trimestriellement pour refléter les
                dernières tendances du marché. Dernière mise à jour : Avril 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Vos performances sont-elles au niveau ?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Comparez vos KPIs aux benchmarks du marché. Nous analysons vos
              données et identifions les opportunités d&apos;amélioration.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact">
                Demander un audit gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
