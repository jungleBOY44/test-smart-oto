import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Hammer, Shield, CheckCircle, Star, Award, Clock, Wrench } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Carrosserie Automobile à Rabat - SMART OTO | Réparation Carrosserie Premium",
  description:
    "Spécialiste carrosserie automobile à Rabat. SMART OTO : débosselage, redressage, réparation chocs. Travail soigné, finition parfaite. Devis gratuit. Al Kamra, Rabat.",
  keywords: [
    "carrosserie automobile Rabat",
    "réparation carrosserie Rabat",
    "débosselage Rabat",
    "redressage auto Rabat",
    "carrossier Rabat",
    "réparation choc Rabat",
  ],
}

const services = [
  {
    icon: Hammer,
    title: "Débosselage Sans Peinture",
    description:
      "Technique PDR (Paintless Dent Repair) pour réparer les petits impacts sans altérer la peinture d'origine.",
    features: ["Préservation peinture d'origine", "Réparation rapide", "Coût réduit", "Résultat invisible"],
  },
  {
    icon: Car,
    title: "Redressage Carrosserie",
    description: "Remise en forme complète de la structure véhicule avec équipements professionnels de redressage.",
    features: ["Marbre de redressage", "Vérification géométrie", "Soudure professionnelle", "Contrôle qualité"],
  },
  {
    icon: Shield,
    title: "Réparation Chocs",
    description: "Intervention sur tous types de dommages : rayures, bosses, déformations suite à accidents.",
    features: ["Évaluation dégâts", "Devis détaillé", "Réparation complète", "Garantie travaux"],
  },
  {
    icon: Wrench,
    title: "Remplacement Éléments",
    description: "Changement de pièces carrosserie endommagées : pare-chocs, ailes, portes, capots.",
    features: ["Pièces d'origine", "Montage professionnel", "Réglages précis", "Finition parfaite"],
  },
]

const beforeAfterGallery = [
  {
    before: "/damaged-car-door-before.png",
    after: "/repaired-car-door-after.png",
    title: "Réparation Porte Véhicule",
    description: "Débosselage et remise en peinture porte BMW Série 3",
  },
  {
    before: "/dented-car-hood.png",
    after: "/pristine-car-hood.png",
    title: "Redressage Capot",
    description: "Réparation capot Mercedes Classe C suite impact",
  },
  {
    before: "/scratched-car-bumper.png",
    after: "/perfect-car-bumper.png",
    title: "Rénovation Pare-chocs",
    description: "Réparation et peinture pare-chocs Audi A4",
  },
]

const testimonials = [
  {
    name: "Rachid Benali",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Excellent travail de carrosserie sur ma BMW après un accrochage. La réparation est invisible, finition parfaite. Je recommande SMART OTO !",
    vehicle: "BMW Série 3",
    service: "Réparation choc latéral",
  },
  {
    name: "Fatima Zahra",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Débosselage impeccable sur ma Mercedes. L'équipe SMART OTO a su préserver la peinture d'origine. Travail de professionnel !",
    vehicle: "Mercedes Classe A",
    service: "Débosselage sans peinture",
  },
  {
    name: "Ahmed Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Redressage complet de ma voiture après accident. SMART OTO a redonné une seconde vie à mon véhicule. Équipe compétente et tarifs corrects.",
    vehicle: "Volkswagen Golf",
    service: "Redressage carrosserie",
  },
]

export default function Carrosserie() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Spécialiste Carrosserie</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Carrosserie Automobile</span> Premium à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, votre expert en carrosserie automobile à Rabat, vous propose des services de réparation,
                  débosselage et redressage de haute qualité. Notre atelier moderne dispose des équipements les plus
                  performants pour redonner à votre véhicule son aspect d'origine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Devis Gratuit
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Voir Nos Réalisations
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>15+ ans d'expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span>Garantie 2 ans</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/professional-bodywork-repair.png"
                  alt="Atelier carrosserie professionnel SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services de Carrosserie</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO maîtrise toutes les techniques de carrosserie moderne. De la simple rayure au redressage
                complet, notre équipe d'experts carrossiers vous garantit un travail soigné et une finition parfaite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Réalisations Avant/Après</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez la qualité de notre travail de carrosserie à travers nos réalisations. Chaque intervention
                témoigne de notre expertise et de notre souci du détail.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {beforeAfterGallery.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="flex">
                      <div className="w-1/2 relative">
                        <img
                          src={item.before || "/placeholder.svg?height=200&width=300"}
                          alt={`Avant - ${item.title}`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                          AVANT
                        </div>
                      </div>
                      <div className="w-1/2 relative">
                        <img
                          src={item.after || "/placeholder.svg?height=200&width=300"}
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
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise Carrosserie Reconnue à Rabat</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Depuis plus de 15 ans, SMART OTO s'est forgé une réputation d'excellence dans le domaine de la
                  carrosserie automobile à Rabat. Notre atelier situé au Quartier Industriel Al Kamra dispose d'un
                  équipement moderne : marbre de redressage, cabine de peinture, outils de débosselage professionnels.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nos carrossiers expérimentés maîtrisent les techniques traditionnelles et les innovations les plus
                  récentes comme le débosselage sans peinture (PDR). Nous intervenons sur toutes marques : BMW,
                  Mercedes, Audi, Volkswagen, Renault, Peugeot, et garantissons un résultat à la hauteur de vos
                  exigences.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Équipement professionnel dernière génération</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Carrossiers certifiés et expérimentés</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Garantie 2 ans sur tous nos travaux</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Devis gratuit et transparent</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="#"
                  alt="Carrossier professionnel SMART OTO au travail"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-bold">Intervention rapide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre Processus de Réparation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO suit un processus rigoureux pour garantir la qualité de chaque réparation carrosserie
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Diagnostic</h3>
                <p className="text-gray-600 text-sm">
                  Évaluation complète des dommages et établissement d'un devis détaillé gratuit
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Préparation</h3>
                <p className="text-gray-600 text-sm">Démontage des éléments et préparation de la zone de travail</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Réparation</h3>
                <p className="text-gray-600 text-sm">Débosselage, redressage ou remplacement selon les besoins</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Finition</h3>
                <p className="text-gray-600 text-sm">Contrôle qualité, remontage et livraison du véhicule</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Témoignages Clients</h2>
              <p className="text-xl text-gray-600">
                L'avis de nos clients sur nos services de carrosserie automobile à Rabat
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                    <div className="border-t pt-4">
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                      <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.vehicle}</div>
                      <div className="text-xs text-green-600 mt-1">{testimonial.service}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Votre Véhicule Mérite le Meilleur</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Confiez la carrosserie de votre véhicule aux experts SMART OTO. Devis gratuit, travail garanti, finition
              parfaite. Contactez-nous dès maintenant !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Demander un Devis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Voir Nos Réalisations
              </Button>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
