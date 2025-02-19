"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function PersonalProjects() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Personal Projects",
      projects: [
        {
          name: "Pryntio",
          description: "A microSaaS for print shops, automating production workflows.",
          technologies: "React, Node.js, MongoDB",
          status: 'In Development',
          url: 'https://pryntio.vercel.app/'
        },
        {
          name: "Conttak",
          description: "A personal finance management application.",
          technologies: "React Native, Firebase",
          status: 'Paused',
          url: 'https://conttak.vercel.app'
        },
        {
          name: "Thryllo",
          description: "A well-being and motivation platform.",
          technologies: "Next.js, NestJS, PostgreSQL",
          status: 'Planning',
          url: '#'
        },
      ],
    },
    pt: {
      title: "Projetos Pessoais",
      projects: [
        {
          name: "Pryntio",
          description: "Um microSaaS para gráficas, automatizando fluxos de produção.",
          technologies: "React, Node.js, MongoDB",
          status: 'Em desenvolvimento',
          url: 'https://pryntio.vercel.app/'
        },
        {
          name: "Conttak",
          description: "Um aplicativo de gerenciamento de finanças pessoais.",
          technologies: "React Native, Firebase",
          status: 'Pausado',
          url: 'https://conttak.vercel.app'
        },
        {
          name: "Thryllo",
          description: "Uma plataforma de bem-estar e motivação.",
          technologies: "Next.js, NestJS, PostgreSQL",
          status: 'Planejando',
          url: '#'
        },
      ],
    },
  }

  return (
    <section className="container py-8 md:py-12 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="mx-auto flex max-w-[980px] flex-col items-start gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-gray-900 dark:text-white">
          {content[language].title}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].projects.map((project, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={project.url === "#" ? '#' : project.url} target={project.url === "#" ? '_self' : '_blank'}>
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{project.name}</h3>
                  <Badge>{project.status}</Badge>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{project.technologies}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
