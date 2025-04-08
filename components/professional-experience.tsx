"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink, MapPin } from "lucide-react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "./language-provider"

export default function ProfessionalExperience() {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "Professional Experience",
      experiences: [
        {
          company: "Grupo LAC",
          logo: "/placeholder.svg?height=80&width=80",
          role: "Fullstack Developer",
          period: "2020 - Present",
          location: "Recife, Brazil",
          type: "Full-time",
          website: "https://grupolac.com",
          description:
            "Leading the development of scalable web applications and microservices. Implementing new features and optimizing existing codebase for improved performance.",
          responsibilities: [
            "Developed and maintained frontend interfaces using React and Next.js",
            "Built and optimized backend microservices with Java/Spring Boot",
            "Implemented CI/CD pipelines for automated testing and deployment",
            "Collaborated with cross-functional teams to deliver high-quality software solutions",
          ],
          technologies: ["React", "Next.js", "Java", "Spring Boot", "PostgreSQL", "AWS"],
        },
        {
          company: "Factory of Idea",
          logo: "/placeholder.svg?height=80&width=80",
          role: "Freelance Fullstack Developer",
          period: "2018 - 2020",
          location: "Remote",
          type: "Freelance",
          website: "https://factoryofidea.com",
          description:
            "Contributed as a freelance fullstack developer for multiple projects. Worked with various technologies including React, Node.js, and MongoDB.",
          responsibilities: [
            "Designed and developed custom web applications for clients across different industries",
            "Created responsive and intuitive user interfaces with React",
            "Built RESTful APIs using Node.js and Express",
            "Implemented database solutions with MongoDB and PostgreSQL",
          ],
          technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
        },
        {
          company: "Intech CRM",
          logo: "/placeholder.svg?height=80&width=80",
          role: "Backend Developer",
          period: "2016 - 2018",
          location: "Recife, Brazil",
          type: "Full-time",
          website: "https://intechcrm.com",
          description:
            "Maintained and optimized a CRM platform for scalability and performance. Implemented new features and resolved complex technical issues.",
          responsibilities: [
            "Developed and maintained backend services using Java and Spring Boot",
            "Optimized database queries and improved application performance",
            "Implemented new features based on customer requirements",
            "Collaborated with the support team to resolve technical issues",
          ],
          technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
        },
      ],
    },
    pt: {
      title: "Experiência Profissional",
      experiences: [
        {
          company: "Grupo LAC",
          logo: "/placeholder.svg?height=80&width=80",
          role: "Desenvolvedor Fullstack",
          period: "2020 - Presente",
          location: "Recife, Brasil",
          type: "Tempo integral",
          website: "https://grupolac.com",
          description:
            "Liderando o desenvolvimento de aplicações web escaláveis e microsserviços. Implementando novas funcionalidades e otimizando o código existente para melhorar o desempenho.",
          responsibilities: [
            "Desenvolvi e mantive interfaces frontend usando React e Next.js",
            "Construí e otimizei microsserviços backend com Java/Spring Boot",
            "Implementei pipelines de CI/CD para testes e implantação automatizados",
            "Colaborei com equipes multifuncionais para entregar soluções de software de alta qualidade",
          ],
          technologies: ["React", "Next.js", "Java", "Spring Boot", "PostgreSQL", "AWS"],
        },
        {
          company: "Factory of Idea",
          logo: "/placeholder.svg?height=80&width=80",
          role: "Desenvolvedor Fullstack Freelance",
          period: "2018 - 2020",
          location: "Remoto",
          type: "Freelance",
          website: "https://factoryofidea.com",
          description:
            "Contribuí como desenvolvedor fullstack freelance para múltiplos projetos. Trabalhei com várias tecnologias, incluindo React, Node.js e MongoDB.",
          responsibilities: [
            "Projetei e desenvolvi aplicações web personalizadas para clientes de diferentes setores",
            "Criei interfaces de usuário responsivas e intuitivas com React",
            "Construí APIs RESTful usando Node.js e Express",
            "Implementei soluções de banco de dados com MongoDB e PostgreSQL",
          ],
          technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
        },
        {
          company: "Intech CRM",
          logo: "/placeholder.svg?height=80&width=80",
          role: "Desenvolvedor Backend",
          period: "2016 - 2018",
          location: "Recife, Brasil",
          type: "Tempo integral",
          website: "https://intechcrm.com",
          description:
            "Mantive e otimizei uma plataforma CRM para escalabilidade e desempenho. Implementei novas funcionalidades e resolvi problemas técnicos complexos.",
          responsibilities: [
            "Desenvolvi e mantive serviços backend usando Java e Spring Boot",
            "Otimizei consultas de banco de dados e melhorei o desempenho da aplicação",
            "Implementei novas funcionalidades com base nos requisitos dos clientes",
            "Colaborei com a equipe de suporte para resolver problemas técnicos",
          ],
          technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
        },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" ref={ref} className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
          </motion.div>

          <div className="space-y-12">
            {content[language].experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative border rounded-xl p-6 bg-secondary/10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Timeline connector */}
                {index < content[language].experiences.length - 1 && (
                  <div className="absolute left-10 top-[7.5rem] bottom-[-3rem] w-0.5 bg-primary/30"></div>
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company logo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-primary/30 bg-background/80">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={exp.company}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                        <p className="text-lg font-medium">{exp.role}</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 text-foreground/80">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">
                        {language === "en" ? "Key Responsibilities:" : "Principais Responsabilidades:"}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {language === "en" ? "Visit website" : "Visitar site"}
                    </a>
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
