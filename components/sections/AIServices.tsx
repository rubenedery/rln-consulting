"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
            <Sparkles className="h-4 w-4 mr-2" />
            Nouveau
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Boostez votre entreprise avec{" "}
            <span className="text-primary">l&apos;IA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chatbots intelligents, automatisation des tâches, analyse de données...
            Nous intégrons l&apos;intelligence artificielle dans votre business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {ai_features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
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
        </motion.div>
      </div>
    </section>
  )
}
