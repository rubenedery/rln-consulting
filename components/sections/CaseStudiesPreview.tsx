import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CaseStudyMeta } from "@/types"

interface CaseStudiesPreviewProps {
  caseStudies: CaseStudyMeta[]
  limit?: number
}

export function CaseStudiesPreview({ caseStudies, limit = 4 }: CaseStudiesPreviewProps) {
  const displayed = caseStudies.slice(0, limit)
  if (displayed.length === 0) return null

  return (
    <section className="pb-24 lg:pb-40" aria-labelledby="realisations-title">
      <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="v-label">Réalisations</span>
            <h2 id="realisations-title" className="v-display text-5xl sm:text-7xl">
              Des preuves, <span className="v-em">pas des promesses.</span>
            </h2>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/cas-etudes">Tous les cas clients</Link>
          </Button>
        </header>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {displayed.map((study, idx) => (
            <Link key={study.slug} href={`/cas-etudes/${study.slug}`} className="group flex flex-col gap-5">
              <div className="relative aspect-[4/3] max-w-full overflow-hidden rounded-sm bg-muted">
                <Image
                  src={study.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className={
                    idx % 2 === 0
                      ? "absolute inset-0 bg-primary/55 mix-blend-multiply"
                      : "absolute inset-0 bg-[#0B0D12]/50 mix-blend-multiply"
                  }
                />
                {study.results[0] && (
                  <div className="absolute bottom-5 left-5 flex flex-col gap-1 text-white">
                    <span className="font-display text-6xl leading-none font-semibold tracking-[-0.05em] sm:text-7xl">
                      {study.results[0].improvement}
                    </span>
                    <span className="font-mono text-xs tracking-[0.06em] uppercase text-white/85">{study.results[0].metric}</span>
                  </div>
                )}
                <span className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-white text-[#0B0D12] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl leading-tight font-semibold sm:text-[28px]">{study.title}</h3>
                <span className="v-label shrink-0">{study.industry}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {study.results.slice(0, 3).map((r) => (
                  <span key={r.metric} className="inline-flex h-8 items-center rounded-full bg-secondary px-3 font-mono text-xs text-secondary-foreground">
                    {r.metric} : {r.before} → {r.after}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
