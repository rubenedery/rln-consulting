"use client"

import * as React from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { track_event } from "@/components/analytics"

const VIDEO = {
  mp4: "/videos/showreel-agence-rln.mp4",
  webm: "/videos/showreel-agence-rln.webm",
  poster: "/videos/showreel-agence-rln.jpg",
}

/**
 * Showreel de la home : l'aperçu s'affiche immédiatement, la vidéo
 * (≈ 3,5 Mo) n'est chargée qu'au clic, avec le son et les contrôles natifs.
 */
export function Showreel() {
  const [playing, setPlaying] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    if (!playing) return
    const v = videoRef.current
    if (!v) return
    v.focus()
    v.play().catch(() => {
      /* lecture bloquée : les contrôles natifs restent disponibles */
    })
  }, [playing])

  const start = () => {
    setPlaying(true)
    track_event("showreel_play", "video", "home")
  }

  return (
    <section className="pb-24 lg:pb-32" aria-labelledby="showreel-title">
      <div className="container mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <header className="grid items-end gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="v-label">Showreel · 0:30</span>
            <h2 id="showreel-title" className="v-display text-4xl sm:text-6xl">
              Ce qu&apos;on sait faire, <span className="v-em">en 30 secondes.</span>
            </h2>
          </div>
          <p className="max-w-[44ch] text-lg leading-relaxed text-muted-foreground">
            Design, animation, développement : tout ce que vous voyez a été conçu et codé par le studio. Montez le son.
          </p>
        </header>

        <div className="group relative aspect-video w-full max-w-full overflow-hidden rounded-lg bg-[#0B0D12] shadow-lift">
          {playing ? (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full"
              controls
              playsInline
              preload="auto"
              poster={VIDEO.poster}
              aria-label="Showreel de l'Agence RLN, 30 secondes"
            >
              <source src={VIDEO.webm} type="video/webm" />
              <source src={VIDEO.mp4} type="video/mp4" />
            </video>
          ) : (
            <>
              <Image
                src={VIDEO.poster}
                alt="Showreel de l'Agence RLN : le logo agence RLN sur fond encre"
                fill
                sizes="(max-width: 1280px) 100vw, 1216px"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-[1.02]"
              />
              <button
                type="button"
                onClick={start}
                className="absolute inset-0 flex items-end justify-start p-4 text-left text-white sm:p-8"
                aria-label="Lancer le showreel, 30 secondes, avec le son"
              >
                <span className="flex items-center gap-4">
                  <span className="relative grid size-12 place-items-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110 sm:size-20">
                    <span
                      className="absolute inset-0 rounded-full bg-primary opacity-60 motion-safe:animate-ping"
                      aria-hidden="true"
                    />
                    <Play className="relative ml-0.5 size-5 fill-current sm:ml-1 sm:size-7" aria-hidden="true" />
                  </span>
                  <span className="hidden flex-col gap-1 sm:flex">
                    <span className="font-display text-xl leading-none font-semibold tracking-[-0.02em] sm:text-2xl">
                      Lancer le showreel
                    </span>
                    <span className="font-mono text-xs tracking-[0.08em] text-white/70 uppercase">0:30 · avec le son</span>
                  </span>
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
