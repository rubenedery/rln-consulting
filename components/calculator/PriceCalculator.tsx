"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalculatorProvider, useCalculator } from "./CalculatorContext"
import { ProgressBar } from "./ui/ProgressBar"
import { StepServiceSelection } from "./steps/StepServiceSelection"
import { StepWebProject } from "./steps/StepWebProject"
import { StepWebFeatures } from "./steps/StepWebFeatures"
import { StepWebOptions } from "./steps/StepWebOptions"
import { StepAdsPlatforms } from "./steps/StepAdsPlatforms"
import { StepAdsBudget } from "./steps/StepAdsBudget"
import { StepAIType } from "./steps/StepAIType"
import { StepAIOptions } from "./steps/StepAIOptions"
import { StepResults } from "./steps/StepResults"
import { getStepsForService } from "@/lib/pricing-data"

// Slide variants for animations
const slideVariants = {
  enter: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? -100 : 100,
    opacity: 0,
  }),
}

function CalculatorContent() {
  const { state, nextStep, prevStep, canGoNext, canGoPrev } = useCalculator()
  const { currentStep, service, direction } = state

  const steps = getStepsForService(service)
  const currentStepId = steps[currentStep]
  const isLastStep = currentStepId === "results"

  // Render current step
  const renderStep = () => {
    switch (currentStepId) {
      case "service":
        return <StepServiceSelection />
      case "web-project":
        return <StepWebProject />
      case "web-features":
        return <StepWebFeatures />
      case "web-options":
        return <StepWebOptions />
      case "ads-platforms":
        return <StepAdsPlatforms />
      case "ads-budget":
        return <StepAdsBudget />
      case "ai-type":
        return <StepAIType />
      case "ai-options":
        return <StepAIOptions />
      case "results":
        return <StepResults />
      default:
        return <StepServiceSelection />
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <ProgressBar />
      </div>

      {/* Step content */}
      <Card className="overflow-hidden">
        <CardContent className="pt-8 pb-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStepId}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="min-h-[400px] flex flex-col justify-center"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      {!isLastStep && (
        <div className="flex justify-between items-center mt-6 gap-4">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={!canGoPrev()}
            className="flex-1 sm:flex-none"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Précédent</span>
            <span className="sm:hidden">Retour</span>
          </Button>

          <Button
            onClick={nextStep}
            disabled={!canGoNext()}
            className="flex-1 sm:flex-none bg-primary hover:bg-primary/90"
          >
            <span className="hidden sm:inline">Continuer</span>
            <span className="sm:hidden">Suivant</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Mobile navigation bar (sticky at bottom) */}
      {!isLastStep && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border sm:hidden">
          <div className="flex gap-3 max-w-lg mx-auto">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={!canGoPrev()}
              className="flex-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>

            <Button
              onClick={nextStep}
              disabled={!canGoNext()}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Suivant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Spacer for mobile navigation */}
      {!isLastStep && <div className="h-20 sm:hidden" />}
    </div>
  )
}

export function PriceCalculator() {
  return (
    <CalculatorProvider>
      <CalculatorContent />
    </CalculatorProvider>
  )
}
