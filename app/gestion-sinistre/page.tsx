import type { Metadata } from "next"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Camera,
  Clipboard,
  Car,
} from "lucide-react"
import Image from "next/image"
import StickyWhatsApp from "@/components/StickyWhatsApp"

export const metadata: Metadata = {
  title: "Gestion Sinistre Automobile - Expert Assurance | SMART OTO Rabat",
  description:
    "Expert en gestion de sinistres automobiles à Rabat. Prise en charge complète des dossiers d'assurance, expertise, réparation et suivi administratif. Garage agréé toutes assurances.",
  keywords:
    "gestion sinistre automobile Rabat, expert sinistre auto, garage agréé assurance Rabat, réparation sinistre voiture, expertise automobile Rabat, dossier assurance auto",
}

export default function GestionSinistrePage() {
  const services = [
    {
      icon: FileText,
      title: "Expertise Complète",
      description: "Évaluation détaillée des dommages et estimation précise des coûts de réparation",
    },
    {
      icon: Shield,
      title: "Prise en Charge Assurance",
      description: "Gestion complète de votre dossier avec toutes les compagnies d'assurance",
    },
    {
      icon: Camera,
      title: "Documentation Photographique",
      description: "Reportage photo professionnel pour constituer votre dossier",
    },
    {
      icon: Clipboard,
      title: "Suivi Administratif",
      description: "Accompagnement dans toutes les démarches administratives",
    },
    {
      icon: Car,
      title: "Réparation Agréée",
      description: "Réparations conformes aux standards des assureurs avec garantie",
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Prise en charge sous 24h et traitement accéléré des dossiers",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Déclaration du Sinistre",
      description: "Contactez-nous immédiatement après l'accident. Nous vous guidons dans la déclaration.",
    },
    {
      step: "2",
      title: "Expertise sur Place",
      description: "Notre expert se déplace pour évaluer les dommages et constituer le dossier.",
    },
    {
      step: "3",
      title: "Négociation Assurance",
      description: "Nous négocions avec votre assureur pour obtenir la meilleure prise en charge.",
    },
    {
      step: "4",
      title: "Réparation Professionnelle",
      description: "Réparation dans nos ateliers avec des pièces d'origine et garantie constructeur.",
    },
    {
      step: "5",
      title: "Livraison du Véhicule",
      description: "Remise de votre véhicule réparé avec tous les documents nécessaires.",
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Benali",
      location: "Rabat",
      rating: 5,
      comment:
        "Excellent service après mon accident. SMART OTO a géré tout le dossier avec mon assurance. Réparation impeccable et délais respectés.",
    },
    {
      name: "Fatima Alaoui",
      location: "Salé",
      rating: 5,
      comment:
        "Très professionnel dans la gestion de sinistre. L'équipe m'a accompagnée à chaque étape. Je recommande vivement ce garage auto à Rabat.",
    },
    {
      name: "Mohamed Tazi",
      location: "Témara",
      rating: 5,
      comment:
        "Suite à un sinistre sur ma BMW, SMART OTO a négocié avec l'assurance et effectué une réparation parfaite. Service client exceptionnel.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Expert Agréé Assurances</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Gestion de Sinistres Automobiles</h1>
              <p className="text-xl mb-8 text-gray-200">
                Expert en gestion de sinistres automobiles à Rabat. Prise en charge complète de votre dossier
                d'assurance, de l'expertise à la réparation. Garage agréé toutes compagnies d'assurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Urgence Sinistre: 0537-XX-XX-XX
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Demander une Expertise
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services de Gestion Sinistre</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une prise en charge complète de votre sinistre automobile avec l'expertise d'un garage auto
                professionnel à Rabat
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Processus de Gestion Sinistre</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un processus structuré pour une prise en charge optimale de votre sinistre automobile
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pourquoi Choisir SMART OTO pour Votre Sinistre ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Agréé</h3>
                <p className="text-gray-600">Agréé par toutes les compagnies d'assurance au Maroc</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">15 Ans d'Expérience</h3>
                <p className="text-gray-600">Plus de 5000 sinistres traités avec succès</p>
              </div>
              <div className="text-center">
                <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Intervention 24h/24</h3>
                <p className="text-gray-600">Service d'urgence disponible 7j/7</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Garantie Totale</h3>
                <p className="text-gray-600">Garantie constructeur sur toutes nos réparations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Réparations de Sinistres - Avant/Après</h2>
              <p className="text-lg text-gray-600">
                Découvrez la qualité de nos réparations suite à des sinistres automobiles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/damaged-car-before-repair.png"
                    alt="Véhicule accidenté avant réparation"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-600">Avant</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Choc Frontal - Peugeot 308</h3>
                  <p className="text-sm text-gray-600">Réparation carrosserie et peinture</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/voiture-reparee-apres-sinistre.png"
                    alt="Véhicule réparé après sinistre"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-600">Après</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Réparation Terminée</h3>
                  <p className="text-sm text-gray-600">Résultat impeccable, comme neuf</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image src="/bmw-accident-repair.png" alt="Réparation sinistre BMW" fill className="object-cover" />
                  <Badge className="absolute top-2 left-2 bg-blue-600">Terminé</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Sinistre BMW Série 3</h3>
                  <p className="text-sm text-gray-600">Prise en charge assurance complète</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages Clients - Gestion Sinistre</h2>
              <p className="text-lg text-gray-600">
                L'avis de nos clients sur notre service de gestion de sinistres automobiles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions Fréquentes - Sinistres Auto</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Que faire immédiatement après un accident ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sécurisez les lieux, contactez les secours si nécessaire, prenez des photos, remplissez le constat
                    amiable et contactez-nous dans les plus brefs délais pour la prise en charge de votre sinistre
                    automobile à Rabat.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Combien de temps prend la réparation d'un sinistre ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Le délai dépend de l'ampleur des dégâts. Pour une réparation carrosserie simple : 3-5 jours. Pour
                    des dommages importants : 1-2 semaines. Nous vous tenons informé à chaque étape.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Travaillez-vous avec toutes les assurances ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Oui, SMART OTO est agréé par toutes les compagnies d'assurance au Maroc. Nous gérons directement
                    avec votre assureur pour simplifier vos démarches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sinistre Automobile ? Contactez-nous Immédiatement</h2>
              <p className="text-xl text-gray-300 mb-8">
                Service d'urgence 24h/24 pour la gestion de vos sinistres automobiles à Rabat
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Urgence Sinistre</h3>
                <p className="text-gray-300">0537-XX-XX-XX</p>
                <p className="text-sm text-gray-400">Disponible 24h/24</p>
              </div>
              <div>
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">sinistre@smartoto.ma</p>
                <p className="text-sm text-gray-400">Réponse sous 2h</p>
              </div>
              <div>
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                <p className="text-gray-300">Zone Industrielle Sidi Brahim</p>
                <p className="text-gray-300">Rabat, Maroc</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <FileText className="mr-2 h-5 w-5" />
                Déclarer un Sinistre en Ligne
              </Button>
            </div>
          </div>
        </section>
      </main>
      <StickyWhatsApp />
    </>
  )
}
