import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  Link2,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BreadcrumbJsonLd,
  SoftwareApplicationJsonLd,
  WebPageJsonLd,
} from "@/components/seo"
import { siteConfig } from "@/lib/constants"

const url = `${siteConfig.url}/rln-commerce-connect`
const description =
  "RLN Commerce Connect relie la boutique TikTok Shop d'un bijoutier indépendant à son back-office : commandes importées automatiquement, expédition et suivi, publication des fiches, stock sans survente, annulations, retours et versements."

export const metadata: Metadata = {
  alternates: {
    canonical: "/rln-commerce-connect",
  },
  title: "RLN Commerce Connect | Application TikTok Shop pour bijoutiers",
  description,
  openGraph: {
    title: "RLN Commerce Connect — l'application TikTok Shop des bijoutiers indépendants",
    description,
    url,
    images: [{ url: "/rln-commerce-connect/0-principal.png", width: 1500, height: 900 }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const fonctions = [
  {
    icon: Link2,
    titre: "Connexion sécurisée de la boutique",
    texte:
      "La boutique TikTok Shop se connecte par l'autorisation officielle de TikTok (OAuth). L'état de la connexion, le test d'accès et les notifications temps réel restent visibles dans le back-office.",
  },
  {
    icon: ShoppingBag,
    titre: "Commandes importées automatiquement",
    texte:
      "Chaque commande passée sur TikTok Shop arrive seule dans la liste des commandes, avec son numéro TikTok, son statut, ses échéances et l'historique de ses statuts.",
  },
  {
    icon: Truck,
    titre: "Expédition par TikTok ou par le vendeur",
    texte:
      "Expédié par TikTok : organisez la remise du colis, récupérez le numéro de suivi attribué et imprimez l'étiquette. Expédié par vous : saisissez le transporteur et le numéro de suivi, TikTok est prévenu.",
  },
  {
    icon: PackageCheck,
    titre: "Publication des fiches produits",
    texte:
      "Depuis la fiche produit : catégorie TikTok proposée, attributs de la catégorie, informations de sécurité (GPSR), poids et dimensions du colis, puis publication ou mise à jour en un clic.",
  },
  {
    icon: Boxes,
    titre: "Stock publié sans survente",
    texte:
      "La quantité envoyée à TikTok se calcule depuis le stock des boutiques choisies, ou se fixe à la main, et baisse à chaque vente. Un plafond de prix et des contrôles bloquent les fiches incomplètes, motif à l'appui.",
  },
  {
    icon: RotateCcw,
    titre: "Annulations et retours",
    texte:
      "Les demandes d'annulation et de retour des acheteurs TikTok remontent dans le back-office pour être acceptées ou refusées ; une annulation acceptée libère la pièce.",
  },
  {
    icon: Wallet,
    titre: "Versements",
    texte:
      "Les versements TikTok Shop sont relus régulièrement pour suivre ce qui a été payé au vendeur, commande par commande.",
  },
]

const visuels = [
  {
    src: "/rln-commerce-connect/0-principal.png",
    alt: "Liste des commandes du back-office : trois commandes du canal TikTok Shop, payées et expédiées",
  },
  {
    src: "/rln-commerce-connect/2-commande.png",
    alt: "Fiche d'une commande TikTok : numéro TikTok, échéances de remise au transporteur et d'annulation, historique des statuts",
  },
  {
    src: "/rln-commerce-connect/3-expedition.png",
    alt: "Expédition par TikTok : boutique d'expédition, numéro de suivi Colissimo attribué et bouton d'impression de l'étiquette",
  },
  {
    src: "/rln-commerce-connect/4-publication.png",
    alt: "Carte TikTok Shop d'un produit : statut en ligne, catégorie, attributs, informations GPSR et dimensions du colis",
  },
]

export default function RlnCommerceConnectPage() {
  return (
    <>
      <WebPageJsonLd title="RLN Commerce Connect" description={description} url={url} />
      <SoftwareApplicationJsonLd name="RLN Commerce Connect" description={description} url={url} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "RLN Commerce Connect", url },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Application TikTok Shop éditée par RLN Consulting
          </p>
          <h1 className="v-display text-5xl sm:text-7xl lg:text-[88px] text-foreground mb-6">
            RLN Commerce Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Le connecteur TikTok Shop des bijoutiers indépendants. Vos ventes TikTok arrivent
            dans votre back-office, à côté de vos ventes en ligne et en boutique : commandes,
            expédition, fiches produits, stock, retours et versements, au même endroit.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-border">
            <Image
              src={visuels[0].src}
              alt={visuels[0].alt}
              width={1500}
              height={900}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-semibold text-foreground mb-4">À qui s&apos;adresse-t-elle ?</h2>
          <p className="text-muted-foreground max-w-3xl">
            Aux bijoutiers et horlogers indépendants qui vendent sur TikTok Shop et gèrent leur
            boutique en ligne avec un back-office fourni par RLN Consulting. L&apos;application
            évite la double saisie entre TikTok Shop et le back-office, et protège d&apos;une vente
            sur une pièce déjà partie en boutique.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-semibold text-foreground mb-10">Fonctions principales</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {fonctions.map(({ icon: Icon, titre, texte }) => (
              <Card key={titre}>
                <CardContent className="pt-6">
                  <Icon className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{titre}</h3>
                  <p className="text-muted-foreground">{texte}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-semibold text-foreground mb-10">En images</h2>
          <div className="grid gap-8">
            {visuels.slice(1).map((v) => (
              <figure key={v.src} className="overflow-hidden rounded-xl border border-border">
                <Image src={v.src} alt={v.alt} width={1500} height={900} sizes="(min-width: 1024px) 1024px, 100vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-semibold text-foreground mb-6">Installer l&apos;application</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground max-w-3xl">
            <li>
              Depuis la boutique d&apos;applications de TikTok Shop (Seller Center), recherchez
              « RLN Commerce Connect » et autorisez l&apos;application pour votre boutique.
            </li>
            <li>
              Ou, depuis votre back-office : Mon enseigne › Connecteurs › Boutique TikTok, puis
              « Connecter ma boutique TikTok » ; vous êtes redirigé vers TikTok Shop pour donner votre
              accord.
            </li>
            <li>
              La boutique apparaît connectée : les commandes arrivent, vous choisissez les fiches
              à publier et les boutiques dont le stock est partagé.
            </li>
          </ol>
          <p className="text-muted-foreground mt-6 max-w-3xl">
            L&apos;autorisation se révoque à tout moment, depuis TikTok Shop ou depuis le
            back-office (« Déconnecter ») : les jetons d&apos;accès sont alors effacés.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex items-start gap-4 mb-6">
            <ShieldCheck className="h-7 w-7 text-primary shrink-0 mt-1" aria-hidden="true" />
            <h2 className="text-3xl font-semibold text-foreground">Sécurité et confidentialité</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl mb-6">
            <li>Échanges en HTTPS, notifications TikTok vérifiées par signature.</li>
            <li>Jetons d&apos;accès chiffrés au repos et jamais journalisés.</li>
            <li>
              Données utilisées uniquement pour exécuter les commandes et synchroniser le
              catalogue : ni revente, ni usage publicitaire.
            </li>
            <li>Hébergement dans l&apos;Union européenne.</li>
          </ul>
          <p className="text-muted-foreground">
            Le détail des données traitées figure dans notre{" "}
            <Link href="/confidentialite#rln-commerce-connect" className="text-primary hover:underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-semibold mb-4">Une question sur l&apos;application ?</h2>
          <p className="mb-8 opacity-90">
            RLN Consulting — éditeur de RLN Commerce Connect. Écrivez-nous, nous répondons sous
            un jour ouvré.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="mailto:ruben@rln-consulting.com">
              ruben@rln-consulting.com
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
