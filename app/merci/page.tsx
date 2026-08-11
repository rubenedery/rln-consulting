import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, MailX, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Merci !",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/merci",
  },
}

interface MerciPageProps {
  searchParams: Promise<{ statut?: string }>
}

const states = {
  confirme: {
    icon: CheckCircle,
    iconClass: "text-success bg-success/10",
    title: "Inscription confirmée !",
    message:
      "Merci pour votre confiance. Votre premier email de conseils arrive dans quelques instants — pensez à vérifier vos spams.",
  },
  desinscrit: {
    icon: MailX,
    iconClass: "text-muted-foreground bg-muted",
    title: "Vous êtes désinscrit",
    message:
      "Vous ne recevrez plus nos emails de conseils. Vous pouvez vous réinscrire à tout moment depuis notre site.",
  },
  "lien-invalide": {
    icon: AlertCircle,
    iconClass: "text-destructive bg-destructive/10",
    title: "Lien invalide ou expiré",
    message: `Ce lien n'est plus valide (il expire après 72 h). Redemandez le guide depuis le site, ou écrivez-nous à ${siteConfig.contact.email}.`,
  },
  erreur: {
    icon: AlertCircle,
    iconClass: "text-destructive bg-destructive/10",
    title: "Une erreur est survenue",
    message: `Nous n'avons pas pu traiter votre demande. Réessayez dans quelques minutes ou écrivez-nous à ${siteConfig.contact.email}.`,
  },
}

export default async function MerciPage({ searchParams }: MerciPageProps) {
  const { statut } = await searchParams
  const state = states[statut as keyof typeof states] ?? states.confirme
  const Icon = state.icon

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center animate-fade-in-up">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${state.iconClass}`}>
            <Icon className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">{state.title}</h1>
          <p className="text-muted-foreground mb-8">{state.message}</p>
          <Button asChild variant="accent">
            <Link href="/">
              Retour à l&apos;accueil
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
