import type { Metadata } from "next"
import { Palette, Scissors, Sparkles, Star, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactSection from "@/components/ContactSection"
import Header from "@/components/Header"
import StickyWhatsApp from "@/components/StickyWhatsApp"

export const metadata: Metadata = {
  title: "Atelier Cuir Rabat | SMART OTO - Réparation Sellerie Cuir Auto",
  description:
    "Atelier cuir professionnel à Rabat. Réparation, rénovation et personnalisation sellerie cuir automobile. Garage auto Rabat spécialisé maroquinerie auto. Devis gratuit.",
  keywords:
    "atelier cuir Rabat, réparation sellerie cuir, rénovation cuir auto, maroquinerie automobile Rabat, garage auto Rabat, sellerie voiture",
}

export default function AtelierCuirPage() {
  const leatherServices = [
    {
      icon: Scissors,
      title: "Réparation Cuir",
      description: "Réparation professionnelle des déchirures, trous et usures",
    },
    {
      icon: Palette,
      title: "Teinture & Coloration",
      description: "Reteinture et changement de couleur de vos sièges cuir",
    },
    {
      icon: Sparkles,
      title: "Rénovation Complète",
      description: "Remise à neuf totale de votre sellerie cuir",
    },
  ]

  const repairTypes = [
    {
      name: "Réparation Simple",
      description: "Petites déchirures et rayures",
      duration: "1-2 jours",
      price: "À partir de 800 DH",
    },
    {
      name: "Rénovation Partielle",
      description: "Réfection d'un ou plusieurs sièges",
      duration: "3-5 jours",
      price: "À partir de 2500 DH",
    },
    {
      name: "Rénovation Complète",
      description: "Sellerie complète + personnalisation",
      duration: "1-2 semaines",
      price: "À partir de 8000 DH",
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Benali",
      vehicle: "Porsche Cayenne",
      comment:
        "Réparation parfaite de mes sièges cuir. On ne voit plus aucune trace des déchirures. Atelier cuir Rabat de référence.",
      rating: 5,
    },
    {
      name: "Laila Mansouri",
      vehicle: "Range Rover",
      comment:
        "Rénovation complète de ma sellerie cuir. Résultat exceptionnel, comme neuve ! Garage auto Rabat très professionnel.",
      rating: 5,
    },
  ]

  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Atelier Cuir
                  <span className="block text-amber-400">Professionnel</span>
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Spécialistes de la réparation et rénovation de sellerie cuir automobile. Garage auto Rabat expert en
                  maroquinerie automobile haut de gamme.
                </p>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Devis Gratuit
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nos Services Cuir</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {leatherServices.map((service, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Notre Savoir-Faire</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Techniques Professionnelles</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Diagnostic Précis</h4>
                          <p className="text-gray-600">Évaluation complète des dommages et faisabilité de réparation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Réparation Invisible</h4>
                          <p className="text-gray-600">Techniques de réparation qui rendent les dommages invisibles</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Teinture Professionnelle</h4>
                          <p className="text-gray-600">Gamme complète de couleurs et finitions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Protection Longue Durée</h4>
                          <p className="text-gray-600">Traitement de protection pour préserver la réparation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Matériaux Premium</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span>Cuirs haute qualité assortis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span>Teintures professionnelles durables</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span>Fils et accessoires d'origine</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span>Produits d'entretien spécialisés</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Repair Types Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Types de Réparations</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {repairTypes.map((type, index) => (
                  <Card key={index} className="relative">
                    {index === 1 && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm">Populaire</span>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{type.name}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-2xl font-bold text-amber-600">{type.price}</div>
                        <div className="text-sm text-gray-600">Délai: {type.duration}</div>
                        <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Demander un devis</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Before/After Gallery */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={`/leather-repair-before-after.png?height=200&width=300&query=réparation cuir automobile avant après ${item}`}
                        alt={`Réparation cuir ${item}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                        Avant/Après
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">Réparation Siège Cuir</h3>
                      <p className="text-sm text-gray-600">Réparation invisible d'une déchirure importante</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Témoignages Clients</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.vehicle}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Toutes les déchirures sont-elles réparables ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      La plupart des dommages sont réparables. Notre atelier cuir Rabat évalue chaque cas pour proposer
                      la meilleure solution : réparation invisible ou remplacement partiel.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Peut-on changer la couleur du cuir ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Oui, nous proposons la reteinture complète ou partielle. Notre garage auto Rabat dispose d'une
                      large gamme de couleurs pour personnaliser votre sellerie.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quelle est la durabilité d'une réparation ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Nos réparations sont garanties et conçues pour durer. Avec un entretien approprié, une réparation
                      professionnelle peut durer aussi longtemps que le cuir d'origine.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </div>
      </main>
      <StickyWhatsApp />
    </>
  )
}
