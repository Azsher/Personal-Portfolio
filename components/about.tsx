"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useGsapFadeInUp, useGsapStaggerCards } from "@/hooks/use-gsap-animations"

export function About() {
  const titleRef = useGsapFadeInUp("#about")
  const cardsRef = useGsapFadeInUp(".about-card")

  return (
    <section id="about" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 ref={titleRef} className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Sobre Mí</h2>

      <div ref={cardsRef} className="grid gap-6 md:grid-cols-2">
        {/* Professional Summary Card */}
        <Card className="about-card liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">RESUMEN PROFESIONAL</p>
            <CardTitle className="mt-1 text-xl text-white">Desarrollador full-stack y especialista en automatización</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300 leading-relaxed">
              Futuro ingeniero de software con experiencia práctica en tres áreas clave: <strong className="text-lime-300">desarrollo web full-stack</strong>, <strong className="text-lime-300">automatización de procesos</strong> y <strong className="text-lime-300">análisis de datos</strong>. Combino formación académica sólida con proyectos reales que demuestran versatilidad técnica.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-3">
              Mi stack tecnológico abarca desde aplicaciones web modernas (Angular, Vue, .NET, Spring Boot) hasta soluciones de automatización empresarial y análisis de datos. Apasionado por crear tecnología que resuelva problemas reales y genere valor en las organizaciones.
            </p>
          </CardContent>
        </Card>

        {/* Education & Location Card */}
        <Card className="about-card liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">EDUCACIÓN & UBICACIÓN</p>
            <CardTitle className="mt-1 text-xl text-white">Formación académica sólida</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center">
                    <Image
                      src="/images/upc.webp"
                      alt="UPC Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Universidad Peruana de Ciencias Aplicadas</h4>
                  <p className="text-sm text-neutral-400">Ingeniería de Software • 8vo ciclo • 2020 - Actualidad</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-white/20 flex items-center justify-center">
                    <Image
                      src="https://britanico.edu.pe/wp-content/uploads/2023/07/britanico-isotipo.svg"
                      alt="Británico Logo"
                      width={56}
                      height={56}
                      className="w-[110%] h-[110%] object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Británico</h4>
                  <p className="text-sm text-neutral-400">Inglés B2 (Avanzado 6) • Intermedio Alto</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
