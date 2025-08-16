import type { Metadata } from "next"
import { Sparkles, Shield, Clock, Star, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactSection from "@/components/ContactSection"
import Header from "@/components/Header"
import StickyWhatsApp from "@/components/StickyWhatsApp"

export const metadata: Metadata = {
  title: "Protection Nano-céramique Rabat | SMART OTO - Traitement Céramique Auto",
  description:
    "Protection nano-céramique professionnelle à Rabat. Traitement céramique longue durée pour voiture. Garage auto Rabat spécialisé protection automobile. Devis gratuit.",
  keywords:
    "nano céramique Rabat, protection céramique auto, traitement céramique voiture, garage auto Rabat, protection automobile Rabat, céramique longue durée",
}

export default function NanoCeramiquePage() {
  const ceramicBenefits = [
    {
      icon: Shield,
      title: "Protection Maximale",
      description: "Bouclier invisible contre les rayures, UV et contaminants",
    },
    {
      icon: Sparkles,
      title: "Brillance Exceptionnelle",
      description: "Éclat profond et durable qui sublime votre véhicule",
    },
    {
      icon: Clock,
      title: "Durabilité 5 ans",
      description: "Protection longue durée avec garantie constructeur",
    },
  ]

  const ceramicTypes = [
    {
      name: "Céramique Standard",
      duration: "2-3 ans",
      features: ["Protection UV", "Hydrophobe", "Anti-rayures légères"],
      price: "À partir de 2500 DH",
    },
    {
      name: "Céramique Premium",
      duration: "4-5 ans",
      features: ["Protection renforcée", "Auto-nettoyant", "Résistance chimique"],
      price: "À partir de 4500 DH",
    },
    {
      name: "Céramique Graphène",
      duration: "7-10 ans",
      features: ["Technologie graphène", "Conductivité thermique", "Protection ultime"],
      price: "À partir de 7500 DH",
    },
  ]

  const testimonials = [
    {
      name: "Karim Bennani",
      vehicle: "BMW X5",
      comment:
        "Ma voiture brille comme au premier jour après 2 ans de traitement céramique. Service exceptionnel chez SMART OTO Rabat.",
      rating: 5,
    },
    {
      name: "Fatima Alaoui",
      vehicle: "Mercedes Classe C",
      comment:
        "Protection nano-céramique parfaite. Plus besoin de cirer ma voiture, elle reste propre plus longtemps. Garage auto Rabat de référence.",
      rating: 5,
    },
  ]

  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Protection Nano-céramique
                  <span className="block text-blue-400">Professionnelle</span>
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Traitement céramique haute technologie pour une protection longue durée de votre véhicule. Garage auto
                  Rabat spécialisé en protection automobile premium.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Devis Gratuit
                </Button>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Avantages de la Nano-céramique</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {ceramicBenefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Notre Processus de Traitement</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Étapes du Traitement Céramique</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">1. Préparation Minutieuse</h4>
                          <p className="text-gray-600">Lavage décontaminant et correction de peinture si nécessaire</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">2. Application Professionnelle</h4>
                          <p className="text-gray-600">Pose du revêtement céramique par nos experts certifiés</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">3. Polymérisation Contrôlée</h4>
                          <p className="text-gray-600">Séchage en environnement contrôlé pour une adhérence optimale</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">4. Contrôle Qualité</h4>
                          <p className="text-gray-600">Vérification complète et remise du certificat de garantie</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Pourquoi Choisir SMART OTO ?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span>Techniciens certifiés par les fabricants</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span>Produits céramiques haut de gamme</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span>Garantie constructeur jusqu'à 10 ans</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span>Suivi et entretien personnalisé</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ceramic Types Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nos Gammes de Protection Céramique</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {ceramicTypes.map((type, index) => (
                  <Card key={index} className="relative">
                    {index === 1 && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Populaire</span>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{type.name}</CardTitle>
                      <CardDescription>Durabilité: {type.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-2xl font-bold text-blue-600">{type.price}</div>
                        <ul className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-4">Choisir cette option</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Témoignages Clients</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.vehicle}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Combien de temps dure un traitement céramique ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Selon la gamme choisie, la protection céramique dure de 2 à 10 ans. Notre garage auto Rabat
                      utilise uniquement des produits certifiés avec garantie constructeur.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Peut-on appliquer la céramique sur tous les véhicules ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Oui, la protection nano-céramique convient à tous types de véhicules : voitures, motos,
                      utilitaires. Nous adaptons le traitement selon l'état de votre peinture.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quel entretien après un traitement céramique ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      L'entretien est simplifié : lavage régulier à l'eau et shampooing neutre. Évitez les produits
                      abrasifs. Nous proposons un suivi d'entretien personnalisé.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </div>
      </main>
      <StickyWhatsApp />
    </>
  )
}
