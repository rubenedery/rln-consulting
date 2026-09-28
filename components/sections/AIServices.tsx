"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { ArrowRight, Bot, BrainCircuit, MessageSquare, Sparkles, Workflow, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { containerVariants, itemVariants } from "@/lib/animations"

const ai_features = [
  {
    icon: MessageSquare,
    title: "Chatbots IA",
    description: "Support client 24/7 avec réponses intelligentes",
  },
  {
    icon: Workflow,
    title: "Automatisation",
    description: "Éliminez les tâches répétitives",
  },
  {
    icon: BrainCircuit,
    title: "Analyse de données",
    description: "Insights et prédictions automatiques",
  },
  {
    icon: Bot,
    title: "Assistants internes",
    description: "IA formée sur vos données",
  },
]

const stats = [
  { value: "-70%", label: "Temps sur tâches répétitives" },
  { value: "+45%", label: "Satisfaction client" },
  { value: "24/7", label: "Disponibilité" },
]

export function AIServices() {
  return (
    <section className="py-20 lg:py-28  relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-secondary text-primary">
            <Sparkles className="h-4 w-4 mr-2" />
            Nouveau
          </Badge>
          <h2 className="v-display text-4xl sm:text-6xl text-foreground mb-4">
            Boostez votre entreprise avec{" "}
            <span className="v-em text-primary">l&apos;IA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Chatbots intelligents, automatisation des tâches, analyse de données...
            Nous intégrons l&apos;intelligence artificielle dans votre business.
          </p>
        </m.div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {ai_features.map((feature, index) => (
            <m.div key={index} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-all hover:shadow-lift hover:-translate-y-0.5 group text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-semibold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3"
        >
          <Button
            asChild
            size="lg"
            
          >
            <Link href="/services/ia-entreprise">
              Découvrir nos services IA
              <Zap className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Demander un audit gratuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  )
}
