import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Sparkles, Droplets, CheckCircle, Star, Award, Sun, Zap } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Protection Céramique Automobile à Rabat - SMART OTO | Nano-Céramique Premium",
  description:
    "Protection céramique automobile à Rabat. SMART OTO : nano-céramique premium, protection longue durée, brillance exceptionnelle. Devis gratuit. Al Kamra, Rabat.",
  keywords: [
    "protection céramique Rabat",
    "nano céramique auto Rabat",
    "traitement céramique Rabat",
    "protection peinture Rabat",
    "céramique automobile Rabat",
    "coating céramique Rabat",
  ],
}

const ceramicServices = [
  {
    icon: Shield,
    title: "Protection Céramique 9H",
    description:
      "Traitement céramique haute performance offrant une protection maximale contre les agressions extérieures.",
    features: ["Dureté 9H", "Protection UV", "Hydrophobe", "Anti-rayures"],
  },
  {
    icon: Sparkles,
    title: "Nano-Céramique Premium",
    description: "Technologie nano-céramique de dernière génération pour un éclat et une protection exceptionnels.",
    features: ["Brillance intense", "Effet miroir", "Facilité lavage", "Longévité 5 ans"],
  },
  {
    icon: Droplets,
    title: "Traitement Hydrophobe",
    description: "Protection spécialisée contre l'eau et les taches avec effet perlant spectaculaire.",
    features: ["Effet perlant", "Anti-taches", "Séchage rapide", "Protection pluie"],
  },
  {
    icon: Sun,
    title: "Protection Anti-UV",
    description: "Bouclier invisible contre les rayons UV pour préserver l'éclat de votre peinture.",
    features: ["Filtre UV", "Anti-décoloration", "Préservation couleur", "Résistance chaleur"],
  },
]

const ceramicBenefits = [
  {
    title: "Protection Longue Durée",
    description: "5 à 7 ans de protection garantie",
    icon: Shield,
  },
  {
    title: "Brillance Exceptionnelle",
    description: "Éclat permanent et effet miroir",
    icon: Sparkles,
  },
  {
    title: "Facilité d'Entretien",
    description: "Lavage simplifié, moins de temps",
    icon: Droplets,
  },
  {
    title: "Résistance Chimique",
    description: "Protection contre pollution et acides",
    icon: Zap,
  },
]

const applicationProcess = [
  {
    step: "1",
    title: "Préparation Minutieuse",
    description: "Lavage approfondi, décontamination et polissage pour une surface parfaite",
  },
  {
    step: "2",
    title: "Application Céramique",
    description: "Pose du traitement céramique par sections avec technique professionnelle",
  },
  {
    step: "3",
    title: "Polymérisation",
    description: "Séchage contrôlé et durcissement du revêtement céramique",
  },
  {
    step: "4",
    title: "Contrôle Qualité",
    description: "Vérification finale et remise du certificat de garantie",
  },
]

const testimonials = [
  {
    name: "Mohamed Alami",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Protection céramique sur ma Porsche chez SMART OTO. Le résultat est bluffant ! 6 mois après, la voiture brille toujours comme au premier jour. Investissement rentable !",
    vehicle: "Porsche 911",
    service: "Céramique Premium 9H",
  },
  {
    name: "Leila Benali",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Traitement nano-céramique sur ma BMW. L'effet hydrophobe est impressionnant, l'eau perle parfaitement. Plus besoin de cirer ! Service SMART OTO impeccable.",
    vehicle: "BMW X3",
    service: "Nano-céramique",
  },
  {
    name: "Hassan Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Ma Mercedes retrouve son éclat d'origine grâce au traitement céramique SMART OTO. Protection efficace contre la pollution de Rabat. Je recommande !",
    vehicle: "Mercedes Classe E",
    service: "Protection céramique",
  },
]

const beforeAfterCeramic = [
  {
    before: "/faded-car-paint-before.png",
    after: "/ceramic-protected-car.png",
    title: "Protection Céramique BMW",
    description: "Traitement céramique 9H - Brillance et protection 5 ans",
  },
  {
    before: "/dull-car-surface.png",
    after: "/glossy-ceramic-finish.png",
    title: "Nano-Céramique Mercedes",
    description: "Application nano-céramique premium - Effet miroir",
  },
  {
    before: "/weathered-car-paint.png",
    after: "/hydrophobic-ceramic-coating.png",
    title: "Traitement Hydrophobe Audi",
    description: "Protection hydrophobe - Effet perlant spectaculaire",
  },
]

export default function ProtectionCeramique() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Protection Céramique</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Protection Céramique</span> Premium à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, spécialiste de la protection céramique automobile à Rabat, vous propose des traitements
                  nano-céramique de dernière génération. Protégez votre véhicule avec une brillance exceptionnelle et
                  une durabilité de 5 à 7 ans garantie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Devis Protection Gratuit
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Voir les Résultats
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Certification applicateur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span>Garantie 5-7 ans</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/ceramic-coating-application.png"
                  alt="Application protection céramique professionnelle SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">2000+</div>
                  <div className="text-sm">Véhicules protégés</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Traitements Céramique</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO utilise les technologies céramique les plus avancées pour offrir à votre véhicule une
                protection ultime et un éclat permanent. Nos applicateurs certifiés garantissent un résultat
                professionnel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ceramicServices.map((service, index) => {
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Avantages de la Protection Céramique</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez pourquoi la protection céramique est l'investissement idéal pour préserver et sublimer votre
                véhicule à Rabat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ceramicBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Résultats Avant/Après</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez la transformation spectaculaire de nos véhicules après application de la protection céramique
                SMART OTO.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {beforeAfterCeramic.map((item, index) => (
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

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Processus d'Application Professionnel</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO suit un protocole rigoureux pour garantir une application parfaite de la protection céramique
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {applicationProcess.map((step, index) => (
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

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Témoignages Clients</h2>
              <p className="text-xl text-gray-600">
                L'expérience de nos clients avec la protection céramique SMART OTO à Rabat
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
            <h2 className="text-4xl font-bold mb-4">Protégez Votre Investissement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Offrez à votre véhicule la protection ultime avec la céramique SMART OTO. Brillance permanente, protection
              5-7 ans, facilité d'entretien. Demandez votre devis !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Devis Protection Gratuit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Prendre Rendez-vous
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
