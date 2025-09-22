"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Registrar los plugins de ScrollTrigger y ScrollTo
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export function useGsapFadeInUp(trigger?: string, delay: number = 0) {
  const elementRef = useRef<any>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger || element,
          start: "top 80%",
          toggleActions: "play none none reverse",
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