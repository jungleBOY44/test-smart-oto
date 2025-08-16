import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="bg-black px-3 py-1 rounded">SMART OTO</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Votre garage automobile premium à Rabat. Services d'excellence en mécanique, carrosserie et esthétique
              automobile.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/smartoto_maroc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@smartoto_maroc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/protection-ppf" className="hover:text-white">
                  Protection PPF
                </Link>
              </li>
              <li>
                <Link href="/nano-ceramique" className="hover:text-white">
                  Protection Céramique
                </Link>
              </li>
              <li>
                <Link href="/carrosserie" className="hover:text-white">
                  Carrosserie
                </Link>
              </li>
              <li>
                <Link href="/peinture" className="hover:text-white">
                  Peinture Automobile
                </Link>
              </li>
              <li>
                <Link href="/mecanique-diagnostic" className="hover:text-white">
                  Mécanique & Diagnostic
                </Link>
              </li>
              <li>
                <Link href="/climatisation" className="hover:text-white">
                  Climatisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-white">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-white">
                  Vidéos
                </Link>
              </li>
              <li>
                <Link href="/nos-abonnements" className="hover:text-white">
                  Nos Abonnements
                </Link>
              </li>
              <li>
                <Link href="/acces-contact" className="hover:text-white">
                  Accès & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p>20 Avenue Al Majd</p>
                  <p>Quartier Industriel Al Kamra</p>
                  <p>Rabat, Maroc</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <p>+212 6XX XXX XXX</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <p>contact@smartoto.ma</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 SMART OTO - Fondé par Imad El Gueunnouni. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-white">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
