import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { CaseStudyResult } from "@/types"

interface ResultsMetricsProps {
  results: CaseStudyResult[]
}

export function ResultsMetrics({ results }: ResultsMetricsProps) {
  /**
   * Détermine si une amélioration est positive ou négative
   * - Les augmentations (+) sont toujours considérées positives (ex: +45% conversions)
   * - Les réductions (-) sont aussi positives (ex: -30% temps de chargement, -20% coûts)
   */
  const isPositiveImprovement = (improvement: string): boolean => {
    return improvement.startsWith("+") || improvement.startsWith("-")
  }

  const getTrendIcon = (improvement: string) => {
    if (improvement.startsWith("+")) {
      return TrendingUp // Augmentation → flèche vers le haut
    }
    if (improvement.startsWith("-")) {
      return TrendingDown // Réduction → flèche vers le bas (mais reste positif en couleur)
    }
    return Minus
  }

  const getTrendColor = (improvement: string) => {
    // Toute amélioration chiffrée (+ ou -) est considérée positive
    if (isPositiveImprovement(improvement)) return "text-success"
    return "text-muted-foreground"
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((result, index) => {
        const TrendIcon = getTrendIcon(result.improvement)
        const trendColor = getTrendColor(result.improvement)

        return (
          <Card key={index} className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {result.metric}
                </h3>
                <TrendIcon className={`h-5 w-5 ${trendColor}`} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avant</span>
                  <span className="font-medium text-foreground">
                    {result.before}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Après</span>
                  <span className="font-medium text-foreground">
                    {result.after}
                  </span>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Amélioration
                    </span>
                    <span className={`text-lg font-bold ${trendColor}`}>
                      {result.improvement}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
