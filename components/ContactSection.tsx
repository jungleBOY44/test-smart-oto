"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Merci pour votre demande ! Nous vous contactons sous 24h.")
    setFormData({ name: "", phone: "", service: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contactez-nous pour votre devis gratuit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour tous vos besoins automobiles. Contactez SMART OTO dès
            maintenant pour un devis personnalisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Informations de contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Adresse principale</h4>
                    <p className="text-gray-600">
                      20 Avenue Al Majd
                      <br />
                      Quartier Industriel Al Kamra, Rabat
                    </p>
                    <p className="text-sm text-blue-600 mt-1">7 min de Hay Riad • 15 min de Témara</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Adresse administrative</h4>
                    <p className="text-gray-600">
                      15 Avenue Al Abtal, Appt 4<br />
                      Agdal, Rabat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Téléphone</h4>
                    <p className="text-gray-600">+212 6XX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-gray-600">contact@smartoto.ma</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Horaires d'ouverture</h4>
                    <div className="text-gray-600">
                      <p>Lundi - Vendredi: 8h00 - 18h00</p>
                      <p>Samedi: 8h00 - 16h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <Card>
              <CardHeader>
                <CardTitle>Notre localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Carte Google Maps - SMART OTO Rabat</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Demandez votre devis gratuit</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="mecanique">Mécanique & Diagnostic</option>
                    <option value="carrosserie">Carrosserie & Peinture</option>
                    <option value="protection">Protection Esthétique</option>
                    <option value="climatisation">Climatisation</option>
                    <option value="electricite">Électricité Automobile</option>
                    <option value="pneumatique">Pneumatique</option>
                    <option value="autre">Autre service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre besoin, le type de véhicule, etc."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3"
                >
                  {isSubmitting ? "Envoi en cours..." : "Demander mon devis gratuit"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par SMART OTO pour votre demande de devis.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
