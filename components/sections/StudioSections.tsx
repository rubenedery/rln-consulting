"use client"

import * as React from "react"

/* ---------- Inclus dans chaque projet ---------- */
const included = [
  { code: "SEO", title: "Référencement naturel", text: "Balisage, données structurées, sitemap, contenus optimisés pour Google et pour les IA." },
  { code: "A11Y", title: "Accessibilité", text: "Conçu selon les critères WCAG et RGAA : contrastes, navigation au clavier, lecteurs d'écran." },
  { code: "PERF", title: "Performance", text: "Core Web Vitals au vert, images optimisées, chargement rapide sur mobile." },
  { code: "RGPD", title: "Conformité", text: "Cookies, consentement, mentions légales et données hébergées en Europe." },
  { code: "RUN", title: "Suivi & maintenance", text: "Mises à jour, sécurité, sauvegardes et analytics pour mesurer les résultats." },
]

export function Included() {
  return (
    <section className="pb-24 lg:pb-40" aria-labelledby="inclus-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-lg border bg-card p-6 sm:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="inclus-title" className="text-3xl font-semibold sm:text-4xl">
              Inclus dans <span className="v-em">chaque</span> projet.
            </h2>
            <span className="v-label">Sans supplément</span>
          </div>
          <ul className="grid gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {included.map((it, i) => (
              <li key={it.code} className={`flex flex-col gap-2.5 lg:pr-6 ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}>
                <span className="font-mono text-[13px] text-primary">{it.code}</span>
                <strong className="font-display text-lg leading-tight font-semibold">{it.title}</strong>
                <span className="text-sm leading-relaxed text-muted-foreground">{it.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- Chiffres (compteurs) ---------- */
const stats = [
  { label: "Livrés", value: 50, suffix: "+", text: "projets, du site vitrine à l'app mobile." },
  { label: "Actifs depuis", value: 2020, suffix: "", text: "au service des entreprises, partout en France." },
  { label: "Satisfaction", value: 95, suffix: "%", text: "des clients recommandent le studio." },
  { label: "Réactivité", value: 24, suffix: "h", text: "pour une première réponse chiffrée." },
]

function useCountUp(target: number, run: boolean) {
  const [v, setV] = React.useState(target)
  React.useEffect(() => {
    if (!run || target > 999) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let raf = 0
    const t0 = performance.now()
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / 1600)
      setV(Math.round(target * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(step)
    }
    setV(0)
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [run, target])
  return v
}

function Stat({ s, run }: { s: (typeof stats)[number]; run: boolean }) {
  const v = useCountUp(s.value, run)
  return (
    <div className="grid gap-3 border-t border-foreground pt-5">
      <span className="v-label">{s.label}</span>
      <div className="font-display text-7xl leading-[0.9] font-semibold tracking-[-0.05em] tabular-nums lg:text-8xl">
        {v}
        <span className="v-em text-primary">{s.suffix}</span>
      </div>
      <p className="text-[15px] text-muted-foreground">{s.text}</p>
    </div>
  )
}

export function Stats() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [run, setRun] = React.useState(false)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section className="pb-24 lg:pb-40" aria-label="Chiffres clés">
      <div ref={ref} className="container mx-auto grid gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <Stat key={s.label} s={s} run={run} />
        ))}
      </div>
    </section>
  )
}

/* ---------- Le studio : deux faces ---------- */
export function Studio() {
  return (
    <section className="pb-24 lg:pb-40" aria-labelledby="studio-title">
      <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="grid items-end gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="v-label">Le studio</span>
            <h2 id="studio-title" className="v-display text-5xl sm:text-7xl">
              Un studio, <span className="v-em">deux faces.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="max-w-[44ch] text-lg leading-relaxed text-muted-foreground">
              Pas de chef de projet intermédiaire. Vous parlez directement aux deux associés qui font le travail.
            </p>
            <span className="inline-flex h-9 items-center rounded-full border bg-card px-4 font-mono text-xs">Un devis · deux associés</span>
          </div>
        </header>
        <div className="group/split relative flex flex-col gap-5 lg:h-[560px] lg:flex-row">
          <article className="flex min-w-0 flex-col gap-5 overflow-hidden rounded-lg bg-[#0B0D12] p-8 text-white transition-[flex-grow] duration-700 ease-[cubic-bezier(.7,0,.2,1)] lg:flex-1 lg:p-11 lg:group-hover/split:flex-[0.8] lg:hover:!flex-[1.4]">
            <span className="v-label !text-[#C8CDFF]">Recto · l&apos;associé tech</span>
            <h3 className="text-4xl leading-none font-semibold tracking-[-0.035em] lg:text-5xl">Il construit ce qui tient la charge.</h3>
            <pre className="overflow-hidden rounded-md bg-[#14161D] px-5 py-4 font-mono text-sm leading-[1.9] text-[#959AAB]" aria-hidden="true">
              <span className="text-[#8B93FF]">const</span> projet = <span className="text-[#8B93FF]">await</span> rln.build({"{"}
              {"\n"}  stack: [<span className="text-[#C8CDFF]">&apos;next&apos;</span>, <span className="text-[#C8CDFF]">&apos;react-native&apos;</span>, <span className="text-[#C8CDFF]">&apos;ia&apos;</span>],
              {"\n"}  accessible: <span className="text-[#8B93FF]">true</span>, maintenance: <span className="text-[#8B93FF]">true</span>
              {"\n"}{"})"}
              <span className="v-caret text-[#8B93FF]" />
            </pre>
            <ul className="mt-auto flex flex-wrap gap-2">
              {["Architecture", "Web & mobile", "IA", "3D", "CRM"].map((t) => (
                <li key={t} className="rounded-full border border-[#252833] bg-[#14161D] px-3 py-1.5 font-mono text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </article>
          <article className="group relative flex min-w-0 flex-col gap-5 overflow-hidden rounded-lg bg-primary p-8 text-primary-foreground transition-[flex-grow] duration-700 ease-[cubic-bezier(.7,0,.2,1)] lg:flex-1 lg:p-11 lg:group-hover/split:flex-[0.8] lg:hover:!flex-[1.4]">
            <span className="v-fold" aria-hidden="true" />
            <span className="v-label !text-white/80">Verso · l&apos;associée marketing</span>
            <h3 className="text-4xl leading-none font-semibold tracking-[-0.035em] lg:text-5xl">
              Elle fait en sorte qu&apos;on <span className="v-em">vous trouve.</span>
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {[
                ["Marque", "positionnement, messages"],
                ["Visibilité", "SEO, GEO, contenus"],
                ["Clients", "campagnes, suivi"],
              ].map(([a, b]) => (
                <div key={a} className="grid gap-1.5 rounded-md bg-white/12 p-4">
                  <span className="font-display text-2xl font-semibold">{a}</span>
                  <span className="text-[13px] text-white/85">{b}</span>
                </div>
              ))}
            </div>
            <ul className="mt-auto flex flex-wrap gap-2">
              {["Stratégie", "SEO & GEO", "Google & Meta Ads", "Emailing", "Relation client"].map((t) => (
                <li key={t} className="rounded-full bg-white/15 px-3 py-1.5 font-mono text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ---------- Méthode ---------- */
const steps = [
  { t: "Audit", d: "On analyse votre site, votre marché et vos chiffres. Devis détaillé sous 24 h.", w: "Semaine 1" },
  { t: "Conception", d: "Positionnement, parcours, maquettes. Vous validez avant la moindre ligne de code.", w: "Semaines 2–3" },
  { t: "Build", d: "Site vitrine en 2 à 4 semaines, e-commerce en 4 à 8. Démo chaque semaine.", w: "Selon le projet" },
  { t: "Croissance", d: "Mise en ligne, SEO, campagnes et point mensuel sur les résultats.", w: "En continu" },
]

export function Method() {
  return (
    <section className="pb-24 lg:pb-40" aria-labelledby="methode-title">
      <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4">
          <span className="v-label">Méthode</span>
          <h2 id="methode-title" className="v-display text-5xl sm:text-7xl">
            Quatre étapes, <span className="v-em">zéro zone grise.</span>
          </h2>
        </header>
        <ol className="grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className={`flex flex-col gap-3.5 py-7 sm:pr-7 ${i > 0 ? "lg:border-l lg:pl-7" : ""}`}>
              <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[28px] leading-tight font-semibold">{s.t}</h3>
              <p className="leading-relaxed text-muted-foreground">{s.d}</p>
              <span className="v-label">{s.w}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
