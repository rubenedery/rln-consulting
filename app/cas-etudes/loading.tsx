import { Skeleton, SkeletonCaseStudyCard } from "@/components/ui/skeleton"

export default function CaseStudiesLoading() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Skeleton className="h-4 w-24 mx-auto mb-4" />
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-5 w-2/3 mx-auto" />
        </div>

        {/* Filters skeleton */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-28 rounded-full" />
          ))}
        </div>

        {/* Case studies grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCaseStudyCard key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
