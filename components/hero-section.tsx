"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

export default function HeroSection() {
  const { language } = useLanguage()
  const [phraseIndex, setPhraseIndex] = useState(0)

  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Ludriano Washington",
      title: "Fullstack Developer & Digital Entrepreneur",
      phrases: ["Scalable Solutions", "Intelligent SaaS", "Purposeful Automation"],
      description:
        "Building innovative digital products that solve real problems with modern technology and strategic vision.",
      projectsButton: "View Projects",
      contactButton: "Get in Touch",
    },
    pt: {
      greeting: "Olá, eu sou",
      name: "Ludriano Washington",
      title: "Desenvolvedor Fullstack & Empreendedor Digital",
      phrases: ["Soluções Escaláveis", "SaaS Inteligente", "Automação com Propósito"],
      description:
        "Construindo produtos digitais inovadores que resolvem problemas reais com tecnologia moderna e visão estratégica.",
      projectsButton: "Ver Projetos",
      contactButton: "Entrar em Contato",
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex === content[language].phrases.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [language, content])

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-background z-0"></div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block text-lg md:text-xl text-primary mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {content[language].greeting}
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content[language].name}
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium text-foreground/80 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {content[language].title}
            </motion.h2>

            <div className="h-12 mb-6">
              <motion.div
                key={phraseIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="gradient-text text-2xl md:text-3xl font-bold"
              >
                {content[language].phrases[phraseIndex]}
              </motion.div>
            </div>

            <motion.p
              className="text-foreground/80 text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {content[language].description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#projects" className="button-primary flex items-center gap-2">
                {content[language].projectsButton}
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="button-secondary">
                {content[language].contactButton}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-purple-500/20">
              <Image
                src="https://github.com/ludrianowashington.png"
                alt="Ludriano Washington"
                fill
                className="object-cover"
                priority
              />
            </div>

            <motion.div
              className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/20 blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
