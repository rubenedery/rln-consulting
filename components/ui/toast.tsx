"use client"

import * as React from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Toast as ToastType } from "@/hooks/use-toast"

interface ToastProps extends ToastType {
  onDismiss: () => void
}

const variantStyles = {
  default: "bg-background border-border",
  success: "bg-success/10 border-success/30 text-success",
  destructive: "bg-destructive/10 border-destructive/30 text-destructive",
}

const variantIcons = {
  default: Info,
  success: CheckCircle,
  destructive: AlertCircle,
}

export function Toast({
  id,
  title,
  description,
  variant = "default",
  onDismiss,
}: ToastProps) {
  const Icon = variantIcons[variant]

  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full items-start gap-4 overflow-hidden rounded-lg border p-4 shadow-lg transition-all",
        "animate-in slide-in-from-right-full duration-300",
        variantStyles[variant]
      )}
      role="alert"
      aria-live="polite"
    >
      <Icon
        className={cn(
          "h-5 w-5 flex-shrink-0 mt-0.5",
          variant === "default" && "text-muted-foreground"
        )}
      />
      <div className="flex-1 space-y-1">
        {title && (
          <p
            className={cn(
              "text-sm font-medium",
              variant === "default" && "text-foreground"
            )}
          >
            {title}
          </p>
        )}
        {description && (
          <p
            className={cn(
              "text-sm",
              variant === "default" && "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </div>
      <button
        onClick={onDismiss}
        className={cn(
          "rounded-md p-1 transition-opacity hover:opacity-70",
          variant === "default" && "text-muted-foreground"
        )}
        aria-label="Fermer la notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
