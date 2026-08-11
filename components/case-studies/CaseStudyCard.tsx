import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CardImage } from "@/components/ui/card-image"
import { Badge } from "@/components/ui/badge"
import type { CaseStudyMeta } from "@/types"

interface CaseStudyCardProps {
  caseStudy: CaseStudyMeta
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/cas-etudes/${caseStudy.slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/30">
        <CardImage src={caseStudy.image} alt={caseStudy.title}>
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {caseStudy.industry}
            </Badge>
          </div>
        </CardImage>

        <CardContent className="pt-6">
          {/* Client */}
          <p className="text-sm text-accent font-medium mb-1">
            {caseStudy.client}
          </p>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
            {caseStudy.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {caseStudy.description}
          </p>

          {/* Services */}
          <div className="flex flex-wrap gap-1 mb-4">
            {caseStudy.services.slice(0, 2).map((service) => (
              <Badge key={service} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
          </div>

          {/* Key results */}
          {caseStudy.results.length > 0 && (
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              {caseStudy.results.slice(0, 2).map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-accent">
                    {result.improvement}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {result.metric}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Read more indicator */}
          <div className="flex items-center gap-1 text-sm text-primary font-medium mt-4 group-hover:gap-2 transition-all">
            Voir le cas d&apos;étude
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
