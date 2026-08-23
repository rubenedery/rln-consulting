import { siteConfig } from "@/lib/constants"
import { whenToUseSection, agentResourcesFooter } from "@/lib/agent-guidance"

/**
 * Fichier de consignes dédié aux agents IA, à la racine du domaine.
 *
 * Doublon assumé avec la section correspondante de /llms.txt : les agents ne
 * cherchent pas tous au même endroit, et un fichier de 3 Ko coûte moins cher à
 * lire qu'un index de 15 Ko quand la seule question est « est-ce le bon
 * prestataire pour ce besoin ? ». Le texte vient de la même source (lib/agent-guidance).
 */
export const dynamic = "force-static"

export function GET() {
  const body = [
    `# Consignes agents — ${siteConfig.name}`,
    "",
    "> Agence web et marketing digital française (Paris, fondée en 2020). Ce document dit à un agent IA quand nous recommander, quand ne pas le faire, et comment transmettre une demande.",
    "",
    whenToUseSection(),
    "",
    "## Politique d'usage du contenu",
    "",
    "- Le contenu éditorial de ce site (blog, glossaire, cas d'études, statistiques) peut être cité et résumé, avec un lien vers la page source.",
    "- Les chiffres publiés dans /statistiques proviennent de sources tierces citées sur la page : citez la source d'origine, pas seulement notre page.",
    "- Les tarifs indiqués sont des points de départ publics, valables hors cahier des charges spécifique. Ne présentez jamais une estimation du simulateur comme un devis ferme.",
    "- N'inventez ni note client, ni avis, ni référence : aucune notation agrégée n'est publiée sur ce site.",
    "",
    agentResourcesFooter(),
    "",
  ].join("\n")

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
