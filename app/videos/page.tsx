import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Instagram, Music, Eye, Heart, Share2 } from "lucide-react"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Vidéos SMART OTO - Réalisations Garage Automobile Rabat | Instagram & TikTok",
  description:
    "Découvrez nos vidéos et réalisations automobile. SMART OTO Rabat : Instagram Reels, TikTok, avant/après, techniques professionnelles. Suivez-nous !",
  keywords: [
    "vidéos SMART OTO",
    "Instagram garage Rabat",
    "TikTok automobile Rabat",
    "réalisations vidéo",
    "avant après vidéo",
    "garage automobile vidéos",
  ],
}

const videoCategories = [
  {
    icon: Instagram,
    title: "Instagram Reels",
    description: "Découvrez nos dernières réalisations en format court sur Instagram",
    count: "50+ Reels",
    platform: "Instagram",
    handle: "@smartoto_maroc",
  },
  {
    icon: Music,
    title: "TikTok Vidéos",
    description: "Suivez nos techniques et transformations sur TikTok",
    count: "30+ Vidéos",
    platform: "TikTok",
    handle: "@smartoto_maroc",
  },
  {
    icon: Play,
    title: "Tutoriels",
    description: "Apprenez les techniques d'entretien automobile",
    count: "20+ Tutos",
    platform: "YouTube",
    handle: "SMART OTO Rabat",
  },
  {
    icon: Eye,
    title: "Avant/Après",
    description: "Transformations spectaculaires de nos véhicules",
    count: "100+ Transformations",
    platform: "Toutes plateformes",
    handle: "Nos réalisations",
  },
]

const featuredVideos = [
  {
    id: 1,
    title: "Protection PPF Porsche 911",
    description: "Installation complète film PPF sur Porsche 911 - Processus détaillé",
    thumbnail: "/video-ppf-porsche.png",
    duration: "2:30",
    views: "15.2K",
    likes: "892",
    platform: "Instagram",
    category: "Protection",
  },
  {
    id: 2,
    title: "Rénovation Cuir BMW Série 5",
    description: "Transformation complète sièges cuir BMW - Technique professionnelle",
    thumbnail: "/video-leather-renovation.png",
    duration: "1:45",
    views: "23.1K",
    likes: "1.2K",
    platform: "TikTok",
    category: "Rénovation",
  },
  {
    id: 3,
    title: "Covering Noir Mat Mercedes",
    description: "Habillage intégral Mercedes Classe C - Finition parfaite",
    thumbnail: "/video-car-wrapping.png",
    duration: "3:15",
    views: "31.5K",
    likes: "1.8K",
    platform: "Instagram",
    category: "Habillage",
  },
  {
    id: 4,
    title: "Polissage Carrosserie Audi",
    description: "Correction défauts peinture Audi A4 - Brillance retrouvée",
    thumbnail: "/video-paint-correction.png",
    duration: "2:10",
    views: "18.7K",
    likes: "956",
    platform: "TikTok",
    category: "Polissage",
  },
  {
    id: 5,
    title: "Céramique BMW X5",
    description: "Application protection céramique BMW X5 - Processus complet",
    thumbnail: "/video-ceramic-coating.png",
    duration: "4:20",
    views: "27.3K",
    likes: "1.5K",
    platform: "YouTube",
    category: "Protection",
  },
  {
    id: 6,
    title: "Réparation Carrosserie Range Rover",
    description: "Débosselage et peinture Range Rover Sport - Expertise technique",
    thumbnail: "/video-bodywork-repair.png",
    duration: "3:45",
    views: "21.8K",
    likes: "1.1K",
    platform: "Instagram",
    category: "Carrosserie",
  },
]

const socialStats = [
  {
    platform: "Instagram",
    followers: "12.5K",
    engagement: "8.2%",
    posts: "250+",
    icon: Instagram,
  },
  {
    platform: "TikTok",
    followers: "8.3K",
    engagement: "12.5%",
    posts: "180+",
    icon: Music,
  },
  {
    platform: "YouTube",
    followers: "3.2K",
    engagement: "15.1%",
    posts: "45+",
    icon: Play,
  },
]

const videoTips = [
  {
    tip: "Suivez nos Réseaux",
    description: "Ne manquez aucune de nos réalisations en nous suivant sur Instagram et TikTok",
    action: "Suivre @smartoto_maroc",
  },
  {
    tip: "Activez les Notifications",
    description: "Soyez alerté de nos nouvelles vidéos et découvrez nos techniques en avant-première",
    action: "Activer les notifications",
  },
  {
    tip: "Partagez vos Favoris",
    description: "Partagez nos vidéos avec vos amis passionnés d'automobile",
    action: "Partager nos contenus",
  },
  {
    tip: "Commentez et Likez",
    description: "Interagissez avec nos contenus pour nous encourager et poser vos questions",
    action: "Engager avec nous",
  },
]

export default function Videos() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-600">Nos Vidéos</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Découvrez Nos <span className="text-blue-400">Réalisations en Vidéo</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Suivez SMART OTO sur Instagram, TikTok et YouTube pour découvrir nos techniques professionnelles, nos
                transformations spectaculaires et nos conseils d'experts en automobile à Rabat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Suivre @smartoto_maroc
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Voir Nos Vidéos
                </Button>
              </div>
              <div className="mt-8 flex justify-center items-center gap-8 text-lg">
                <div className="flex items-center gap-2">
                  <Play className="h-6 w-6 text-green-400" />
                  <span>100+ Vidéos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-6 w-6 text-blue-400" />
                  <span>500K+ Vues</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-400" />
                  <span>25K+ Likes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Contenus Vidéo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO partage son expertise à travers différents formats vidéo sur toutes les plateformes sociales
                populaires.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {videoCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                      <div className="bg-blue-50 p-3 rounded-lg mb-4">
                        <div className="text-lg font-bold text-blue-600">{category.count}</div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="font-medium">{category.platform}</div>
                        <div className="text-blue-600">{category.handle}</div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Vidéos à la Une</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez nos vidéos les plus populaires showcasant notre expertise en automobile à Rabat
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg?height=200&width=350"}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-blue-600">{video.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{video.likes}</span>
                        </div>
                      </div>
                      <div className="text-blue-600 font-medium">{video.platform}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Statistiques Sociales</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMART OTO grandit chaque jour grâce à votre soutien sur les réseaux sociaux
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {socialStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                        <IconComponent className="h-12 w-12 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{stat.platform}</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="text-3xl font-bold text-blue-600">{stat.followers}</div>
                          <div className="text-sm text-gray-600">Abonnés</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-green-600">{stat.engagement}</div>
                          <div className="text-sm text-gray-600">Engagement</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-600">{stat.posts}</div>
                          <div className="text-sm text-gray-600">Publications</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Video Tips */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Restez Connectés</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Suivez ces conseils pour ne rien manquer de nos contenus et interagir avec notre communauté
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {videoTips.map((tip, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                      <Share2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{tip.tip}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      {tip.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Rejoignez Notre Communauté !</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Suivez SMART OTO sur Instagram et TikTok pour découvrir nos dernières réalisations, techniques
              professionnelles et conseils d'experts automobile à Rabat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Suivre sur Instagram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Suivre sur TikTok
              </Button>
            </div>
            <div className="mt-8 text-lg">
              <strong>@smartoto_maroc</strong> - Votre garage automobile premium à Rabat
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
