"use client"

import { useEffect, useState } from "react"
import { Calendar, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CalendlyWidgetProps {
  /** URL Calendly (ex: "https://calendly.com/rln-consulting/30min") */
  url?: string
  /** Texte du bouton */
  buttonText?: string
  /** Variante du bouton */
  variant?: "default" | "outline" | "ghost"
  /** Taille du bouton */
  size?: "default" | "sm" | "lg"
  /** Classes CSS supplémentaires */
  className?: string
  /** Afficher comme bouton flottant */
  floating?: boolean
}

// URL Calendly par défaut - à remplacer par la vraie URL
const DEFAULT_CALENDLY_URL = "https://calendly.com/rln-consulting/30min"

export function CalendlyWidget({
  url = DEFAULT_CALENDLY_URL,
  buttonText = "Réserver un appel",
  variant = "default",
  size = "default",
  className,
  floating = false,
}: CalendlyWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Charger le script Calendly
  useEffect(() => {
    if (isOpen && !isLoaded) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = () => setIsLoaded(true)
      document.body.appendChild(script)

      return () => {
        // Cleanup si nécessaire
      }
    }
  }, [isOpen, isLoaded])

  const handleOpen = () => {
    // Ouvrir dans un nouvel onglet en fallback
    // ou utiliser le widget inline si le script est chargé
    if (typeof window !== "undefined" && (window as unknown as { Calendly?: { initPopupWidget: (config: { url: string }) => void } }).Calendly) {
      (window as unknown as { Calendly: { initPopupWidget: (config: { url: string }) => void } }).Calendly.initPopupWidget({ url })
    } else {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  // Version bouton flottant
  if (floating) {
    return (
      <>
        {/* Bouton flottant */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={handleOpen}
            size="lg"
            className={cn(
              "rounded-full shadow-lg hover:shadow-xl transition-shadow",
              "bg-accent hover:bg-accent/90 text-accent-foreground",
              className
            )}
          >
            <Calendar className="h-5 w-5 mr-2" />
            {buttonText}
          </Button>
        </div>

        {/* Modal inline (alternative) */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative bg-background rounded-lg shadow-xl w-full max-w-2xl h-[80vh]">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 z-10"
              >
                <X className="h-4 w-4" />
              </Button>
              <iframe
                src={url}
                className="w-full h-full rounded-lg"
                title="Réserver un rendez-vous"
              />
            </div>
          </div>
        )}
      </>
    )
  }

  // Version bouton standard
  return (
    <Button
      onClick={handleOpen}
      variant={variant}
      size={size}
      className={cn(
        variant === "default" && "bg-accent hover:bg-accent/90 text-accent-foreground",
        className
      )}
    >
      <Calendar className="h-4 w-4 mr-2" />
      {buttonText}
      <ExternalLink className="h-3 w-3 ml-2 opacity-50" />
    </Button>
  )
}

// Composant pour intégration inline (embed)
interface CalendlyEmbedProps {
  url?: string
  height?: string
  className?: string
}

export function CalendlyEmbed({
  url = DEFAULT_CALENDLY_URL,
  height = "700px",
  className,
}: CalendlyEmbedProps) {
  return (
    <div className={cn("w-full", className)}>
      <iframe
        src={url}
        width="100%"
        height={height}
        frameBorder="0"
        title="Réserver un rendez-vous avec RLN Consulting"
        className="rounded-lg border border-border"
      />
    </div>
  )
}
