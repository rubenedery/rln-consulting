"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"
import type {
  CalculatorState,
  CalculatorAction,
  ServiceType,
} from "@/types/calculator"
import { getTotalSteps } from "@/lib/pricing-data"

// ============================================
// Initial State
// ============================================

const initialState: CalculatorState = {
  currentStep: 0,
  totalSteps: 1,
  service: null,
  direction: "forward",
  web: {
    projectType: null,
    features: [],
    designLevel: "standard",
    timeline: "normal",
    languageCount: 1,
    maintenance: false,
  },
  ads: {
    platforms: [],
    monthlyBudget: 1000,
    engagement: "mensuel",
  },
  ai: {
    solutionType: null,
    complexity: "moyen",
    training: false,
    integration: false,
  },
}

// ============================================
// Reducer
// ============================================

function calculatorReducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  switch (action.type) {
    case "SET_SERVICE": {
      const newService = action.payload
      return {
        ...state,
        service: newService,
        totalSteps: getTotalSteps(newService),
        direction: "forward",
      }
    }

    case "SET_WEB_PROJECT_TYPE":
      return {
        ...state,
        web: { ...state.web, projectType: action.payload },
      }

    case "TOGGLE_WEB_FEATURE": {
      const feature = action.payload
      const features = state.web.features.includes(feature)
        ? state.web.features.filter((f) => f !== feature)
        : [...state.web.features, feature]
      return {
        ...state,
        web: { ...state.web, features },
      }
    }

    case "SET_WEB_DESIGN":
      return {
        ...state,
        web: { ...state.web, designLevel: action.payload },
      }

    case "SET_WEB_TIMELINE":
      return {
        ...state,
        web: { ...state.web, timeline: action.payload },
      }

    case "SET_WEB_LANGUAGES":
      return {
        ...state,
        web: { ...state.web, languageCount: action.payload },
      }

    case "SET_WEB_MAINTENANCE":
      return {
        ...state,
        web: { ...state.web, maintenance: action.payload },
      }

    case "TOGGLE_ADS_PLATFORM": {
      const platform = action.payload
      const platforms = state.ads.platforms.includes(platform)
        ? state.ads.platforms.filter((p) => p !== platform)
        : [...state.ads.platforms, platform]
      return {
        ...state,
        ads: { ...state.ads, platforms },
      }
    }

    case "SET_ADS_BUDGET":
      return {
        ...state,
        ads: { ...state.ads, monthlyBudget: action.payload },
      }

    case "SET_ADS_ENGAGEMENT":
      return {
        ...state,
        ads: { ...state.ads, engagement: action.payload },
      }

    case "SET_AI_SOLUTION_TYPE":
      return {
        ...state,
        ai: { ...state.ai, solutionType: action.payload },
      }

    case "SET_AI_COMPLEXITY":
      return {
        ...state,
        ai: { ...state.ai, complexity: action.payload },
      }

    case "SET_AI_TRAINING":
      return {
        ...state,
        ai: { ...state.ai, training: action.payload },
      }

    case "SET_AI_INTEGRATION":
      return {
        ...state,
        ai: { ...state.ai, integration: action.payload },
      }

    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1),
        direction: "forward",
      }

    case "PREV_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 0),
        direction: "backward",
      }

    case "GO_TO_STEP":
      return {
        ...state,
        currentStep: Math.max(0, Math.min(action.payload, state.totalSteps - 1)),
        direction: action.payload > state.currentStep ? "forward" : "backward",
      }

    case "RESET":
      return initialState

    default:
      return state
  }
}

// ============================================
// Context
// ============================================

interface CalculatorContextValue {
  state: CalculatorState
  dispatch: React.Dispatch<CalculatorAction>
  // Convenience methods
  nextStep: () => void
  prevStep: () => void
  canGoNext: () => boolean
  canGoPrev: () => boolean
  reset: () => void
  setService: (service: ServiceType) => void
}

const CalculatorContext = createContext<CalculatorContextValue | null>(null)

// ============================================
// Provider
// ============================================

interface CalculatorProviderProps {
  children: ReactNode
}

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  const nextStep = () => dispatch({ type: "NEXT_STEP" })
  const prevStep = () => dispatch({ type: "PREV_STEP" })
  const reset = () => dispatch({ type: "RESET" })
  const setService = (service: ServiceType) =>
    dispatch({ type: "SET_SERVICE", payload: service })

  const canGoNext = (): boolean => {
    // Validation logic for each step
    switch (state.currentStep) {
      case 0: // Service selection
        return state.service !== null
      case 1: // Type selection (web/ads/ai specific)
        if (state.service === "web") return state.web.projectType !== null
        if (state.service === "ads") return state.ads.platforms.length > 0
        if (state.service === "ai") return state.ai.solutionType !== null
        return false
      default:
        return state.currentStep < state.totalSteps - 1
    }
  }

  const canGoPrev = () => state.currentStep > 0

  return (
    <CalculatorContext.Provider
      value={{
        state,
        dispatch,
        nextStep,
        prevStep,
        canGoNext,
        canGoPrev,
        reset,
        setService,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

// ============================================
// Hook
// ============================================

export function useCalculator() {
  const context = useContext(CalculatorContext)
  if (!context) {
    throw new Error("useCalculator must be used within a CalculatorProvider")
  }
  return context
}
