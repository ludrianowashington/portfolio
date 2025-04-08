"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "./language-provider"

export default function ContactForm() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const content = {
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again.",
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "How can I help you?",
    },
    pt: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Ocorreu um erro. Por favor, tente novamente.",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu.email@exemplo.com",
      messagePlaceholder: "Como posso ajudar você?",
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Here you would typically send the form data to your backend or a service like EmailJS
    // For this example, we'll simulate an API call with a timeout
    setTimeout(() => {
      // Simulating a successful submission
      setFormStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
          {content[language].name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder={content[language].namePlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
          {content[language].email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder={content[language].emailPlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
          {content[language].message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder={content[language].messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <div>
        <motion.button
          type="submit"
          disabled={formStatus === "submitting"}
          className="button-primary w-full flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {formStatus === "submitting" ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              {content[language].sending}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              {content[language].submit}
            </>
          )}
        </motion.button>

        {formStatus === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-green-500 text-center"
          >
            {content[language].success}
          </motion.p>
        )}

        {formStatus === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-red-500 text-center"
          >
            {content[language].error}
          </motion.p>
        )}
      </div>
    </form>
  )
}
