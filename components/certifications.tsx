"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { useGsapFadeInUp } from "@/hooks/use-gsap-animations"

export function Certifications() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)
  const titleRef = useGsapFadeInUp("#certifications")
  const firstRowRef = useGsapFadeInUp("#certifications", 0.3)
  const secondRowRef = useGsapFadeInUp("#certifications", 0.6)

  // Certification data
  const certifications = [
    { name: "SQL Intermediate", provider: "HackerRank", year: "2025", color: "text-blue-400", link: "https://www.hackerrank.com/certificates/1ca1438e71d9" },
    { name: "Make Foundation", provider: "Make", year: "2024", color: "text-purple-400", link: "https://www.credly.com/badges/f2667be8-2894-4bce-9392-961babaf6809/linked_in_profile" },
    { name: "Scrum Foundation", provider: "CertiProf", year: "2023", color: "text-green-400", link: "https://www.credly.com/badges/dca81f7f-6892-49ed-9053-d5a4f936e025/linked_in_profile" },
    { name: "Foundations of Cybersecurity", provider: "Google", year: "2025", color: "text-red-400", link: "https://coursera.org/share/17f4cc280b064b1fb3a5ed367a3e203b" },
    { name: "Excel Intermediate I", provider: "Macquarie University", year: "2021", color: "text-emerald-400", link: "https://coursera.org/share/1659a6b06c865d017b9eb818da3b5cb0" },
    { name: "MongoDB Intro", provider: "MongoDB", year: "2023", color: "text-green-500", link: "https://www.linkedin.com/in/oscar-antayhua/details/certifications/1752168047950/single-media-viewer/?profileId=ACoAADIfHxcBkuYHEarI05J8JOqtldcHKetdU-E" },
    { name: "Inmersion IA", provider: "Alura", year: "2025", color: "text-pink-400", link: "https://cursos.alura.com.br/certificate/your-cert-id" },
  ]

  const secondRowCertifications = [
    { name: "Google IT Support", provider: "Google", year: "2024", color: "text-blue-500", link: "https://coursera.org/share/c985ec0f62d29ba1359e0108767d9e36" },
    { name: "Operating Systems", provider: "Google", year: "2024", color: "text-indigo-400", link: "https://coursera.org/share/0789e5d0e1284c4337397a10d13e38b3" },
    { name: "Excel Business", provider: "Macquarie University", year: "2021", color: "text-teal-400", link: "https://coursera.org/verify/your-cert-id" },
    { name: "SQL Basic", provider: "HackerRank", year: "2025", color: "text-cyan-400", link: "https://www.hackerrank.com/certificates/c6977bc29e7a" },
    { name: "Make Basic", provider: "Make", year: "2024", color: "text-violet-400", link: "https://academy.make.com/certificates/your-cert-id" },
    { name: "Security Risks", provider: "Google", year: "2025", color: "text-orange-400", link: "https://coursera.org/verify/your-cert-id" },
  ]

  const CertificationCard = ({ cert, rowId }: { cert: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 hover:scale-105 cursor-pointer"
        aria-label={`Ver certificación de ${cert.name} por ${cert.provider}`}
      >
        <div className="w-48 h-24 sm:w-52 sm:h-28 lg:w-56 lg:h-32 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-center items-center p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
          <div className={`text-xs sm:text-sm font-semibold ${cert.color} text-center mb-1 px-2 leading-tight line-clamp-2 overflow-hidden`}>
            {cert.name}
          </div>
          <div className="text-xs text-neutral-400 text-center mb-2">{cert.provider}</div>
          <Badge variant="outline" className="text-xs border-white/20 text-neutral-300">
            {cert.year}
          </Badge>
        </div>
      </a>
    </div>
  )

  return (
    <section id="certifications" className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Mis <span className="text-lime-300">certificaciones</span>
            <br />
            profesionales
          </h2>
          <Button
            asChild
            variant="outline"
            className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent"
          >
            <a href="/cv-oscar-antayhua.pdf" className="hover:text-lime-300 transition-colors"download>
              Ver CV Completo
            </a>
          </Button>
        </div>

        {/* Certification Marquee */}
        <div className="relative py-8">
          {/* First Row - Scrolling Right */}
          <div ref={firstRowRef} className="flex overflow-hidden mb-6 py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap ${pausedRow === "first" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the certifications for seamless loop */}
              {[...certifications, ...certifications, ...certifications].map((cert, index) => (
                <CertificationCard key={`first-${index}`} cert={cert} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div ref={secondRowRef} className="flex overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap ${pausedRow === "second" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the certifications for seamless loop */}
              {[...secondRowCertifications, ...secondRowCertifications, ...secondRowCertifications].map(
                (cert, index) => (
                  <CertificationCard key={`second-${index}`} cert={cert} rowId="second" />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
