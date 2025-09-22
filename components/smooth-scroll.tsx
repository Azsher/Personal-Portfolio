"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

// Registrar los plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let smoother: any = null

    if (typeof window !== "undefined") {
      // Crear ScrollSmoother
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // Duración del smooth scrolling (en segundos)
        effects: true, // Habilita data-speed y data-lag
        smoothTouch: 0.1, // Smooth scrolling en dispositivos móviles
      })
    }

    return () => {
      if (smoother) {
        smoother.kill()
      }
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}