"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useCalculator } from "../CalculatorContext"

interface ProgressBarProps {
  className?: string
}

export function ProgressBar({ className }: ProgressBarProps) {
  const { state } = useCalculator()
  const { currentStep, totalSteps } = state
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className={cn("w-full", className)}>
      {/* Mobile: Step counter */}
      <div className="flex items-center justify-between mb-2 sm:hidden">
        <span className="text-sm font-medium text-foreground">
          Étape {currentStep + 1} sur {totalSteps}
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Desktop: Step dots */}
      <div className="hidden sm:flex items-center justify-between mt-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-300",
                index <= currentStep
                  ? "bg-primary"
                  : "bg-muted-foreground/30"
              )}
              initial={false}
              animate={{
                scale: index === currentStep ? 1.3 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            {index < totalSteps - 1 && (
              <div className="hidden" /> // Line between dots handled by progress bar
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
