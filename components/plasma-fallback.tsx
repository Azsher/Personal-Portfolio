"use client"

import React from "react"

interface PlasmaFallbackProps {
  color?: string
  speed?: number
  direction?: "forward" | "reverse" | "pingpong"
  scale?: number
  opacity?: number
}

export const PlasmaFallback: React.FC<PlasmaFallbackProps> = ({
  color = "#8b5cf6",
  speed = 0.8,
  direction = "forward",
  scale = 1.7,
  opacity = 0.8,
}) => {
  return (
    <div 
      className="w-full h-full"
      style={{
        background: `
          radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 70%),
          linear-gradient(135deg, #000000 0%, #1a0d2e 50%, #000000 100%)
        `,
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        isolation: 'isolate'
      }}
    />
  )
}

export default PlasmaFallback