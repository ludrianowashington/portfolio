"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { FaAws, FaDocker, FaFigma, FaJava, FaNodeJs, FaReact } from "react-icons/fa"
import {
  SiAdobexd,
  SiCypress,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "./language-provider"

export default function AboutMe() {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "About Me",
      subtitle: "Developer, Entrepreneur, Problem Solver",
      bio: "I'm a passionate fullstack developer and digital entrepreneur with over 8 years of experience building scalable web applications and SaaS products. My expertise spans the entire development lifecycle, from concept and design to deployment and maintenance.",
      entrepreneurship: "As an entrepreneur, I've founded several digital products:",
      projects: [
        {
          name: "Pryntio",
          description: "A microSaaS for print shops, automating production workflows.",
        },
        {
          name: "Thryllo",
          description: "A well-being and motivation platform.",
        },
        {
          name: "Dulcera",
          description: "Digital solutions for confectionery businesses.",
        },
      ],
      technologies: "Technologies I work with:",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps",
      design: "Design",
      testing: "Testing",
    },
    pt: {
      title: "Sobre Mim",
      subtitle: "Desenvolvedor, Empreendedor, Solucionador de Problemas",
      bio: "Sou um desenvolvedor fullstack e empreendedor digital apaixonado com mais de 8 anos de experiência construindo aplicações web escaláveis e produtos SaaS. Minha expertise abrange todo o ciclo de desenvolvimento, desde o conceito e design até a implantação e manutenção.",
      entrepreneurship: "Como empreendedor, fundei diversos produtos digitais:",
      projects: [
        {
          name: "Pryntio",
          description: "Um microSaaS para gráficas, automatizando fluxos de produção.",
        },
        {
          name: "Thryllo",
          description: "Uma plataforma de bem-estar e motivação.",
        },
        {
          name: "Dulcera",
          description: "Soluções digitais para negócios de confeitaria.",
        },
      ],
      technologies: "Tecnologias com as quais trabalho:",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bancos de Dados",
      devops: "DevOps",
      design: "Design",
      testing: "Testes",
    },
  }

  const technologies = {
    frontend: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
    ],
    databases: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
    devops: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "AWS EC2", icon: <FaAws className="text-orange-400" /> },
    ],
    design: [
      { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
      { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500" /> },
    ],
    testing: [
      { name: "Jest", icon: <SiJest className="text-red-500" /> },
      { name: "Cypress", icon: <SiCypress className="text-green-400" /> },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
            <p className="text-xl text-primary font-medium">{content[language].subtitle}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">{content[language].bio}</p>

            <h3 className="text-xl font-semibold mb-4">{content[language].entrepreneurship}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {content[language].projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  variants={itemVariants}
                  className="bg-secondary/50 rounded-xl p-5 border border-border/50 card-hover"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">{project.name}</h4>
                  <p className="text-sm text-foreground/70">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">{content[language].technologies}</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-primary/80 mb-3">{content[language].frontend}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.frontend.map((tech) => (
                    <Badge key={tech.name} variant="outline" className="flex items-center gap-1 py-1.5 px-3">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary/80 mb-3">{content[language].backend}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.backend.map((tech) => (
                    <Badge key={tech.name} variant="outline" className="flex items-center gap-1 py-1.5 px-3">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary/80 mb-3">{content[language].databases}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.databases.map((tech) => (
                    <Badge key={tech.name} variant="outline" className="flex items-center gap-1 py-1.5 px-3">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary/80 mb-3">{content[language].devops}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.devops.map((tech) => (
                    <Badge key={tech.name} variant="outline" className="flex items-center gap-1 py-1.5 px-3">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary/80 mb-3">{content[language].design}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.design.map((tech) => (
                    <Badge key={tech.name} variant="outline" className="flex items-center gap-1 py-1.5 px-3">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary/80 mb-3">{content[language].testing}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.testing.map((tech) => (
                    <Badge key={tech.name} variant="outline" className="flex items-center gap-1 py-1.5 px-3">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
