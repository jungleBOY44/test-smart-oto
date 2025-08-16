"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  Shield,
  Wrench,
  Car,
  Droplets,
  Sparkles,
  Palette,
  Settings,
  Zap,
  Wind,
  FootprintsIcon as Tire,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-black px-3 py-1 rounded text-white">SMART OTO</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link href="/" className="px-4 py-2 hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </NavigationMenuLink>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">Protection Esthétique</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2 bg-white">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/protection-ppf"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Shield className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Protection PPF</div>
                          <div className="text-sm text-gray-600">Film de protection transparent</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/nano-ceramique"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Sparkles className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Nano-céramique</div>
                          <div className="text-sm text-gray-600">Protection longue durée</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/habillage-automobile"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Car className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Habillage automobile</div>
                          <div className="text-sm text-gray-600">Covering et personnalisation</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/lavage-premium"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Droplets className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Lavage premium</div>
                          <div className="text-sm text-gray-600">Nettoyage professionnel</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/renovation"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Wrench className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Rénovation</div>
                          <div className="text-sm text-gray-600">Remise à neuf complète</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/atelier-cuir"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Palette className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Atelier cuir</div>
                          <div className="text-sm text-gray-600">Réparation sellerie cuir</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">Préparation & Remise en état</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2 bg-white">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/carrosserie"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Car className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Carrosserie</div>
                          <div className="text-sm text-gray-600">Réparation et débosselage</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/peinture"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Palette className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Peinture</div>
                          <div className="text-sm text-gray-600">Peinture automobile premium</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/mecanique-diagnostic"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Settings className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Mécanique & Diagnostic</div>
                          <div className="text-sm text-gray-600">Réparation mécanique complète</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/electricite"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Zap className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Électricité</div>
                          <div className="text-sm text-gray-600">Électricité automobile</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/climatisation"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Wind className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Climatisation</div>
                          <div className="text-sm text-gray-600">Entretien climatisation</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/pneumatique"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <Tire className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Pneumatique</div>
                          <div className="text-sm text-gray-600">Pneus et jantes</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/gestion-sinistre"
                        className="flex items-center gap-2 p-3 bg-white hover:bg-gray-50 rounded shadow-sm border"
                      >
                        <FileText className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Gestion Sinistre</div>
                          <div className="text-sm text-gray-600">Expertise et réparation sinistres</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuLink asChild>
                <Link href="/realisations" className="px-4 py-2 hover:text-blue-400 transition-colors">
                  Réalisations
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link href="/videos" className="px-4 py-2 hover:text-blue-400 transition-colors">
                  Vidéos
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link href="/nos-abonnements" className="px-4 py-2 hover:text-blue-400 transition-colors">
                  Nos Abonnements
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link href="/acces-contact" className="px-4 py-2 hover:text-blue-400 transition-colors">
                  Accès & Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="px-4 py-2 hover:bg-gray-800 rounded">
                Accueil
              </Link>
              <Link href="/protection-esthetique" className="px-4 py-2 hover:bg-gray-800 rounded">
                Protection Esthétique
              </Link>
              <Link href="/preparation-remise-etat" className="px-4 py-2 hover:bg-gray-800 rounded">
                Préparation & Remise en état
              </Link>
              <Link href="/realisations" className="px-4 py-2 hover:bg-gray-800 rounded">
                Réalisations
              </Link>
              <Link href="/videos" className="px-4 py-2 hover:bg-gray-800 rounded">
                Vidéos
              </Link>
              <Link href="/nos-abonnements" className="px-4 py-2 hover:bg-gray-800 rounded">
                Nos Abonnements
              </Link>
              <Link href="/acces-contact" className="px-4 py-2 hover:bg-gray-800 rounded">
                Accès & Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
