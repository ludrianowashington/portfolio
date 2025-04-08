"use client"

import { motion } from "framer-motion"
import { FileText, Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import { useInView } from "react-intersection-observer"
import ContactForm from "./contact-form"
import { useLanguage } from "./language-provider"

export default function ContactSection() {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Let's work together on your next project",
      description:
        "I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative thinking or technical expertise, feel free to reach out.",
      contactInfo: "Contact Information",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Download CV",
      whatsapp: "WhatsApp",
    },
    pt: {
      title: "Entre em Contato",
      subtitle: "Vamos trabalhar juntos no seu próximo projeto",
      description:
        "Estou atualmente disponível para trabalhos freelance e oportunidades em tempo integral. Se você tem um projeto que precisa de pensamento criativo ou expertise técnica, sinta-se à vontade para entrar em contato.",
      contactInfo: "Informações de Contato",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Baixar CV",
      whatsapp: "WhatsApp",
    },
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
    <section id="contact" ref={ref} className="section-padding bg-background">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div variants={itemVariants}>
              <p className="text-foreground/80 mb-8 leading-relaxed">{content[language].description}</p>

              <h3 className="text-xl font-semibold mb-6">{content[language].contactInfo}</h3>

              <div className="space-y-4">
                <a
                  href="mailto:ludrianowashington@gmail.com"
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-2 -ml-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>ludrianowashington@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ludrianowashington/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-2 -ml-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/ludrianowashington</span>
                </a>

                <a
                  href="https://github.com/ludrianowashington"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-2 -ml-2"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/ludrianowashington</span>
                </a>

                <a
                  href="https://wa.me/5581988511896?text=Oi,%20vi%20o%20seu%20portf%C3%B3lio%20e%20tenho%20interesse%20em..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-2 -ml-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>+55 81 98851-1896</span>
                </a>
              </div>

              <div className="mt-8">
                <a href="#" className="button-secondary flex items-center gap-2 w-fit">
                  <FileText className="w-4 h-4" />
                  {content[language].resume}
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
