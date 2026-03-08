import type { Metadata } from "next"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales de RLN Consulting. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return (
    <>
      <WebPageJsonLd
        title="Mentions Légales - RLN Consulting"
        description="Mentions légales de RLN Consulting"
        url="https://rln-consulting.com/mentions-legales"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Mentions Légales", url: "https://rln-consulting.com/mentions-legales" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Mentions Légales
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Éditeur du site
              </h2>
              <div className="bg-secondary/50 rounded-lg p-6 space-y-2 text-foreground">
                <p><strong>Raison sociale :</strong> RLN Consulting</p>
                <p><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
                <p><strong>Dirigeant :</strong> Ruben Edery</p>
                <p><strong>Adresse :</strong> Paris, France</p>
                <p><strong>Email :</strong> <a href="mailto:ruben@rln-consulting.com" className="text-primary hover:underline">ruben@rln-consulting.com</a></p>
                <p><strong>Téléphone :</strong> +33 6 09 86 66 72</p>
                <p><strong>SIRET :</strong> 94925251400011</p>
              </div>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Hébergement
              </h2>
              <div className="bg-secondary/50 rounded-lg p-6 space-y-2 text-foreground">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground mb-4">
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes,
                codes sources, etc.) est la propriété exclusive de RLN Consulting, sauf mention
                contraire explicite.
              </p>
              <p className="text-muted-foreground mb-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
                est interdite sans autorisation écrite préalable de RLN Consulting.
              </p>
              <p className="text-muted-foreground">
                Toute exploitation non autorisée du site ou de l&apos;un de ses éléments sera
                considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément
                aux dispositions des articles L.335-2 et suivants du Code de la propriété
                intellectuelle.
              </p>
            </section>

            {/* CGU */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Conditions générales d&apos;utilisation
              </h2>
              <p className="text-muted-foreground mb-4">
                L&apos;utilisation du site implique l&apos;acceptation pleine et entière des
                conditions générales d&apos;utilisation décrites ci-après. Ces conditions sont
                susceptibles d&apos;être modifiées à tout moment.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet.</li>
                <li>RLN Consulting met en œuvre tous les moyens à sa disposition pour assurer un accès de qualité à ses services.</li>
                <li>L&apos;utilisateur s&apos;engage à accéder au site en utilisant un matériel récent et exempt de virus.</li>
                <li>RLN Consulting ne saurait être tenu pour responsable en cas de dommages résultant de l&apos;utilisation du site.</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                Le site RLN Consulting peut utiliser des cookies pour améliorer l&apos;expérience
                utilisateur et analyser le trafic. Ces cookies sont de type :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (toujours actifs)</li>
                <li><strong>Cookies analytiques :</strong> permettant d&apos;analyser le trafic (Google Analytics, Vercel Analytics) — soumis à votre consentement</li>
                <li><strong>Cookies marketing :</strong> utilisés pour des publicités ciblées (Facebook Pixel, LinkedIn, etc.) — soumis à votre consentement</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Lors de votre première visite, un bandeau vous permet de choisir quels cookies vous
                acceptez. Vous pouvez modifier vos préférences à tout moment en cliquant sur
                &quot;Gérer les cookies&quot; dans le pied de page du site.
              </p>
              <p className="text-muted-foreground">
                Pour plus d&apos;informations, consultez notre{" "}
                <a href="/confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Limitation de responsabilité
              </h2>
              <p className="text-muted-foreground mb-4">
                RLN Consulting ne pourra être tenu responsable des dommages directs ou indirects
                causés au matériel de l&apos;utilisateur lors de l&apos;accès au site.
              </p>
              <p className="text-muted-foreground">
                RLN Consulting décline toute responsabilité quant à l&apos;utilisation qui pourrait
                être faite des informations et contenus présents sur le site.
              </p>
            </section>

            {/* Liens externes */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Liens hypertextes
              </h2>
              <p className="text-muted-foreground mb-4">
                Le site peut contenir des liens vers d&apos;autres sites. RLN Consulting n&apos;est
                pas responsable du contenu de ces sites externes et n&apos;exerce aucun contrôle
                sur leurs politiques de confidentialité.
              </p>
              <p className="text-muted-foreground">
                La mise en place de liens hypertextes vers notre site nécessite une autorisation
                préalable écrite de RLN Consulting.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Droit applicable
              </h2>
              <p className="text-muted-foreground">
                Les présentes mentions légales sont soumises au droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Contact
              </h2>
              <p className="text-muted-foreground">
                Pour toute question relative aux présentes mentions légales, vous pouvez nous
                contacter à l&apos;adresse suivante :{" "}
                <a href="mailto:ruben@rln-consulting.com" className="text-primary hover:underline">
                  ruben@rln-consulting.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
