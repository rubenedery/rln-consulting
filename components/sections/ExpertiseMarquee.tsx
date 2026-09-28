const expertises = [
  "Sites & e-commerce",
  "Apps mobiles",
  "SaaS",
  "IA & chatbots",
  "Configurateurs 3D",
  "CRM sur mesure",
  "SEO & GEO",
  "Accessibilité",
  "Ads",
]

const sectors = [
  "Immobilier",
  "E-commerce & mode",
  "Restaurants",
  "Cabinets comptables",
  "Avocats",
  "Santé",
  "Artisans",
  "SaaS B2B",
  "Luxe",
  "Logistique",
]

function Track({ hidden, children, className }: { hidden?: boolean; children: React.ReactNode; className: string }) {
  return (
    <div className={`v-marquee__track ${className}`} aria-hidden={hidden || undefined}>
      {children}
    </div>
  )
}

/** Double bandeau : expertises (display) et secteurs (mono), en sens inverse. */
export function ExpertiseMarquee() {
  const big = expertises.flatMap((e) => [
    <span key={e}>{e}</span>,
    <span key={`${e}-et`} className="v-em text-primary">
      et
    </span>,
  ])
  const small = sectors.flatMap((s) => [
    <span key={s}>{s}</span>,
    <span key={`${s}-sep`} aria-hidden="true">
      </span>,
  ])
  const bigCls =
    "gap-10 pr-10 whitespace-nowrap font-display text-4xl font-semibold tracking-[-0.04em] sm:gap-14 sm:pr-14 sm:text-6xl"
  const smallCls =
    "gap-10 pr-10 whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground"

  return (
    <section aria-label="Expertises et secteurs" className="border-y border-border">
      <div className="flex h-24 items-center sm:h-36">
        <div className="v-marquee w-full">
          <Track className={bigCls}>{big}</Track>
          <Track className={bigCls} hidden>
            {big}
          </Track>
        </div>
      </div>
      <div className="flex h-14 items-center border-t border-border bg-card">
        <div className="v-marquee v-marquee--rev w-full">
          <Track className={smallCls}>{small}</Track>
          <Track className={smallCls} hidden>
            {small}
          </Track>
        </div>
      </div>
    </section>
  )
}
