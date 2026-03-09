import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Box, Eye, Glasses, Luggage, Palette, ShoppingBag, Sofa } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"

export const metadata: Metadata = {
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
  openGraph: {
    title: "Configurateurs 3D | RLN Consulting",
    description: "Configurateurs 3D interactifs pour personnaliser vos produits en temps réel.",
    url: "https://rln-consulting.com/services/configurateur-3d",
  },
}

const features = [
  {
    icon: Eye,
    title: "Visualisation Temps Réel",
    description: "Vos clients voient le produit se transformer instantanément selon leurs choix.",
  },
  {
    icon: Palette,
    title: "Personnalisation Complète",
    description: "Couleurs, matériaux, gravures, dimensions... tout est configurable.",
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
    description: "Lunettes, valises, meubles, bijoux, vêtements, accessoires...",
  },
  {
    icon: Luggage,
    title: "Export & Devis",
    description: "Génération automatique de devis et récapitulatif de configuration.",
  },
]

const useCases = [
  { icon: Glasses, name: "Lunettes & Optique" },
  { icon: Luggage, name: "Bagagerie & Maroquinerie" },
  { icon: Sofa, name: "Mobilier & Décoration" },
  { icon: Box, name: "Packaging & Coffrets" },
]

const technologies = [
  "Three.js",
  "React Three Fiber",
  "WebGL",
  "Blender",
  "glTF",
  "Next.js",
  "Shopify",
]

export default function Configurateur3DPage() {
  return (
    <>
      <ServiceJsonLd
        name="Configurateurs 3D"
        description="Développement de configurateurs 3D interactifs pour personnaliser vos produits en temps réel."
        url="https://rln-consulting.com/services/configurateur-3d"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Services", url: "https://rln-consulting.com/services" },
          { name: "Configurateurs 3D", url: "https://rln-consulting.com/services/configurateur-3d" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Box className="h-4 w-4" />
              Configurateurs 3D
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Vos produits en <span className="text-primary">3D interactive</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Permettez à vos clients de personnaliser et visualiser vos produits en temps réel.
              Lunettes, valises, meubles... tout devient configurable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Discutons de votre projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-foreground">Types de produits configurables</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border">
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Fonctionnalités</h2>
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
