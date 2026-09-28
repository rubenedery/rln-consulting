import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/constants"
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/ui/whatsapp"
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
    { name: "Développement SaaS", href: "/services/developpement-saas" },
    { name: "CRM & Apps Métier", href: "/services/crm-applications-metier" },
    { name: "Configurateurs 3D", href: "/services/configurateur-3d" },
    { name: "SEO & Référencement", href: "/services/seo-referencement" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "E-commerce", href: "/services/ecommerce" },
  ],
  resources: [
    { name: "Audit gratuit de votre site", href: "/audit-gratuit" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Simulateur de prix", href: "/tarifs/simulateur" },
    { name: "Blog", href: "/blog" },
    { name: "Réalisations", href: "/cas-etudes" },
    { name: "FAQ", href: "/faq" },
    { name: "À propos", href: "/a-propos" },
    { name: "Glossaire", href: "/glossaire" },
    { name: "IA par métier", href: "/ia" },
    { name: "Statistiques & chiffres clés", href: "/statistiques" },
    { name: "Apport d'affaires", href: "/apport-affaires" },
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
].filter((link) => link.href)

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
    <footer className="bg-[#0B0D12] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-3" aria-label="Agence RLN — accueil">
              <svg viewBox="0 0 64 64" className="size-9" aria-hidden="true"><path d="M0 0H42L64 22V64H0Z" fill="#3A46FF" /><path d="M42 0V22H64Z" fill="#8B93FF" /></svg>
              <span className="font-display text-5xl leading-none font-semibold tracking-[-0.04em]"><span className="v-em mr-2 font-normal text-[#8B93FF]">agence</span>RLN</span>
            </Link>
            <p className="text-white/70 text-sm mb-6 max-w-[34ch]">
              On construit vos produits digitaux, et on les fait connaître.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4" />
                {siteConfig.contact.location}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.08em] text-white/60">Services</h2>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.08em] text-white/60">Ressources</h2>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social — masqué tant qu'aucun profil réel n'est renseigné dans siteConfig */}
          {socialLinks.length > 0 && (
            <div>
              <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.08em] text-white/60">Suivez-nous</h2>
              <p className="text-sm text-white/80 mb-4">
                Restez informé de nos dernières actualités et conseils.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <Separator className="my-8 bg-white/15" />

        {/* Sectors Section - SEO Links */}
        <div className="mb-8">
          <h2 className="mb-6 text-center font-mono text-xs font-medium uppercase tracking-[0.08em] text-white/60">
            Sites web par secteur d&apos;activité
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4">
            {categoryOrder.map((category) => (
              <div key={category}>
                <h3 className="text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                  {categoryLabels[category]}
                </h3>
                <ul className="space-y-1">
                  {getSectorsByCategory(category).map((sector) => (
                    <li key={sector.slug}>
                      <Link
                        href={`/secteurs/${sector.slug}`}
                        className="text-xs text-white/70 hover:text-white transition-colors"
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
              className="text-sm text-[#8B93FF] hover:text-white transition-colors"
            >
              Voir tous les secteurs →
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-white/15" />

        {/* Cities Section - Local SEO Links */}
        <div className="mb-8">
          <h2 className="mb-6 text-center font-mono text-xs font-medium uppercase tracking-[0.08em] text-white/60">
            Zones d&apos;intervention
          </h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/agence-web-${city.slug}`}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Agence web {city.name}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="mb-8 bg-white/15" />

        {/* Trust Badges */}
        <FooterTrustBadges className="mb-8" />

        <Separator className="mb-8 bg-white/15" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {currentYear} Agence RLN · RLN Consulting. Tous droits réservés.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
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
