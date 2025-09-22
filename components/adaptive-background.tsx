"use client"

import React, { useState, useEffect } from "react"
import Plasma from "./plasma"
import PlasmaFallback from "./plasma-fallback"

interface AdaptiveBackgroundProps {
  color?: string
  speed?: number
  direction?: "forward" | "reverse" | "pingpong"
  scale?: number
  opacity?: number
  mouseInteractive?: boolean
}

export const AdaptiveBackground: React.FC<AdaptiveBackgroundProps> = ({
  color = "#8b5cf6",
  speed = 0.8,
  direction = "forward",
  scale = 1.7,
  opacity = 0.8,
  mouseInteractive = true
}) => {
  const [useMobileFallback, setUseMobileFallback] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detectDevice = () => {
      // Detección simple y directa
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      const isAndroid = /Android/.test(navigator.userAgent)
      const isMobile = window.innerWidth < 768 || isIOS || isAndroid
      
      console.log('Device detection:', {
        isIOS,
        isAndroid,
        isMobile,
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth
      })

      // Usar fallback CSS en móviles
      setUseMobileFallback(isMobile)
      setIsLoading(false)
    }

    detectDevice()
  }, [])

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full h-full bg-black" />
    )
  }

  // Mobile: Use CSS Fallback
  if (useMobileFallback) {
    return (
      <PlasmaFallback
        color={color}
        speed={speed}
        direction={direction}
        scale={scale}
        opacity={opacity}
      />
    )
  }

  // Desktop: Use WebGL Plasma
  return (
    <Plasma
      color={color}
      speed={speed}
      direction={direction}
      scale={scale}
      opacity={opacity}
      mouseInteractive={mouseInteractive}
    />
  )
}

export default AdaptiveBackground