import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, CheckCircle, Award, Zap, Sun, Droplets, Sparkles } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Protection PPF à Rabat - SMART OTO | Film Protection Polyuréthane Auto",
  description:
    "Protection PPF automobile à Rabat. SMART OTO : film polyuréthane transparent, protection carrosserie, anti-rayures. Installation professionnelle. Devis gratuit.",
  keywords: [
    "protection PPF Rabat",
    "film polyuréthane Rabat",
    "protection carrosserie Rabat",
    "PPF automobile Rabat",
    "film transparent Rabat",
    "protection peinture Rabat",
  ],
}

const ppfServices = [
  {
    icon: Shield,
    title: "PPF Intégral",
    description: "Protection complète de votre véhicule avec film polyuréthane haute qualité sur toute la carrosserie.",
    features: ["Carrosserie complète", "Finition invisible", "Protection maximale", "Garantie 10 ans"],
  },
  {
    icon: Star,
    title: "PPF Zones Sensibles",
    description: "Protection ciblée des zones les plus exposées : pare-chocs, capot, rétroviseurs, seuils de portes.",
    features: ["Zones à risque", "Installation précise", "Raccords invisibles", "Rapport qualité-prix"],
  },
  {
    icon: Zap,
    title: "PPF Performance",
    description: "Film haute performance avec propriétés auto-cicatrisantes pour véhicules sportifs et premium.",
    features: ["Auto-cicatrisant", "Résistance extrême", "Clarté optique", "Technologie avancée"],
  },
  {
    icon: Sun,
    title: "PPF Anti-UV",
    description: "Protection spécialisée contre les rayons UV avec filtre intégré pour préserver l'éclat.",
    features: ["Filtre UV intégré", "Anti-jaunissement", "Préservation couleur", "Longévité maximale"],
  },
]

const ppfBenefits = [
  {
    title: "Protection Invisible",
    description: "Film transparent qui préserve l'esthétique d'origine",
    icon: Sparkles,
  },
  {
    title: "Auto-Cicatrisant",
    description: "Micro-rayures disparaissent avec la chaleur",
    icon: Zap,
  },
  {
    title: "Résistance Impacts",
    description: "Protection contre graviers et projections",
    icon: Shield,
  },
  {
    title: "Facilité Entretien",
    description: "Nettoyage simplifié, surface lisse",
    icon: Droplets,
  },
]

const installationProcess = [
  {
    step: "1",
    title: "Préparation Surface",
    description: "Nettoyage minutieux et décontamination de la carrosserie",
  },
  {
    step: "2",
    title: "Découpe Précise",
    description: "Découpe du film selon gabarits spécifiques au véhicule",
  },
  {
    step: "3",
    title: "Application Professionnelle",
    description: "Pose du film avec technique humide et outils spécialisés",
  },
  {
    step: "4",
    title: "Finition Parfaite",
    description: "Élimination bulles d'air et contrôle qualité final",
  },
]

const beforeAfterPPF = [
  {
    before: "/car-paint-before-ppf.png",
    after: "/car-with-ppf-protection.png",
    title: "Protection PPF Porsche",
    description: "Film polyuréthane intégral - Protection invisible 10 ans",
  },
  {
    before: "/damaged-front-bumper.png",
    after: "/protected-bumper-ppf.png",
    title: "PPF Pare-chocs BMW",
    description: "Protection zones sensibles - Résistance impacts",
  },
  {
    before: "/scratched-car-hood.png",
    after: "/ppf-protected-hood.png",
    title: "PPF Capot Mercedes",
    description: "Film auto-cicatrisant - Micro-rayures disparues",
  },
]

const testimonials = [
  {
    name: "Youssef Alami",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Protection PPF sur ma Porsche chez SMART OTO. Installation parfaite, film invisible, protection efficace contre les graviers. Investissement rentable !",
    vehicle: "Porsche 911",
    service: "PPF Intégral",
  },
  {
    name: "Karim Benjelloun",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "PPF sur pare-chocs et capot de ma BMW. Équipe SMART OTO très professionnelle, finition impeccable. Plus de souci avec les impacts !",
    vehicle: "BMW X5",
    service: "PPF Zones sensibles",
  },
  {
    name: "Nadia Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Film PPF auto-cicatrisant sur ma Mercedes. Les micro-rayures disparaissent vraiment ! SMART OTO maîtrise parfaitement cette technologie.",
    vehicle: "Mercedes Classe S",
    service: "PPF Performance",
  },
]

export default function ProtectionPPF() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Protection PPF</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Protection PPF</span> Premium à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, spécialiste de la protection PPF (Paint Protection Film) à Rabat, vous propose
                  l'installation de films polyuréthane transparents de haute qualité. Protégez votre carrosserie contre
                  les impacts, rayures et agressions extérieures avec une finition invisible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Devis PPF Gratuit
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
                    <span>Installateur certifié</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span>Garantie 10 ans</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/garagePPF.png"
                  alt="Installation protection PPF professionnelle SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Solutions Protection PPF</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO ,qc fnfn,g,p ropose différentes formules de protection PPF adaptées à vos besoins et budget. Nos
                installateurs certifiés garantissent une pose parfaite avec finition invisible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ppfServices.map((service, index) => {
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Avantages de la Protection PPF</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez pourquoi la protection PPF est l'investissement idéal pour préserver la valeur et l'esthétique
                de votre véhicule à Rabat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ppfBenefits.map((benefit, index) => {
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Réalisations PPF Avant/Après</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez l'efficacité de nos installations PPF à travers nos réalisations sur véhicules premium à
                Rabat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {beforeAfterPPF.map((item, index) => (
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

        {/* Installation Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Processus d'Installation PPF</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO suit un protocole rigoureux pour garantir une installation PPF parfaite et durable
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {installationProcess.map((step, index) => (
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

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise PPF Reconnue à Rabat</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SMART OTO est installateur certifié des meilleures marques de films PPF : 3M, XPEL, SunTek. Nos
                  techniciens suivent des formations spécialisées pour maîtriser les techniques d'installation les plus
                  avancées et garantir un résultat parfait.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Notre atelier climatisé dispose d'un environnement contrôlé sans poussière, essentiel pour une
                  installation PPF de qualité. Nous utilisons des films auto-cicatrisants de dernière génération avec
                  garantie constructeur de 10 ans contre jaunissement, craquellement et décollement.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Installateur certifié 3M, XPEL, SunTek</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Atelier climatisé sans poussière</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Films auto-cicatrisants premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Garantie 10 ans constructeur</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/ppf-installation-workshop.png"
                  alt="Atelier installation PPF professionnel SMART OTO"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-bold">Certifié Pro</span>
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
                L'expérience de nos clients avec la protection PPF SMART OTO à Rabat
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
              Offrez à votre véhicule la protection ultime avec le PPF SMART OTO. Installation professionnelle, films
              premium, garantie 10 ans. Préservez la valeur de votre véhicule !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Devis PPF Gratuit
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
