"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Registrar los plugins de ScrollTrigger y ScrollTo con configuración optimizada
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  
  // Configuración optimizada para móviles
  const isMobile = window.innerWidth < 768
  
  if (isMobile) {
    // Reducir frecuencia de refresh en móviles
    ScrollTrigger.config({
      syncInterval: 150, // vs default 17
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    })
    
    // Configurar GSAP para mejor rendimiento en móviles
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    })
  }
}

export function useGsapFadeInUp(trigger?: string, delay: number = 0) {
  const elementRef = useRef<any>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const isMobile = window.innerWidth < 768

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: isMobile ? 30 : 50, // Menor movimiento en móviles
      },
      {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.6 : 0.8, // Más rápido en móviles
        delay,
        ease: "power2.out",
        force3D: true, // Forzar aceleración por hardware
        willChange: "transform, opacity", // Optimizar para cambios
        scrollTrigger: {
          trigger: trigger || element,
          start: "top 80%",
          toggleActions: "play none none reverse",
          fastScrollEnd: isMobile ? true : false, // Optimización móvil
          refreshPriority: isMobile ? -1 : 0 // Menor prioridad en móviles
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [trigger, delay])

  return elementRef
}

export function useGsapStaggerCards(containerSelector: string) {
  const containerRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(".animate-card")

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [containerSelector])

  return containerRef
}

export function useGsapTypewriter(text: string, speed: number = 50) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const originalText = text
    
    // Limpiar el contenido inicial
    element.textContent = ""

    // Animación de escritura
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        element.textContent = originalText.slice(0, currentIndex)
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [text, speed])

  return elementRef
}

export function useGsapHoverEffect() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return elementRef
}

export function useGsapCountUp(endValue: number, duration: number = 2) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const obj = { value: 0 }

    gsap.to(obj, {
      value: endValue,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.floor(obj.value).toString()
      },
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [endValue, duration])

  return elementRef
}

// Smooth scroll using GSAP ScrollToPlugin
export function useGsapSmoothScroll() {
  const scrollTo = (target: string) => {
    const element = document.querySelector(target)
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: element,
          offsetY: 80, // Account for header height
        },
        ease: "power2.inOut"
      })
    }
  }

  return { scrollTo }
}