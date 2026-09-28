"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { track_whatsapp_click, track_cta_click } from "@/components/analytics"
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/ui/whatsapp"
import { RlnLogo } from "@/components/ui/logo"

const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Développement Web", href: "/services/developpement" },
      { name: "Acquisition Clients", href: "/services/ads-management" },
      { name: "IA pour Entreprises", href: "/services/ia-entreprise" },
      { name: "GEO - Référencement IA", href: "/services/geo" },
      { name: "Applications Mobiles", href: "/services/applications-mobiles" },
      { name: "CRM & Apps Métier", href: "/services/crm-applications-metier" },
      { name: "Configurateurs 3D", href: "/services/configurateur-3d" },
      { name: "SEO & Référencement", href: "/services/seo-referencement" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "E-commerce", href: "/services/ecommerce" },
    ],
  },
  { name: "Audit gratuit", href: "/audit-gratuit" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Réalisations", href: "/cas-etudes" },
  { name: "Blog", href: "/blog" },
  { name: "À propos", href: "/a-propos" },
  { name: "Apport d'affaires", href: "/apport-affaires" },
]

/** Liens affichés dans la barre desktop (l'accueil passe par le logo). */
const desktopNavigation = navigation.filter((item) => item.href !== "/")

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Agence RLN — accueil">
            <RlnLogo tagline={false} />
          </Link>

          {/* Desktop Navigation — Radix NavigationMenu : ouverture clavier/clic,
              aria-expanded, Escape et gestion du focus fournis nativement */}
          <NavigationMenu viewport={false} className="hidden xl:flex">
            <NavigationMenuList className="gap-0.5">
              {desktopNavigation.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        "h-auto rounded-full bg-transparent px-3 py-2 text-[15px] font-medium",
                        "hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent",
                        isActive(item.href)
                          ? "text-foreground hover:text-foreground focus:text-foreground data-[state=open]:text-foreground"
                          : "text-muted-foreground hover:text-foreground focus:text-foreground data-[state=open]:text-foreground"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-2">
                      <ul className="w-64">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm transition-colors",
                                  "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
                                  isActive(child.href)
                                    ? "bg-secondary text-foreground"
                                    : "text-muted-foreground"
                                )}
                              >
                                {child.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-full px-3 py-2 text-[15px] font-medium whitespace-nowrap transition-colors",
                          "hover:bg-transparent focus:bg-transparent",
                          isActive(item.href)
                            ? "text-foreground hover:text-foreground focus:text-foreground"
                            : "text-muted-foreground hover:text-foreground focus:text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle + CTA Buttons */}
          <div className="hidden xl:flex xl:items-center xl:gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" size="icon-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous contacter sur WhatsApp"
                onClick={() => track_whatsapp_click()}
              >
                <WhatsAppIcon className="size-4 text-[#1FA855]" />
              </a>
            </Button>
            <Button asChild size="sm" onClick={() => track_cta_click("contactez_nous", "navbar")}>
              <Link href="/contact">
                <span className="v-roll">
                  <span>Parler du projet</span>
                  <span aria-hidden="true">Parler du projet</span>
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0" showCloseButton={false}>
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                <nav className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
                    <RlnLogo tagline={false} />
                    <SheetClose className="rounded-full p-2 hover:bg-muted transition-colors">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Fermer</span>
                    </SheetClose>
                  </div>

                  {/* Navigation links */}
                  <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <div className="space-y-1">
                            <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              {item.name}
                            </span>
                            {item.children.map((child) => (
                              <SheetClose asChild key={child.href}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                    isActive(child.href)
                                      ? "bg-secondary text-foreground font-medium"
                                      : "text-foreground hover:bg-muted"
                                  )}
                                >
                                  {child.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                isActive(item.href)
                                  ? "bg-secondary text-foreground"
                                  : "text-foreground hover:bg-muted"
                              )}
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Footer actions */}
                  <div className="px-6 py-6 border-t border-border space-y-3">
                    <div className="flex items-center justify-between px-3">
                      <span className="text-sm text-muted-foreground">Thème</span>
                      <ThemeToggle />
                    </div>
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full bg-[#1FA855] text-white hover:bg-[#178a45]"
                      >
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => track_whatsapp_click()}
                        >
                          <WhatsAppIcon className="size-5" />
                          WhatsApp
                        </a>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button asChild className="w-full">
                        <Link href="/contact" onClick={() => track_cta_click("contactez_nous", "mobile_menu")}>Parler du projet</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
