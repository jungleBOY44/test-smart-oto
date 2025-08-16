"use client"

import { MessageCircle } from "lucide-react"

export default function StickyWhatsApp() {
  const whatsappNumber = "212600000000" // Replace with actual number
  const message = "Bonjour SMART OTO, je souhaite demander un devis pour mes services automobiles."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Demandez votre devis gratuit
      </div>
    </button>
  )
}
