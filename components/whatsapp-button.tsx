"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5581988511896?text=Oi,%20vi%20o%20seu%20portf%C3%B3lio%20e%20tenho%20interesse%20em..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <MessageSquare size={24} />
      <span className="sr-only">Contact via WhatsApp</span>
    </motion.a>
  )
}
