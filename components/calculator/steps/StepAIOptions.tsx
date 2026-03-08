"use client"

import { motion } from "framer-motion"
import { GraduationCap, Plug } from "lucide-react"
import { useCalculator } from "../CalculatorContext"
import { OptionCard, OptionCardCompact } from "../ui/OptionCard"
import { aiComplexityOptions, PRICING } from "@/lib/pricing-data"
import type { AIComplexity } from "@/types/calculator"

export function StepAIOptions() {
  const { state, dispatch } = useCalculator()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-10"
    >
      {/* Complexity selection */}
      <div>
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Niveau de complexité
          </h2>
          <p className="text-muted-foreground">
            Définissez le niveau de personnalisation de votre solution
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          {aiComplexityOptions.map((option, index) => (
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
                selected={state.ai.complexity === option.value}
                popular={option.popular}
                onClick={() =>
                  dispatch({
                    type: "SET_AI_COMPLEXITY",
                    payload: option.value as AIComplexity,
                  })
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional options */}
      <div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Options supplémentaires
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <OptionCardCompact
              label="Formation équipe"
              description="2h de formation pour vos équipes"
              icon={GraduationCap}
              price={`+${PRICING.ai.training}€`}
              selected={state.ai.training}
              onClick={() =>
                dispatch({ type: "SET_AI_TRAINING", payload: !state.ai.training })
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <OptionCardCompact
              label="Intégration systèmes"
              description="Connexion à vos outils existants"
              icon={Plug}
              price={`+${PRICING.ai.integration}€`}
              selected={state.ai.integration}
              onClick={() =>
                dispatch({ type: "SET_AI_INTEGRATION", payload: !state.ai.integration })
              }
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
