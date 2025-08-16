import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Phone, CheckCircle, Star, Award, Clock, Shield } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Gestion de Sinistres Automobile à Rabat - SMART OTO | Expert Assurance Auto",
  description:
    "Gestion complète de sinistres automobile à Rabat. SMART OTO : accompagnement assurance, expertise, réparation. Partenaire assurances. Devis gratuit. Al Kamra.",
  keywords: [
    "gestion sinistre auto Rabat",
    "expert sinistre Rabat",
    "assurance automobile Rabat",
    "réparation sinistre Rabat",
    "expertise auto Rabat",
    "garage agréé assurance Rabat",
  ],
}

const sinisterServices = [
  {
    icon: FileText,
    title: "Expertise Sinistre",
    description: "Évaluation professionnelle des dommages et établissement de rapport d'expertise détaillé.",
    features: ["Constat détaillé", "Photos HD", "Devis précis", "Rapport expert"],
  },
  {
    icon: Users,
    title: "Accompagnement Assurance",
    description: "Prise en charge complète des démarches administratives avec votre compagnie d'assurance.",
    features: ["Contact assureur", "Suivi dossier", "Négociation", "Validation réparation"],
  },
  {
    icon: Phone,
    title: "Service d'Urgence 24h/7j",
    description: "Intervention rapide en cas d'accident avec service de dépannage et remorquage.",
    features: ["Intervention 24h/7j", "Remorquage", "Véhicule courtoisie", "Assistance complète"],
  },
  {
    icon: Shield,
    title: "Réparation Agréée",
    description: "Réparation selon standards assurance avec garantie et suivi qualité professionnel.",
    features: ["Pièces d'origine", "Garantie assurance", "Contrôle qualité", "Livraison rapide"],
  },
]

const insurancePartners = [
  "AXA Assurance Maroc",
  "Wafa Assurance",
  "Atlanta Assurance",
  "MAMDA MCMA",
  "RMA Watanya",
  "Saham Assurance",
  "Zurich Assurance Maroc",
  "Allianz Maroc",
]

const processSteps = [
  {
    step: "1",
    title: "Déclaration Sinistre",
    description: "Contactez SMART OTO immédiatement après l'accident pour déclaration rapide",
  },
  {
    step: "2",
    title: "Expertise Véhicule",
    description: "Notre expert évalue les dommages et établit un rapport détaillé",
  },
  {
    step: "3",
    title: "Contact Assurance",
    description: "Nous contactons votre assureur et gérons toutes les démarches",
  },
  {
    step: "4",
    title: "Réparation & Livraison",
    description: "Réparation selon standards et livraison de votre véhicule",
  },
]

const testimonials = [
  {
    name: "Khalid Bennani",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Accident avec ma BMW, SMART OTO a tout géré avec mon assurance AXA. Service impeccable, réparation parfaite, aucun stress ! Je recommande vivement.",
    vehicle: "BMW Série 3",
    insurance: "AXA Assurance",
  },
  {
    name: "Aicha Alaoui",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Gestion sinistre exemplaire chez SMART OTO. L'équipe s'est occupée de tout avec Wafa Assurance. Véhicule de courtoisie fourni, réparation rapide !",
    vehicle: "Mercedes Classe A",
    insurance: "Wafa Assurance",
  },
  {
    name: "Omar Tazi",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Service d'urgence SMART OTO très réactif après mon accident. Remorquage immédiat, gestion assurance parfaite. Professionnel et rassurant !",
    vehicle: "Audi A4",
    insurance: "Atlanta Assurance",
  },
]

const emergencyServices = [
  {
    title: "Intervention Immédiate",
    description: "Équipe d'intervention disponible 24h/24 et 7j/7",
    time: "< 30 min",
  },
  {
    title: "Remorquage Sécurisé",
    description: "Transport de votre véhicule vers notre atelier agréé",
    time: "Immédiat",
  },
  {
    title: "Véhicule de Courtoisie",
    description: "Mise à disposition d'un véhicule de remplacement",
    time: "24h",
  },
  {
    title: "Expertise Rapide",
    description: "Évaluation des dommages et rapport d'expertise",
    time: "48h",
  },
]

export default function GestionSinistres() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-600">Expert Gestion Sinistres</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-400">Gestion de Sinistres</span> Automobile à Rabat
                </h1>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  SMART OTO, votre partenaire de confiance pour la gestion complète de vos sinistres automobiles à
                  Rabat. Nous prenons en charge toutes les démarches avec votre assurance et garantissons une réparation
                  professionnelle de votre véhicule.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Urgence 24h/7j
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Déclarer un Sinistre
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Agréé toutes assurances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-400" />
                    <span>Service 24h/7j</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/insurance-claim-management.png"
                  alt="Gestion sinistre automobile professionnelle SMART OTO Rabat"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm">Sinistres gérés</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services de Gestion Sinistres</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO vous accompagne dans toutes les étapes de gestion de votre sinistre automobile. De l'expertise
                à la réparation, nous gérons tout pour vous simplifier la vie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sinisterServices.map((service, index) => {
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

        {/* Emergency Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Service d'Urgence 24h/7j</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                En cas d'accident, SMART OTO intervient rapidement pour vous assister et sécuriser votre véhicule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
                      <Clock className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{service.time}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Partners */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Partenaires Assurance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO est agréé par les principales compagnies d'assurance au Maroc pour vous garantir une prise en
                charge optimale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insurancePartners.map((partner, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center h-16 mb-4">
                    <div className="text-lg font-bold text-slate-900">{partner}</div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">✓ Agréé</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Processus de Gestion Sinistre</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO suit un processus rigoureux pour une gestion efficace de votre sinistre automobile
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
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
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise Reconnue en Gestion Sinistres</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Depuis plus de 15 ans, SMART OTO accompagne les automobilistes de Rabat dans la gestion de leurs
                  sinistres. Notre équipe d'experts certifiés maîtrise parfaitement les procédures d'assurance et
                  garantit une prise en charge complète de votre dossier.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nous travaillons en partenariat avec toutes les compagnies d'assurance marocaines et disposons des
                  agréments nécessaires pour effectuer les réparations selon leurs standards. Notre objectif : vous
                  faire gagner du temps et vous éviter le stress des démarches administratives.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Agréé toutes compagnies d'assurance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Experts certifiés et expérimentés</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Service d'urgence 24h/7j</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg">Véhicule de courtoisie gratuit</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/insurance-expert-inspection.png"
                  alt="Expert sinistre SMART OTO effectuant une expertise véhicule"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-bold">Expert Agréé</span>
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
                L'expérience de nos clients avec notre service de gestion sinistres à Rabat
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
                      <div className="text-xs text-green-600 mt-1">{testimonial.insurance}</div>
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
            <h2 className="text-4xl font-bold mb-4">Accident ? Nous Gérons Tout !</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              En cas d'accident, contactez immédiatement SMART OTO. Notre équipe d'experts prend en charge toutes les
              démarches avec votre assurance. Service d'urgence 24h/7j.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Urgence 24h/7j
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Déclarer un Sinistre
              </Button>
            </div>
            <div className="mt-8 text-lg">
              <strong>Numéro d'urgence : +212 6XX XXX XXX</strong>
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
