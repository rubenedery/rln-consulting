import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/constants"
import { FooterTrustBadges } from "@/components/ui/trust-badges"
import { CookieSettingsButton } from "@/components/ui/cookie-banner"
import { categoryLabels, getSectorsByCategory } from "@/lib/sectors-data"
import { cities } from "@/lib/cities-data"
import type { Sector } from "@/types/sectors"

const footerLinks = {
  services: [
    { name: "Développement Web", href: "/services/developpement" },
    { name: "Acquisition Clients", href: "/services/ads-management" },
    { name: "IA pour Entreprises", href: "/services/ia-entreprise" },
    { name: "Applications Mobiles", href: "/services/applications-mobiles" },
    { name: "CRM & Apps Métier", href: "/services/crm-applications-metier" },
    { name: "SEO & Référencement", href: "/services/seo-referencement" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "E-commerce", href: "/services/ecommerce" },
  ],
  resources: [
    { name: "Tarifs", href: "/tarifs" },
    { name: "Simulateur de prix", href: "/tarifs/simulateur" },
    { name: "Blog", href: "/blog" },
    { name: "Cas d'études", href: "/cas-etudes" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { name: "Twitter", href: siteConfig.social.twitter, icon: Twitter },
  { name: "GitHub", href: siteConfig.social.github, icon: Github },
]

// Get selected sectors for each category (for footer display)
const categoryOrder: Sector["category"][] = [
  "commerce",
  "services",
  "sante",
  "artisanat",
  "tech",
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold">
                RLN<span className="text-accent">Consulting</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Agence de développement web et marketing digital. Nous transformons vos idées en solutions digitales performantes.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                {siteConfig.contact.location}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Restez informé de nos dernières actualités et conseils.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Sectors Section - SEO Links */}
        <div className="mb-8">
          <h3 className="font-semibold mb-6 text-center">
            Sites web par secteur d'activité
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4">
            {categoryOrder.map((category) => (
              <div key={category}>
                <h4 className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wider mb-2">
                  {categoryLabels[category]}
                </h4>
                <ul className="space-y-1">
                  {getSectorsByCategory(category).map((sector) => (
                    <li key={sector.slug}>
                      <Link
                        href={`/secteurs/${sector.slug}`}
                        className="text-xs text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        {sector.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link
              href="/secteurs"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Voir tous les secteurs →
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Cities Section - Local SEO Links */}
        <div className="mb-8">
          <h3 className="font-semibold mb-6 text-center">
            Zones d'intervention
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/agence-web-${city.slug}`}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Agence web {city.name}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="mb-8 bg-primary-foreground/20" />

        {/* Trust Badges */}
        <FooterTrustBadges className="mb-8" />

        <Separator className="mb-8 bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} RLN Consulting. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  )
}
