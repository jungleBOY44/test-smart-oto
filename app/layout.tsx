import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://smartoto.ma"),
  title: {
    default: "SMART OTO - Garage Automobile Premium à Rabat | Réparation Voiture Rabat",
    template: "%s | SMART OTO",
  },
  description:
    "SMART OTO, garage automobile premium à Rabat. Services de mécanique, carrosserie, peinture, protection céramique. Devis gratuit. 20 Avenue Al Majd, Quartier Industriel Al Kamra.",
  keywords: [
    "garage auto Rabat",
    "réparation voiture Rabat",
    "carrosserie Rabat",
    "peinture automobile Rabat",
    "protection céramique",
    "garage premium Rabat",
    "mécanique auto Rabat",
  ],
  authors: [{ name: "Imad El Gueunnouni" }],
  creator: "SMART OTO",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://smartoto.ma",
    title: "SMART OTO - Garage Automobile Premium à Rabat",
    description: "Services professionnels de mécanique, carrosserie et esthétique automobile à Rabat",
    siteName: "SMART OTO",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMART OTO - Garage Automobile Premium à Rabat",
    description: "Services professionnels de mécanique, carrosserie et esthétique automobile à Rabat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "SMART OTO",
              founder: "Imad El Gueunnouni",
              address: {
                "@type": "PostalAddress",
                streetAddress: "20 Avenue Al Majd, Quartier Industriel Al Kamra",
                addressLocality: "Rabat",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.0209,
                longitude: -6.8416,
              },
              telephone: "+212600000000",
              email: "contact@smartoto.ma",
              url: "https://smartoto.ma",
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services Automobiles",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Réparation Automobile",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Carrosserie et Peinture",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Protection Esthétique",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
