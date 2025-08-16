import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Shield, Wrench, Car } from "lucide-react"

export const metadata = {
  title: "Nos Abonnements - SMART OTO | Formules d'entretien automobile à Rabat",
  description:
    "Découvrez nos formules d'abonnement pour l'entretien de votre véhicule à Rabat. Packages premium avec services inclus et tarifs préférentiels chez SMART OTO.",
}

const subscriptionPlans = [
  {
    name: "Essentiel",
    price: "199",
    period: "/mois",
    icon: Wrench,
    popular: false,
    description: "L'essentiel pour maintenir votre véhicule en bon état",
    features: [
      "1 révision complète par mois",
      "Changement d'huile inclus",
      "Vérification des freins",
      "Contrôle pneumatiques",
      "Diagnostic électronique de base",
      "Lavage intérieur/extérieur",
      "Support téléphonique prioritaire",
    ],
    benefits: ["Économies jusqu'à 30%", "Sans engagement"],
  },
  {
    name: "Premium",
    price: "349",
    period: "/mois",
    icon: Car,
    popular: true,
    description: "La formule complète pour un entretien premium",
    features: [
      "Tous les services Essentiel",
      "Protection céramique trimestrielle",
      "Révision climatisation",
      "Entretien cuir et plastiques",
      "Polissage carrosserie",
      "Diagnostic électronique avancé",
      "Véhicule de courtoisie",
      "Interventions d'urgence incluses",
    ],
    benefits: ["Économies jusqu'à 40%", "Garantie étendue"],
  },
  {
    name: "Excellence",
    price: "549",
    period: "/mois",
    icon: Shield,
    popular: false,
    description: "Le summum de l'entretien automobile premium",
    features: [
      "Tous les services Premium",
      "Protection PPF annuelle",
      "Rénovation intérieur complète",
      "Service de collecte/livraison",
      "Stockage pièces détachées premium",
      "Carnet d'entretien numérique",
      "Coaching entretien personnalisé",
      "Garantie tous risques sur interventions",
    ],
    benefits: ["Économies jusqu'à 50%", "Service conciergerie inclus"],
  },
]

export default function NosAbonnements() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Nos Formules d'<span className="text-blue-400">Abonnement</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Choisissez la formule d'entretien qui correspond à vos besoins. Avec nos abonnements SMART OTO,
                bénéficiez de tarifs préférentiels et d'un service premium pour votre véhicule à Rabat.
              </p>
              <div className="flex justify-center items-center gap-8 text-lg">
                <div className="flex items-center gap-2">
                  <Check className="h-6 w-6 text-green-400" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-6 w-6 text-green-400" />
                  <span>Résiliable à tout moment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-6 w-6 text-green-400" />
                  <span>Garantie satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Choisissez votre formule</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos formules d'abonnement sont conçues pour répondre à tous les besoins d'entretien automobile, du plus
                basique au plus premium. Économisez jusqu'à 50% sur vos frais d'entretien.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan, index) => {
                const IconComponent = plan.icon
                return (
                  <Card
                    key={index}
                    className={`relative hover:shadow-xl transition-shadow duration-300 ${plan.popular ? "border-2 border-blue-600 scale-105" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                          <Star className="h-4 w-4 fill-current" />
                          PLUS POPULAIRE
                        </div>
                      </div>
                    )}

                    <CardHeader className="text-center pt-8">
                      <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-blue-600 mt-2">
                        {plan.price} DH<span className="text-lg text-gray-600">{plan.period}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{plan.description}</p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-green-50 p-3 rounded-lg mb-6">
                        {plan.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-green-700 text-sm">
                            <Star className="h-4 w-4 fill-current" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"} text-white`}
                        size="lg"
                      >
                        Choisir {plan.name}
                      </Button>
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Pourquoi choisir nos abonnements ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos formules d'abonnement vous offrent bien plus qu'un simple entretien. Découvrez tous les avantages de
                faire confiance à SMART OTO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">-50%</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Économies garanties</h3>
                <p className="text-gray-600 text-sm">Jusqu'à 50% d'économies sur vos frais d'entretien annuels</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Garantie qualité</h3>
                <p className="text-gray-600 text-sm">Tous nos services sont garantis avec possibilité de reprise</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Car className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Véhicule de courtoisie</h3>
                <p className="text-gray-600 text-sm">Véhicule de remplacement gratuit pendant les interventions</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Service premium</h3>
                <p className="text-gray-600 text-sm">Accès prioritaire et service personnalisé par nos experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Prêt à prendre soin de votre véhicule ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour souscrire à l'abonnement qui vous correspond. Notre équipe vous
              accompagne dans le choix de votre formule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Demander un devis personnalisé
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Nous appeler maintenant
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
