import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, Sparkles, Brush, CheckCircle, Star, Award, Wrench, Shield } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Rénovation Automobile à Rabat - SMART OTO | Remise à Neuf Véhicule",
  description:
    "Rénovation automobile à Rabat. SMART OTO : polissage, rénovation cuir, plastiques, remise à neuf complète. Redonnez vie à votre véhicule. Devis gratuit.",
  keywords: [
    "rénovation automobile Rabat",
    "polissage Rabat",
    "rénovation cuir Rabat",
    "remise à neuf Rabat",
    "restauration auto Rabat",
    "rénovation intérieur Rabat",
  ],
}

const renovationServices = [
  {
    icon: Sparkles,
    title: "Polissage Carrosserie",
    description: "Élimination des micro-rayures et redonnage de l'éclat d'origine à votre peinture automobile.",
    features: ["Correction défauts", "Polissage multi-étapes", "Protection finale", "Brillance exceptionnelle"],
  },
  {
    icon: Brush,
    title: "Rénovation Cuir",
    description: "Restauration complète des sièges et éléments cuir avec produits spécialisés professionnels.",
    features: ["Nettoyage profond", "Réparation craquelures", "Recoloration", "Protection longue durée"],
  },
  {
    icon: RotateCcw,
    title: "Rénovation Plastiques",
    description: "Remise à neuf des plastiques intérieurs et extérieurs ternis par le temps et les UV.",
    features: ["Décoloration supprimée", "Aspect neuf retrouvé", "Protection anti-UV", "Finition mate/brillante"],
  },
  {
    icon: Shield,
    title: "Rénovation Complète",
    description: "Service intégral de remise à neuf intérieur et extérieur pour véhicules anciens ou négligés.",
    features: ["Évaluation complète", "Rénovation totale", "Finition premium", "Garantie résultat"],
  },
]

const renovationSteps = [
  {
    step: "1",
    title: "Diagnostic Complet",
    description: "Évaluation détaillée de l'état du véhicule et établissement du plan de rénovation",
  },
  {
    step: "2",
    title: "Préparation",
    description: "Démontage des éléments nécessaires et préparation des surfaces à traiter",
  },
  {
    step: "3",
    title: "Rénovation",
    description: "Application des techniques spécialisées selon les matériaux et défauts",
  },
  {
    step: "4",
    title: "Protection & Finition",
    description: "Application des protections et contrôle qualité final avant livraison",
  },
]

const beforeAfterRenovation = [
  {
    before: "/worn-leather-seats.png",
    after: "/renovated-leather-seats.png",
    title: "Rénovation Sièges Cuir",
    description: "Restauration complète cuir BMW - Aspect neuf retrouvé",
  },
  {
    before: "/faded-car-paint-oxidized.png",
    after: "/polished-car-paint.png",
    title: "Polissage Carrosserie",
    description: "Correction défauts peinture Mercedes - Brillance d'origine",
  },
  {
    before: "/faded-plastic-trim.png",
    after: "/restored-plastic-trim.png",
    title: "Rénovation Plastiques",
    description: "Remise à neuf plastiques Audi - Protection anti-UV",
  },
]

const specializedTechniques = [
  {
    technique: "Polissage Multi-Étapes",
    description: "Correction progressive des défauts avec abrasifs de plus en plus fins",
    materials: ["Compound", "Polish", "Finishing polish", "Microfibre"],
  },
  {
    technique: "Rénovation Cuir Profonde",
    description: "Nettoyage, réparation, recoloration et protection du cuir automobile",
    materials: ["Nettoyant cuir", "Réparateur", "Teinture", "Crème protection"],
  },
  {
    technique: "Restauration Plastiques",
    description: "Élimination décoloration et protection contre vieillissement UV",
    materials: ["Décolorant", "Primer", "Peinture", "Vernis protection"],
  },
  {
    technique: "Rénovation Métaux",
    description: "Polissage et protection des éléments métalliques chromés ou aluminium",
    materials: ["Polish métal", "Compound", "Cire protection", "Microfibre"],
  },
]

const testimonials = [
  {
    name: "Rachid Alami",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Rénovation complète de ma BMW de 2010 chez SMART OTO. Le résultat est bluffant ! La voiture a retrouvé son aspect d'origine. Travail exceptionnel !",
    vehicle: "BMW Série 3 (2010)",
    service: "Rénovation complète",
  },
  {
    name: "Fatima Zahra",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Rénovation des sièges cuir de ma Mercedes. SMART OTO a fait des miracles ! Le cuir craquelé est redevenu comme neuf. Je recommande vivement !",
    vehicle: "Mercedes Classe E",
    service: "Rénovation cuir",
  },
  {
    name: "Ahmed Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Polissage carrosserie de ma Porsche. L'équipe SMART OTO a éliminé toutes les micro-rayures. La peinture brille comme au premier jour !",
    vehicle: "Porsche 911",
    service: "Polissage professionnel",
  },
]

export default function Renovation() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Rénovation Auto</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Rénovation Automobile</span> Professionnelle à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, spécialiste de la rénovation automobile à Rabat, redonne vie à votre véhicule. Polissage
                  carrosserie, rénovation cuir, restauration plastiques : nos experts utilisent des techniques avancées
                  pour une remise à neuf complète.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Devis Rénovation Gratuit
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
                    <span>Techniques professionnelles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span>Garantie résultat</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/car-renovation-process.png"
                  alt="Rénovation automobile professionnelle SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm">Véhicules rénovés</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services de Rénovation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO maîtrise toutes les techniques de rénovation automobile pour redonner à votre véhicule son
                éclat d'origine, quel que soit son âge ou son état.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {renovationServices.map((service, index) => {
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Rénovations Avant/Après</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez la transformation spectaculaire de nos véhicules après rénovation SMART OTO à Rabat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {beforeAfterRenovation.map((item, index) => (
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

        {/* Specialized Techniques */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Techniques Spécialisées</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO utilise des techniques professionnelles avancées et des produits spécialisés pour chaque type
                de rénovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specializedTechniques.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Wrench className="h-6 w-6 text-blue-600" />
                      {item.technique}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Matériaux utilisés :</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {item.materials.map((material, idx) => (
                          <div key={idx} className="text-sm text-gray-600 bg-blue-50 p-2 rounded">
                            {material}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Renovation Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Processus de Rénovation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO suit une méthodologie rigoureuse pour garantir une rénovation parfaite et durable
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {renovationSteps.map((step, index) => (
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
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise Rénovation Reconnue à Rabat</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SMART OTO possède plus de 15 ans d'expérience en rénovation automobile. Nos spécialistes maîtrisent
                  toutes les techniques de restauration : polissage multi-étapes, rénovation cuir, restauration
                  plastiques, remise à neuf métaux. Chaque intervention est adaptée aux spécificités du véhicule.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nous utilisons exclusivement des produits professionnels haut de gamme : Meguiar's, Chemical Guys,
                  Leather Honey, 303 Aerospace. Notre atelier dispose d'équipements spécialisés : polisseuses orbitales,
                  extracteurs vapeur, cabine de séchage contrôlée pour garantir des résultats exceptionnels.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">15+ ans d'expérience en rénovation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Produits professionnels premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Équipements spécialisés modernes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Garantie satisfaction et durabilité</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/renovation-workshop-equipment.png"
                  alt="Atelier rénovation automobile SMART OTO équipements"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-bold">Expert Certifié</span>
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
                L'expérience de nos clients avec nos services de rénovation automobile à Rabat
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
            <h2 className="text-4xl font-bold mb-4">Redonnez Vie à Votre Véhicule !</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Confiez la rénovation de votre véhicule aux experts SMART OTO. Polissage, rénovation cuir, remise à neuf
              complète. Retrouvez l'éclat d'origine ! Devis gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Devis Rénovation Gratuit
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
