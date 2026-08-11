import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, FileText, Scale, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  SoftwareApplicationJsonLd,
  WebPageJsonLd,
} from "@/components/seo"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { FAQ } from "@/components/sections"
import { QuittanceGenerator } from "@/components/tools/quittance/QuittanceGenerator"
import { siteConfig } from "@/lib/constants"

const baseUrl = siteConfig.url
const pageUrl = `${baseUrl}/outils/quittance-de-loyer`

export const metadata: Metadata = {
  title: "Générateur de Quittance de Loyer Gratuit (PDF, sans inscription)",
  description:
    "Créez une quittance de loyer conforme à la loi du 6 juillet 1989 en 2 minutes : formulaire simple, aperçu instantané, impression ou export PDF. 100 % gratuit, sans inscription, aucune donnée transmise.",
  alternates: {
    canonical: "/outils/quittance-de-loyer",
  },
  openGraph: {
    title: "Générateur de Quittance de Loyer Gratuit | RLN Consulting",
    description:
      "Remplissez, prévisualisez, imprimez : quittance de loyer conforme en 2 minutes. Gratuit et sans inscription.",
    url: pageUrl,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("Générateur de Quittance de Loyer")}&description=${encodeURIComponent("Gratuit, conforme, sans inscription")}&type=service`,
        width: 1200,
        height: 630,
      },
    ],
  },
}

const quittanceFaq = [
  {
    question: "Le bailleur est-il obligé de fournir une quittance de loyer ?",
    answer:
      "Oui, dès que le locataire en fait la demande. L'article 21 de la loi n° 89-462 du 6 juillet 1989 impose au bailleur de transmettre gratuitement une quittance au locataire qui la demande, pour toute période dont le loyer et les charges ont été intégralement payés.",
  },
  {
    question: "Le bailleur peut-il facturer l'établissement ou l'envoi de la quittance ?",
    answer:
      "Non. La quittance est gratuite par la loi : aucuns frais d'établissement ou d'envoi ne peuvent être facturés au locataire. Toute clause du bail prévoyant une facturation est réputée non écrite.",
  },
  {
    question: "Une quittance envoyée par email est-elle valable ?",
    answer:
      "Oui. La loi autorise la transmission dématérialisée de la quittance (email, PDF) dès lors que le locataire a donné son accord. À défaut d'accord, l'envoi papier reste la règle.",
  },
  {
    question: "Combien de temps faut-il conserver ses quittances de loyer ?",
    answer:
      "Au minimum 3 ans après la fin de la location, ce qui correspond au délai de prescription des actions liées au bail (article 7-1 de la loi du 6 juillet 1989). En pratique, les quittances servent aussi de justificatif de domicile et de preuve de paiement : les conserver plus longtemps est prudent.",
  },
  {
    question: "Que faire en cas de paiement partiel du loyer ?",
    answer:
      "Le bailleur ne délivre pas de quittance mais un reçu, mentionnant le montant effectivement versé et le solde restant dû. Notre générateur propose cette option : cochez « Paiement partiel » et le document généré devient un reçu conforme.",
  },
  {
    question: "Peut-on établir une quittance rétroactive ?",
    answer:
      "Oui. Le locataire peut demander des quittances pour des périodes passées dont le loyer a été intégralement payé, et le bailleur doit les fournir. Sélectionnez simplement le mois et l'année concernés dans le générateur.",
  },
]

const mentionsObligatoires = [
  "L'identité du bailleur (nom ou dénomination sociale) et son adresse",
  "L'identité du locataire",
  "L'adresse du logement loué",
  "La période concernée (mois et année)",
  "Le détail des sommes : loyer hors charges, provision pour charges, total",
  "La date du paiement reçu",
  "La date d'émission et la signature du bailleur",
]

export default function QuittanceLoyerPage() {
  const breadcrumbItems = [
    { name: "Accueil", url: baseUrl },
    { name: "Outils", url: `${baseUrl}/outils` },
    { name: "Quittance de loyer", url: pageUrl },
  ]

  return (
    <>
      <WebPageJsonLd
        title="Générateur de quittance de loyer gratuit"
        description="Créez une quittance de loyer conforme à la loi du 6 juillet 1989 : formulaire simple, aperçu instantané, impression ou export PDF."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <SoftwareApplicationJsonLd
        name="Générateur de quittance de loyer"
        description="Outil gratuit en ligne pour créer, prévisualiser et imprimer une quittance de loyer conforme, sans inscription et sans transmission de données."
        url={pageUrl}
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        offers={{ price: 0, priceCurrency: "EUR" }}
      />
      <FAQPageJsonLd questions={quittanceFaq} />

      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 print-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Outils", href: "/outils" }, { label: "Quittance de loyer" }]}
            className="mb-6"
          />
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Générateur de quittance de loyer{" "}
              <span className="text-primary">gratuit</span>
            </h1>
            <p className="hero-description text-lg text-muted-foreground mb-6">
              Une quittance de loyer est un document écrit par lequel le bailleur atteste que
              le locataire a payé intégralement son loyer et ses charges pour une période
              donnée. Elle est gratuite et doit être remise au locataire qui en fait la
              demande (article 21 de la loi n° 89-462 du 6 juillet 1989).
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 text-success px-4 py-1.5 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" /> 100 % gratuit
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 text-success px-4 py-1.5 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" /> Sans inscription
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 text-success px-4 py-1.5 text-sm font-medium">
                <ShieldCheck className="h-4 w-4" /> Données non transmises
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Outil */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <QuittanceGenerator />
          </div>
        </div>
      </section>

      {/* Mentions obligatoires */}
      <section className="py-16 bg-muted/30 print-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Les mentions obligatoires d&apos;une quittance de loyer
            </h2>
            <ul className="space-y-3">
              {mentionsObligatoires.map((mention, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{mention}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ce que dit la loi */}
      <section className="py-16 print-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" />
              Ce que dit la loi du 6 juillet 1989
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                L&apos;article 21 de la loi n° 89-462 du 6 juillet 1989 encadre la quittance de
                loyer en France. Trois règles essentielles en découlent :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Remise obligatoire sur demande</strong> :
                    le bailleur doit transmettre une quittance au locataire qui en fait la
                    demande, pour toute période intégralement payée.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Gratuité</strong> : aucuns frais liés à
                    l&apos;établissement ou à l&apos;envoi de la quittance ne peuvent être
                    facturés au locataire ; toute clause contraire est réputée non écrite.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Dématérialisation possible</strong> :
                    avec l&apos;accord du locataire, la quittance peut être transmise par voie
                    dématérialisée (email, PDF).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quittance vs reçu vs appel */}
      <section className="py-16 bg-muted/30 print-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Quittance, reçu partiel, appel de loyer : quelles différences ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Quittance de loyer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Atteste le paiement <strong>intégral</strong> du loyer et des charges pour
                    une période donnée. C&apos;est le justificatif le plus demandé (dossier de
                    location, domicile).
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <FileText className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-lg">Reçu de paiement partiel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Établi quand le locataire n&apos;a versé qu&apos;une partie des sommes
                    dues. Il mentionne le montant reçu et le solde restant — il ne vaut pas
                    quittance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <FileText className="h-6 w-6 text-muted-foreground mb-2" />
                  <CardTitle className="text-lg">Avis d&apos;échéance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Aussi appelé appel de loyer : il est envoyé <strong>avant</strong> le
                    paiement pour indiquer le montant à régler. Ce n&apos;est pas un
                    justificatif de paiement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 print-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Questions fréquentes sur la quittance de loyer
            </h2>
            <FAQ items={quittanceFaq} showTitle={false} />
          </div>
        </div>
      </section>

      {/* CTA agence discret */}
      <section className="py-12 bg-muted/30 print-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Vous gérez plusieurs biens ou une agence immobilière ?
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Nous développons des CRM et outils métier sur mesure pour les professionnels
                  de l&apos;immobilier : suivi des locataires, quittances automatiques,
                  relances de loyers, tableaux de bord.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="accent" size="sm">
                    <Link href="/secteurs/agence-immobiliere">
                      Solutions pour l&apos;immobilier
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/crm-applications-metier">
                      CRM &amp; applications métier
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground mt-6 text-center">
              Les informations de cette page sont fournies à titre général sur la base de la
              loi n° 89-462 du 6 juillet 1989 et ne constituent pas un conseil juridique
              personnalisé.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
