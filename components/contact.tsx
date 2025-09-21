"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="container mx-auto  py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Contacto</h2>

      <div className="max-w-2xl mx-auto">
        {/* Contact Info */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Información de Contacto</CardTitle>
            <p className="text-neutral-400">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-lime-300" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href="mailto:oscar.antayhuac@gmail.com"
                    className="text-neutral-300 hover:text-lime-300 transition-colors"
                  >
                    oscar.antayhuac@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-lime-300" />
                <div>
                  <p className="text-white font-medium">Teléfono</p>
                  <a href="tel:+51960204077" className="text-neutral-300 hover:text-lime-300 transition-colors">
                    (+51) 960 204 077
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-lime-300" />
                <div>
                  <p className="text-white font-medium">Ubicación</p>
                  <p className="text-neutral-300">Lima, Perú</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-medium mb-3">Redes Sociales</p>
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-white/10 text-white hover:text-white"
                  >
                    <a href="https://linkedin.com/in/oscar-antayhua" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-white/10 text-white hover:text-white"
                  >
                    <a href="https://www.instagram.com/azsher_/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-white/10 text-white hover:text-white"
                  >
                    <a
                      href="https://github.com/1ASI0730-2510-4370-G1-TocaAqui"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
