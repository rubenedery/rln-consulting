import { ChevronDown, HelpCircle } from "lucide-react"
import { faqData, type FAQItem } from "@/lib/content"

interface FAQProps {
  items?: FAQItem[]
  showTitle?: boolean
  maxItems?: number
  /** "h1" sur la page /faq dédiée (le titre y est le titre principal), "h2" partout ailleurs */
  headingLevel?: "h1" | "h2"
}

/**
 * Accordéon de FAQ bâti sur `<details>` natif.
 *
 * L'implémentation précédente montait les réponses côté client et ne rendait
 * dans le DOM que celle qui était ouverte : le HTML servi ne contenait donc que
 * les questions. Un crawler sans JavaScript — et un agent qui lit la réponse
 * HTTP brute — repartait avec des questions sans réponses, alors que le JSON-LD
 * FAQPage, lui, annonçait les deux.
 *
 * `<details>` règle les deux problèmes à la fois : le contenu est toujours dans
 * le HTML, l'ouverture/fermeture est gérée par le navigateur (donc sans JS, et
 * accessible d'origine), et l'attribut `name` donne le comportement « une seule
 * réponse ouverte » sans état React.
 */
export function FAQ({
  items = faqData,
  showTitle = true,
  maxItems,
  headingLevel = "h2",
}: FAQProps) {
  const Heading = headingLevel
  const displayItems = maxItems ? items.slice(0, maxItems) : items

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </span>
            <Heading className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Questions fréquentes
            </Heading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos
              services et notre façon de travailler.
            </p>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {displayItems.map((item, index) => (
              <details
                key={index}
                // Accordéon exclusif natif : ouvrir une réponse referme la
                // précédente, sans une ligne de JavaScript.
                name="faq"
                className="group border border-border/50 rounded-lg overflow-hidden bg-card hover:border-primary/30 transition-colors"
              >
                <summary
                  id={`faq-question-${index}`}
                  className="flex items-center justify-between w-full gap-4 px-6 py-4 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
                >
                  <h3 className="font-medium text-foreground text-base">
                    {item.question}
                  </h3>
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
