import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart2, Mail, MousePointerClick, Send, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"

export const metadata: Metadata = {
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
  openGraph: {
    title: "Email Marketing & Automation | RLN Consulting",
    description: "Stratégies d'email marketing et automatisation pour convertir vos prospects.",
    url: "https://rln-consulting.com/services/email-marketing",
  },
}

const features = [
  {
    icon: Settings,
    title: "Séquences Automatisées",
    description: "Emails déclenchés automatiquement selon les actions de vos prospects.",
  },
  {
    icon: Mail,
    title: "Newsletters",
    description: "Newsletters régulières pour garder le contact avec votre audience.",
  },
  {
    icon: MousePointerClick,
    title: "Lead Nurturing",
    description: "Accompagnez vos prospects jusqu'à la conversion avec le bon message.",
  },
  {
    icon: Users,
    title: "Segmentation",
    description: "Ciblez vos emails selon le profil et le comportement de vos contacts.",
  },
  {
    icon: BarChart2,
    title: "A/B Testing",
    description: "Testez et optimisez vos emails pour améliorer les performances.",
  },
  {
    icon: Send,
    title: "Délivrabilité",
    description: "Configuration technique pour que vos emails arrivent en boîte de réception.",
  },
]

const technologies = [
  "Mailchimp",
  "Brevo",
  "ActiveCampaign",
  "HubSpot",
  "Resend",
  "ConvertKit",
  "Klaviyo",
]

export default function EmailMarketingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Email Marketing & Automation"
        description="Stratégies d'email marketing et automatisation. Séquences automatisées, newsletters, lead nurturing."
        url="https://rln-consulting.com/services/email-marketing"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          { name: "Email Marketing & Automation", url: "https://rln-consulting.com/services/email-marketing" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Mail className="h-4 w-4" />
              Email Marketing & Automation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Convertissez vos <span className="text-primary">prospects en clients</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              L'email reste le canal avec le meilleur ROI. Automatisez vos séquences
              pour convertir et fidéliser sans effort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Parlons de votre stratégie
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nos services email</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Outils utilisés</h2>
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
