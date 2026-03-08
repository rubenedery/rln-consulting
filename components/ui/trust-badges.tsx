"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Star, CheckCircle, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const badges = [
  {
    icon: Lock,
    label: "SSL Sécurisé",
    description: "Connexion chiffrée",
  },
  {
    icon: Shield,
    label: "RGPD",
    description: "Données protégées",
  },
  {
    icon: Star,
    label: "4.9/5",
    description: "Avis clients",
  },
  {
    icon: Award,
    label: "Expert Certifié",
    description: "Google Partner",
  },
]

interface TrustBadgesProps {
  /** Variante d'affichage */
  variant?: "default" | "compact" | "inline"
  /** Classes CSS supplémentaires */
  className?: string
  /** Afficher les descriptions */
  showDescriptions?: boolean
}

export function TrustBadges({
  variant = "default",
  className,
  showDescriptions = true,
}: TrustBadgesProps) {
  if (variant === "inline") {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-6", className)}>
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <badge.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center justify-center gap-4", className)}>
        {badges.slice(0, 3).map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground"
          >
            <badge.icon className="h-3.5 w-3.5" />
            <span className="text-xs font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "grid grid-cols-2 sm:grid-cols-4 gap-4",
        className
      )}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <badge.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-medium text-foreground text-sm">{badge.label}</p>
            {showDescriptions && (
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

/**
 * Badge de confiance simple pour le footer
 */
export function FooterTrustBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6 py-4", className)}>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Lock className="h-4 w-4 text-success" />
        <span className="text-sm">Paiement sécurisé</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Shield className="h-4 w-4 text-success" />
        <span className="text-sm">RGPD Compliant</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <CheckCircle className="h-4 w-4 text-success" />
        <span className="text-sm">Devis gratuit</span>
      </div>
    </div>
  )
}
