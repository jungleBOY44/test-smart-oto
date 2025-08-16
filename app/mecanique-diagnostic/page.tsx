import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Wrench, Zap, CheckCircle, Shield, Star, Car, Gauge } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Mécanique & Diagnostic Automobile à Rabat - SMART OTO | Réparation Moteur",
  description:
    "Expert en mécanique et diagnostic automobile à Rabat. SMART OTO propose réparation moteur, diagnostic électronique, entretien préventif. Devis gratuit. Quartier Al Kamra.",
  keywords: [
    "mécanique automobile Rabat",
    "diagnostic auto Rabat",
    "réparation moteur Rabat",
    "garage mécanique Rabat",
    "entretien voiture Rabat",
    "diagnostic électronique Rabat",
  ],
}

const services = [
  {
    icon: Gauge,
    title: "Diagnostic Électronique Avancé",
    description: "Diagnostic complet avec équipements de dernière génération pour identifier précisément les pannes.",
    features: ["Scanner OBD2 professionnel", "Diagnostic moteur", "Analyse des capteurs", "Codes défauts"],
  },
  {
    icon: Settings,
    title: "Réparation Moteur",
    description: "Intervention sur tous types de moteurs essence et diesel avec expertise technique reconnue.",
    features: ["Distribution", "Culasse", "Bloc moteur", "Système d'injection"],
  },
  {
    icon: Wrench,
    title: "Entretien Préventif",
    description: "Maintenance programmée selon préconisations constructeur pour préserver votre véhicule.",
    features: ["Vidange moteur", "Filtres", "Courroies", "Liquides de refroidissement"],
  },
  {
    icon: Zap,
    title: "Système Électrique",
    description: "Réparation et maintenance des systèmes électriques et électroniques automobiles.",
    features: ["Alternateur", "Démarreur", "Batterie", "Faisceau électrique"],
  },
]

const testimonials = [
  {
    name: "Hassan Benjelloun",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Diagnostic précis sur ma BMW X5. L'équipe SMART OTO a identifié le problème rapidement et la réparation a été parfaite. Service professionnel !",
    vehicle: "BMW X5",
  },
  {
    name: "Aicha Alami",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Excellent travail sur ma Mercedes Classe C. Problème de distribution résolu avec expertise. Je recommande ce garage à Rabat !",
    vehicle: "Mercedes Classe C",
  },
  {
    name: "Omar Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Entretien régulier de ma Audi A4 chez SMART OTO. Équipe compétente, tarifs transparents, travail soigné. Garage de confiance !",
    vehicle: "Audi A4",
  },
]

export default function MecaniqueDiagnostic() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Mécanique Automobile</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Mécanique & Diagnostic</span> Automobile à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, votre spécialiste en mécanique automobile à Rabat, vous propose des services de diagnostic
                  électronique avancé, réparation moteur et entretien préventif. Notre équipe d'experts certifiés
                  intervient sur toutes marques avec des équipements de pointe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Diagnostic Gratuit
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Devis Personnalisé
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/automotive-diagnostic-equipment.png"
                  alt="Diagnostic automobile professionnel SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm">Diagnostics réussis</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services de Mécanique Automobile</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO dispose d'un atelier mécanique moderne équipé des dernières technologies de diagnostic. Nos
                mécaniciens certifiés interviennent sur tous types de véhicules avec expertise et précision.
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

        {/* Expertise Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise Mécanique Reconnue à Rabat</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Depuis plus de 15 ans, SMART OTO s'est imposé comme la référence en mécanique automobile à Rabat.
                  Notre atelier situé au Quartier Industriel Al Kamra dispose d'équipements de diagnostic de dernière
                  génération et d'une équipe de mécaniciens certifiés par les principales marques automobiles.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Que vous conduisiez une BMW, Mercedes, Audi, Volkswagen, Renault, Peugeot ou toute autre marque, nos
                  experts maîtrisent les spécificités techniques de chaque véhicule. Nous utilisons exclusivement des
                  pièces d'origine ou équivalentes pour garantir la longévité de vos réparations.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Véhicules réparés/an</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Années d'expérience</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Clients satisfaits</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                    <div className="text-sm text-gray-600">Garantie intervention</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/professional-mechanic-working.png"
                  alt="Mécanicien professionnel SMART OTO travaillant sur diagnostic automobile"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-bold">Garantie 2 ans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Technologies de Diagnostic Avancées</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO investit continuellement dans les dernières technologies de diagnostic automobile pour vous
                offrir un service de qualité supérieure et des réparations durables.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <Car className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Scanner OBD2 Professionnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Équipement de diagnostic multi-marques pour identifier précisément les défaillances électroniques et
                    mécaniques de votre véhicule.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                    <Settings className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Banc de Test Moteur</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Analyse complète des performances moteur, consommation, émissions polluantes et optimisation des
                    réglages pour un fonctionnement optimal.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Testeur Électrique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Diagnostic approfondi des systèmes électriques : alternateur, démarreur, batterie, circuits de
                    charge et éclairage automobile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Témoignages Clients</h2>
              <p className="text-xl text-gray-600">
                Découvrez l'expérience de nos clients satisfaits de nos services de mécanique automobile à Rabat
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
            <h2 className="text-4xl font-bold mb-4">Besoin d'un Diagnostic Automobile ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez SMART OTO dès maintenant pour un diagnostic gratuit de votre véhicule. Notre équipe d'experts
              vous accueille du lundi au samedi dans notre atelier moderne à Rabat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Prendre Rendez-vous
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Appeler Maintenant
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
