"use client"

import { motion } from "framer-motion"
import { useCalculator } from "../CalculatorContext"
import { OptionCard } from "../ui/OptionCard"
import { adsEngagementOptions, PRICING } from "@/lib/pricing-data"
import type { AdsEngagement } from "@/types/calculator"

const budgetPresets = [500, 1000, 2000, 5000, 10000]

export function StepAdsBudget() {
  const { state, dispatch } = useCalculator()

  const managementFee = Math.round(state.ads.monthlyBudget * PRICING.ads.managementFee)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-10"
    >
      {/* Budget selection */}
      <div>
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Budget publicitaire mensuel
          </h2>
          <p className="text-muted-foreground">
            Le budget dépensé directement sur les plateformes
          </p>
        </div>

        {/* Budget presets */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {budgetPresets.map((budget) => (
            <motion.button
              key={budget}
              type="button"
              onClick={() => dispatch({ type: "SET_ADS_BUDGET", payload: budget })}
              className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                state.ads.monthlyBudget === budget
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50 text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {budget.toLocaleString("fr-FR")}€
            </motion.button>
          ))}
        </div>

        {/* Custom budget slider */}
        <div className="max-w-md mx-auto">
          <input
            type="range"
            min="500"
            max="20000"
            step="500"
            value={state.ads.monthlyBudget}
            onChange={(e) =>
              dispatch({ type: "SET_ADS_BUDGET", payload: parseInt(e.target.value) })
            }
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>500€</span>
            <span className="text-lg font-bold text-foreground">
              {state.ads.monthlyBudget.toLocaleString("fr-FR")}€/mois
            </span>
            <span>20 000€</span>
          </div>
        </div>

        {/* Management fee info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4 p-3 bg-muted/50 rounded-lg max-w-sm mx-auto"
        >
          <p className="text-sm text-muted-foreground">
            Frais de gestion (12%) : <span className="font-semibold text-foreground">{managementFee}€/mois</span>
          </p>
        </motion.div>
      </div>

      {/* Engagement period */}
      <div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Durée d'engagement
          </h3>
          <p className="text-sm text-muted-foreground">
            Bénéficiez de réductions avec un engagement plus long
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {adsEngagementOptions.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <OptionCard
                label={option.label}
                description={option.description}
                price={option.price}
                selected={state.ads.engagement === option.value}
                popular={option.popular}
                onClick={() =>
                  dispatch({
                    type: "SET_ADS_ENGAGEMENT",
                    payload: option.value as AdsEngagement,
                  })
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
