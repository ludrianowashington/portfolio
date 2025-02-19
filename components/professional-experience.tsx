"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function ProfessionalExperience() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Professional Experience",
      experiences: [
        {
          company: "Ludri Tech",
          role: "Freelance Fullstack Developer",
          period: "DEC/2020 - present",
          description:
            "Contribute to multiple projects, leveraging my experience from Grupo LAC, Factory of Idea, and Intech CRM. "+
            " My role spans both front-end and back-end development, with a focus on maintaining and optimizing systems to ensure scalability, performance, and high availability."+
            "My responsibilities include implementing new features, resolving complex technical issues, and applying best practices such as automated testing, API integration, and efficient deployments using Docker and AWS.",
        },
        {
          company: "Grupo LAC",
          role: "Frontend Developer",
          period: "DEC/2020 - MAR/2024",
          description:
            "Developed frontend interfaces and maintained backend microservices in Java/Spring Boot. Implemented new features and optimized existing codebase for improved performance.",
        },
        {
          company: "Factory of Idea",
          role: "Freelance Fullstack Developer",
          period: "FEB/2020 - OCT/2024",
          description:
            "Contributed as a freelance fullstack developer for multiple projects. Worked with various technologies, including React, Ionic, Angular, Next.js, React Native, Node.js, and MongoDB.",
        },
      ],
    },
    pt: {
      title: "Experiência Profissional",
      experiences: [
        {
          company: "Ludri Tech",
          role: "Desenvolvedor Fullstack Freelancer",
          period: "Dez/2020 - atualmente",
          description:
            "Contribuo para diversos projetos, combinando minha experiência de Grupo LAC, Factory of Idea e Intech CRM."+
            "Minha atuação abrange tanto o desenvolvimento front-end quanto back-end, com foco na manutenção e otimização de sistemas para garantir escalabilidade, desempenho e alta disponibilidade."+
            "Minhas responsabilidades incluem a implementação de novas funcionalidades, a resolução de problemas técnicos complexos e a aplicação de boas práticas como automação de testes, integração de APIs e deploys eficientes utilizando Docker e AWS.",
        },
        {
          company: "Grupo LAC",
          role: "Desenvolvedor Frontend",
          period: "Dez/2020 - Mar/2024",
          description:
            "Desenvolvi interfaces frontend e mantive microsserviços backend em Java/Spring Boot. Implementei novas funcionalidades e otimizei o código existente para melhorar o desempenho.",
        },
        {
          company: "Factory of Idea",
          role: "Desenvolvedor Freelance",
          period: "2018 - 2020",
          description:
            "Contribuí como desenvolvedor fullstack freelance para múltiplos projetos. Trabalhei com várias tecnologias, incluindo React, Ionic, Angular, Nextjs, React Native, Node.js e MongoDB.",
        },
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
        <div className="mt-8 space-y-8">
          {content[language].experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
