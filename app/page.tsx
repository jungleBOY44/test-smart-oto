import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import BeforeAfterGallery from "@/components/BeforeAfterGallery"
import Testimonials from "@/components/Testimonials"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"

export const metadata = {
  title: "SMART OTO - Garage Automobile Premium à Rabat | Réparation Voiture Rabat",
  description:
    "SMART OTO, garage automobile premium à Rabat. Services de mécanique, carrosserie, peinture, protection céramique. Devis gratuit. 20 Avenue Al Majd, Quartier Industriel Al Kamra.",
  keywords:
    "garage auto Rabat, réparation voiture Rabat, carrosserie Rabat, peinture automobile Rabat, protection céramique, garage premium Rabat",
  openGraph: {
    title: "SMART OTO - Garage Automobile Premium à Rabat",
    description: "Services professionnels de mécanique, carrosserie et esthétique automobile à Rabat",
    type: "website",
    locale: "fr_FR",
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfterGallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
