"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle, Send, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

const iconMap: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  WhatsApp: MessageCircle,
}

export default function ContactSection() {
  return (
    <section className="relative py-32 px-4" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Restons en Contact
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Contactez-moi pour discuter de vos besoins
          </p>
          {/* Numéros de téléphone */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-violet-400" />
              <span className="text-sm">+226 06 13 90 16</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">+226 62 20 28 77</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {siteConfig.contact.map((method, index) => {
            const Icon = iconMap[method.label] ?? Mail
            return (
              <motion.a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="group p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${method.color} shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                        {method.label}
                      </h3>
                      <p className="text-gray-400 text-sm truncate">{method.value}</p>
                    </div>
                    <Send className="w-5 h-5 text-gray-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </motion.a>
            )
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-violet-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Prêt à collaborer ?
            </h3>
            <p className="text-gray-300 mb-2 max-w-2xl mx-auto">
              Disponible immédiatement pour des projets freelance, des collaborations ou des opportunités professionnelles.
            </p>
            <p className="text-violet-400 text-sm mb-8">
              Tampouy, Ouagadougou, Burkina Faso — Permis C
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="glow" className="group" asChild>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Envoyer un email
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
