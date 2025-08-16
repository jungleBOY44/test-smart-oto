import Header from "@/components/Header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Sparkles, Palette, Droplets, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import StickyWhatsApp from "@/components/StickyWhatsApp"

export const metadata = {
  title: "Protection Esthétique Automobile - SMART OTO Rabat | Services Premium",
  description:
    "Services de protection esthétique automobile à Rabat : PPF, nano-céramique, habillage, lavage premium et rénovation. Garage auto Rabat spécialisé en protection véhicule.",
  keywords:
    "protection esthétique Rabat, PPF Rabat, nano céramique, habillage automobile, lavage premium, rénovation voiture, garage auto Rabat, protection voiture",
}

const services = [
  {
    title: "Protection PPF",
    description: "Film de protection polyuréthane transparent pour préserver votre carrosserie",
    icon: Shield,
    link: "/protection-ppf",
    image: "/ppf-installation.jpg",
  },
  {
    title: "Nano-céramique",
    description: "Traitement céramique haute performance pour une protection durable",
    icon: Sparkles,
    link: "/nano-ceramique",
    image: "/ceramic-coating.jpg",
  },
  {
    title: "Habillage Automobile",
    description: "Personnalisation et habillage complet de votre véhicule",
    icon: Palette,
    link: "/habillage-automobile",
    image: "/car-wrapping.jpg",
  },
  {
    title: "Lavage Premium",
    description: "Services de lavage haut de gamme avec produits professionnels",
    icon: Droplets,
    link: "/lavage-premium",
    image: "/premium-wash.jpg",
  },
  {
    title: "Rénovation",
    description: "Rénovation esthétique complète pour redonner éclat à votre véhicule",
    icon: RotateCcw,
    link: "/renovation",
    image: "/car-renovation.jpg",
  },
]

const benefits = [
  {
    title: "Protection Longue Durée",
    description:
      "Nos traitements offrent une protection efficace contre les agressions extérieures pendant plusieurs années.",
  },
  {
    title: "Préservation de la Valeur",
    description: "Maintenez la valeur de revente de votre véhicule grâce à nos services de protection esthétique.",
  },
  {
    title: "Facilité d'Entretien",
    description: "Les surfaces traitées sont plus faciles à nettoyer et conservent leur éclat plus longtemps.",
  },
  {
    title: "Résistance Optimale",
    description: "Protection contre les rayures, les impacts, les UV et les contaminants chimiques.",
  },
]

const testimonials = [
  {
    name: "Youssef Alami",
    text: "La protection PPF installée sur ma Porsche est parfaite. Après 2 ans, la carrosserie est toujours impeccable. Service professionnel de SMART OTO.",
    rating: 5,
  },
  {
    name: "Laila Bennani",
    text: "Le traitement nano-céramique a transformé ma voiture. L'éclat est exceptionnel et l'entretien est devenu si simple. Je recommande ce garage auto à Rabat.",
    rating: 5,
  },
]

export default function ProtectionEsthetique() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Protection Esthétique Automobile Premium</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Préservez la beauté et la valeur de votre véhicule avec nos services de protection esthétique de haute
                qualité. SMART OTO, votre spécialiste en protection automobile à Rabat.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Découvrir Nos Services
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services de Protection Esthétique</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SMART OTO vous propose une gamme complète de services de protection esthétique utilisant les
                technologies les plus avancées et les meilleurs produits du marché pour préserver l'apparence de votre
                véhicule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                      >
                        En savoir plus
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Les Avantages de la Protection Esthétique
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technologies et Produits de Pointe</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Films PPF Premium</h3>
                  <p className="text-gray-600">
                    Nous utilisons les films de protection polyuréthane les plus avancés, offrant une transparence
                    parfaite et une résistance exceptionnelle aux impacts et rayures.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Céramiques 9H+</h3>
                  <p className="text-gray-600">
                    Nos revêtements céramiques de grade professionnel offrent une dureté exceptionnelle et une
                    protection chimique supérieure pour un éclat durable.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Matériaux Haut de Gamme</h3>
                  <p className="text-gray-600">
                    Tous nos matériaux d'habillage et de personnalisation sont sélectionnés pour leur qualité supérieure
                    et leur résistance aux conditions climatiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Notre Processus de Protection Esthétique
              </h2>

              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
                  <p className="text-gray-600 text-sm">Analyse de vos besoins et conseils personnalisés</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Préparation</h3>
                  <p className="text-gray-600 text-sm">Nettoyage et préparation minutieuse des surfaces</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Application</h3>
                  <p className="text-gray-600 text-sm">Pose professionnelle des protections choisies</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Finition</h3>
                  <p className="text-gray-600 text-sm">Contrôle qualité et finitions parfaites</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Garantie</h3>
                  <p className="text-gray-600 text-sm">Remise du véhicule avec garantie et conseils</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Témoignages de Nos Clients</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Protégez Votre Investissement Automobile</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Faites confiance à SMART OTO pour la protection esthétique de votre véhicule. Nos experts vous conseillent
              et réalisent des prestations sur mesure adaptées à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Demander un Devis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 bg-transparent"
              >
                Prendre Rendez-vous
              </Button>
            </div>
          </div>
        </section>
      </div>
      <StickyWhatsApp />
    </>
  )
}
