"use client"

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion"

/**
 * - reducedMotion="user" : les animations framer-motion respectent
 *   prefers-reduced-motion (les transforms sont neutralisés, les fondus
 *   d'opacité conservés pour que le contenu whileInView apparaisse quand même)
 * - LazyMotion/domAnimation : charge les features d'animation en différé
 *   (mode non strict : les composants `motion.*` restent fonctionnels)
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
