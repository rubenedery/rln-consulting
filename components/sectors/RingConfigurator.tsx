"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const METALS = [
  { id: "jaune", label: "Or jaune", light: "#F3D98A", mid: "#D9B24C", dark: "#A67C22" },
  { id: "blanc", label: "Or blanc", light: "#FFFFFF", mid: "#D7DAE1", dark: "#9EA3AE" },
  { id: "rose", label: "Or rose", light: "#F8D3C4", mid: "#E0A68E", dark: "#B0705A" },
  { id: "platine", label: "Platine", light: "#F2F3F5", mid: "#C3C7CF", dark: "#80858F" },
] as const

const STONES = [
  { id: "diamant", label: "Diamant", light: "#FFFFFF", mid: "#E4EEF7", dark: "#A9C3DA" },
  { id: "saphir", label: "Saphir", light: "#8B93FF", mid: "#2436E0", dark: "#0C1580" },
  { id: "emeraude", label: "Émeraude", light: "#8BE0B5", mid: "#1E9E6A", dark: "#0B5A3A" },
  { id: "rubis", label: "Rubis", light: "#FF8FA3", mid: "#C8193C", dark: "#6E0A1E" },
] as const

const CUTS = [
  { id: "rond", label: "Rond" },
  { id: "ovale", label: "Ovale" },
  { id: "emeraude", label: "Émeraude" },
] as const

const SIZES = [48, 50, 52, 54, 56, 58, 60]

function Swatch({ active, onClick, label, color }: { active: boolean; onClick: () => void; label: string; color: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={cn(
        "size-9 rounded-full border-2 border-card ring-1 ring-input transition-shadow",
        active && "ring-2 ring-foreground"
      )}
      style={{ background: color }}
    />
  )
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-9 rounded-full border px-3.5 text-sm font-medium transition-colors",
        active ? "border-foreground bg-foreground text-background" : "border-input bg-card hover:border-foreground"
      )}
    >
      {children}
    </button>
  )
}

/** Démo de configurateur de bague : métal, pierre, taille de pierre, tour de doigt, gravure. */
export function RingConfigurator() {
  const [metal, setMetal] = React.useState<(typeof METALS)[number]>(METALS[2])
  const [stone, setStone] = React.useState<(typeof STONES)[number]>(STONES[1])
  const [cut, setCut] = React.useState<(typeof CUTS)[number]["id"]>("ovale")
  const [size, setSize] = React.useState(54)
  const [engraving, setEngraving] = React.useState("À toi, toujours")
  const uid = React.useId().replace(/:/g, "")

  const summary = `${metal.label} · ${stone.label} ${CUTS.find((c) => c.id === cut)?.label.toLowerCase()} · Taille ${size}`

  return (
    <div className="relative flex flex-col gap-6 overflow-hidden rounded-lg border bg-card p-6 shadow-lift sm:p-7">
      <span className="v-fold" aria-hidden="true" />
      <div className="flex items-center justify-between gap-4">
        <span className="v-label">Configurateur · démo</span>
        <span className="font-mono text-[11px] text-muted-foreground">Faites-le essayer</span>
      </div>

      {/* Rendu */}
      <div className="relative grid place-items-center rounded-md bg-[#0B0D12]">
        <svg viewBox="0 0 400 320" className="h-auto w-full max-w-[380px]" role="img" aria-label={`Aperçu de la bague : ${summary}`}>
          <defs>
            <linearGradient id={`m-${uid}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={metal.light} />
              <stop offset=".45" stopColor={metal.mid} />
              <stop offset="1" stopColor={metal.dark} />
            </linearGradient>
            <linearGradient id={`mb-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={metal.dark} />
              <stop offset="1" stopColor={metal.mid} />
            </linearGradient>
            <radialGradient id={`s-${uid}`} cx=".38" cy=".32" r=".8">
              <stop offset="0" stopColor={stone.light} />
              <stop offset=".45" stopColor={stone.mid} />
              <stop offset="1" stopColor={stone.dark} />
            </radialGradient>
            <linearGradient id={`sh-${uid}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fff" stopOpacity="0" />
              <stop offset=".5" stopColor="#fff" stopOpacity=".75" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <clipPath id={`back-${uid}`}>
              <rect x="0" y="0" width="400" height="232" />
            </clipPath>
            <clipPath id={`front-${uid}`}>
              <rect x="0" y="232" width="400" height="120" />
            </clipPath>
            <radialGradient id={`glow-${uid}`} cx=".5" cy=".5" r=".5">
              <stop offset="0" stopColor={stone.mid} stopOpacity=".35" />
              <stop offset="1" stopColor={stone.mid} stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="200" cy="150" rx="150" ry="120" fill={`url(#glow-${uid})`} />
          {/* ombre */}
          <ellipse cx="200" cy="292" rx="120" ry="10" fill="#000" opacity=".5" />

          <g className="motion-safe:animate-[ring-sway_6s_ease-in-out_infinite]" style={{ transformOrigin: "200px 200px" }}>
            {/* anneau : moitié arrière */}
            <ellipse cx="200" cy="232" rx="118" ry="44" fill="none" stroke={`url(#mb-${uid})`} strokeWidth="20" clipPath={`url(#back-${uid})`} />
            {/* griffes */}
            <path d="M184 190 L178 150 M216 190 L222 150 M192 192 L190 160 M208 192 L210 160" stroke={`url(#m-${uid})`} strokeWidth="6" strokeLinecap="round" />
            <path d="M176 196 Q200 180 224 196" fill="none" stroke={`url(#m-${uid})`} strokeWidth="10" strokeLinecap="round" />

            {/* pierre */}
            <g>
              {cut === "rond" && (
                <>
                  <circle cx="200" cy="140" r="44" fill={`url(#s-${uid})`} />
                  <polygon points="200,112 220,120 228,140 220,160 200,168 180,160 172,140 180,120" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="1.5" />
                  <path d="M200 96 L200 112 M244 140 L228 140 M200 184 L200 168 M156 140 L172 140 M169 109 L180 120 M231 109 L220 120 M231 171 L220 160 M169 171 L180 160" stroke="#fff" strokeOpacity=".35" strokeWidth="1.2" />
                </>
              )}
              {cut === "ovale" && (
                <>
                  <ellipse cx="200" cy="138" rx="34" ry="50" fill={`url(#s-${uid})`} />
                  <ellipse cx="200" cy="138" rx="18" ry="28" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="1.5" />
                  <path d="M200 88 L200 110 M200 188 L200 166 M166 138 L182 138 M234 138 L218 138 M176 104 L187 116 M224 104 L213 116 M176 172 L187 160 M224 172 L213 160" stroke="#fff" strokeOpacity=".35" strokeWidth="1.2" />
                </>
              )}
              {cut === "emeraude" && (
                <>
                  <path d="M176 94 H224 L236 106 V172 L224 184 H176 L164 172 V106 Z" fill={`url(#s-${uid})`} />
                  <path d="M182 104 H218 L226 112 V166 L218 174 H182 L174 166 V112 Z" fill="none" stroke="#fff" strokeOpacity=".4" strokeWidth="1.4" />
                  <path d="M188 114 H212 L216 118 V160 L212 164 H188 L184 160 V118 Z" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="1.2" />
                </>
              )}
              {/* reflet qui balaie la pierre */}
              <rect x="150" y="84" width="40" height="110" fill={`url(#sh-${uid})`} opacity=".55" className="motion-safe:animate-[ring-shine_3.2s_ease-in-out_infinite]" style={{ mixBlendMode: "screen" }} />
            </g>

            {/* anneau : moitié avant */}
            <ellipse cx="200" cy="232" rx="118" ry="44" fill="none" stroke={`url(#m-${uid})`} strokeWidth="20" clipPath={`url(#front-${uid})`} />
            <ellipse cx="200" cy="236" rx="110" ry="38" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="2" clipPath={`url(#front-${uid})`} />
            {/* gravure visible à l'intérieur */}
            {engraving && (
              <text x="200" y="258" textAnchor="middle" fontSize="11" fontStyle="italic" fill={metal.dark} opacity=".9" fontFamily="Georgia, serif">
                {engraving.slice(0, 22)}
              </text>
            )}
          </g>

          {/* scintillements */}
          {[[140, 96, 0], [262, 118, 0.8], [238, 72, 1.6]].map(([x, y, d]) => (
            <path
              key={`${x}-${y}`}
              d={`M${x} ${y - 9} L${x + 2} ${y - 2} L${x + 9} ${y} L${x + 2} ${y + 2} L${x} ${y + 9} L${x - 2} ${y + 2} L${x - 9} ${y} L${x - 2} ${y - 2} Z`}
              fill="#fff"
              className="motion-safe:animate-[ring-twinkle_2.4s_ease-in-out_infinite]"
              style={{ animationDelay: `${d}s`, transformOrigin: `${x}px ${y}px` }}
            />
          ))}
        </svg>
      </div>

      {/* Options */}
      <div className="grid gap-5 sm:grid-cols-2">
        <fieldset className="flex flex-col gap-2.5">
          <legend className="mb-2.5 text-sm font-medium">Métal · {metal.label}</legend>
          <div className="flex gap-2.5">
            {METALS.map((m) => (
              <Swatch key={m.id} active={metal.id === m.id} onClick={() => setMetal(m)} label={m.label} color={`linear-gradient(135deg, ${m.light}, ${m.mid} 50%, ${m.dark})`} />
            ))}
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2.5">
          <legend className="mb-2.5 text-sm font-medium">Pierre · {stone.label}</legend>
          <div className="flex gap-2.5">
            {STONES.map((s) => (
              <Swatch key={s.id} active={stone.id === s.id} onClick={() => setStone(s)} label={s.label} color={`radial-gradient(circle at 35% 30%, ${s.light}, ${s.mid} 55%, ${s.dark})`} />
            ))}
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2.5">
          <legend className="mb-2.5 text-sm font-medium">Taille de la pierre</legend>
          <div className="flex flex-wrap gap-2">
            {CUTS.map((c) => (
              <Pill key={c.id} active={cut === c.id} onClick={() => setCut(c.id)}>
                {c.label}
              </Pill>
            ))}
          </div>
        </fieldset>
        <div className="flex flex-col gap-2.5">
          <label htmlFor={`size-${uid}`} className="text-sm font-medium">
            Tour de doigt · <span className="font-mono">{size}</span>
          </label>
          <input
            id={`size-${uid}`}
            type="range"
            min={0}
            max={SIZES.length - 1}
            value={SIZES.indexOf(size)}
            onChange={(e) => setSize(SIZES[Number(e.target.value)])}
            className="accent-primary"
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor={`grav-${uid}`} className="text-sm font-medium">
            Gravure <span className="font-normal text-muted-foreground">(22 caractères max.)</span>
          </label>
          <input
            id={`grav-${uid}`}
            value={engraving}
            maxLength={22}
            onChange={(e) => setEngraving(e.target.value)}
            className="h-11 rounded-sm border border-input bg-card px-4 text-base"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-xs text-muted-foreground">{summary}</span>
        <Button asChild size="sm">
          <Link href="/contact">
            Je veux le même pour ma bijouterie
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
