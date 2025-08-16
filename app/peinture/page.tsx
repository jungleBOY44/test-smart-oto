import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Sparkles, Shield, CheckCircle, Star, Award, Droplets, Brush } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Peinture Automobile à Rabat - SMART OTO | Peinture Voiture Premium",
  description:
    "Spécialiste peinture automobile à Rabat. SMART OTO : peinture complète, retouches, vernis. Cabine de peinture professionnelle. Finition parfaite. Devis gratuit.",
  keywords: [
    "peinture automobile Rabat",
    "peinture voiture Rabat",
    "cabine peinture Rabat",
    "retouche peinture auto Rabat",
    "peintre automobile Rabat",
    "vernissage auto Rabat",
  ],
}

const paintServices = [
  {
    icon: Palette,
    title: "Peinture Complète",
    description: "Remise en peinture totale de votre véhicule avec préparation minutieuse et finition premium.",
    features: ["Décapage complet", "Apprêt haute qualité", "Peinture multicouches", "Vernis de protection"],
  },
  {
    icon: Brush,
    title: "Retouches Localisées",
    description: "Réparation ciblée des rayures, éclats et défauts de peinture avec raccord invisible.",
    features: ["Ponçage précis", "Teinte parfaite", "Raccord invisible", "Séchage optimal"],
  },
  {
    icon: Sparkles,
    title: "Peinture Métallisée",
    description: "Application de peintures spéciales : métallisée, nacrée, mate selon vos préférences.",
    features: ["Effets spéciaux", "Brillance exceptionnelle", "Résistance UV", "Durabilité garantie"],
  },
  {
    icon: Shield,
    title: "Protection Vernis",
    description: "Application de vernis haute protection pour préserver l'éclat et la durabilité de la peinture.",
    features: ["Vernis anti-UV", "Protection rayures", "Brillance longue durée", "Facilité d'entretien"],
  },
]

const paintTypes = [
  {
    name: "Peinture Acrylique",
    description: "Peinture de base offrant un bon rapport qualité-prix avec séchage rapide",
    advantages: ["Séchage rapide", "Coût abordable", "Bonne couvrance", "Facilité d'application"],
    durability: "3-5 ans",
  },
  {
    name: "Peinture Polyuréthane",
    description: "Peinture haut de gamme offrant une résistance exceptionnelle et un brillant durable",
    advantages: ["Résistance chimique", "Brillant intense", "Durabilité maximale", "Protection UV"],
    durability: "8-10 ans",
  },
  {
    name: "Peinture Céramique",
    description: "Technologie de pointe pour une protection ultime et un rendu esthétique exceptionnel",
    advantages: ["Protection maximale", "Autonettoyante", "Résistance extrême", "Éclat permanent"],
    durability: "10+ ans",
  },
]

const colorMatching = [
  {
    step: "1",
    title: "Analyse Colorimétrique",
    description: "Identification précise de la teinte d'origine avec spectrophotomètre professionnel",
  },
  {
    step: "2",
    title: "Formulation Personnalisée",
    description: "Création de la formule exacte en tenant compte de l'âge et de l'exposition du véhicule",
  },
  {
    step: "3",
    title: "Test de Raccord",
    description: "Validation de la teinte sur une zone test avant application définitive",
  },
  {
    step: "4",
    title: "Application Professionnelle",
    description: "Peinture en cabine climatisée avec respect des temps de séchage",
  },
]

const testimonials = [
  {
    name: "Karim Alaoui",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Peinture complète de ma BMW chez SMART OTO. Le résultat est bluffant ! La teinte est parfaite et la finition impeccable. Travail de professionnel !",
    vehicle: "BMW Série 5",
    service: "Peinture complète",
  },
  {
    name: "Nadia Benjelloun",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Retouche peinture sur ma Mercedes après rayure. Le raccord est invisible, on ne voit plus rien ! Équipe SMART OTO très compétente.",
    vehicle: "Mercedes Classe C",
    service: "Retouche localisée",
  },
  {
    name: "Youssef Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Peinture métallisée sur ma Audi. L'effet est magnifique et la protection vernis garantit une durabilité exceptionnelle. Je recommande !",
    vehicle: "Audi A6",
    service: "Peinture métallisée",
  },
]

export default function Peinture() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Maître Peintre Automobile</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Peinture Automobile</span> d'Excellence à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, votre spécialiste en peinture automobile à Rabat, vous offre des services de peinture
                  premium dans une cabine professionnelle climatisée. De la retouche localisée à la peinture complète,
                  nous redonnons à votre véhicule son éclat d'origine avec une finition parfaite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Devis Peinture Gratuit
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Voir Nos Finitions
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Cabine professionnelle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span>Garantie 5 ans</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/professional-paint-booth.png"
                  alt="Cabine de peinture professionnelle SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm">Véhicules peints</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services de Peinture Automobile</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO dispose d'une cabine de peinture professionnelle climatisée et d'équipements de pointe pour
                vous garantir une finition parfaite. Nos peintres expérimentés maîtrisent toutes les techniques de
                peinture automobile moderne.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {paintServices.map((service, index) => {
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

        {/* Paint Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Types de Peinture Disponibles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO vous propose différents types de peinture selon vos besoins et votre budget, de la peinture
                standard aux technologies les plus avancées.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {paintTypes.map((paint, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow relative">
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">RECOMMANDÉ</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-xl font-bold text-slate-900">{paint.name}</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">{paint.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {paint.advantages.map((advantage, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700 text-sm">{advantage}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-600">Durabilité</div>
                      <div className="text-lg font-bold text-blue-600">{paint.durability}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Color Matching Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Processus de Raccord Couleur</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO utilise des technologies avancées pour garantir un raccord parfait de la couleur, même sur les
                teintes les plus complexes.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {colorMatching.map((step, index) => (
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

        {/* Equipment Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Équipement Professionnel de Pointe</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Notre atelier SMART OTO dispose d'une cabine de peinture professionnelle climatisée avec système de
                  filtration avancé, garantissant un environnement parfaitement propre pour une finition impeccable.
                  Nous utilisons également un spectrophotomètre pour l'analyse colorimétrique précise.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nos équipements incluent : cabine de peinture climatisée, système de préparation d'air comprimé,
                  pistons de peinture haute précision, four de séchage infrarouge, et spectrophotomètre pour analyse
                  couleur. Cette technologie nous permet de garantir une qualité professionnelle sur tous nos travaux de
                  peinture automobile à Rabat.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Cabine Climatisée</div>
                    <div className="text-sm text-gray-600">Environnement contrôlé</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Palette className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Spectrophotomètre</div>
                    <div className="text-sm text-gray-600">Analyse couleur précise</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Sparkles className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Séchage Infrarouge</div>
                    <div className="text-sm text-gray-600">Finition optimale</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Filtration Avancée</div>
                    <div className="text-sm text-gray-600">Zéro poussière</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/paint-specialist-working.png"
                  alt="Peintre automobile professionnel SMART OTO en action"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-bold">Certification Pro</span>
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
                Découvrez l'avis de nos clients sur nos services de peinture automobile à Rabat
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
            <h2 className="text-4xl font-bold mb-4">Redonnez Vie à Votre Véhicule</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Confiez la peinture de votre véhicule aux experts SMART OTO. Cabine professionnelle, finition parfaite,
              garantie 5 ans. Demandez votre devis gratuit !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Devis Peinture Gratuit
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
