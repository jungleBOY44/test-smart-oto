import Header from "@/components/Header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Car, Zap, Snowflake, Settings, Gauge } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import StickyWhatsApp from "@/components/StickyWhatsApp"

export const metadata = {
  title: "Préparation et Remise en État - SMART OTO Rabat | Garage Auto Professionnel",
  description:
    "Services complets de préparation et remise en état automobile à Rabat. Carrosserie, peinture, mécanique, diagnostic, électricité, climatisation et pneumatique. Garage auto Rabat de confiance.",
  keywords:
    "préparation automobile Rabat, remise en état voiture, garage auto Rabat, carrosserie Rabat, peinture automobile, mécanique auto, diagnostic voiture, réparation voiture Rabat",
}

const services = [
  {
    title: "Carrosserie",
    description: "Réparation et redressage de carrosserie avec techniques professionnelles",
    icon: Car,
    link: "/carrosserie",
    image: "/carrosserie-repair.jpg",
  },
  {
    title: "Peinture",
    description: "Peinture automobile complète avec finitions de qualité premium",
    icon: Settings,
    link: "/peinture",
    image: "/paint-service.jpg",
  },
  {
    title: "Mécanique & Diagnostic",
    description: "Diagnostic complet et réparations mécaniques par nos experts",
    icon: Wrench,
    link: "/mecanique-diagnostic",
    image: "/mechanic-diagnostic.jpg",
  },
  {
    title: "Électricité",
    description: "Diagnostic et réparation des systèmes électriques automobiles",
    icon: Zap,
    link: "/electricite",
    image: "/electrical-service.jpg",
  },
  {
    title: "Climatisation",
    description: "Entretien et réparation des systèmes de climatisation",
    icon: Snowflake,
    link: "/climatisation",
    image: "/ac-service.jpg",
  },
  {
    title: "Pneumatique",
    description: "Services complets pour vos pneus : montage, équilibrage, réparation",
    icon: Gauge,
    link: "/pneumatique",
    image: "/tire-service.jpg",
  },
]

const testimonials = [
  {
    name: "Ahmed Benali",
    text: "Service exceptionnel pour la remise en état de ma BMW. L'équipe de SMART OTO a su redonner vie à ma voiture avec un professionnalisme remarquable.",
    rating: 5,
  },
  {
    name: "Fatima Zahra",
    text: "Très satisfaite des services de préparation. Mon véhicule est comme neuf après leur intervention. Je recommande vivement ce garage auto à Rabat.",
    rating: 5,
  },
]

export default function PreparationRemiseEtat() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Préparation et Remise en État Automobile</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Redonnez vie à votre véhicule avec nos services complets de préparation et remise en état. Notre garage
                auto à Rabat vous offre une expertise technique de pointe pour tous types de réparations.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Demander un Devis Gratuit
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services de Préparation et Remise en État</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SMART OTO vous propose une gamme complète de services pour la préparation et la remise en état de votre
                véhicule. Chaque intervention est réalisée par nos techniciens experts avec des équipements de dernière
                génération.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-blue-600 mr-3" />
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
                      <Button variant="outline" className="w-full bg-transparent">
                        En savoir plus
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Pourquoi Choisir SMART OTO pour la Préparation de Votre Véhicule ?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise Technique Avancée</h3>
                  <p className="text-gray-600 mb-6">
                    Notre équipe de techniciens qualifiés maîtrise les dernières technologies automobiles. Que ce soit
                    pour la carrosserie, la peinture, la mécanique ou l'électricité, nous disposons des compétences et
                    des équipements nécessaires pour une remise en état parfaite.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Diagnostic Complet et Précis</h3>
                  <p className="text-gray-600 mb-6">
                    Avant toute intervention, nous effectuons un diagnostic approfondi de votre véhicule. Cette étape
                    cruciale nous permet d'identifier tous les points nécessitant une attention particulière et de vous
                    proposer un plan de remise en état optimal.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Matériaux et Pièces de Qualité</h3>
                  <p className="text-gray-600 mb-6">
                    Nous utilisons exclusivement des pièces d'origine ou de qualité équivalente, ainsi que des matériaux
                    premium pour garantir la durabilité de nos interventions. Votre sécurité et votre satisfaction sont
                    nos priorités absolues.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Suivi Personnalisé</h3>
                  <p className="text-gray-600">
                    Chaque client bénéficie d'un suivi personnalisé tout au long du processus de remise en état. Nous
                    vous tenons informé de l'avancement des travaux et vous conseillons sur l'entretien futur de votre
                    véhicule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Notre Processus de Préparation et Remise en État
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Diagnostic Initial</h3>
                  <p className="text-gray-600 text-sm">Évaluation complète de l'état de votre véhicule</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Devis Détaillé</h3>
                  <p className="text-gray-600 text-sm">Proposition transparente avec détail des interventions</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Réalisation</h3>
                  <p className="text-gray-600 text-sm">Exécution des travaux par nos experts qualifiés</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contrôle Qualité</h3>
                  <p className="text-gray-600 text-sm">Vérification finale et livraison de votre véhicule</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-16">
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
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à Redonner Vie à Votre Véhicule ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez SMART OTO dès aujourd'hui pour un diagnostic gratuit et un devis personnalisé. Notre équipe
              d'experts est à votre disposition pour tous vos besoins de préparation et remise en état.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-3">
                Demander un Devis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 bg-transparent"
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        </section>
      </div>
      <StickyWhatsApp />
    </>
  )
}
