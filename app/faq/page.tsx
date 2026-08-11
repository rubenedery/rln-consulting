import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo"
import { FAQ, CTA } from "@/components/sections"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  alternates: {
    canonical: "/faq",
  },
  title: "FAQ | Questions Fréquentes",
  description:
    "Retrouvez les réponses aux questions les plus courantes sur nos services de développement web et gestion publicitaire. Tarifs, délais, processus.",
  openGraph: {
    title: "FAQ | RLN Consulting",
    description: "Questions fréquentes sur nos services de développement web et marketing digital.",
    url: `${siteConfig.url}/faq`,
  },
}

export default function FAQPage() {
  return (
    <>
      <WebPageJsonLd
        title="FAQ - RLN Consulting"
        description="Questions fréquentes sur nos services"
        url={`${siteConfig.url}/faq`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "FAQ", url: `${siteConfig.url}/faq` },
        ]}
      />
      <FAQPageJsonLd />

      <FAQ headingLevel="h1" />

      {/* Additional CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Vous n&apos;avez pas trouvé la réponse ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
            Contactez-nous directement.
          </p>
          <Button asChild variant="accent">
            <Link href="/contact">
              Nous contacter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CTA />
    </>
  )
}
