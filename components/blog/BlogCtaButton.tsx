"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { track_cta_click } from "@/components/analytics"

interface BlogCtaButtonProps {
  href: string
  variant: string
  placement: "middle" | "end"
  children: React.ReactNode
}

// Wrapper client minimal : seul le clic a besoin de JavaScript,
// le reste de l'encart BlogCTA reste un composant serveur.
export function BlogCtaButton({ href, variant, placement, children }: BlogCtaButtonProps) {
  return (
    <Button
      asChild
      variant="accent"
      onClick={() => track_cta_click(`blog_cta_${variant}`, `article_${placement}`)}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
