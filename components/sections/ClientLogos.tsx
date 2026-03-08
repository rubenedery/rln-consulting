"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

// Logos clients - remplacer par les vrais logos quand disponibles
const clients = [
  { name: "TechStart SAS", industry: "Tech" },
  { name: "E-Commerce Plus", industry: "E-commerce" },
  { name: "Design Studio", industry: "Design" },
  { name: "FinanceFlow", industry: "Finance" },
  { name: "GreenEnergy", industry: "Énergie" },
  { name: "MediaGroup", industry: "Média" },
  { name: "HealthTech", industry: "Santé" },
  { name: "RetailPro", industry: "Retail" },
]

export function ClientLogos() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Ils nous font confiance
          </p>
        </motion.div>

        {/* Logos container with marquee effect */}
        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-12 animate-marquee"
          >
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-2 group"
              >
                {/* Logo placeholder - remplacer par de vraies images */}
                <div className="w-32 h-16 rounded-lg bg-background border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <div className="flex flex-col items-center gap-1">
                    <Building2 className="h-6 w-6 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
                    <span className="text-xs font-medium text-muted-foreground/70 group-hover:text-foreground/70 transition-colors">
                      {client.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Optional: Static grid for larger screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:grid grid-cols-4 gap-8 mt-8"
        >
          {clients.slice(0, 4).map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <Building2 className="h-8 w-8 text-muted-foreground/40" />
              <span className="text-sm font-medium text-muted-foreground">
                {client.name}
              </span>
              <span className="text-xs text-muted-foreground/60">
                {client.industry}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
