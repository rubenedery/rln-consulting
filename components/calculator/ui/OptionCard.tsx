"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface OptionCardProps {
  label: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  price?: string
  selected?: boolean
  popular?: boolean
  onClick: () => void
  className?: string
}

export function OptionCard({
  label,
  description,
  icon: Icon,
  price,
  selected = false,
  popular = false,
  onClick,
  className,
}: OptionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-start p-4 sm:p-6 rounded-xl border-2 text-left transition-colors w-full",
        selected
          ? "border-primary bg-primary/5"
          : "border-border/50 hover:border-primary/50 bg-card",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {/* Popular badge */}
      {popular && (
        <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
          Populaire
        </span>
      )}

      {/* Selection indicator */}
      <motion.div
        className={cn(
          "absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center",
          selected
            ? "border-primary bg-primary"
            : "border-muted-foreground/30"
        )}
        animate={{
          scale: selected ? 1 : 0.9,
        }}
        transition={{ duration: 0.15 }}
      >
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Check className="w-4 h-4 text-primary-foreground" />
          </motion.div>
        )}
      </motion.div>

      {/* Content */}
      <div className="flex items-start gap-4 w-full pr-10">
        {Icon && (
          <div
            className={cn(
              "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
              selected ? "bg-primary/10" : "bg-muted"
            )}
          >
            <Icon
              className={cn(
                "w-6 h-6",
                selected ? "text-primary" : "text-muted-foreground"
              )}
            />
          </div>
        )}

        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">
            {label}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Price tag */}
      {price && (
        <div className="mt-4 pt-4 border-t border-border/50 w-full">
          <span
            className={cn(
              "text-sm font-medium",
              selected ? "text-primary" : "text-muted-foreground"
            )}
          >
            {price}
          </span>
        </div>
      )}
    </motion.button>
  )
}

// Compact version for multi-select
interface OptionCardCompactProps {
  label: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  price?: string
  selected?: boolean
  onClick: () => void
  className?: string
}

export function OptionCardCompact({
  label,
  description,
  icon: Icon,
  price,
  selected = false,
  onClick,
  className,
}: OptionCardCompactProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-3 p-3 sm:p-4 rounded-lg border-2 text-left transition-colors w-full",
        selected
          ? "border-primary bg-primary/5"
          : "border-border/50 hover:border-primary/50 bg-card",
        className
      )}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.1 }}
    >
      {/* Checkbox */}
      <motion.div
        className={cn(
          "flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center",
          selected
            ? "border-primary bg-primary"
            : "border-muted-foreground/30"
        )}
      >
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <Check className="w-3 h-3 text-primary-foreground" />
          </motion.div>
        )}
      </motion.div>

      {/* Icon */}
      {Icon && (
        <Icon
          className={cn(
            "flex-shrink-0 w-5 h-5",
            selected ? "text-primary" : "text-muted-foreground"
          )}
        />
      )}

      {/* Text */}
      <div className="flex-grow min-w-0">
        <span className="font-medium text-foreground text-sm">
          {label}
        </span>
        {description && (
          <span className="text-xs text-muted-foreground ml-2">
            {description}
          </span>
        )}
      </div>

      {/* Price */}
      {price && (
        <span
          className={cn(
            "flex-shrink-0 text-xs font-medium",
            selected ? "text-primary" : "text-muted-foreground"
          )}
        >
          {price}
        </span>
      )}
    </motion.button>
  )
}
