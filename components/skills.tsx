"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useGsapFadeInUp, useGsapStaggerCards } from "@/hooks/use-gsap-animations"

export function Skills() {
  const titleRef = useGsapFadeInUp("#skills")
  const cardsRef = useGsapFadeInUp(".skill-card")

  return (
    <section id="skills" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 ref={titleRef} className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Habilidades & Certificaciones
      </h2>

      <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Automation & Productivity */}
        <Card className="skill-card liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg text-white">Automatización & Productividad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Microsoft Office</Badge>
              <Badge variant="secondary">Google Workspace</Badge>
              <Badge variant="secondary">Make.com</Badge>
              <Badge variant="secondary">Power Automate</Badge>
              <Badge variant="secondary">N8N</Badge>
              <Badge variant="secondary">Google Apps Script</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Data Analysis */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg text-white">Análisis de Datos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">NoSQL</Badge>
              <Badge variant="secondary">Power BI</Badge>
              <Badge variant="secondary">Excel Intermediate I</Badge>
              <Badge variant="secondary">Python</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Development */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg text-white">Desarrollo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
              <Badge variant="secondary">Vue.js</Badge>
              <Badge variant="secondary">Angular</Badge>
              <Badge variant="secondary">C#</Badge>
            </div>
          </CardContent>
        </Card>

        {/* AI & Content */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg text-white">IA & Contenido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">ChatGPT</Badge>
              <Badge variant="secondary">Google Gemini</Badge>
              <Badge variant="secondary">Prompting</Badge>
              <Badge variant="secondary">Content Creation</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Project Management & Version Control */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg text-white">Gestión de Proyectos & Control de Versiones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Scrum</Badge>
              <Badge variant="secondary">Jira</Badge>
              <Badge variant="secondary">Trello</Badge>
              <Badge variant="secondary">Metodologías Ágiles</Badge>
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">GitHub</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg text-white">Certificaciones Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-neutral-300">Google Cybersecurity</span>
                <span className="text-neutral-500">2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-300">SQL Intermediate</span>
                <span className="text-neutral-500">2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-300">Make Foundation</span>
                <span className="text-neutral-500">2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-300">Scrum Foundation</span>
                <span className="text-neutral-500">2023</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
