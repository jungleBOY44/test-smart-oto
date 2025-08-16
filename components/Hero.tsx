import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Votre <span className="text-blue-400">Garage Automobile Premium</span> à Rabat
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              SMART OTO vous offre des services d'excellence en mécanique, carrosserie, peinture et protection
              esthétique. Fondé par Imad El Gueunnouni, notre garage premium situé à 7 minutes de Hay Riad garantit
              qualité et expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="#contact">Demandez votre devis gratuit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/nos-services">Découvrir nos services</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>7 min de Hay Riad</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>15 min de Témara</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/modern-automotive-garage.png"
              alt="Atelier SMART OTO - Garage automobile premium à Rabat"
              className="rounded-lg shadow-2xl"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
