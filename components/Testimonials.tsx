import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Benali",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Service exceptionnel chez SMART OTO ! Mon BMW a retrouvé son éclat d'origine grâce à leur traitement céramique. L'équipe d'Imad est très professionnelle.",
    service: "Protection Céramique",
  },
  {
    name: "Fatima Zahra",
    location: "Agdal, Rabat",
    rating: 5,
    comment:
      "Excellent travail de carrosserie sur ma Mercedes. La réparation est invisible et la peinture parfaitement assortie. Je recommande vivement !",
    service: "Carrosserie & Peinture",
  },
  {
    name: "Youssef Alami",
    location: "Témara",
    rating: 5,
    comment:
      "Diagnostic précis et réparation rapide de ma Audi. L'équipe SMART OTO maîtrise parfaitement les véhicules premium. Tarifs transparents.",
    service: "Mécanique & Diagnostic",
  },
  {
    name: "Karim Tahiri",
    location: "Souissi, Rabat",
    rating: 5,
    comment:
      "Protection PPF installée sur ma Porsche. Travail minutieux et finition impeccable. L'investissement en vaut vraiment la peine !",
    service: "Protection PPF",
  },
  {
    name: "Nadia Benjelloun",
    location: "Hay Riad, Rabat",
    rating: 5,
    comment:
      "Rénovation complète de l'intérieur cuir de ma Range Rover. Résultat bluffant ! L'atelier cuir de SMART OTO fait des miracles.",
    service: "Atelier Cuir",
  },
  {
    name: "Mohamed Tazi",
    location: "Centre-ville, Rabat",
    rating: 5,
    comment:
      "Service de climatisation parfait sur ma BMW. Intervention rapide et prix compétitif. Garage de confiance à Rabat !",
    service: "Climatisation",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur nos services de garage
            automobile premium à Rabat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
                  <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-blue-600 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Rejoignez nos clients satisfaits</h3>
          <p className="text-lg mb-6">Plus de 1000 véhicules réparés et entretenus avec excellence</p>
          <div className="flex justify-center items-center gap-8 text-lg">
            <div className="text-center">
              <div className="text-3xl font-bold">4.9/5</div>
              <div>Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div>Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div>Ans d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
