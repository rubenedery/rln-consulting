import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Database, LayoutDashboard, Settings, Users, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"

export const metadata: Metadata = {
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
  openGraph: {
    title: "CRM & Applications Métier | RLN Consulting",
    description: "Solutions CRM et applications métier sur mesure pour votre entreprise.",
    url: "https://rln-consulting.com/services/crm-applications-metier",
  },
}

const features = [
  {
    icon: Users,
    title: "CRM Personnalisé",
    description: "Gérez vos contacts, prospects et clients avec un outil adapté à votre façon de travailler.",
  },
  {
    icon: LayoutDashboard,
    title: "Tableaux de Bord",
    description: "Visualisez vos KPIs métier en temps réel avec des dashboards sur mesure.",
  },
  {
    icon: Workflow,
    title: "Gestion Pipeline",
    description: "Suivez vos opportunités commerciales de la prospection à la signature.",
  },
  {
    icon: Settings,
    title: "Automatisations",
    description: "Automatisez les tâches répétitives et gagnez du temps chaque jour.",
  },
  {
    icon: Database,
    title: "Intégrations",
    description: "Connectez votre CRM à vos outils existants : email, facturation, agenda...",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Rapports automatiques et exports pour piloter votre activité.",
  },
]

const technologies = [
  "Next.js",
  "React",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Airtable",
  "Notion API",
  "Zapier",
  "Make",
]

export default function CrmApplicationsMetierPage() {
  return (
    <>
      <ServiceJsonLd
        name="CRM & Applications Métier"
        description="Développement de CRM et applications métier sur mesure. Tableaux de bord, gestion pipeline, automatisations."
        url="https://rln-consulting.com/services/crm-applications-metier"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          { name: "CRM & Applications Métier", url: "https://rln-consulting.com/services/crm-applications-metier" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <LayoutDashboard className="h-4 w-4" />
              CRM & Applications Métier
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Outils <span className="text-primary">sur mesure</span> pour votre métier
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Fini les outils génériques qui ne correspondent pas à vos process.
              Nous créons des solutions adaptées à votre façon de travailler.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Discutons de vos besoins
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ce qu'on peut créer pour vous</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technologies</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
