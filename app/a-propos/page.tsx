import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Eye,
  Handshake,
  Linkedin,
  Sparkles,
  TrendingUp,
  Twitter,
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WebPageJsonLd, BreadcrumbJsonLd, PersonJsonLd, OrganizationJsonLd } from "@/components/seo"
import { CTA } from "@/components/sections"
import { companyStats, companyValues, teamMembers } from "@/lib/content"

export const metadata: Metadata = {
  title: "À Propos | Notre Histoire et Notre Équipe",
  description:
    "Découvrez l'histoire de RLN Consulting, notre équipe et nos valeurs. Une agence web passionnée par le développement et le marketing digital.",
  openGraph: {
    title: "À Propos | RLN Consulting",
    description:
      "Découvrez l'histoire de RLN Consulting et notre équipe passionnée.",
    url: "https://rln-consulting.com/a-propos",
  },
}

const valueIcons = {
  Sparkles,
  Eye,
  TrendingUp,
  Handshake,
}

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd
        title="À Propos de RLN Consulting"
        description="Découvrez l'histoire de RLN Consulting, notre équipe et nos valeurs."
        url="https://rln-consulting.com/a-propos"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "À Propos", url: "https://rln-consulting.com/a-propos" },
        ]}
      />
      {/* Schema PersonJsonLd pour E-E-A-T - Établit l'autorité du fondateur */}
      <PersonJsonLd />
      {/* Schema OrganizationJsonLd pour renforcer l'identité de l'entreprise */}
      <OrganizationJsonLd />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Une agence{" "}
              <span className="text-primary">passionnée</span> par le digital
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Depuis 2020, nous accompagnons les entreprises dans leur
              transformation numérique avec des solutions sur mesure et une
              approche orientée résultats.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Notre histoire
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                RLN Consulting est née d&apos;une passion pour le développement web
                et le marketing digital. Après plusieurs années d&apos;expérience
                dans de grandes entreprises et startups, nous avons décidé de
                créer une agence qui combine expertise technique et vision
                business.
              </p>
              <p>
                Notre mission est simple : aider les entreprises à réussir leur
                présence en ligne avec des solutions performantes et adaptées à
                leurs besoins. Nous croyons que chaque projet mérite une
                attention particulière et un travail de qualité.
              </p>
              <p>
                Que vous soyez une startup en lancement ou une entreprise
                établie, nous vous accompagnons avec la même énergie et le même
                engagement pour atteindre vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos valeurs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon =
                valueIcons[value.icon as keyof typeof valueIcons] || Sparkles
              return (
                <Card
                  key={index}
                  className="text-center border-border/50 hover:border-primary/30 transition-colors"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              L&apos;équipe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les experts derrière vos projets.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden border-border/50"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-6">{member.bio}</p>
                    {member.social && (
                      <div className="flex gap-4">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
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
