"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useGsapFadeInUp, useGsapStaggerCards } from "@/hooks/use-gsap-animations"

export function Experience() {
  const titleRef = useGsapFadeInUp("#experience")
  const cardsRef = useGsapFadeInUp(".experience-card")

  return (
    <section id="experience" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 ref={titleRef} className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Experiencia Laboral
      </h2>

      <div ref={cardsRef} className="space-y-6">
        {/* Nova Academy - Automation Trainee */}
        <Card className="experience-card liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center">
                  <Image
                    src="/images/nova.jpeg"
                    alt="Nova Academy Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-white">Trainee de Automatización de Procesos</CardTitle>
                    <p className="text-lime-300 font-medium">Nova Academy</p>
                  </div>
                  <Badge variant="outline" className="border-lime-300/30 text-lime-300 w-fit">
                    Octubre 2024 - Mayo 2025
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-lime-300 mt-1">•</span>
                Implementé la automatización de 5 procesos clave utilizando Google Workspace y Microsoft 365, reduciendo
                el tiempo de ejecución en un 20%.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-300 mt-1">•</span>
                Diseñé flujos de trabajo automatizados con Make, integrando datos de Google Sheets para generar
                reportes, resultando en una reducción del 15% en errores manuales.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-300 mt-1">•</span>
                Mejoré la eficiencia operativa mediante integraciones avanzadas, optimizando la gestión de información.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Nova Academy - Gen AI Trainee */}
        <Card className="experience-card liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center">
                  <Image
                    src="/images/nova.jpeg"
                    alt="Nova Academy Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-white">Gen AI Trainee</CardTitle>
                    <p className="text-lime-300 font-medium">Nova Academy</p>
                  </div>
                  <Badge variant="outline" className="border-lime-300/30 text-lime-300 w-fit">
                    Abril 2024 - Octubre 2024
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-lime-300 mt-1">•</span>
                Recopilé y analicé información semanal sobre IA, generando más de 20 piezas de contenido digital para
                campañas en Instagram, LinkedIn y TikTok.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-300 mt-1">•</span>
                Elaboré material educativo sobre IA, contribuyendo a la estrategia de comunicación y aumentando la
                interacción en redes sociales en un 15%.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-300 mt-1">•</span>
                Utilicé herramientas de IA generativa para optimizar la creación de contenido, incrementando la
                eficiencia en un 30%.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
