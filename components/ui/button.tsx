import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-[15px] font-medium tracking-[-0.005em] whitespace-nowrap transition-colors duration-150 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
        accent: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent text-foreground hover:border-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70",
        ghost: "text-foreground hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
        inverse: "bg-background text-foreground hover:bg-foreground hover:text-background",
      },
      size: {
        default: "h-11 px-5 has-[>svg]:px-4",
        xs: "h-7 gap-1 px-2.5 text-xs has-[>svg]:px-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 px-4 text-sm has-[>svg]:px-3",
        lg: "h-12 px-7 has-[>svg]:px-6",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
