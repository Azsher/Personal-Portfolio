"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export function Certifications() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  // Certification data
  const certifications = [
    { name: "SQL Intermediate", provider: "HackerRank", year: "2025", color: "text-blue-400" },
    { name: "Make Foundation", provider: "Make", year: "2024", color: "text-purple-400" },
    { name: "Scrum Foundation", provider: "CertiProf", year: "2023", color: "text-green-400" },
    { name: "Google Cybersecurity", provider: "Google", year: "2025", color: "text-red-400" },
    { name: "Excel Intermediate I", provider: "Macquarie University", year: "2021", color: "text-emerald-400" },
    { name: "MongoDB Intro", provider: "MongoDB", year: "2023", color: "text-green-500" },
    { name: "Writing & Editing", provider: "University of Michigan", year: "2022", color: "text-yellow-400" },
    { name: "Inmersion IA", provider: "Alura", year: "2025", color: "text-pink-400" },
  ]

  const secondRowCertifications = [
    { name: "Google IT Support", provider: "Google", year: "2024", color: "text-blue-500" },
    { name: "Operating Systems", provider: "Google", year: "2024", color: "text-indigo-400" },
    { name: "Security Risks", provider: "Google", year: "2025", color: "text-orange-400" },
    { name: "Excel Business", provider: "Macquarie University", year: "2021", color: "text-teal-400" },
    { name: "SQL Basic", provider: "HackerRank", year: "2025", color: "text-cyan-400" },
    { name: "Make Basic", provider: "Make", year: "2024", color: "text-violet-400" },
  ]

  const CertificationCard = ({ cert, rowId }: { cert: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-48 h-24 sm:w-52 sm:h-28 lg:w-56 lg:h-32 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-center items-center p-4">
        <div className={`text-sm sm:text-base font-semibold ${cert.color} text-center mb-1`}>{cert.name}</div>
        <div className="text-xs text-neutral-400 text-center mb-2">{cert.provider}</div>
        <Badge variant="outline" className="text-xs border-white/20 text-neutral-300">
          {cert.year}
        </Badge>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
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
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
