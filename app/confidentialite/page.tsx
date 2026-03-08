import type { Metadata } from "next"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo"

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité de RLN Consulting. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ConfidentialitePage() {
  return (
    <>
      <WebPageJsonLd
        title="Politique de Confidentialité - RLN Consulting"
        description="Politique de confidentialité et protection des données personnelles"
        url="https://rln-consulting.com/confidentialite"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://rln-consulting.com" },
          { name: "Politique de Confidentialité", url: "https://rln-consulting.com/confidentialite" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-lg text-muted-foreground">
                Chez RLN Consulting, nous accordons une grande importance à la protection de vos
                données personnelles. Cette politique de confidentialité vous explique quelles
                informations nous collectons, comment nous les utilisons et quels sont vos droits
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Responsable du traitement
              </h2>
              <div className="bg-secondary/50 rounded-lg p-6 space-y-2 text-foreground">
                <p><strong>RLN Consulting</strong></p>
                <p>Représenté par : Ruben Edery</p>
                <p>Email : <a href="mailto:ruben@rln-consulting.com" className="text-primary hover:underline">ruben@rln-consulting.com</a></p>
                <p>Adresse : Paris, France</p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Données collectées
              </h2>
              <p className="text-muted-foreground mb-4">
                Nous collectons les données suivantes dans le cadre de nos activités :
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                2.1 Données fournies directement
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Nom de l&apos;entreprise (optionnel)</li>
                <li>Messages et demandes envoyés via le formulaire de contact</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                2.2 Données collectées automatiquement
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Adresse IP anonymisée</li>
                <li>Type de navigateur et appareil</li>
                <li>Pages visitées et temps passé</li>
                <li>Source de la visite (référent)</li>
              </ul>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Finalités du traitement
              </h2>
              <p className="text-muted-foreground mb-4">
                Vos données sont utilisées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Assurer la relation commerciale avec nos clients</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Analyser le trafic et l&apos;utilisation du site</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Base légale du traitement
              </h2>
              <p className="text-muted-foreground mb-4">
                Le traitement de vos données repose sur les bases légales suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Votre consentement</strong> : pour l&apos;envoi de communications marketing</li>
                <li><strong>L&apos;exécution d&apos;un contrat</strong> : pour la réalisation de nos prestations</li>
                <li><strong>Notre intérêt légitime</strong> : pour l&apos;amélioration de nos services</li>
                <li><strong>Obligations légales</strong> : pour la conservation de documents comptables</li>
              </ul>
            </section>

            {/* Conservation */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Durée de conservation
              </h2>
              <p className="text-muted-foreground mb-4">
                Vos données sont conservées pendant les durées suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Données de contact</strong> : 3 ans après le dernier contact</li>
                <li><strong>Données clients</strong> : durée de la relation commerciale + 5 ans</li>
                <li><strong>Données de navigation</strong> : 13 mois maximum</li>
                <li><strong>Documents comptables</strong> : 10 ans (obligation légale)</li>
              </ul>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Destinataires des données
              </h2>
              <p className="text-muted-foreground mb-4">
                Vos données peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Vercel</strong> : hébergement du site web (USA, clauses contractuelles types)</li>
                <li><strong>Vercel Analytics</strong> : analyse du trafic (données anonymisées)</li>
                <li><strong>Resend</strong> : envoi d&apos;emails transactionnels (si activé)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Nous ne vendons jamais vos données personnelles à des tiers.
              </p>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Vos droits RGPD
              </h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Droit d&apos;accès</h4>
                  <p className="text-sm text-muted-foreground">
                    Obtenir une copie de vos données personnelles
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Droit de rectification</h4>
                  <p className="text-sm text-muted-foreground">
                    Corriger vos données inexactes ou incomplètes
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Droit à l&apos;effacement</h4>
                  <p className="text-sm text-muted-foreground">
                    Demander la suppression de vos données
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Droit à la portabilité</h4>
                  <p className="text-sm text-muted-foreground">
                    Récupérer vos données dans un format lisible
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Droit d&apos;opposition</h4>
                  <p className="text-sm text-muted-foreground">
                    Vous opposer au traitement de vos données
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Droit à la limitation</h4>
                  <p className="text-sm text-muted-foreground">
                    Limiter temporairement le traitement
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mt-6">
                Pour exercer vos droits, contactez-nous à :{" "}
                <a href="mailto:ruben@rln-consulting.com" className="text-primary hover:underline">
                  ruben@rln-consulting.com
                </a>
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Cookies et traceurs
              </h2>
              <p className="text-muted-foreground mb-4">
                Notre site utilise des cookies pour les finalités suivantes :
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                Cookies strictement nécessaires
              </h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas
                être désactivés.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                Cookies analytiques
              </h3>
              <p className="text-muted-foreground mb-4">
                Nous utilisons Vercel Analytics pour comprendre comment les visiteurs utilisent
                notre site. Ces données sont anonymisées et ne permettent pas de vous identifier
                personnellement.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                Gérer vos préférences
              </h3>
              <p className="text-muted-foreground">
                Vous pouvez gérer vos préférences de cookies directement dans les paramètres de
                votre navigateur. Notez que le blocage de certains cookies peut affecter votre
                expérience sur le site.
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Sécurité des données
              </h2>
              <p className="text-muted-foreground mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Connexions sécurisées HTTPS</li>
                <li>Hébergement sur infrastructure sécurisée (Vercel)</li>
                <li>Accès limité aux données personnelles</li>
                <li>Mises à jour régulières de sécurité</li>
              </ul>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Modifications de la politique
              </h2>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique de confidentialité à
                tout moment. Les modifications seront publiées sur cette page avec une date de
                mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            {/* Contact & Réclamation */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Contact et réclamation
              </h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question relative à cette politique ou à vos données personnelles,
                contactez-nous :
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 space-y-2 text-foreground mb-6">
                <p><strong>Email :</strong>{" "}
                  <a href="mailto:ruben@rln-consulting.com" className="text-primary hover:underline">
                    ruben@rln-consulting.com
                  </a>
                </p>
              </div>
              <p className="text-muted-foreground">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
                réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des
                Libertés) :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
