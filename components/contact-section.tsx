"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import ContactForm from "./contact-form"
import { useLanguage } from "./language-provider"

export default function ContactSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Get in Touch",
      description: "Feel free to reach out for collaborations or just a friendly hello",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      orContactMe: "Or contact me directly:",
    },
    pt: {
      title: "Entre em Contato",
      description: "Sinta-se à vontade para entrar em contato para colaborações ou apenas um olá amigável",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      orContactMe: "Ou entre em contato diretamente:",
    },
  }

  return (
    <section id="contact" className="container py-8 md:py-12 lg:py-24">
      <motion.div
        className="mx-auto flex max-w-[980px] flex-col items-start gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-gray-900 dark:text-white">
          {content[language].title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{content[language].description}</p>

        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {content[language].orContactMe}
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:ludrianowashington@gmail.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{content[language].email}: ludrianowashington@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ludrianowashington/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>{content[language].linkedin}: ludrianowashington</span>
              </a>
              <a
                href="https://github.com/ludrianowashington"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>{content[language].github}: ludrianowashington</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
