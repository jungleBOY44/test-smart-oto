"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const beforeAfterItems = [
  {
    before: "/damaged-car-before-repair.png",
    after: "/pristine-repaired-car.png",
    title: "Réparation Carrosserie",
    description: "Débosselage et peinture complète",
  },
  {
    before: "/faded-car-paint.png",
    after: "/placeholder-9arpx.png",
    title: "Protection Céramique",
    description: "Application nano-céramique premium",
  },
  {
    before: "/dirty-car-interior-leather-seats.png",
    after: "/renovated-car-interior.png",
    title: "Rénovation Intérieur",
    description: "Atelier cuir et nettoyage premium",
  },
  {
    before: "/faded-car-paint.png",
    after: "/freshly-painted-car.png",
    title: "Peinture Automobile",
    description: "Peinture complète avec finition premium",
  },
  {
    before: "/placeholder-gmn3m.png",
    after: "/placeholder.svg?height=300&width=400",
    title: "Protection PPF",
    description: "Film de protection transparent",
  },
  {
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
    title: "Entretien Mécanique",
    description: "Révision complète et diagnostic",
  },
]

export default function BeforeAfterGallery() {
  const [activeSlider, setActiveSlider] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Réalisations Avant/Après</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la transformation exceptionnelle de nos véhicules. Chaque projet témoigne de notre expertise et de
            notre engagement envers l'excellence automobile à Rabat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <div className="flex">
                  <div className="w-1/2 relative">
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt={`Avant - ${item.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                      AVANT
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src={item.after || "/placeholder.svg"}
                      alt={`Après - ${item.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                      APRÈS
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="/realisations">Voir toutes nos réalisations</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
