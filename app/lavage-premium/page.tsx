import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Sparkles, Car, CheckCircle, Star, Award, Brush, Shield } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Lavage Premium à Rabat - SMART OTO | Nettoyage Auto Haut de Gamme",
  description:
    "Lavage premium automobile à Rabat. SMART OTO : nettoyage haut de gamme, détailing, produits professionnels. Intérieur/extérieur impeccable. Réservez maintenant.",
  keywords: [
    "lavage premium Rabat",
    "nettoyage auto Rabat",
    "détailing Rabat",
    "lavage haut de gamme Rabat",
    "nettoyage intérieur Rabat",
    "car wash premium Rabat",
  ],
}

const washServices = [
  {
    icon: Droplets,
    title: "Lavage Extérieur Premium",
    description: "Nettoyage complet extérieur avec produits professionnels et techniques de détailing avancées.",
    features: ["Prélavage mousse", "Lavage 2 seaux", "Séchage microfibre", "Finition brillance"],
  },
  {
    icon: Car,
    title: "Nettoyage Intérieur Complet",
    description: "Aspiration, nettoyage surfaces, traitement cuir et plastiques pour un habitacle impeccable.",
    features: ["Aspiration complète", "Nettoyage cuir", "Traitement plastiques", "Désodorisation"],
  },
  {
    icon: Sparkles,
    title: "Détailing Complet",
    description: "Service premium combinant lavage, polissage, protection pour un résultat exceptionnel.",
    features: ["Lavage intégral", "Polissage carrosserie", "Protection cire", "Finition parfaite"],
  },
  {
    icon: Shield,
    title: "Protection & Entretien",
    description: "Application de produits de protection longue durée pour préserver l'éclat de votre véhicule.",
    features: ["Cire protection", "Traitement pneus", "Protection plastiques", "Entretien régulier"],
  },
]

const washPackages = [
  {
    name: "Essentiel",
    price: "150",
    duration: "45 min",
    description: "Lavage complet pour un entretien régulier",
    services: [
      "Lavage extérieur complet",
      "Aspiration intérieur",
      "Nettoyage vitres",
      "Séchage microfibre",
      "Traitement pneus",
    ],
  },
  {
    name: "Premium",
    price: "250",
    duration: "90 min",
    description: "Service haut de gamme pour un résultat exceptionnel",
    services: [
      "Tous services Essentiel",
      "Nettoyage cuir/tissus",
      "Polissage léger",
      "Cire de protection",
      "Désodorisation",
      "Nettoyage moteur",
    ],
    popular: true,
  },
  {
    name: "Excellence",
    price: "400",
    duration: "3h",
    description: "Détailing complet pour véhicules premium",
    services: [
      "Tous services Premium",
      "Polissage professionnel",
      "Protection céramique",
      "Rénovation cuir",
      "Nettoyage jantes détaillé",
      "Traitement anti-taches",
    ],
  },
]

const professionalProducts = [
  {
    category: "Shampoings",
    products: ["Meguiar's Gold Class", "Chemical Guys Citrus Wash", "Gyeon Bathe"],
    usage: "Nettoyage carrosserie sans rayures",
  },
  {
    category: "Cires & Protection",
    products: ["Collinite 845", "Chemical Guys Butter Wax", "Meguiar's Endurance"],
    usage: "Protection longue durée et brillance",
  },
  {
    category: "Intérieur",
    products: ["Leather Honey", "303 Aerospace Protectant", "Chemical Guys InnerClean"],
    usage: "Nettoyage et protection habitacle",
  },
  {
    category: "Détailing",
    products: ["Meguiar's Ultimate Polish", "Chemical Guys V-Series", "Gyeon Cure"],
    usage: "Polissage et finition professionnelle",
  },
]

const testimonials = [
  {
    name: "Hassan Alaoui",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Lavage premium de ma BMW chez SMART OTO. Résultat exceptionnel ! L'intérieur cuir est comme neuf et l'extérieur brille parfaitement. Service professionnel !",
    vehicle: "BMW Série 5",
    service: "Détailing complet",
  },
  {
    name: "Aicha Benjelloun",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Service premium régulier pour ma Mercedes. L'équipe SMART OTO utilise d'excellents produits, ma voiture reste impeccable plus longtemps !",
    vehicle: "Mercedes Classe C",
    service: "Lavage premium",
  },
  {
    name: "Omar Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Nettoyage intérieur complet de ma Range Rover. SMART OTO a redonné vie aux sièges cuir et éliminé toutes les odeurs. Travail minutieux !",
    vehicle: "Range Rover Sport",
    service: "Nettoyage intérieur",
  },
]

export default function LavagePremium() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Lavage Premium</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Lavage Premium</span> & Détailing à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO vous propose des services de lavage premium et détailing automobile à Rabat. Produits
                  professionnels haut de gamme, techniques avancées et finition impeccable pour sublimer votre véhicule
                  intérieur comme extérieur.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Réserver Lavage Premium
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Voir Nos Formules
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Produits professionnels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-green-400" />
                    <span>Finition parfaite</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/premium-car-wash-service.png"
                  alt="Service lavage premium SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm">Véhicules lavés/mois</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services de Lavage Premium</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO utilise exclusivement des produits professionnels haut de gamme et des techniques de détailing
                avancées pour un résultat exceptionnel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {washServices.map((service, index) => {
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

        {/* Packages Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Formules Lavage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choisissez la formule qui correspond à vos besoins et budget. Tous nos services incluent des produits
                premium et une finition soignée.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {washPackages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-shadow duration-300 ${pkg.popular ? "border-2 border-blue-600 scale-105" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Star className="h-4 w-4 fill-current" />
                        PLUS POPULAIRE
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl font-bold text-slate-900">{pkg.name}</CardTitle>
                    <div className="text-4xl font-bold text-blue-600 mt-2">{pkg.price} DH</div>
                    <div className="text-sm text-gray-600 mt-1">{pkg.duration}</div>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {pkg.services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"} text-white`}
                      size="lg"
                    >
                      Réserver {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Products */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Produits Professionnels Utilisés</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO utilise exclusivement des produits professionnels reconnus pour leur qualité et efficacité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {professionalProducts.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                      <Brush className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="text-sm text-gray-600 font-medium">
                          • {product}
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-xs text-blue-700 font-medium">{category.usage}</div>
                    </div>
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre Processus Lavage Premium</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO suit un protocole rigoureux pour garantir un résultat parfait à chaque lavage
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Prélavage</h3>
                <p className="text-xs text-gray-600">Mousse active pour décoller la saleté</p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Lavage</h3>
                <p className="text-xs text-gray-600">Technique 2 seaux avec gant microfibre</p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Rinçage</h3>
                <p className="text-xs text-gray-600">Rinçage haute pression complet</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Séchage</h3>
                <p className="text-xs text-gray-600">Séchage microfibre sans rayures</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-600 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold">5</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Finition</h3>
                <p className="text-xs text-gray-600">Protection et brillance finale</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Témoignages Clients</h2>
              <p className="text-xl text-gray-600">L'avis de nos clients sur nos services de lavage premium à Rabat</p>
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
            <h2 className="text-4xl font-bold mb-4">Votre Véhicule Mérite le Meilleur !</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Offrez à votre véhicule un lavage premium SMART OTO. Produits professionnels, techniques avancées,
              finition impeccable. Réservez dès maintenant votre créneau !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Réserver Lavage Premium
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Voir Nos Formules
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
