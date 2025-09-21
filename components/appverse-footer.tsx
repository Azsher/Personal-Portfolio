"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Linkedin, Github, Mail, MapPin, Phone, Instagram } from "lucide-react"

export function AppverseFooter() {
  return (
    <section  id="contact" className="text-white">
      {/* Download CV Section - Simplified to reduce button saturation */}

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <div className="h-6 w-6 rounded-full bg-lime-300 flex items-center justify-center">
                  <span className="text-black font-bold text-xs">OA</span>
                </div>
                <span className="text-xl font-semibold text-lime-300">Oscar Antayhua</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">
                Software Engineer especializado en automatización de procesos, análisis de datos y desarrollo web.
                Transformando ideas en soluciones tecnológicas eficientes.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navegación</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Sobre Mí", "Experiencia", "Proyectos", "Habilidades", "Contacto"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-lime-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Redes Sociales
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://linkedin.com/in/oscar-antayhua"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Conectar con Oscar en LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://github.com/Azsher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Ver proyectos de Oscar en GitHub"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.instagram.com/azsher_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Conectar con Oscar en Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-neutral-400" />
                    <a
                      href="mailto:oscar.antayhuac@gmail.com"
                      className="hover:text-lime-300"
                      aria-label="Enviar email a Oscar"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>© 2025 — Oscar Antayhua. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <span className="text-neutral-400">Lima, Perú</span>
              <span className="text-neutral-400">Disponible para proyectos</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
