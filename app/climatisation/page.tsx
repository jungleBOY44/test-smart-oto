import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wind, Snowflake, Thermometer, CheckCircle, Star, Award, Settings, Droplets } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Climatisation Automobile à Rabat - SMART OTO | Réparation Clim Auto",
  description:
    "Spécialiste climatisation automobile à Rabat. SMART OTO : recharge gaz, réparation compresseur, entretien clim. Service professionnel. Devis gratuit.",
  keywords: [
    "climatisation automobile Rabat",
    "réparation clim auto Rabat",
    "recharge gaz climatisation Rabat",
    "compresseur clim Rabat",
    "entretien climatisation Rabat",
    "clim auto Rabat",
  ],
}

const climateServices = [
  {
    icon: Wind,
    title: "Recharge Gaz Réfrigérant",
    description: "Recharge complète du système avec gaz R134a ou R1234yf selon spécifications constructeur.",
    features: ["Contrôle étanchéité", "Vidange système", "Recharge gaz neuf", "Test performance"],
  },
  {
    icon: Settings,
    title: "Réparation Compresseur",
    description: "Diagnostic et réparation du compresseur de climatisation avec pièces d'origine.",
    features: ["Diagnostic compresseur", "Réparation/échange", "Test pression", "Garantie pièces"],
  },
  {
    icon: Snowflake,
    title: "Entretien Préventif",
    description: "Maintenance complète du système de climatisation pour un fonctionnement optimal.",
    features: ["Nettoyage évaporateur", "Changement filtre", "Désinfection circuit", "Contrôle courroies"],
  },
  {
    icon: Thermometer,
    title: "Diagnostic Électronique",
    description: "Diagnostic complet des systèmes électroniques de régulation de température.",
    features: ["Test capteurs", "Contrôle électronique", "Calibrage système", "Réparation circuits"],
  },
]

const maintenanceSteps = [
  {
    step: "1",
    title: "Diagnostic Complet",
    description: "Test de performance, contrôle pression et température du système",
  },
  {
    step: "2",
    title: "Nettoyage Circuit",
    description: "Nettoyage évaporateur, condenseur et désinfection du circuit",
  },
  {
    step: "3",
    title: "Recharge Système",
    description: "Vidange et recharge avec gaz réfrigérant adapté à votre véhicule",
  },
  {
    step: "4",
    title: "Test Final",
    description: "Vérification performance et température de sortie d'air",
  },
]

const commonIssues = [
  {
    issue: "Air Pas Assez Froid",
    causes: ["Manque de gaz", "Compresseur défaillant", "Fuite circuit"],
    solution: "Diagnostic complet et recharge ou réparation selon diagnostic",
  },
  {
    issue: "Mauvaises Odeurs",
    causes: ["Évaporateur encrassé", "Filtre habitacle sale", "Bactéries circuit"],
    solution: "Nettoyage évaporateur, changement filtre et désinfection",
  },
  {
    issue: "Bruit Anormal",
    causes: ["Compresseur usé", "Courroie détendue", "Ventilateur défaillant"],
    solution: "Réparation ou remplacement des éléments défaillants",
  },
]

const testimonials = [
  {
    name: "Hassan Alami",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Recharge climatisation de ma BMW chez SMART OTO. Service rapide, air bien froid maintenant ! Équipe professionnelle, je recommande pour la clim auto à Rabat.",
    vehicle: "BMW X3",
    service: "Recharge climatisation",
  },
  {
    name: "Leila Benjelloun",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Réparation compresseur clim sur ma Mercedes. SMART OTO a résolu le problème rapidement. Plus de mauvaises odeurs, air parfaitement froid !",
    vehicle: "Mercedes Classe C",
    service: "Réparation compresseur",
  },
  {
    name: "Mohamed Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Entretien climatisation annuel chez SMART OTO. Service préventif excellent, conseils utiles. Ma clim fonctionne parfaitement même en été !",
    vehicle: "Audi A6",
    service: "Entretien préventif",
  },
]

export default function Climatisation() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Climatisation Auto</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Climatisation Automobile</span> Professionnelle à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, votre spécialiste en climatisation automobile à Rabat, vous propose des services complets
                  d'entretien, réparation et recharge de climatisation. Profitez d'un confort optimal en toute saison
                  avec nos experts certifiés.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Recharge Climatisation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Diagnostic Gratuit
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Techniciens certifiés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Snowflake className="h-5 w-5 text-green-400" />
                    <span>Gaz écologique</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/automotive-air-conditioning-service.png"
                  alt="Service climatisation automobile SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">0°C</div>
                  <div className="text-sm">Température garantie</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services de Climatisation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO dispose d'équipements professionnels pour l'entretien et la réparation de tous systèmes de
                climatisation automobile. Nos techniciens certifiés garantissent un service de qualité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {climateServices.map((service, index) => {
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

        {/* Maintenance Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Processus d'Entretien Climatisation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO suit un protocole rigoureux pour garantir le bon fonctionnement de votre climatisation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {maintenanceSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Problèmes Climatisation Courants</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO diagnostique et résout tous les problèmes de climatisation automobile à Rabat
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {commonIssues.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Wind className="h-6 w-6 text-blue-600" />
                      {item.issue}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Causes possibles :</h4>
                      <ul className="space-y-1">
                        {item.causes.map((cause, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            {cause}
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise Climatisation Reconnue à Rabat</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SMART OTO maîtrise parfaitement tous les systèmes de climatisation automobile, des plus anciens aux
                  plus modernes. Nos techniciens sont certifiés pour manipuler les gaz réfrigérants R134a et R1234yf
                  selon les normes environnementales en vigueur.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Notre atelier dispose d'une station de récupération et recharge automatique, de manomètres
                  professionnels et d'outils de diagnostic spécialisés. Nous garantissons un service respectueux de
                  l'environnement avec récupération et recyclage des anciens gaz réfrigérants.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Station recharge automatique professionnelle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Techniciens certifiés manipulation gaz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Respect normes environnementales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Garantie performance et étanchéité</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/air-conditioning-equipment.png"
                  alt="Équipement climatisation professionnel SMART OTO"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4" />
                    <span className="text-sm font-bold">Éco-responsable</span>
                  </div>
                </div>
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
                L'avis de nos clients sur nos services de climatisation automobile à Rabat
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
            <h2 className="text-4xl font-bold mb-4">Climatisation Défaillante ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez SMART OTO pour l'entretien de votre climatisation automobile. Recharge, réparation, diagnostic
              gratuit. Confort garanti même par forte chaleur !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Recharge Climatisation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Diagnostic Gratuit
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
