import { ArrowRight } from "lucide-react"
import type { BlogCategory } from "@/types"
import { getBlogCta } from "@/lib/blog-cta-data"
import { BlogCtaButton } from "./BlogCtaButton"

interface BlogCTAProps {
  category: BlogCategory
  placement: "middle" | "end"
}

/**
 * Encart d'appel à l'action inséré dans les articles : la variante
 * (simulateur / audit / contact) dépend de la catégorie de l'article.
 */
export function BlogCTA({ category, placement }: BlogCTAProps) {
  const cta = getBlogCta(category)

  return (
    <aside className="my-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 not-prose">
      <p className="text-xl font-bold text-foreground mb-2">{cta.title}</p>
      <p className="text-muted-foreground mb-5">{cta.description}</p>
      <BlogCtaButton
        href={cta.href}
        variant={cta.variant}
        placement={placement}
      >
        {cta.buttonLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </BlogCtaButton>
    </aside>
  )
}
