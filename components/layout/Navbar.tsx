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

const WHATSAPP_URL = "https://wa.me/33609866672"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

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
  { name: "Tarifs", href: "/tarifs" },
  { name: "Cas d'études", href: "/cas-etudes" },
  { name: "Blog", href: "/blog" },
  { name: "À propos", href: "/a-propos" },
]

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
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              RLN<span className="text-accent">Consulting</span>
            </span>
          </Link>

          {/* Desktop Navigation — Radix NavigationMenu : ouverture clavier/clic,
              aria-expanded, Escape et gestion du focus fournis nativement */}
          <NavigationMenu viewport={false} className="hidden md:flex">
            <NavigationMenuList className="md:space-x-1">
              {navigation.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        "h-auto bg-transparent px-3 py-2 text-sm font-medium",
                        "hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent",
                        isActive(item.href)
                          ? "text-primary hover:text-primary focus:text-primary data-[state=open]:text-primary"
                          : "text-muted-foreground hover:text-foreground focus:text-foreground data-[state=open]:text-foreground"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-2">
                      <ul className="w-56">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm transition-colors",
                                  "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
                                  isActive(child.href)
                                    ? "bg-primary/10 text-primary"
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
                          "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          "hover:bg-transparent focus:bg-transparent",
                          isActive(item.href)
                            ? "text-primary hover:text-primary focus:text-primary"
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
          <div className="hidden md:flex md:items-center md:gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="icon"
              className="bg-[#25D366] hover:bg-[#22c55e] text-white"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous contacter sur WhatsApp"
                onClick={() => track_whatsapp_click()}
              >
                <WhatsAppIcon className="size-5" />
              </a>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => track_cta_click("contactez_nous", "navbar")}>
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
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
                    <span className="text-lg font-bold text-primary">
                      RLN<span className="text-accent">Consulting</span>
                    </span>
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
                                      ? "bg-primary/10 text-primary font-medium"
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
                                  ? "bg-primary/10 text-primary"
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
                        className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white"
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
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/contact" onClick={() => track_cta_click("contactez_nous", "mobile_menu")}>Contactez-nous</Link>
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
