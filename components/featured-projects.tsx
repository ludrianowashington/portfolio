"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "./language-provider"

export default function FeaturedProjects() {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "Some of my recent work",
      viewProject: "View Project",
      viewCode: "View Code",
      projects: [
        {
          title: "Coming Soon",
          description:
            "",
          image: "/placeholder.svg?height=600&width=800",
          technologies: [],
          // technologies: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
          liveUrl: "#",
          githubUrl: "#",
        },
        // {
        //   title: "Thryllo",
        //   description:
        //     "A wellness platform that helps users track their mental health, set goals, and access personalized content for improved well-being.",
        //   image: "/placeholder.svg?height=600&width=800",
        //   technologies: ["React", "Node.js", "MongoDB", "Docker"],
        //   liveUrl: "#",
        //   githubUrl: "#",
        // },
        // {
        //   title: "Dulcera",
        //   description:
        //     "Digital solutions for confectionery businesses, including order management, recipe calculation, and customer relationship tools.",
        //   image: "/placeholder.svg?height=600&width=800",
        //   technologies: ["React", "Spring Boot", "PostgreSQL", "AWS"],
        //   liveUrl: "#",
        //   githubUrl: "#",
        // },
      ],
    },
    pt: {
      title: "Projetos em Destaque",
      subtitle: "Alguns dos meus trabalhos recentes",
      viewProject: "Ver Projeto",
      viewCode: "Ver Código",
      projects: [
        {
          title: "Em breve",
          description:
            "",
          image: "/placeholder.svg?height=600&width=800",
          technologies: [],
          // technologies: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
          liveUrl: "#",
          githubUrl: "#",
        },
        // {
        //   title: "Thryllo",
        //   description:
        //     "Uma plataforma de bem-estar que ajuda os usuários a acompanhar sua saúde mental, definir metas e acessar conteúdo personalizado para melhorar o bem-estar.",
        //   image: "/placeholder.svg?height=600&width=800",
        //   technologies: ["React", "Node.js", "MongoDB", "Docker"],
        //   liveUrl: "#",
        //   githubUrl: "#",
        // },
        // {
        //   title: "Dulcera",
        //   description:
        //     "Soluções digitais para negócios de confeitaria, incluindo gerenciamento de pedidos, cálculo de receitas e ferramentas de relacionamento com o cliente.",
        //   image: "/placeholder.svg?height=600&width=800",
        //   technologies: ["React", "Spring Boot", "PostgreSQL", "AWS"],
        //   liveUrl: "#",
        //   githubUrl: "#",
        // },
      ],
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" ref={ref} className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
            <p className="text-xl text-primary font-medium">{content[language].subtitle}</p>
          </motion.div>

          <div className="space-y-24">
            {content[language].projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-video relative overflow-hidden rounded-xl border border-border/50 shadow-lg"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-primary py-2 px-4 flex items-center gap-2 text-sm"
                        >
                          <ExternalLink size={16} />
                          {content[language].viewProject}
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-secondary py-2 px-4 flex items-center gap-2 text-sm"
                        >
                          <Github size={16} />
                          {content[language].viewCode}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-3 gradient-text inline-block">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
