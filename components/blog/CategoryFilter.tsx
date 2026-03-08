"use client"

import { cn } from "@/lib/utils"
import { blogCategories, type BlogCategory } from "@/types"

interface CategoryFilterProps {
  selected: BlogCategory | null
  onSelect: (category: BlogCategory | null) => void
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          selected === null
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        )}
      >
        Tous
      </button>
      {(Object.keys(blogCategories) as BlogCategory[]).map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selected === category
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          {blogCategories[category]}
        </button>
      ))}
    </div>
  )
}
