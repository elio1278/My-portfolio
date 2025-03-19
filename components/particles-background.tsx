"use client"

import { useEffect, useState } from "react"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-tsparticles"

export default function ParticlesBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  if (!isMounted) return null

  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 30, smooth: 20 } // Reduced force and increased smoothness
              },
            },
            modes: {
              push: { quantity: 3 }, // Reduced push quantity
              repulse: { distance: 50, duration: 0.6 } // Reduced distance and increased duration
            }
          },
          particles: {
            color: { value: "#444" },  // Darker gray color for better light mode visibility
            move: {
              direction: "none",
              enable: true,
              outModes: "bounce",
              random: true,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.7  // Increased opacity
            },
            size: {
              value: { min: 1, max: 3 }
            }
          },
          detectRetina: true
        }}
      />
    </div>
  )
}
