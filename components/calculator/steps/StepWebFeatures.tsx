"use client"

import { motion } from "framer-motion"
import { useCalculator } from "../CalculatorContext"
import { OptionCardCompact } from "../ui/OptionCard"
import { webFeatureOptions } from "@/lib/pricing-data"
import type { WebFeature } from "@/types/calculator"

export function StepWebFeatures() {
  const { state, dispatch } = useCalculator()

  const handleToggle = (feature: WebFeature) => {
    dispatch({ type: "TOGGLE_WEB_FEATURE", payload: feature })
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
          Quelles fonctionnalités ?
        </h2>
        <p className="text-muted-foreground">
          Sélectionnez toutes les fonctionnalités souhaitées (optionnel)
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
        {webFeatureOptions.map((option, index) => (
          <motion.div
            key={option.value}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <OptionCardCompact
              label={option.label}
              description={option.description}
              icon={option.icon}
              price={option.price}
              selected={state.web.features.includes(option.value)}
              onClick={() => handleToggle(option.value)}
            />
          </motion.div>
        ))}
      </div>

      {/* Language count for multilingue */}
      {state.web.features.includes("multilingue") && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="max-w-md mx-auto mt-6 p-4 bg-muted/50 rounded-lg"
        >
          <label className="block text-sm font-medium text-foreground mb-2">
            Nombre de langues supplémentaires
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "SET_WEB_LANGUAGES",
                  payload: Math.max(1, state.web.languageCount - 1),
                })
              }
              className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-lg font-medium hover:bg-muted"
            >
              -
            </button>
            <span className="text-xl font-semibold text-foreground w-8 text-center">
              {state.web.languageCount}
            </span>
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "SET_WEB_LANGUAGES",
                  payload: Math.min(10, state.web.languageCount + 1),
                })
              }
              className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-lg font-medium hover:bg-muted"
            >
              +
            </button>
            <span className="text-sm text-muted-foreground ml-2">
              (+{state.web.languageCount * 600}€)
            </span>
          </div>
        </motion.div>
      )}

      {state.web.features.length === 0 && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          Vous pouvez passer cette étape si aucune fonctionnalité supplémentaire n'est nécessaire
        </p>
      )}
    </motion.div>
  )
}
