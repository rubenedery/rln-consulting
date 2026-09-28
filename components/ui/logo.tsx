import { cn } from "@/lib/utils"

/** Signe Agence RLN : une page au coin replié. */
export function RlnMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-7", className)} aria-hidden="true">
      <path d="M0 0H42L64 22V64H0Z" className="fill-primary" />
      <path d="M42 0V22H64Z" className="fill-klein-200" />
    </svg>
  )
}

/** Logo complet : signe + « agence RLN ». */
export function RlnLogo({ className, tagline = true }: { className?: string; tagline?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <RlnMark />
      <span className="font-display text-[28px] leading-none font-semibold tracking-[-0.04em] text-foreground">
        <span className="v-em mr-1.5 text-[26px] font-normal text-primary">agence</span>RLN
      </span>
      {tagline && (
        <span className="v-label mt-1.5 hidden text-[10px] xl:inline">Produit &amp; marque</span>
      )}
    </span>
  )
}
