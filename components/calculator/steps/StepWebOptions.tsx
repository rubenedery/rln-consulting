"use client"

import { motion } from "framer-motion"
import { useCalculator } from "../CalculatorContext"
import { OptionCard, OptionCardCompact } from "../ui/OptionCard"
import { webDesignOptions, webTimelineOptions } from "@/lib/pricing-data"
import type { DesignLevel, DeliveryTimeline } from "@/types/calculator"

export function StepWebOptions() {
  const { state, dispatch } = useCalculator()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-10"
    >
      {/* Design Level */}
      <div>
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Niveau de design
          </h2>
          <p className="text-muted-foreground">
            Choisissez le niveau de personnalisation visuelle
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          {webDesignOptions.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <OptionCard
                label={option.label}
                description={option.description}
                icon={option.icon}
                price={option.price}
                selected={state.web.designLevel === option.value}
                popular={option.popular}
                onClick={() =>
                  dispatch({
                    type: "SET_WEB_DESIGN",
                    payload: option.value as DesignLevel,
                  })
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Délai de livraison
          </h3>
          <p className="text-sm text-muted-foreground">
            Un délai plus court implique des ressources supplémentaires
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 max-w-3xl mx-auto">
          {webTimelineOptions.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.08 }}
            >
              <OptionCardCompact
                label={option.label}
                description={option.description}
                icon={option.icon}
                price={option.price}
                selected={state.web.timeline === option.value}
                onClick={() =>
                  dispatch({
                    type: "SET_WEB_TIMELINE",
                    payload: option.value as DeliveryTimeline,
                  })
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Maintenance option */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-md mx-auto"
      >
        <OptionCardCompact
          label="Maintenance mensuelle"
          description="Mises à jour, sauvegardes, support technique"
          price="+150€/mois"
          selected={state.web.maintenance}
          onClick={() =>
            dispatch({
              type: "SET_WEB_MAINTENANCE",
              payload: !state.web.maintenance,
            })
          }
        />
      </motion.div>
    </motion.div>
  )
}
