"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useGsapFadeInUp, useGsapStaggerCards } from "@/hooks/use-gsap-animations"

export function Projects() {
  const titleRef = useGsapFadeInUp("#projects")
  const cardsRef = useGsapFadeInUp(".project-card")

  return (
    <section id="projects" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 ref={titleRef} className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Proyectos Destacados
      </h2>

      <div ref={cardsRef} className="grid gap-6 md:grid-cols-2">
        {/* TocaAquí Platform */}
        <Card className="project-card liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Plataforma Web TocaAquí</CardTitle>
            <p className="text-neutral-400">Sistema completo para conectar músicos con espacios culturales</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-neutral-300 text-sm leading-relaxed">
                Lideré el desarrollo de un sistema web aplicando arquitectura Domain-Driven Design (DDD) para un diseño
                escalable y mantenible.
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-white text-sm">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">C#</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">API RESTful</Badge>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <a href="https://github.com/1ASI0730-2510-4370-G1-TocaAqui" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-lime-400 text-black hover:bg-lime-300">
                  <a
                    href="https://1asi0730-2510-4370-g1-tocaaqui.github.io/Landing-Page/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inmoshare Platform */}
        <Card className="project-card liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Inmoshare</CardTitle>
            <p className="text-neutral-400">Plataforma de gestión de bienes raíces con pagos compartidos</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-neutral-300 text-sm leading-relaxed">
                Desarrollé una plataforma web para la gestión de alquiler, venta y renta de propiedades, demostrando
                capacidad para construir sistemas complejos y seguros.
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-white text-sm">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="text-xs text-neutral-400">
                  <strong className="text-white">Destacado:</strong> Sistema de pagos compartidos y gestión de grandes
                  volúmenes de información inmobiliaria.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
