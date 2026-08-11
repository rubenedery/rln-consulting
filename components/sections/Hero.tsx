"use client"

import Link from "next/link"
import { ArrowRight, Code, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { track_cta_click } from "@/components/analytics"

// Animations CSS pures (pas de framer-motion ici) : le h1 est l'élément LCP
// de la home, il doit être peint sans attendre l'hydratation JavaScript.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              Agence Web & Marketing Digital
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up [animation-delay:100ms]">
            Transformez vos idées en{" "}
            <span className="text-primary">solutions digitales</span>{" "}
            performantes
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Développement web sur mesure et gestion de campagnes publicitaires
            pour propulser votre entreprise vers le succès digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Button
              asChild
              size="lg"
              variant="accent"
              onClick={() => track_cta_click("demarrer_projet", "hero")}
            >
              <Link href="/contact">
                Démarrer un projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" onClick={() => track_cta_click("voir_realisations", "hero")}>
              <Link href="/cas-etudes">Voir nos réalisations</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in-up [animation-delay:400ms]">
            {[
              { value: "50+", label: "Projets livrés" },
              { value: "2020", label: "Depuis" },
              { value: "95%", label: "Satisfaction" },
              { value: "24h", label: "Réponse" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service icons */}
        <div className="mt-20 flex justify-center gap-8 lg:gap-16">
          {[
            { icon: Code, label: "Développement" },
            { icon: Target, label: "Marketing" },
            { icon: Zap, label: "Performance" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="p-3 rounded-full bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
