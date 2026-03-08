import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogCategories, type BlogPostMeta } from "@/types"

interface ArticleCardProps {
  post: BlogPostMeta
  searchQuery?: string
}

/**
 * Met en surbrillance les termes recherchés dans un texte
 */
function highlightText(text: string, query: string): React.ReactNode {
  if (!query || query.length < 2) return text

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark
        key={i}
        className="bg-accent/30 text-foreground rounded-sm px-0.5"
      >
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export function ArticleCard({ post, searchQuery = "" }: ArticleCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/30">
        {/* Image placeholder */}
        <div className="aspect-video bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {blogCategories[post.category]}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
            {highlightText(post.title, searchQuery)}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {highlightText(post.description, searchQuery)}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-4">
              {post.tags.slice(0, 3).map((tag) => {
                const isMatching = searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase())
                return (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={`text-xs ${isMatching ? "border-accent bg-accent/10" : ""}`}
                  >
                    {tag}
                  </Badge>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
