"use client"

import { motion } from "framer-motion"
import { Code2, Heart, Github, Mail, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo & Nom */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-white text-sm">DESIRE ASSOMPTION WENDLASIDA ZIDA</p>
              <p className="text-violet-400 text-xs">Développeur Full Stack Web & Mobile</p>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 mb-2 flex items-center justify-center gap-2 text-sm">
            Développé avec <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> et Next.js
          </p>
          <p className="text-gray-600 text-xs">
            © {currentYear} DESIRE ZIDA — Tampouy, Ouagadougou, Burkina Faso
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
