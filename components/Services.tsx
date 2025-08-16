import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Car, Sparkles, Settings } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    title: "Protection Esthétique",
    description:
      "Protection PPF, nano-céramique, habillage automobile et atelier cuir pour préserver l'esthétique de votre véhicule.",
    href: "/protection-esthetique",
    features: ["Protection PPF", "Nano-céramique", "Habillage automobile", "Lavage premium"],
  },
  {
    icon: Car,
    title: "Carrosserie & Peinture",
    description:
      "Réparation carrosserie, débosselage et peinture automobile avec finition premium pour redonner vie à votre véhicule.",
    href: "/carrosserie",
    features: ["Débosselage", "Réparation carrosserie", "Peinture premium", "Finition parfaite"],
  },
  {
    icon: Settings,
    title: "Mécanique & Diagnostic",
    description:
      "Diagnostic électronique, réparation mécanique complète et entretien préventif par nos experts certifiés.",
    href: "/mecanique-diagnostic",
    features: ["Diagnostic électronique", "Réparation moteur", "Entretien préventif", "Pièces d'origine"],
  },
  {
    icon: Sparkles,
    title: "Services Premium",
    description:
      "Climatisation, électricité automobile, pneumatique et services spécialisés pour un entretien complet.",
    href: "/services-premium",
    features: ["Climatisation", "Électricité auto", "Pneumatique", "Services sur mesure"],
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services d'Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SMART OTO propose une gamme complète de services automobiles premium à Rabat. De la mécanique à
            l'esthétique, nous prenons soin de votre véhicule avec expertise et passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    En savoir plus →
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
