import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Mail, Car, MessageCircle, Calendar } from "lucide-react"
import StickyWhatsApp from "@/components/StickyWhatsApp"

export const metadata = {
  title: "Accès & Contact SMART OTO Rabat - Garage Automobile | Adresse, Horaires, Plan",
  description:
    "Contactez SMART OTO Rabat. Adresse : 20 Avenue Al Majd, Al Kamra. Horaires, plan d'accès, téléphone. Garage automobile premium à 7 min de Hay Riad.",
  keywords: [
    "contact SMART OTO Rabat",
    "adresse garage Rabat",
    "horaires SMART OTO",
    "plan accès garage",
    "téléphone garage Rabat",
    "Al Kamra Rabat",
  ],
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse Principale",
    details: ["20 Avenue Al Majd", "Quartier Industriel Al Kamra", "Rabat, Maroc"],
    extra: "7 min de Hay Riad • 15 min de Témara",
  },
  {
    icon: MapPin,
    title: "Adresse Administrative",
    details: ["15 Avenue Al Abtal, Appt 4", "Agdal", "Rabat, Maroc"],
    extra: "Bureau administratif",
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+212 6XX XXX XXX", "Appels & WhatsApp"],
    extra: "Disponible 7j/7",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@smartoto.ma", "info@smartoto.ma"],
    extra: "Réponse sous 24h",
  },
]

const openingHours = [
  { day: "Lundi", hours: "8h00 - 18h00", status: "Ouvert" },
  { day: "Mardi", hours: "8h00 - 18h00", status: "Ouvert" },
  { day: "Mercredi", hours: "8h00 - 18h00", status: "Ouvert" },
  { day: "Jeudi", hours: "8h00 - 18h00", status: "Ouvert" },
  { day: "Vendredi", hours: "8h00 - 18h00", status: "Ouvert" },
  { day: "Samedi", hours: "8h00 - 16h00", status: "Ouvert" },
  { day: "Dimanche", hours: "Fermé", status: "Fermé" },
]

const accessDirections = [
  {
    from: "Hay Riad",
    duration: "7 minutes",
    distance: "3.2 km",
    directions: [
      "Sortir de Hay Riad vers Avenue Mohammed VI",
      "Continuer sur Avenue Al Majd",
      "Tourner à droite vers Quartier Industriel Al Kamra",
      "SMART OTO se trouve au 20 Avenue Al Majd",
    ],
  },
  {
    from: "Témara",
    duration: "15 minutes",
    distance: "8.5 km",
    directions: [
      "Prendre la route de Rabat (N6)",
      "Continuer vers Quartier Al Kamra",
      "Tourner à gauche sur Avenue Al Majd",
      "SMART OTO au numéro 20",
    ],
  },
  {
    from: "Centre-ville Rabat",
    duration: "20 minutes",
    distance: "12 km",
    directions: [
      "Sortir du centre vers Avenue Mohammed V",
      "Continuer vers Avenue Al Majd",
      "Direction Quartier Industriel Al Kamra",
      "Arrivée au 20 Avenue Al Majd",
    ],
  },
]

const nearbyLandmarks = [
  {
    name: "Station Total Al Kamra",
    distance: "200m",
    type: "Station-service",
  },
  {
    name: "Marjane Al Kamra",
    distance: "500m",
    type: "Centre commercial",
  },
  {
    name: "Mosquée Al Kamra",
    distance: "300m",
    type: "Lieu de culte",
  },
  {
    name: "École Al Majd",
    distance: "400m",
    type: "Établissement scolaire",
  },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Appel Direct",
    description: "Appelez-nous pour un rendez-vous ou des informations",
    action: "Appeler maintenant",
    color: "bg-green-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Contactez-nous via WhatsApp pour un échange rapide",
    action: "Ouvrir WhatsApp",
    color: "bg-green-500",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Envoyez-nous un email pour un devis détaillé",
    action: "Envoyer un email",
    color: "bg-blue-600",
  },
  {
    icon: Calendar,
    title: "Rendez-vous",
    description: "Prenez rendez-vous directement en ligne",
    action: "Prendre RDV",
    color: "bg-purple-600",
  },
]

export default function AccesContact() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-600">Accès & Contact</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-blue-400">Contactez</span> SMART OTO Rabat
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                SMART OTO vous accueille dans son garage automobile premium situé au Quartier Industriel Al Kamra à
                Rabat. Facilement accessible depuis Hay Riad, Témara et le centre-ville. Contactez-nous pour tous vos
                besoins automobiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Nous Contacter
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Plan d'Accès
                </Button>
              </div>
              <div className="mt-8 flex justify-center items-center gap-8 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-green-400" />
                  <span>Al Kamra, Rabat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <span>Lun-Sam 8h-18h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-6 w-6 text-yellow-400" />
                  <span>Parking gratuit</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Coordonnées</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Toutes les informations pour nous contacter et nous rendre visite à Rabat
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-gray-700 font-medium">
                            {detail}
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">{info.extra}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Horaires d'Ouverture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO vous accueille du lundi au samedi pour tous vos services automobiles
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {openingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 border-b last:border-b-0 ${
                        schedule.status === "Fermé" ? "bg-red-50" : "bg-green-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-gray-600" />
                        <span className="font-medium text-slate-900">{schedule.day}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-700">{schedule.hours}</span>
                        <Badge
                          className={schedule.status === "Fermé" ? "bg-red-600 text-white" : "bg-green-600 text-white"}
                        >
                          {schedule.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Plan d'Accès</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Localisez facilement SMART OTO au Quartier Industriel Al Kamra à Rabat
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Google Maps Embed */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Carte Google Maps</p>
                      <p className="text-sm text-gray-500">SMART OTO - 20 Avenue Al Majd, Al Kamra, Rabat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Landmarks */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Points de Repère</h3>
                <div className="space-y-4">
                  {nearbyLandmarks.map((landmark, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-slate-900">{landmark.name}</div>
                            <div className="text-sm text-gray-600">{landmark.type}</div>
                          </div>
                          <div className="text-blue-600 font-bold">{landmark.distance}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Parking Gratuit</h4>
                  <p className="text-gray-700 text-sm">
                    Parking gratuit disponible devant le garage. Places réservées pour nos clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Directions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Comment Nous Rejoindre</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Toutes les informations pour nous contacter et nous rendre visite à Rabat
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessDirections.map((direction, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      <MapPin className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">Depuis {direction.from}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="text-gray-700 font-medium">Durée : {direction.duration}</div>
                      <div className="text-gray-700 font-medium">Distance : {direction.distance}</div>
                      <div className="text-gray-700 font-medium">
                        Directions :
                        <ul className="list-disc list-inside mt-2">
                          {direction.directions.map((dir, idx) => (
                            <li key={idx}>{dir}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Méthodes de Contact</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choisissez la méthode de contact la plus conviviale pour vous
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-shadow duration-300 text-center ${method.color}`}
                  >
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-bold text-white">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="text-gray-700 font-medium">{method.description}</div>
                      </div>
                      <div className="text-sm text-white font-medium">
                        <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-900">
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <StickyWhatsApp />
    </>
  )
}
