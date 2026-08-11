import Image from "next/image"
import { cn } from "@/lib/utils"

interface CardImageProps {
  src: string
  alt: string
  sizes?: string
  /** Classe du dégradé posé sur l'image (intensité variable selon le contexte) */
  gradientClassName?: string
  /** Overlay libre (badge, titre…) positionné au-dessus du dégradé */
  children?: React.ReactNode
}

/**
 * Bloc image commun aux cartes (blog, cas d'études) : ratio 16/9, next/image
 * en fill avec zoom au survol, dégradé et slot d'overlay.
 */
export function CardImage({
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  gradientClassName = "from-black/60",
  children,
}: CardImageProps) {
  return (
    <div className="aspect-video bg-muted relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes={sizes}
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t to-transparent z-10",
          gradientClassName
        )}
      />
      {children}
    </div>
  )
}
