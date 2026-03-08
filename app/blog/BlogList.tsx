"use client"

import { useState, useMemo } from "react"
import { Search, RefreshCw } from "lucide-react"
import { ArticleCard, CategoryFilter, SearchBar } from "@/components/blog"
import { Pagination } from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { useDebounce } from "@/hooks/use-debounce"
import type { BlogPostMeta, BlogCategory } from "@/types"

interface BlogListProps {
  posts: BlogPostMeta[]
}

const POSTS_PER_PAGE = 9

export function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Debounce search query for better performance
  const debouncedSearchQuery = useDebounce(searchQuery, 300)

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Filter by category
      if (selectedCategory && post.category !== selectedCategory) {
        return false
      }

      // Filter by search query
      if (debouncedSearchQuery) {
        const query = debouncedSearchQuery.toLowerCase()
        return (
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
        )
      }

      return true
    })
  }, [posts, debouncedSearchQuery, selectedCategory])

  // Paginate results
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  // Reset page when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category: BlogCategory | null) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleResetFilters = () => {
    setSearchQuery("")
    setSelectedCategory(null)
    setCurrentPage(1)
  }

  // Determine if we're showing filtered results
  const isFiltered = searchQuery || selectedCategory
  const showingFiltered = debouncedSearchQuery || selectedCategory

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Rechercher un article..."
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="mb-8">
        <CategoryFilter
          selected={selectedCategory}
          onSelect={handleCategoryChange}
        />
      </div>

      {/* Results info */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          {/* Search indicator */}
          {searchQuery && searchQuery !== debouncedSearchQuery && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Search className="h-4 w-4 animate-pulse" />
              <span>Recherche en cours...</span>
            </div>
          )}

          {/* Results count */}
          {(!searchQuery || searchQuery === debouncedSearchQuery) && (
            <p className="text-sm text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}{" "}
              {showingFiltered ? "trouvé" : ""}
              {filteredPosts.length !== 1 && showingFiltered ? "s" : ""}
              {showingFiltered && debouncedSearchQuery && (
                <span>
                  {" "}pour &quot;<span className="font-medium text-foreground">{debouncedSearchQuery}</span>&quot;
                </span>
              )}
            </p>
          )}
        </div>

        {/* Reset button */}
        {isFiltered && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Réinitialiser
          </Button>
        )}
      </div>

      {/* Posts grid */}
      {paginatedPosts.length > 0 ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <ArticleCard
                key={post.slug}
                post={post}
                searchQuery={debouncedSearchQuery}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              showInfo
              totalItems={filteredPosts.length}
              itemsPerPage={POSTS_PER_PAGE}
            />
          </div>
        </>
      ) : (
        <div className="text-center py-16 px-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            Aucun article trouvé
          </h3>
          <p className="text-muted-foreground mb-4">
            Aucun article ne correspond à votre recherche.
          </p>
          <Button variant="outline" onClick={handleResetFilters}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Réinitialiser les filtres
          </Button>
        </div>
      )}
    </div>
  )
}
