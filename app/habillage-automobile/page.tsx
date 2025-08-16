import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Car, Sparkles, CheckCircle, Star, Award, Brush, Scissors } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Habillage Automobile à Rabat - SMART OTO | Covering & Personnalisation",
  description:
    "Habillage automobile à Rabat. SMART OTO : covering, wrapping, personnalisation véhicule. Vinyles premium, finition parfaite. Changez de look ! Devis gratuit.",
  keywords: [
    "habillage automobile Rabat",
    "covering Rabat",
    "wrapping voiture Rabat",
    "personnalisation auto Rabat",
    "vinyle automobile Rabat",
    "changement couleur Rabat",
  ],
}

const wrappingServices = [
  {
    icon: Car,
    title: "Covering Intégral",
    description: "Changement complet de couleur avec vinyle haute qualité pour transformer totalement votre véhicule.",
    features: ["Changement couleur", "Vinyle premium", "Finition parfaite", "Protection peinture"],
  },
  {
    icon: Palette,
    title: "Covering Partiel",
    description: "Personnalisation ciblée : toit, capot, rétroviseurs, bandes décoratives selon vos goûts.",
    features: ["Zones spécifiques", "Design personnalisé", "Effets spéciaux", "Raccords invisibles"],
  },
  {
    icon: Sparkles,
    title: "Finitions Spéciales",
    description: "Vinyles à effets : mat, satiné, métallisé, carbone, chrome pour un look unique.",
    features: ["Effet carbone", "Finition chrome", "Mat/Satiné", "Métallisé"],
  },
  {
    icon: Brush,
    title: "Décoration & Logos",
    description: "Application de décors, logos, publicité avec découpe de précision et pose professionnelle.",
    features: ["Logos entreprise", "Décors sportifs", "Publicité véhicule", "Découpe précision"],
  },
]

const vinylTypes = [
  {
    name: "Vinyle Cast Premium",
    description: "Vinyle haut de gamme conformable pour formes complexes",
    durability: "7-10 ans",
    features: ["Conformable", "Repositionnable", "Résistant UV", "Finition parfaite"],
  },
  {
    name: "Vinyle Effet Carbone",
    description: "Texture carbone 3D pour look sportif authentique",
    durability: "5-7 ans",
    features: ["Texture 3D", "Aspect réaliste", "Résistant rayures", "Facile entretien"],
  },
  {
    name: "Vinyle Chrome",
    description: "Finition miroir pour effet spectaculaire",
    durability: "3-5 ans",
    features: ["Effet miroir", "Brillance intense", "Impact visuel", "Application délicate"],
  },
]

const customizationOptions = [
  {
    category: "Couleurs Unies",
    options: ["Noir mat", "Blanc nacré", "Rouge racing", "Bleu métallisé", "Gris anthracite"],
  },
  {
    category: "Effets Spéciaux",
    options: ["Carbone 3D", "Chrome miroir", "Satiné", "Métallisé", "Caméléon"],
  },
  {
    category: "Textures",
    options: ["Cuir", "Brossé", "Diamant", "Crocodile", "Velours"],
  },
  {
    category: "Motifs",
    options: ["Camouflage", "Géométrique", "Racing stripes", "Flammes", "Tribal"],
  },
]

const testimonials = [
  {
    name: "Mehdi Alaoui",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Covering intégral noir mat sur ma BMW chez SMART OTO. Résultat bluffant ! La finition est parfaite, aucune bulle. Mon véhicule a totalement changé de look !",
    vehicle: "BMW Série 3",
    service: "Covering intégral",
  },
  {
    name: "Sara Benjelloun",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Toit carbone sur ma Mercedes. L'équipe SMART OTO maîtrise parfaitement la pose de vinyle. L'effet carbone 3D est très réaliste !",
    vehicle: "Mercedes Classe A",
    service: "Covering partiel",
  },
  {
    name: "Karim Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Habillage publicitaire de mon véhicule professionnel. SMART OTO a réalisé un travail impeccable avec découpe précise des logos. Très satisfait !",
    vehicle: "Volkswagen Crafter",
    service: "Décoration professionnelle",
  },
]

export default function HabillageAutomobile() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Habillage Auto</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Habillage Automobile</span> & Personnalisation à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, votre spécialiste en habillage automobile à Rabat, transforme votre véhicule avec des
                  vinyles premium. Covering intégral, partiel, effets spéciaux : donnez une nouvelle identité à votre
                  voiture avec nos experts en wrapping.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Devis Covering Gratuit
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Voir Nos Créations
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Vinyles premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-green-400" />
                    <span>Finition parfaite</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/car-wrapping-process.png"
                  alt="Habillage automobile professionnel SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">300+</div>
                  <div className="text-sm">Véhicules habillés</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services d'Habillage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO propose tous types d'habillage automobile avec des vinyles premium et une pose
                professionnelle. Transformez votre véhicule selon vos envies !
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wrappingServices.map((service, index) => {
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

        {/* Vinyl Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Types de Vinyles Disponibles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO utilise exclusivement des vinyles premium des meilleures marques pour garantir qualité et
                durabilité.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {vinylTypes.map((vinyl, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-slate-900">{vinyl.name}</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">{vinyl.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Durabilité</div>
                        <div className="text-lg font-bold text-blue-600">{vinyl.durability}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {vinyl.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customization Options */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Options de Personnalisation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explorez nos nombreuses possibilités de personnalisation pour créer un véhicule unique à votre image
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {customizationOptions.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                      <Scissors className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.options.map((option, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Processus d'Habillage Professionnel</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO suit un processus rigoureux pour garantir un habillage parfait et durable
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Conception & Devis</h3>
                <p className="text-gray-600 text-sm">
                  Étude du projet, choix des matériaux et établissement du devis détaillé
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Préparation Surface</h3>
                <p className="text-gray-600 text-sm">
                  Nettoyage minutieux et décontamination pour une adhérence parfaite
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Découpe & Application</h3>
                <p className="text-gray-600 text-sm">Découpe précise du vinyle et application avec technique humide</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Finition & Contrôle</h3>
                <p className="text-gray-600 text-sm">
                  Élimination des bulles, découpe des contours et contrôle qualité final
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise Habillage Reconnue à Rabat</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SMART OTO maîtrise parfaitement l'art de l'habillage automobile. Nos applicateurs expérimentés
                  travaillent avec les meilleures marques de vinyles : 3M, Avery Dennison, Hexis. Chaque projet est
                  unique et réalisé selon vos spécifications exactes.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Notre atelier dispose d'un environnement contrôlé pour garantir une application parfaite sans
                  poussière ni impuretés. Nous proposons également la dépose complète et propre des anciens vinyles sans
                  endommager la peinture d'origine.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Vinyles premium 3M, Avery, Hexis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Applicateurs certifiés et expérimentés</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Atelier climatisé sans poussière</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Dépose propre sans dommage</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/vinyl-application-workshop.png"
                  alt="Atelier habillage automobile SMART OTO"
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
                L'avis de nos clients sur nos services d'habillage automobile à Rabat
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
            <h2 className="text-4xl font-bold mb-4">Transformez Votre Véhicule !</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Donnez une nouvelle identité à votre véhicule avec l'habillage SMART OTO. Covering, personnalisation,
              effets spéciaux : tout est possible ! Devis gratuit et conseil personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Devis Covering Gratuit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Voir Nos Créations
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
