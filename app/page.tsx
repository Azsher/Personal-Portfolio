import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://oscarantayhua.com/",
    name: "Oscar Antayhua",
    jobTitle: "Software Engineer & Process Automation Specialist",
    description:
      "Estudiante de Ingeniería de Software especializado en automatización de procesos, análisis de datos y desarrollo web.",
    url: "https://oscarantayhua.com/",
    email: "oscar.antayhuac@gmail.com",
    telephone: "+51 960 204 077",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
    sameAs: ["https://linkedin.com/in/oscar-antayhua", "https://github.com/1ASI0730-2510-4370-G1-TocaAqui"],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />
    </>
  )
}
