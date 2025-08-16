import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Battery, Lightbulb, CheckCircle, Star, Award, Settings, Power } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Électricité Automobile à Rabat - SMART OTO | Réparation Électrique Auto",
  description:
    "Spécialiste électricité automobile à Rabat. SMART OTO : diagnostic électrique, alternateur, démarreur, batterie. Experts systèmes électroniques. Devis gratuit.",
  keywords: [
    "électricité automobile Rabat",
    "réparation électrique auto Rabat",
    "alternateur Rabat",
    "démarreur Rabat",
    "batterie voiture Rabat",
    "diagnostic électrique Rabat",
  ],
}

const electricalServices = [
  {
    icon: Battery,
    title: "Batterie & Charge",
    description: "Diagnostic, test et remplacement de batterie avec vérification du système de charge complet.",
    features: ["Test batterie", "Contrôle alternateur", "Vérification charge", "Remplacement batterie"],
  },
  {
    icon: Zap,
    title: "Alternateur & Démarreur",
    description: "Réparation et remplacement alternateur et démarreur avec diagnostic précis des pannes.",
    features: ["Diagnostic panne", "Réparation alternateur", "Remplacement démarreur", "Test performance"],
  },
  {
    icon: Lightbulb,
    title: "Éclairage Automobile",
    description: "Installation et réparation de tous systèmes d'éclairage : phares, feux, clignotants.",
    features: ["Phares LED/Xénon", "Feux de position", "Clignotants", "Éclairage intérieur"],
  },
  {
    icon: Settings,
    title: "Systèmes Électroniques",
    description: "Diagnostic et réparation des systèmes électroniques modernes : ABS, ESP, airbags.",
    features: ["Diagnostic OBD", "Réparation ABS", "Système ESP", "Airbags"],
  },
]

const commonProblems = [
  {
    problem: "Batterie Déchargée",
    symptoms: ["Démarrage difficile", "Voyants faibles", "Klaxon faible"],
    solution: "Test batterie et système de charge, remplacement si nécessaire",
  },
  {
    problem: "Alternateur Défaillant",
    symptoms: ["Voyant batterie allumé", "Éclairage faible", "Batterie se décharge"],
    solution: "Diagnostic alternateur, réparation ou remplacement selon l'état",
  },
  {
    problem: "Démarreur en Panne",
    symptoms: ["Moteur ne démarre pas", "Bruit de claquement", "Silence total"],
    solution: "Test démarreur, réparation contacts ou remplacement complet",
  },
  {
    problem: "Court-circuit Électrique",
    symptoms: ["Fusibles qui sautent", "Odeur de brûlé", "Dysfonctionnements"],
    solution: "Localisation du court-circuit et réparation du faisceau électrique",
  },
]

const testimonials = [
  {
    name: "Rachid Bennani",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Problème d'alternateur sur ma BMW résolu rapidement chez SMART OTO. Diagnostic précis, réparation efficace. L'équipe maîtrise parfaitement l'électricité auto !",
    vehicle: "BMW Série 5",
    service: "Réparation alternateur",
  },
  {
    name: "Fatima Zahra",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Batterie de ma Mercedes changée chez SMART OTO. Service rapide, conseil professionnel sur l'entretien. Garage de confiance pour l'électricité automobile !",
    vehicle: "Mercedes Classe C",
    service: "Remplacement batterie",
  },
  {
    name: "Youssef Alami",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Réparation système éclairage sur ma Audi. Équipe SMART OTO très compétente, diagnostic rapide, réparation parfaite. Je recommande !",
    vehicle: "Audi A4",
    service: "Réparation éclairage",
  },
]

export default function Electricite() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Électricité Auto</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Électricité Automobile</span> Spécialisée à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, votre spécialiste en électricité automobile à Rabat, vous propose des services de
                  diagnostic et réparation électrique de haute qualité. Nos techniciens experts maîtrisent tous les
                  systèmes électriques et électroniques modernes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Diagnostic Électrique
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Urgence Électrique
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Techniciens certifiés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-400" />
                    <span>Diagnostic précis</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/automotive-electrical-repair.png"
                  alt="Réparation électricité automobile SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm">Pannes résolues</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services d'Électricité Automobile</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO dispose d'équipements de diagnostic électrique de pointe pour identifier et réparer tous types
                de pannes électriques sur votre véhicule à Rabat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {electricalServices.map((service, index) => {
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

        {/* Common Problems Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Pannes Électriques Courantes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO diagnostique et répare les pannes électriques les plus fréquentes sur tous types de véhicules
                à Rabat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {commonProblems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Power className="h-6 w-6 text-red-600" />
                      {item.problem}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Symptômes :</h4>
                      <ul className="space-y-1">
                        {item.symptoms.map((symptom, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution SMART OTO :</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-3 rounded-lg">{item.solution}</p>
                    </div>
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
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise Électricité Automobile Reconnue</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Depuis plus de 15 ans, SMART OTO s'est spécialisé dans l'électricité automobile à Rabat. Nos
                  techniciens certifiés maîtrisent parfaitement les systèmes électriques classiques et les technologies
                  électroniques les plus modernes : multiplexage, bus CAN, systèmes d'aide à la conduite.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Notre atelier dispose d'équipements de diagnostic de pointe : multimètres professionnels,
                  oscilloscopes, testeurs de batterie, bancs d'essai alternateur/démarreur. Nous intervenons sur toutes
                  marques avec des pièces d'origine pour garantir la fiabilité de nos réparations électriques.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Battery className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Batteries</div>
                    <div className="text-sm text-gray-600">Test & remplacement</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Alternateurs</div>
                    <div className="text-sm text-gray-600">Réparation & échange</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Power className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Démarreurs</div>
                    <div className="text-sm text-gray-600">Diagnostic & réparation</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Settings className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Électronique</div>
                    <div className="text-sm text-gray-600">Systèmes modernes</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/electrical-diagnostic-equipment.png"
                  alt="Équipement diagnostic électrique SMART OTO"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-bold">Équipement Pro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Témoignages Clients</h2>
              <p className="text-xl text-gray-600">
                L'avis de nos clients sur nos services d'électricité automobile à Rabat
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
            <h2 className="text-4xl font-bold mb-4">Panne Électrique ? Nous Intervenons !</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez SMART OTO pour tous vos problèmes électriques automobiles. Diagnostic précis, réparation
              efficace, garantie sur nos interventions. Service d'urgence disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Diagnostic Électrique
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Urgence Électrique
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
