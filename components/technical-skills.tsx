"use client"

import { motion } from "framer-motion";
import { FaAws, FaDocker, FaGit, FaGithub, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAngular, SiCypress, SiIonic, SiJest, SiMongodb, SiPostgresql, SiSpring, SiTestinglibrary, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { useLanguage } from "./language-provider";

export default function TechnicalSkills() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Technical Skills",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps & Cloud",
      testing: "Testing & QA",
      versionControl: "Version Control & Workflow",
    },
    pt: {
      title: "Habilidades Técnicas",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bancos de Dados",
      devops: "DevOps & Cloud",
      testing: "Testes & QA",
      versionControl: "Controle de Versão & Fluxo de Trabalho",
    },
  }

  const skills = [
    {
      category: content[language].frontend,
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <RiNextjsFill /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "Ionic", icon: <SiIonic /> },
        { name: "React Native", icon: <TbBrandReactNative />}
      ],
    },
    {
      category: content[language].backend,
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "NestJS", icon: <SiTypescript /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpring /> },
      ],
    },
    {
      category: content[language].databases,
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      category: content[language].devops,
      items: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
      ],
    },
    {
      category: content[language].testing,
      items: [
        { name: "Jest", icon: <SiJest /> },
        { name: "Cypress", icon: <SiCypress /> },
        { name: "Testing Library", icon: <SiTestinglibrary /> },
      ],
    },
    {
      category: content[language].versionControl,
      items: [
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ]

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{skill.category}</h3>
              <div className="flex flex-wrap gap-4">
                {skill.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
