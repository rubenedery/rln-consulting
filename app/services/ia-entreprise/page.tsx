import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  MessageSquare,
  Sparkles,
  Workflow,
  Zap,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"

export const metadata: Metadata = {
  title: "IA pour Entreprises | Chatbots, Automatisation & Intégration",
  description:
    "Intégrez l'intelligence artificielle dans votre entreprise. Chatbots, automatisation des tâches, analyse de données et assistants IA sur mesure.",
  keywords: [
    "IA entreprise",
    "intelligence artificielle",
    "chatbot",
    "automatisation",
    "GPT",
    "Claude",
    "assistant IA",
    "intégration IA",
  ],
  openGraph: {
    title: "IA pour Entreprises | RLN Consulting",
    description:
      "Transformez votre entreprise avec l'intelligence artificielle. Chatbots, automatisation et solutions sur mesure.",
    url: "https://rln-consulting.com/services/ia-entreprise",
    images: [{ url: "/api/og?title=IA+pour+Entreprises&description=Chatbots%2C+Automatisation+%26+Int%C3%A9gration+IA+Sur+Mesure&type=service", width: 1200, height: 630 }],
  },
}

const services = [
  {
    icon: MessageSquare,
    title: "Chatbots Intelligents",
    description:
      "Assistants virtuels disponibles 24/7 pour répondre aux questions de vos clients et qualifier vos leads.",
    benefits: ["Support client automatisé", "Qualification de leads", "Réduction des coûts"],
  },
  {
    icon: Workflow,
    title: "Automatisation des Tâches",
    description:
      "Automatisez les tâches répétitives : emails, rapports, saisie de données, synchronisations.",
    benefits: ["Gain de temps", "Zéro erreur humaine", "Productivité x10"],
  },
  {
    icon: BrainCircuit,
    title: "Analyse de Données IA",
    description:
      "Exploitez vos données avec l'IA pour des insights actionnables et des prédictions fiables.",
    benefits: ["Insights automatiques", "Prédictions", "Tableaux de bord intelligents"],
  },
  {
    icon: Bot,
    title: "Assistants IA Internes",
    description:
      "Créez des assistants IA formés sur vos données pour aider vos équipes au quotidien.",
    benefits: ["Base de connaissances IA", "Formation accélérée", "Documentation vivante"],
  },
  {
    icon: Sparkles,
    title: "Génération de Contenu",
    description:
      "Créez du contenu marketing, des descriptions produits et des emails personnalisés à grande échelle.",
    benefits: ["Contenu à la demande", "Personnalisation", "Multi-langues"],
  },
  {
    icon: Zap,
    title: "Intégrations API",
    description:
      "Connectez les meilleurs modèles IA (GPT-4, Claude, Gemini) à vos outils existants.",
    benefits: ["Intégration CRM/ERP", "Workflows custom", "API sur mesure"],
  },
]

const technologies = [
  "OpenAI GPT-4",
  "Anthropic Claude",
  "Google Gemini",
  "Langchain",
  "Pinecone",
  "Vercel AI SDK",
  "Make/Zapier",
  "n8n",
  "Python",
  "Node.js",
]

const useCases = [
  {
    industry: "E-commerce",
    useCase: "Recommandations produits personnalisées",
    result: "+35% panier moyen",
  },
  {
    industry: "Service client",
    useCase: "Chatbot de support 24/7",
    result: "-70% tickets niveau 1",
  },
  {
    industry: "RH",
    useCase: "Tri automatique des CV",
    result: "10x plus rapide",
  },
  {
    industry: "Marketing",
    useCase: "Génération d'emails personnalisés",
    result: "+45% taux d'ouverture",
  },
]

const process_steps = [
  {
    step: "01",
    title: "Audit & Opportunités",
    description:
      "Analyse de vos processus pour identifier les cas d'usage IA à fort ROI.",
  },
  {
    step: "02",
    title: "Preuve de Concept",
    description:
      "Développement rapide d'un prototype pour valider la faisabilité et l'impact.",
  },
  {
    step: "03",
    title: "Développement",
    description:
      "Création de la solution IA intégrée à votre écosystème existant.",
  },
  {
    step: "04",
    title: "Déploiement & Suivi",
    description:
      "Mise en production, formation de vos équipes et amélioration continue.",
  },
]

export default function IAEntreprisePage() {
  return (
    <>
      <ServiceJsonLd
        name="IA pour Entreprises"
        description="Services d'intégration d'intelligence artificielle pour entreprises. Chatbots, automatisation, analyse de données et assistants IA sur mesure."
        url="https://rln-consulting.com/services/ia-entreprise"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          {
            name: "IA pour Entreprises",
            url: "https://rln-consulting.com/services/ia-entreprise",
          },
        ]}
      />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent">
              <BrainCircuit className="h-4 w-4 mr-2" />
              Intelligence Artificielle
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Transformez votre entreprise avec{" "}
              <span className="text-primary">l&apos;IA</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Chatbots intelligents, automatisation des tâches, analyse de données...
              Nous intégrons l&apos;IA dans votre entreprise pour booster votre
              productivité et votre croissance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                <Link href="/contact">
                  Discutons de votre projet IA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cas-etudes">Voir nos cas d&apos;usage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos services IA
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions d&apos;intelligence artificielle adaptées à vos besoins métier.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Cas d&apos;usage concrets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              L&apos;IA transforme tous les secteurs. Voici quelques exemples de résultats obtenus.
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

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Pourquoi intégrer l&apos;IA maintenant ?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Avantage compétitif</h3>
                    <p className="text-muted-foreground text-sm">
                      Les entreprises qui adoptent l&apos;IA aujourd&apos;hui prennent une longueur d&apos;avance sur leurs concurrents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Gain de temps massif</h3>
                    <p className="text-muted-foreground text-sm">
                      Automatisez les tâches répétitives et libérez vos équipes pour des missions à haute valeur ajoutée.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">ROI rapide</h3>
                    <p className="text-muted-foreground text-sm">
                      Nos solutions IA génèrent un retour sur investissement mesurable dès les premiers mois.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Technologies maîtrisées
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

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Notre approche
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie pragmatique pour des résultats concrets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process_steps.map((step, index) => (
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

      <CTA />
    </>
  )
}
