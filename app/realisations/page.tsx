import type { Metadata } from "next"
import { Star, Calendar, Car, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactSection from "@/components/ContactSection"
import Header from "@/components/Header"
import StickyWhatsApp from "@/components/StickyWhatsApp"

export const metadata: Metadata = {
  title: "Réalisations SMART OTO Rabat | Portfolio Garage Auto - Avant/Après",
  description:
    "Découvrez nos réalisations : réparations auto, protection céramique, carrosserie, peinture. Portfolio garage auto Rabat avec photos avant/après. Travaux de qualité.",
  keywords:
    "réalisations garage Rabat, portfolio auto Rabat, avant après réparation voiture, garage auto Rabat, travaux automobile Rabat",
}

export default function RealisationsPage() {
  const categories = [
    { name: "Tous", count: 48, active: true },
    { name: "Carrosserie", count: 15, active: false },
    { name: "Peinture", count: 12, active: false },
    { name: "Protection", count: 10, active: false },
    { name: "Mécanique", count: 8, active: false },
    { name: "Cuir", count: 3, active: false },
  ]

  const projects = [
    {
      id: 1,
      title: "Réparation Carrosserie BMW X5",
      category: "Carrosserie",
      client: "M. Bennani",
      date: "Décembre 2024",
      duration: "5 jours",
      description: "Réparation complète suite à accident avec remise en peinture",
      services: ["Débosselage", "Peinture", "Assemblage"],
      rating: 5,
      beforeImage: "/bmw-x5-damaged.png",
      afterImage: "/bmw-x5-repaired.png",
    },
    {
      id: 2,
      title: "Protection Céramique Mercedes Classe S",
      category: "Protection",
      client: "Mme Alaoui",
      date: "Novembre 2024",
      duration: "3 jours",
      description: "Application protection nano-céramique premium avec correction peinture",
      services: ["Correction peinture", "Nano-céramique", "Finition"],
      rating: 5,
      beforeImage: "/mercedes-classe-s-terne.png",
      afterImage: "/mercedes-classe-s-ceramique.png",
    },
    {
      id: 3,
      title: "Rénovation Complète Porsche 911",
      category: "Peinture",
      client: "M. Tazi",
      date: "Octobre 2024",
      duration: "2 semaines",
      description: "Restauration complète peinture et carrosserie d'une Porsche classique",
      services: ["Décapage", "Préparation", "Peinture", "Vernis"],
      rating: 5,
      beforeImage: "/vieille-porsche-911.png",
      afterImage: "/porsche-911-restauree.png",
    },
    {
      id: 4,
      title: "Réparation Sellerie Cuir Range Rover",
      category: "Cuir",
      client: "M. Mansouri",
      date: "Septembre 2024",
      duration: "4 jours",
      description: "Réparation invisible de déchirures importantes sur sièges cuir",
      services: ["Réparation cuir", "Teinture", "Protection"],
      rating: 5,
      beforeImage: "/range-rover-torn-leather-seat.png",
      afterImage: "/range-rover-repaired-leather-seat.png",
    },
    {
      id: 5,
      title: "Diagnostic Électronique Audi A8",
      category: "Mécanique",
      client: "Mme Benali",
      date: "Août 2024",
      duration: "2 jours",
      description: "Diagnostic et réparation système électronique complexe",
      services: ["Diagnostic", "Réparation électronique", "Test"],
      rating: 5,
      beforeImage: "/audi-a8-dashboard-errors.png",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Habillage Complet Tesla Model S",
      category: "Protection",
      client: "M. Chraibi",
      date: "Juillet 2024",
      duration: "1 semaine",
      description: "Covering complet avec film de protection et personnalisation",
      services: ["PPF", "Covering", "Personnalisation"],
      rating: 5,
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
  ]

  const stats = [
    { label: "Projets Réalisés", value: "500+", icon: Car },
    { label: "Clients Satisfaits", value: "450+", icon: Star },
    { label: "Années d'Expérience", value: "15+", icon: Calendar },
    { label: "Services Proposés", value: "20+", icon: Wrench },
  ]

  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Nos Réalisations
                  <span className="block text-blue-400">Portfolio SMART OTO</span>
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Découvrez nos travaux de qualité : réparations automobile, protection, carrosserie et peinture. Garage
                  auto Rabat de référence avec plus de 500 projets réalisés.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Filter Categories */}
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    variant={category.active ? "default" : "outline"}
                    className={`px-4 py-2 cursor-pointer ${
                      category.active ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    {category.name} ({category.count})
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Gallery */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-4 p-6">
                      {/* Before Image */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-center text-red-600">AVANT</h4>
                        <img
                          src={project.beforeImage || "/placeholder.svg"}
                          alt={`${project.title} - Avant`}
                          className="w-full h-48 object-cover rounded border-2 border-red-200"
                        />
                      </div>

                      {/* After Image */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-center text-green-600">APRÈS</h4>
                        <img
                          src={project.afterImage || "/placeholder.svg"}
                          alt={`${project.title} - Après`}
                          className="w-full h-48 object-cover rounded border-2 border-green-200"
                        />
                      </div>
                    </div>

                    <CardContent className="p-6 pt-0">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{project.category}</Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-semibold">Client:</div>
                          <div className="text-gray-600">{project.client}</div>
                        </div>
                        <div>
                          <div className="font-semibold">Durée:</div>
                          <div className="text-gray-600">{project.duration}</div>
                        </div>
                        <div>
                          <div className="font-semibold">Date:</div>
                          <div className="text-gray-600">{project.date}</div>
                        </div>
                        <div>
                          <div className="font-semibold">Services:</div>
                          <div className="text-gray-600">{project.services.join(", ")}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Notre Processus de Travail</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Diagnostic</h3>
                  <p className="text-gray-600 text-sm">Évaluation complète et devis détaillé</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Planification</h3>
                  <p className="text-gray-600 text-sm">Organisation des étapes et délais</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Réalisation</h3>
                  <p className="text-gray-600 text-sm">Travaux professionnels avec suivi</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Livraison</h3>
                  <p className="text-gray-600 text-sm">Contrôle qualité et remise du véhicule</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Ce Que Disent Nos Clients</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Karim Bennani",
                    project: "Réparation BMW X5",
                    comment:
                      "Travail exceptionnel ! Ma voiture est comme neuve. Garage auto Rabat de très haute qualité.",
                    rating: 5,
                  },
                  {
                    name: "Fatima Alaoui",
                    project: "Protection Mercedes",
                    comment: "Service professionnel et résultat parfait. Je recommande vivement SMART OTO Rabat.",
                    rating: 5,
                  },
                  {
                    name: "Ahmed Tazi",
                    project: "Restauration Porsche",
                    comment: "Restauration magnifique de ma Porsche classique. Équipe passionnée et compétente.",
                    rating: 5,
                  },
                ].map((testimonial, index) => (
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
                        <div className="text-sm text-gray-500">{testimonial.project}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
