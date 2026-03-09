import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Bell, Cloud, Smartphone, Tablet, Zap, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo"
import { CTA, FAQ } from "@/components/sections"
import { serviceFaqs } from "@/lib/content"

export const metadata: Metadata = {
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
  openGraph: {
    title: "Applications Mobiles | RLN Consulting",
    description: "Développement d'applications mobiles iOS et Android sur mesure.",
    url: "https://rln-consulting.com/services/applications-mobiles",
  },
}

const features = [
  {
    icon: Smartphone,
    title: "Apps iOS",
    description: "Applications iPhone et iPad optimisées pour l'écosystème Apple.",
  },
  {
    icon: Tablet,
    title: "Apps Android",
    description: "Applications pour smartphones et tablettes Android, toutes versions.",
  },
  {
    icon: Zap,
    title: "Cross-Platform",
    description: "Un seul code pour iOS et Android avec React Native ou Flutter.",
  },
  {
    icon: Bell,
    title: "Notifications Push",
    description: "Engagez vos utilisateurs avec des notifications ciblées.",
  },
  {
    icon: Cloud,
    title: "Mode Hors-ligne",
    description: "Vos utilisateurs peuvent utiliser l'app même sans connexion.",
  },
  {
    icon: Download,
    title: "Publication Stores",
    description: "Nous gérons la publication sur App Store et Google Play.",
  },
]

const technologies = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "Firebase",
  "Expo",
  "App Store Connect",
  "Google Play Console",
]

export default function ApplicationsMobilesPage() {
  return (
    <>
      <ServiceJsonLd
        name="Applications Mobiles"
        description="Développement d'applications mobiles iOS et Android. Apps natives ou cross-platform avec React Native et Flutter."
        url="https://rln-consulting.com/services/applications-mobiles"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          { name: "Applications Mobiles", url: "https://rln-consulting.com/services/applications-mobiles" },
        ]}
      />
      <FAQPageJsonLd questions={serviceFaqs["applications-mobiles"]} />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Smartphone className="h-4 w-4" />
              Applications Mobiles
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Applications <span className="text-primary">iOS & Android</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Développement d'applications mobiles performantes pour toucher vos clients
              sur leurs smartphones. Apps natives ou cross-platform selon vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Discutons de votre app
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nos expertises</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des applications mobiles adaptées à tous vos besoins.
            </p>
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

      {/* FAQ Section */}
      <FAQ items={serviceFaqs["applications-mobiles"]} />

      <CTA />
    </>
  )
}
