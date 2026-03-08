"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Clock, Shield, Sparkles } from "lucide-react"
import { containerVariants, itemVariants } from "@/lib/animations"

const guarantees = [
  {
    icon: CheckCircle2,
    title: "Satisfaction garantie",
    description: "Nous travaillons jusqu'à ce que vous soyez 100% satisfait du résultat.",
    highlight: "100%",
  },
  {
    icon: Clock,
    title: "Réponse sous 24h",
    description: "Chaque demande reçoit une réponse dans les 24 heures ouvrées.",
    highlight: "24h",
  },
  {
    icon: Shield,
    title: "Devis gratuit",
    description: "Estimation détaillée et transparente, sans aucun engagement de votre part.",
    highlight: "Gratuit",
  },
  {
    icon: Sparkles,
    title: "Accompagnement complet",
    description: "Suivi personnalisé à chaque étape de votre projet digital.",
    highlight: "Sur-mesure",
  },
]

export function Guarantees() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Nos engagements pour votre <span className="text-primary">sérénité</span>
            </h2>
            <p className="text-muted-foreground">
              Des garanties claires pour une collaboration en toute confiance.
            </p>
          </motion.div>

          {/* Guarantees grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {guarantees.map((guarantee) => (
              <motion.div
                key={guarantee.title}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Highlight badge */}
                <div className="absolute -top-3 right-4">
                  <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {guarantee.highlight}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <guarantee.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
