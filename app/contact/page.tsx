import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"
import { ContactForm } from "./ContactForm"
import { siteConfig } from "@/lib/constants"
import { Guarantees } from "@/components/sections"
import { CalendlyWidget } from "@/components/ui/calendly-widget"
import { TrustBadges } from "@/components/ui/trust-badges"

export const metadata: Metadata = {
  title: "Contact | Discutons de Votre Projet",
  description:
    "Contactez RLN Consulting pour discuter de votre projet web ou marketing digital. Devis gratuit et réponse sous 24h.",
  openGraph: {
    title: "Contact | RLN Consulting",
    description: "Contactez-nous pour discuter de votre projet digital.",
    url: "https://rln-consulting.com/contact",
  },
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: siteConfig.contact.location,
    href: null,
  },
  {
    icon: Clock,
    title: "Disponibilité",
    value: "Lun-Ven, 9h-18h",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <WebPageJsonLd
        title="Contactez RLN Consulting"
        description="Contactez-nous pour discuter de votre projet web ou marketing digital."
        url="https://rln-consulting.com/contact"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Contact", url: "https://rln-consulting.com/contact" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Discutons de votre{" "}
              <span className="text-primary">projet</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Vous avez un projet en tête ? Contactez-nous pour en discuter.
              Nous vous répondons sous 24 heures.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Calendly booking */}
              <Card className="mt-8 border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Préférez-vous un appel ?</CardTitle>
                  <CardDescription>
                    Réservez directement un créneau de 30 minutes pour discuter
                    de votre projet.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <CalendlyWidget
                    buttonText="Réserver un appel"
                    variant="default"
                    size="sm"
                  />
                </CardContent>
              </Card>

              {/* FAQ teaser */}
              <Card className="mt-4 border-accent/30 bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg">Questions fréquentes</CardTitle>
                  <CardDescription>
                    Consultez notre FAQ pour trouver des réponses rapides à vos
                    questions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/faq">
                      Voir la FAQ
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Décrivez votre projet et nous vous contacterons rapidement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                  {/* Trust badges below form */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <TrustBadges variant="compact" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees section */}
      <Guarantees />
    </>
  )
}
