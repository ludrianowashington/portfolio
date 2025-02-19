"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5581988511896?text=Oi,%20vi%20o%20seu%20portf%C3%B3lio%20e%20tenho%20interesse%20em..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-9 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp size={24} />
      <span className="sr-only">Contact via WhatsApp</span>
    </motion.a>
  )
}
