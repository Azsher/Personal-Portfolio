"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Linkedin, Github, Instagram } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-8">
          <div className="mb-5 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <Image
                src="/images/oscar-profile.jpg"
                alt="Oscar Antayhua"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">Oscar Antayhua</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white">SOFTWARE</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">ENGINEER</span>
            <span className="block text-white">& AUTOMATION</span>
            <span className="block text-white">SPECIALIST</span>
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-neutral-300">
            Estudiante de 8vo ciclo especializado en automatización de procesos, análisis de datos y desarrollo web.
            Transformo ideas en soluciones tecnológicas eficientes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
              <a href="mailto:oscar.antayhuac@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <a href="/cv-oscar-antayhua.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </Button>
          </div>

          <div className="mt-6 flex gap-4">
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
              <a href="https://github.com/Azsher" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
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
          </div>

        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  description,
  icon,
  gradient,
}: {
  title: string
  description: string
  icon: string
  gradient: string
}) {
  return (
    <div className="animate-card relative rounded-[28px] glass-border bg-neutral-900 p-4">
      <div className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}>
        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
          <div className="text-2xl">{icon}</div>
          <div className="space-y-1">
            <div className="text-lg font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}