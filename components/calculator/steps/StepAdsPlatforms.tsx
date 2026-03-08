"use client"

import { motion } from "framer-motion"
import { useCalculator } from "../CalculatorContext"
import { OptionCardCompact } from "../ui/OptionCard"
import { adsPlatformOptions } from "@/lib/pricing-data"
import type { AdsPlatform } from "@/types/calculator"

export function StepAdsPlatforms() {
  const { state, dispatch } = useCalculator()

  const handleToggle = (platform: AdsPlatform) => {
    dispatch({ type: "TOGGLE_ADS_PLATFORM", payload: platform })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Quelles plateformes publicitaires ?
        </h2>
        <p className="text-muted-foreground">
          Sélectionnez les plateformes sur lesquelles vous souhaitez faire de la publicité
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {adsPlatformOptions.map((option, index) => (
          <motion.div
            key={option.value}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.06 }}
          >
            <OptionCardCompact
              label={option.label}
              description={option.description}
              price={option.price}
              selected={state.ads.platforms.includes(option.value)}
              onClick={() => handleToggle(option.value)}
            />
          </motion.div>
        ))}
      </div>

      {/* Selected platforms summary */}
      {state.ads.platforms.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-6 p-4 bg-primary/5 rounded-lg max-w-md mx-auto"
        >
          <p className="text-sm text-muted-foreground">
            {state.ads.platforms.length} plateforme{state.ads.platforms.length > 1 ? "s" : ""} sélectionnée{state.ads.platforms.length > 1 ? "s" : ""}
          </p>
          <p className="text-lg font-semibold text-primary mt-1">
            {state.ads.platforms.length * 500}€/mois (gestion)
          </p>
        </motion.div>
      )}

      {state.ads.platforms.length === 0 && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          Sélectionnez au moins une plateforme pour continuer
        </p>
      )}
    </motion.div>
  )
}
