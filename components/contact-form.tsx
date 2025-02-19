"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "./language-provider"

export default function ContactForm() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const content = {
    en: {
      name: "Name",
      email: "Email",
      subject: "Subject (optional)",
      message: "Message",
      submit: "Send Message",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again.",
    },
    pt: {
      name: "Nome",
      email: "E-mail",
      subject: "Assunto (opcional)",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      success: "Mensagem enviada com sucesso!",
      error: "Ocorreu um erro. Por favor, tente novamente.",
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
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000)
    }, 1500)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {content[language].name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {content[language].email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {content[language].subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {content[language].message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        ></textarea>
      </div>
      <div>
        <motion.button
          type="submit"
          disabled={formStatus === "submitting"}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {formStatus === "submitting" ? "Sending..." : content[language].submit}
        </motion.button>
      </div>
      {formStatus === "success" && (
        <motion.p
          className="text-green-600 dark:text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {content[language].success}
        </motion.p>
      )}
      {formStatus === "error" && (
        <motion.p
          className="text-red-600 dark:text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {content[language].error}
        </motion.p>
      )}
    </motion.form>
  )
}
