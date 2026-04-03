import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Search,
  FileText,
  Database,
  BookOpen,
  BarChart3,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"

export const metadata: Metadata = {
  title: "GEO - Référencement IA | Optimisation pour ChatGPT, Perplexity & Google AI",
  description:
    "Optimisez votre visibilité sur les moteurs de recherche IA. Soyez cité par ChatGPT, Perplexity et Google AI Overview grâce au Generative Engine Optimization (GEO).",
  keywords: [
    "GEO",
    "generative engine optimization",
    "référencement IA",
    "optimisation LLM",
    "visibilité ChatGPT",
    "Perplexity SEO",
    "Google AI Overview",
    "référencement chatgpt",
    "être cité par IA",
  ],
  openGraph: {
    title: "GEO - Référencement IA | RLN Consulting",
    description:
      "Soyez cité par ChatGPT, Perplexity et Google AI Overview. Stratégie GEO complète pour maximiser votre visibilité sur les moteurs IA.",
    url: "https://rln-consulting.com/services/geo",
    images: [{ url: "/api/og?title=GEO+-+R%C3%A9f%C3%A9rencement+IA&description=Optimisation+pour+ChatGPT%2C+Perplexity+%26+Google+AI&type=service", width: 1200, height: 630 }],
  },
}

const geoServices = [
  {
    icon: Search,
    title: "Audit de Visibilité IA",
    description:
      "Analyse complète de votre présence actuelle dans les réponses des moteurs IA. Benchmark concurrentiel et identification des opportunités.",
    benefits: ["Benchmark citations IA", "Analyse concurrence", "Identification des gaps"],
  },
  {
    icon: FileText,
    title: "Optimisation Contenu pour LLM",
    description:
      "Restructuration et création de contenu optimisé pour être sélectionné comme source par les LLM. Rédaction factuelle, statistiques sourcées, format Q&A.",
    benefits: ["Réécriture factuelle", "Statistiques sourcées", "Format questions-réponses"],
  },
  {
    icon: Database,
    title: "Schema Markup Avancé",
    description:
      "Implémentation de données structurées exhaustives (Schema.org) pour aider les IA à comprendre et citer votre contenu sans ambiguïté.",
    benefits: ["FAQ Schema", "HowTo Schema", "Données structurées enrichies"],
  },
  {
    icon: BookOpen,
    title: "Autorité Thématique",
    description:
      "Construction de clusters de contenu interconnectés pour établir votre expertise aux yeux des LLM sur vos thématiques clés.",
    benefits: ["Clusters de contenu", "Maillage interne", "Expertise E-E-A-T"],
  },
  {
    icon: BarChart3,
    title: "Suivi & Monitoring IA",
    description:
      "Surveillance continue de vos citations dans les réponses IA. Tableaux de bord et rapports mensuels de votre visibilité GEO.",
    benefits: ["Dashboard citations", "Alertes mentions", "Rapports mensuels"],
  },
  {
    icon: GraduationCap,
    title: "Formation & Stratégie GEO",
    description:
      "Formation de vos équipes aux bonnes pratiques GEO. Guide rédactionnel personnalisé et veille sur les évolutions des moteurs IA.",
    benefits: ["Workshops GEO", "Guide rédactionnel", "Veille IA continue"],
  },
]

const technologies = [
  "ChatGPT (OpenAI)",
  "Claude (Anthropic)",
  "Perplexity AI",
  "Google AI Overview",
  "Schema.org / JSON-LD",
  "Google Search Console",
  "Ahrefs",
  "Screaming Frog",
  "Surfer SEO",
  "n8n (automatisation)",
  "Next.js (SSR/SSG)",
  "Scripts de monitoring custom",
]

const useCases = [
  {
    industry: "SaaS B2B",
    useCase: "Cité comme référence dans les réponses ChatGPT",
    result: "80% des requêtes cibles",
  },
  {
    industry: "E-commerce",
    useCase: "Visibilité dans Google AI Overview",
    result: "+120% trafic IA",
  },
  {
    industry: "Cabinet conseil",
    useCase: "Source citée par Perplexity",
    result: "Top 3 des citations",
  },
  {
    industry: "Startup",
    useCase: "Visibilité IA partant de zéro",
    result: "Résultats en 3 mois",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Audit & Benchmark IA",
    description:
      "Nous testons vos requêtes cibles sur ChatGPT, Perplexity, Gemini et Google AI. Cartographie complète de votre visibilité actuelle et de celle de vos concurrents.",
  },
  {
    step: "02",
    title: "Stratégie & Plan d'Action",
    description:
      "Identification des requêtes prioritaires, définition du calendrier de contenu et des optimisations techniques à implémenter.",
  },
  {
    step: "03",
    title: "Production & Optimisation",
    description:
      "Création et réécriture de contenu GEO-optimisé. Implémentation des schemas markup. Publication d'articles de cluster.",
  },
  {
    step: "04",
    title: "Monitoring & Itération",
    description:
      "Suivi hebdomadaire des citations IA. Rapports mensuels de visibilité. Ajustements continus basés sur les données.",
  },
]

const faqItems = [
  {
    question: "Quelle est la différence entre SEO et GEO ?",
    answer:
      "Le SEO (Search Engine Optimization) vise à positionner votre site dans les résultats de Google. Le GEO (Generative Engine Optimization) vise à faire citer votre contenu par les moteurs de recherche IA comme ChatGPT, Perplexity et Google AI Overview. Les deux sont complémentaires : un bon GEO renforce aussi votre SEO en améliorant la qualité et la structure de votre contenu.",
  },
  {
    question: "Combien de temps pour voir des résultats en GEO ?",
    answer:
      "Les premiers résultats en GEO sont généralement visibles en 1 à 3 mois, ce qui est plus rapide que le SEO classique (3 à 6 mois). Cela dépend de votre autorité thématique existante, de la qualité de votre contenu actuel et de la concurrence sur vos requêtes cibles.",
  },
  {
    question: "Le GEO remplace-t-il le SEO classique ?",
    answer:
      "Non, le GEO ne remplace pas le SEO. Les deux sont complémentaires. Le SEO reste essentiel pour Google, la recherche locale, Google Images et Google Shopping. Le GEO ajoute un canal de visibilité supplémentaire via les réponses IA. Chez RLN Consulting, nous recommandons une stratégie unifiée SEO + GEO.",
  },
  {
    question: "Comment savoir si mon site est cité par les IA ?",
    answer:
      "Vous pouvez tester manuellement en posant vos requêtes cibles sur ChatGPT, Perplexity et Google (pour les AI Overviews). Chez RLN Consulting, nous utilisons des outils de monitoring automatisés qui suivent vos citations IA en continu et génèrent des rapports mensuels de visibilité.",
  },
  {
    question: "Quels types d'entreprises bénéficient du GEO ?",
    answer:
      "Toutes les entreprises ayant une présence web peuvent bénéficier du GEO, mais les résultats sont particulièrement forts pour les entreprises B2B, les SaaS, les cabinets de conseil, les e-commerces spécialisés et les entreprises de services. L'essentiel est d'avoir une expertise à partager et un contenu de qualité à optimiser.",
  },
]

const deliverables = [
  "Audit de visibilité IA complet (ChatGPT, Perplexity, Google AI, Claude)",
  "Benchmark concurrentiel sur vos requêtes cibles",
  "Stratégie de contenu GEO avec calendrier éditorial",
  "Optimisation de 10-30 pages existantes (contenu + structure)",
  "Implémentation de 10+ schemas JSON-LD (FAQ, Article, HowTo, Service, Organization)",
  "Création de 3-5 articles de cluster par thématique",
  "Guide rédactionnel GEO personnalisé pour vos équipes",
  "Dashboard de monitoring des citations IA",
  "Rapports mensuels de visibilité avec recommandations",
  "Veille continue sur les évolutions des algorithmes IA",
]

export default function GEOPage() {
  return (
    <>
      <ServiceJsonLd
        name="GEO - Référencement IA (Generative Engine Optimization)"
        description="Service d'optimisation pour les moteurs de recherche IA. Soyez cité par ChatGPT, Perplexity et Google AI Overview grâce au Generative Engine Optimization. Audit, stratégie de contenu, données structurées et monitoring."
        url="https://rln-consulting.com/services/geo"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          {
            name: "GEO - Référencement IA",
            url: "https://rln-consulting.com/services/geo",
          },
        ]}
      />
      <FAQPageJsonLd questions={faqItems} />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent">
              <Search className="h-4 w-4 mr-2" />
              Generative Engine Optimization
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Soyez cité par les{" "}
              <span className="text-primary">moteurs IA</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              ChatGPT, Perplexity, Google AI Overview — 40% des recherches passent
              désormais par l&apos;IA. Le GEO (Generative Engine Optimization) optimise
              votre contenu pour être la source que les IA choisissent de citer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                <Link href="/contact">
                  Audit de visibilité IA gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog?category=geo">Articles sur le GEO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services GEO */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos services GEO
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une approche complète pour maximiser votre visibilité sur les moteurs de recherche IA.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {geoServices.map((service, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="h-3 w-3 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Résultats concrets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Le GEO génère des résultats mesurables sur la visibilité IA de nos clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <Card key={index} className="border-border/50 text-center">
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-4">
                    {item.industry}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.useCase}
                  </p>
                  <p className="text-2xl font-bold text-accent">
                    {item.result}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi le GEO maintenant */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Pourquoi investir dans le GEO maintenant ?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">40% des recherches passent par l&apos;IA</h3>
                    <p className="text-muted-foreground text-sm">
                      ChatGPT, Perplexity, Google AI Overview — les utilisateurs consultent
                      de plus en plus les IA au lieu des moteurs de recherche classiques.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Avantage premier entrant</h3>
                    <p className="text-muted-foreground text-sm">
                      Moins de 5% des entreprises optimisent activement pour les LLM.
                      C&apos;est le moment de prendre une longueur d&apos;avance sur vos concurrents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Complémentaire au SEO</h3>
                    <p className="text-muted-foreground text-sm">
                      Le GEO renforce aussi votre SEO classique en améliorant la qualité,
                      la structure et l&apos;autorité de votre contenu (E-E-A-T).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Notre stack technique GEO
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous livrons */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ce que nous livrons concrètement
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chaque prestation GEO inclut des livrables précis et mesurables.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Notre méthodologie GEO
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée en 4 étapes pour des résultats mesurables.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Questions fréquentes sur le GEO
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur le Generative Engine Optimization.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
