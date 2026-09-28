import { cn } from "@/lib/utils"
import { blogCategories, type BlogCategory } from "@/types"

/* ------------------------------------------------------------------ */
/* Couverture éditoriale générée : un motif par catégorie, des         */
/* variations déterministes par article (couleurs, positions).         */
/* ------------------------------------------------------------------ */

type Palette = { bg: string; main: string; soft: string; line: string; text: string; sub: string }

const PALETTES: Palette[] = [
  // Klein
  { bg: "#1F2BFF", main: "#FFFFFF", soft: "#C8CDFF", line: "rgba(255,255,255,.28)", text: "#FFFFFF", sub: "rgba(255,255,255,.72)" },
  // Brume
  { bg: "#E4E7FF", main: "#1F2BFF", soft: "#FFFFFF", line: "rgba(31,43,255,.22)", text: "#0B0D12", sub: "#5A5F6E" },
  // Papier
  { bg: "#FFFFFF", main: "#1F2BFF", soft: "#E4E7FF", line: "rgba(11,13,18,.12)", text: "#0B0D12", sub: "#5A5F6E" },
]

function hash(str: string) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function rng(seed: number) {
  let s = seed || 1
  return () => {
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    return ((s >>> 0) % 10000) / 10000
  }
}

type MotifProps = { p: Palette; r: () => number }

/* --------------------------- Motifs ------------------------------- */

function Network({ p, r }: MotifProps) {
  const nodes = Array.from({ length: 9 }, (_, i) => ({
    x: 760 + (i % 3) * 260 + (r() - 0.5) * 140,
    y: 170 + Math.floor(i / 3) * 240 + (r() - 0.5) * 110,
  }))
  const hub = Math.floor(r() * nodes.length)
  const edges: [number, number][] = []
  nodes.forEach((a, i) =>
    nodes.forEach((b, j) => {
      if (j > i && Math.hypot(a.x - b.x, a.y - b.y) < 330) edges.push([i, j])
    })
  )
  return (
    <g>
      {edges.map(([i, j]) => (
        <line key={`${i}-${j}`} x1={nodes[i].x} y1={nodes[i].y} x2={nodes[j].x} y2={nodes[j].y} stroke={p.line} strokeWidth="4" />
      ))}
      {nodes.map((n, i) =>
        i === hub ? (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="92" fill={p.soft} opacity=".55" />
            <circle cx={n.x} cy={n.y} r="54" fill={p.main} />
          </g>
        ) : (
          <circle key={i} cx={n.x} cy={n.y} r={16 + r() * 16} fill={p.bg} stroke={p.main} strokeWidth="6" />
        )
      )}
    </g>
  )
}

function CodeWindow({ p, r }: MotifProps) {
  const lines = Array.from({ length: 8 }, (_, i) => ({ indent: [0, 1, 2, 2, 1, 2, 1, 0][i] * 60, w: 160 + r() * 360 }))
  const hl = 2 + Math.floor(r() * 4)
  return (
    <g transform="translate(700 110) rotate(-4)">
      <rect width="820" height="640" rx="36" fill={p.soft} opacity=".9" />
      <rect width="820" height="640" rx="36" fill="none" stroke={p.line} strokeWidth="4" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={56 + i * 42} cy="56" r="13" fill={i === 0 ? p.main : p.line} />
      ))}
      {lines.map((l, i) => (
        <g key={i}>
          {i === hl && <rect x="30" y={116 + i * 62} width="760" height="50" rx="12" fill={p.main} opacity=".14" />}
          <rect x={70 + l.indent} y={130 + i * 62} width={l.w} height="22" rx="11" fill={i === hl ? p.main : p.line} />
        </g>
      ))}
    </g>
  )
}

function Bars({ p, r }: MotifProps) {
  const n = 6
  const hs = Array.from({ length: n }, (_, i) => 150 + i * 80 + r() * 70)
  const pts = hs.map((h, i) => [760 + i * 130 + 45, 800 - h - 60])
  return (
    <g>
      <line x1="720" y1="800" x2="1540" y2="800" stroke={p.line} strokeWidth="4" />
      {hs.map((h, i) => (
        <rect key={i} x={760 + i * 130} y={800 - h} width="90" height={h} rx="14" fill={i === n - 1 ? p.main : p.soft} opacity={i === n - 1 ? 1 : 0.9} />
      ))}
      <polyline points={pts.map((q) => q.join(",")).join(" ")} fill="none" stroke={p.main} strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={pts[n - 1][0]} cy={pts[n - 1][1]} r="22" fill={p.bg} stroke={p.main} strokeWidth="8" />
    </g>
  )
}

function Search({ p, r }: MotifProps) {
  const ws = [0, 1, 2].map(() => 320 + r() * 260)
  return (
    <g transform="translate(700 150)">
      <rect width="820" height="110" rx="55" fill={p.soft} />
      <circle cx="80" cy="55" r="24" fill="none" stroke={p.main} strokeWidth="8" />
      <line x1="98" y1="73" x2="122" y2="97" stroke={p.main} strokeWidth="8" strokeLinecap="round" />
      <rect x="160" y="43" width={280 + r() * 200} height="24" rx="12" fill={p.line} />
      {ws.map((w, i) => (
        <g key={i} transform={`translate(0 ${190 + i * 150})`}>
          <rect width="820" height="120" rx="24" fill={i === 0 ? p.main : "none"} stroke={i === 0 ? "none" : p.line} strokeWidth="4" />
          <text x="46" y="80" fontSize="56" fontWeight="700" fontFamily="ui-monospace, monospace" fill={i === 0 ? p.bg : p.main}>
            {i + 1}
          </text>
          <rect x="130" y="34" width={w} height="20" rx="10" fill={i === 0 ? p.bg : p.main} opacity={i === 0 ? 1 : 0.8} />
          <rect x="130" y="70" width={w * 0.7} height="14" rx="7" fill={i === 0 ? p.soft : p.line} opacity={i === 0 ? 0.7 : 1} />
        </g>
      ))}
    </g>
  )
}

function Rings({ p, r }: MotifProps) {
  const cx = 1120 + (r() - 0.5) * 120
  const cy = 450 + (r() - 0.5) * 80
  const a = r() * Math.PI * 2
  return (
    <g>
      {[380, 290, 200, 110].map((rad, i) => (
        <circle key={rad} cx={cx} cy={cy} r={rad} fill={i === 3 ? p.soft : "none"} stroke={p.line} strokeWidth="4" />
      ))}
      <circle cx={cx} cy={cy} r="40" fill={p.main} />
      {[0, 1, 2].map((i) => {
        const ang = a + (i * Math.PI * 2) / 3
        const rad = [290, 200, 380][i]
        return <circle key={i} cx={cx + Math.cos(ang) * rad} cy={cy + Math.sin(ang) * rad} r={i === 0 ? 26 : 16} fill={i === 0 ? p.main : p.bg} stroke={p.main} strokeWidth="6" />
      })}
    </g>
  )
}

function Products({ p, r }: MotifProps) {
  const pick = Math.floor(r() * 4)
  return (
    <g transform="translate(760 110)">
      {[0, 1, 2, 3].map((i) => {
        const x = (i % 2) * 380
        const y = Math.floor(i / 2) * 340
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect width="340" height="300" rx="28" fill={i === pick ? p.main : p.soft} />
            <rect x="30" y="30" width="280" height="160" rx="18" fill={i === pick ? p.soft : p.bg} opacity={i === pick ? 0.35 : 0.9} />
            <rect x="30" y="214" width="180" height="18" rx="9" fill={i === pick ? p.bg : p.main} opacity={i === pick ? 1 : 0.7} />
            <rect x="30" y="250" width="110" height="16" rx="8" fill={i === pick ? p.soft : p.line} />
          </g>
        )
      })}
      <g transform={`translate(${(pick % 2) * 380 + 290} ${Math.floor(pick / 2) * 340 - 30})`}>
        <circle r="46" fill={p.bg} stroke={p.main} strokeWidth="6" />
        <path d="M-16 0 L-4 12 L18 -12" fill="none" stroke={p.main} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  )
}

function Tiles({ p, r }: MotifProps) {
  const on = Math.floor(r() * 12)
  const on2 = (on + 5) % 12
  return (
    <g transform="translate(720 120)">
      {Array.from({ length: 12 }, (_, i) => {
        const x = (i % 4) * 205
        const y = Math.floor(i / 4) * 215
        const fill = i === on ? p.main : i === on2 ? p.soft : "none"
        return <rect key={i} x={x} y={y} width="180" height="190" rx="28" fill={fill} stroke={i === on || i === on2 ? "none" : p.line} strokeWidth="4" />
      })}
    </g>
  )
}

function Steps({ p, r }: MotifProps) {
  const n = 5
  const h = 110 + r() * 20
  const d = Array.from({ length: n }, (_, i) => `L${760 + i * 150} ${780 - i * h} L${760 + (i + 1) * 150} ${780 - i * h}`).join(" ")
  const endX = 760 + n * 150
  const endY = 780 - (n - 1) * h
  return (
    <g>
      <path d={`M720 780 ${d} L${endX} 800 L720 800 Z`} fill={p.soft} opacity=".8" />
      <path d={`M720 780 ${d}`} fill="none" stroke={p.main} strokeWidth="8" strokeLinejoin="round" />
      <g transform={`translate(${endX - 10} ${endY - 90})`}>
        <circle r="54" fill={p.main} />
        <path d="M-20 12 L0 -12 L20 12" fill="none" stroke={p.bg} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  )
}

function Gauge({ p, r }: MotifProps) {
  const v = 0.72 + r() * 0.25
  const cx = 1130
  const cy = 640
  const R = 330
  const ang = Math.PI * (1 - v)
  const arc = (from: number, to: number) => {
    const a0 = Math.PI * (1 - from)
    const a1 = Math.PI * (1 - to)
    return `M${cx + R * Math.cos(a0)} ${cy - R * Math.sin(a0)} A${R} ${R} 0 0 1 ${cx + R * Math.cos(a1)} ${cy - R * Math.sin(a1)}`
  }
  return (
    <g>
      <path d={arc(0, 1)} fill="none" stroke={p.soft} strokeWidth="64" strokeLinecap="round" />
      <path d={arc(0, v)} fill="none" stroke={p.main} strokeWidth="64" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={cx + (R - 90) * Math.cos(ang)} y2={cy - (R - 90) * Math.sin(ang)} stroke={p.main} strokeWidth="12" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="30" fill={p.main} />
      <text x={cx} y={cy + 140} textAnchor="middle" fontSize="92" fontWeight="700" fontFamily="ui-monospace, monospace" fill={p.main}>
        {Math.round(v * 100)}
      </text>
    </g>
  )
}

function Cubes({ p, r }: MotifProps) {
  const cube = (x: number, y: number, s: number, hi: boolean) => (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M0 0 L${s} ${-s / 2} L${2 * s} 0 L${s} ${s / 2} Z`} fill={hi ? p.soft : p.bg} stroke={p.main} strokeWidth="5" strokeLinejoin="round" />
      <path d={`M0 0 L${s} ${s / 2} L${s} ${s * 1.5} L0 ${s} Z`} fill={hi ? p.main : p.soft} stroke={p.main} strokeWidth="5" strokeLinejoin="round" />
      <path d={`M${2 * s} 0 L${s} ${s / 2} L${s} ${s * 1.5} L${2 * s} ${s} Z`} fill={hi ? p.main : p.bg} opacity={hi ? 0.75 : 1} stroke={p.main} strokeWidth="5" strokeLinejoin="round" />
    </g>
  )
  const hi = Math.floor(r() * 3)
  return (
    <g>
      {cube(820, 470, 160, hi === 0)}
      {cube(1140, 470, 160, hi === 1)}
      {cube(980, 230, 160, hi === 2)}
    </g>
  )
}

const MOTIFS: Record<BlogCategory, (props: MotifProps) => React.ReactElement> = {
  ia: Network,
  developpement: CodeWindow,
  marketing: Bars,
  seo: Search,
  geo: Rings,
  ecommerce: Products,
  secteur: Tiles,
  strategie: Steps,
  business: Steps,
  performance: Gauge,
  innovation: Cubes,
  design: Cubes,
}

/* ------------------------------------------------------------------ */

interface ArticleCoverProps {
  slug: string
  category: BlogCategory
  className?: string
  /** Taille du nom de catégorie : "card" pour les vignettes, "hero" pour la page article */
  size?: "card" | "hero"
}

export function ArticleCover({ slug, category, className, size = "card" }: ArticleCoverProps) {
  const seed = hash(slug)
  const p = PALETTES[seed % PALETTES.length]
  const r = rng(seed)
  const Motif = MOTIFS[category] ?? Tiles
  const label = blogCategories[category] ?? "Blog"

  return (
    <div className={cn("relative aspect-video overflow-hidden", className)} style={{ background: p.bg }} aria-hidden="true">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-[1.04]"
      >
        <Motif p={p} r={r} />
        {/* coin plié, signature de la marque */}
        <path d="M1480 0 H1600 V120 Z" fill="#C8CDFF" />
        <path d="M1480 0 V120 H1600" fill="none" stroke={p.line} strokeWidth="2" />
      </svg>

      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-between",
          size === "hero" ? "p-6 sm:p-10" : "p-5"
        )}
      >
        <span
          className={cn("font-mono tracking-[0.08em] uppercase", size === "hero" ? "text-xs sm:text-sm" : "text-[10px]")}
          style={{ color: p.sub }}
        >
          Agence RLN · Blog
        </span>
        <span
          className={cn(
            "max-w-[55%] font-serif leading-[0.95] italic",
            size === "hero" ? "text-4xl sm:text-6xl lg:text-7xl" : "text-3xl sm:text-[34px]"
          )}
          style={{ color: p.text }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
