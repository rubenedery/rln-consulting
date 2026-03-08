"use client"

import Image, { ImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallback?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback = "/images/placeholder.jpg",
  ...props
}: OptimizedImageProps) {
  const [error, set_error] = useState(false)
  const [loading, set_loading] = useState(true)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {loading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <Image
        src={error ? fallback : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          loading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => set_loading(false)}
        onError={() => {
          set_error(true)
          set_loading(false)
        }}
        {...props}
      />
    </div>
  )
}
