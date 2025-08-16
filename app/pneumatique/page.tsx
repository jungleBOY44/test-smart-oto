import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gauge, RotateCcw, Shield, CheckCircle, Star, Award, Settings, Wrench } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Pneumatique à Rabat - SMART OTO | Pneus & Jantes Automobile",
  description:
    "Spécialiste pneumatique à Rabat. SMART OTO : montage pneus, équilibrage, géométrie, réparation. Toutes marques disponibles. Service professionnel. Devis gratuit.",
  keywords: [
    "pneumatique Rabat",
    "pneus Rabat",
    "montage pneus Rabat",
    "équilibrage roues Rabat",
    "géométrie Rabat",
    "jantes Rabat",
  ],
}

const tireServices = [
  {
    icon: Gauge,
    title: "Montage & Démontage",
    description: "Montage professionnel de pneus neufs avec démontage sécurisé des anciens pneumatiques.",
    features: ["Démontage sécurisé", "Montage professionnel", "Contrôle pression", "Mise en place valve"],
  },
  {
    icon: RotateCcw,
    title: "Équilibrage Roues",
    description: "Équilibrage précis des roues pour éliminer vibrations et usure prématurée des pneus.",
    features: ["Équilibrage statique", "Équilibrage dynamique", "Contrôle géométrie", "Test vibrations"],
  },
  {
    icon: Settings,
    title: "Géométrie & Parallélisme",
    description: "Réglage géométrie et parallélisme pour optimiser tenue de route et durée de vie pneus.",
    features: ["Contrôle parallélisme", "Réglage géométrie", "Test direction", "Optimisation usure"],
  },
  {
    icon: Shield,
    title: "Réparation Pneus",
    description: "Réparation professionnelle des crevaisons et dommages selon normes de sécurité.",
    features: ["Diagnostic dommage", "Réparation crevaison", "Contrôle étanchéité", "Test sécurité"],
  },
]

const tireBrands = [
  { name: "Michelin", specialty: "Premium & Longévité" },
  { name: "Continental", specialty: "Performance & Sécurité" },
  { name: "Bridgestone", specialty: "Innovation & Qualité" },
  { name: "Pirelli", specialty: "Sport & Performance" },
  { name: "Goodyear", specialty: "Fiabilité & Durabilité" },
  { name: "Dunlop", specialty: "Confort & Efficacité" },
  { name: "Yokohama", specialty: "Technologie Avancée" },
  { name: "Hankook", specialty: "Rapport Qualité-Prix" },
]

const maintenanceTips = [
  {
    tip: "Contrôle Pression",
    frequency: "Mensuel",
    description: "Vérifiez la pression à froid selon préconisations constructeur",
    importance: "Sécurité & Économie",
  },
  {
    tip: "Rotation Pneus",
    frequency: "10 000 km",
    description: "Permutation des pneus pour une usure homogène",
    importance: "Durée de vie",
  },
  {
    tip: "Contrôle Usure",
    frequency: "Régulier",
    description: "Vérification témoins d'usure et état général",
    importance: "Sécurité",
  },
  {
    tip: "Géométrie",
    frequency: "20 000 km",
    description: "Contrôle et réglage géométrie/parallélisme",
    importance: "Performance",
  },
]

const testimonials = [
  {
    name: "Karim Alaoui",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Montage de 4 pneus Michelin chez SMART OTO. Service rapide, équilibrage parfait, plus de vibrations ! Équipe professionnelle, je recommande.",
    vehicle: "BMW Série 3",
    service: "Montage + Équilibrage",
  },
  {
    name: "Fatima Zahra",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Réparation crevaison sur ma Mercedes. SMART OTO a réparé rapidement et proprement. Contrôle gratuit après 1 semaine, service client excellent !",
    vehicle: "Mercedes Classe A",
    service: "Réparation crevaison",
  },
  {
    name: "Ahmed Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Géométrie et parallélisme sur ma Audi. Problème d'usure irrégulière résolu ! SMART OTO maîtrise parfaitement le réglage géométrie.",
    vehicle: "Audi A4",
    service: "Géométrie",
  },
]

export default function Pneumatique() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Pneumatique</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Pneumatique</span> Professionnel à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, votre spécialiste pneumatique à Rabat, vous propose tous les services liés aux pneus et
                  jantes : montage, équilibrage, géométrie, réparation. Toutes marques disponibles avec conseil
                  personnalisé pour optimiser votre sécurité et confort de conduite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Devis Pneus Gratuit
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Contrôle Gratuit
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Toutes marques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span>Garantie montage</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/professional-tire-service.png"
                  alt="Service pneumatique professionnel SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">3000+</div>
                  <div className="text-sm">Pneus montés/an</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services Pneumatique</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO dispose d'équipements professionnels pour tous vos besoins pneumatique : machine de montage,
                équilibreuse électronique, banc géométrie de précision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tireServices.map((service, index) => {
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

        {/* Tire Brands */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Marques de Pneus Disponibles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO vous propose les meilleures marques de pneumatiques avec conseil personnalisé selon votre
                véhicule et usage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tireBrands.map((brand, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-xl font-bold text-slate-900 mb-2">{brand.name}</div>
                    <div className="text-sm text-blue-600 font-medium">{brand.specialty}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Conseils Entretien Pneumatiques</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO vous conseille pour optimiser la durée de vie et la sécurité de vos pneumatiques
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {maintenanceTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{tip.tip}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-blue-50 p-2 rounded-lg mb-4">
                      <div className="text-lg font-bold text-blue-600">{tip.frequency}</div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{tip.description}</p>
                    <div className="text-xs text-green-600 font-medium">{tip.importance}</div>
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
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise Pneumatique Reconnue à Rabat</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SMART OTO dispose d'un atelier pneumatique moderne équipé des dernières technologies : machine de
                  montage automatique, équilibreuse électronique haute précision, banc de géométrie 3D. Nos techniciens
                  expérimentés maîtrisent toutes les techniques de montage et réglage.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nous proposons tous types de pneumatiques : tourisme, 4x4, utilitaire, performance. Notre stock
                  permanent des principales marques nous permet de vous servir rapidement. Conseil personnalisé selon
                  votre véhicule, usage et budget pour optimiser sécurité et économies.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Gauge className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Montage Pro</div>
                    <div className="text-sm text-gray-600">Machine automatique</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <RotateCcw className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Équilibrage</div>
                    <div className="text-sm text-gray-600">Précision électronique</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Settings className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Géométrie 3D</div>
                    <div className="text-sm text-gray-600">Banc haute précision</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">Réparation</div>
                    <div className="text-sm text-gray-600">Normes sécurité</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/tire-balancing-equipment.png"
                  alt="Équipement équilibrage pneumatique SMART OTO"
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Témoignages Clients</h2>
              <p className="text-xl text-gray-600">L'avis de nos clients sur nos services pneumatique à Rabat</p>
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
            <h2 className="text-4xl font-bold mb-4">Besoin de Nouveaux Pneus ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez SMART OTO pour tous vos besoins pneumatique. Devis gratuit, conseil personnalisé, montage
              professionnel. Toutes marques disponibles !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Devis Pneus Gratuit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Contrôle Gratuit
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
