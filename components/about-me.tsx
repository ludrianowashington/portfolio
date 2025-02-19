"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function AboutMe() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Me",
      bio: "I'm a passionate fullstack developer with extensive experience in frontend and backend technologies. My expertise lies in building scalable architectures, integrating APIs, implementing automated testing, and deploying to cloud platforms. I've worked with leading companies like Grupo LAC, Factory of Idea, and Intech CRM, where I've contributed to developing robust and efficient digital solutions.",
      companies: "Companies & Projects:",
      companiesList: [
        "Grupo LAC: Developed frontend interfaces and maintained backend microservices in Java/Spring Boot.",
        "Factory of Idea: Contributed as a freelance fullstack developer for multiple projects.",
        "Ludri Tech: Maintained and optimized a CRM platform for scalability and performance.",
      ],
    },
    pt: {
      title: "Sobre Mim",
      bio: "Sou um desenvolvedor fullstack apaixonado com vasta experiência em tecnologias frontend e backend. Minha especialidade está na construção de arquiteturas escaláveis, integração de APIs, implementação de testes automatizados e implantação em plataformas em nuvem. Trabalhei com empresas líderes como Grupo LAC, Factory of Idea e Intech CRM, onde contribuí para o desenvolvimento de soluções digitais robustas e eficientes.",
      companies: "Empresas e Projetos:",
      companiesList: [
        "Grupo LAC: Desenvolvi interfaces frontend e mantive microsserviços backend em Java/Spring Boot.",
        "Factory of Idea: Contribuí como desenvolvedor fullstack freelance para múltiplos projetos.",
        "Ludri Tech: Mantive e otimizei uma plataforma CRM para escalabilidade e performance.",
      ],
    },
  }

  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <motion.div
        className="mx-auto flex max-w-[980px] flex-col items-start gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-gray-900 dark:text-white">
          {content[language].title}
        </h2>
        <p className="max-w-[700px] text-lg text-gray-600 dark:text-gray-300">{content[language].bio}</p>
        <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-gray-200">{content[language].companies}</h3>
        <ul className="list-disc pl-5">
          {content[language].companiesList.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
