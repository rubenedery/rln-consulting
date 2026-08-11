import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CTA } from "@/components/sections"
import { siteConfig } from "@/lib/constants"

const baseUrl = siteConfig.url

export const metadata: Metadata = {
  title: "Outils Gratuits en Ligne : Quittance de Loyer, Simulateur de Prix",
  description:
    "Nos outils gratuits en ligne, sans inscription : générateur de quittance de loyer conforme, simulateur de prix de site internet. Simples, rapides et respectueux de vos données.",
  alternates: {
    canonical: "/outils",
  },
}

const outils = [
  {
    name: "Générateur de quittance de loyer",
    href: "/outils/quittance-de-loyer",
    description:
      "Créez une quittance de loyer conforme à la loi du 6 juillet 1989 : aperçu instantané, impression ou export PDF. Gratuit, sans inscription.",
    icon: FileText,
  },
  {
    name: "Simulateur de prix de site internet",
    href: "/tarifs/simulateur",
    description:
      "Estimez le coût de votre projet web, e-commerce, publicité ou IA en quelques questions. Estimation immédiate, sans engagement.",
    icon: Calculator,
  },
]

export default function OutilsPage() {
  const breadcrumbItems = [
    { name: "Accueil", url: baseUrl },
    { name: "Outils", url: `${baseUrl}/outils` },
  ]

  return (
    <>
      <WebPageJsonLd
        title="Outils gratuits en ligne"
        description="Générateur de quittance de loyer, simulateur de prix de site internet : des outils gratuits, sans inscription."
        url={`${baseUrl}/outils`}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ItemListJsonLd
        name="Outils gratuits RLN Consulting"
        description="Outils en ligne gratuits et sans inscription"
        items={outils.map((outil, index) => ({
          name: outil.name,
          url: `${baseUrl}${outil.href}`,
          description: outil.description,
          position: index + 1,
        }))}
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Outils" }]} className="mb-6" />
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Outils <span className="text-primary">gratuits</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Des outils en ligne simples et utiles, sans inscription et sans transmission de
              vos données. Utilisez-les librement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {outils.map((outil) => (
              <Link key={outil.href} href={outil.href}>
                <Card className="h-full hover:border-primary/30 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <outil.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {outil.name}
                      <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{outil.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
