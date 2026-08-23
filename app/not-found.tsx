import Link from "next/link"
import type { Metadata } from "next"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Page non trouvée (404)",
  description:
    "Cette page n'existe pas ou a été déplacée. Retrouvez nos services, tarifs, articles et coordonnées depuis cette page.",
  robots: { index: false, follow: true },
}

/** Destinations de repli, partagées entre les liens humains et le bloc markdown. */
const recoveryLinks = [
  { href: "/services", label: "Nos services" },
  { href: "/tarifs", label: "Tarifs et devis" },
  { href: "/cas-etudes", label: "Cas d'études clients" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "Questions fréquentes" },
  { href: "/contact", label: "Contact" },
]

/**
 * Corps markdown de la réponse 404.
 *
 * Volontairement visible et non masqué : du texte réservé aux machines et caché
 * aux visiteurs est traité comme de la dissimulation par les auditeurs
 * d'accessibilité comme par les crawlers. Ici, un agent qui reçoit ce HTML
 * repart avec des chemins exploitables, et un visiteur y lit la même chose.
 */
const markdownBody = [
  "# 404 — Page introuvable",
  "",
  "Cette URL n'existe pas sur ce domaine. Points d'entrée utiles :",
  "",
  ...recoveryLinks.map((link) => `- [${link.label}](${link.href})`),
  "",
  "- [Index du site pour agents IA](/llms.txt)",
  "- [Plan du site complet](/sitemap.xml)",
  "- [Consignes d'usage pour agents](/agent-instructions.md)",
].join("\n")

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page non trouvée
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Nous contacter
            </Link>
          </Button>
        </div>

        <section className="text-left border-t border-border pt-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Où trouver ce que vous cherchez
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2 mb-8">
            {recoveryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-foreground mb-2">
            Pour les agents IA et les outils
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Cette réponse porte bien un statut HTTP 404. Voici la même
            information en markdown, ainsi que nos points d&apos;entrée
            machine — la même URL répond en markdown avec l&apos;en-tête{" "}
            <code className="font-mono text-xs">Accept: text/markdown</code>.
          </p>
          <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-xs leading-relaxed text-muted-foreground">
            <code>{markdownBody}</code>
          </pre>
          <p className="text-sm text-muted-foreground mt-4">
            Index complet :{" "}
            <a href="/llms.txt" className="text-primary hover:underline">
              {siteConfig.url}/llms.txt
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
