"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useLanguage } from "./language-provider"

export default function HeroSection() {
  const { language } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const content = {
    en: {
      jobTitle: "Fullstack Developer",
      headline: "Building Scalable and High-Performance Digital Solutions",
      description:
        "I'm a fullstack developer specializing in React, Next.js, Node.js, Java, Spring Boot, and Angular. Focused on architecture, performance, and best coding practices.",
      cta: "Talk to me",
    },
    pt: {
      jobTitle: "Desenvolvedor Fullstack",
      headline: "Criando Soluções Digitais Escaláveis e de Alta Performance",
      description:
        "Sou um desenvolvedor fullstack especializado em React, Next.js, Node.js, Java, Spring Boot, and Angular. Focado em arquitetura, performance e boas práticas de código.",
      cta: "Fale comigo",
    },
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; radius: number; vx: number; vy: number }[] = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(100, 100, 255, 0.5)"
        ctx.fill()
      })

      particles.forEach((particleA, i) => {
        particles.slice(i + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.strokeStyle = `rgba(100, 100, 255, ${1 - distance / 100})`
            ctx.stroke()
          }
        })
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center mb-8 sm:flex-row sm:mb-12">
            <motion.div
              className="w-64 h-64 mb-6 sm:mb-0 sm:mr-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/53495653?v=4"
                alt="Ludriano Washington da Silva"
                width={256}
                height={256}
                className="rounded-full object-cover shadow-lg"
              />
            </motion.div>
            <div className="text-left">
              <motion.h2
                className="text-2xl font-semibold text-blue-400 dark:text-blue-300 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {content[language].jobTitle}
              </motion.h2>
              <motion.h1
                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Ludriano Washington
              </motion.h1>
            </div>
          </div>
          <motion.h3
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {content[language].headline}
          </motion.h3>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {content[language].description}
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
            >
              {content[language].cta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
