"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle, Send, Phone, User, BookOpen, AlertCircle, CheckCircle2 } from "lucide-react"
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
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simuler un appel API
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1500)
  }

  return (
    <section className="relative py-32 px-4 bg-black" id="contact">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Titre */}
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
            Vous avez un projet ou une opportunité ? Discutons-en ensemble !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Formulaire de Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="p-8 bg-gray-950/40 backdrop-blur-sm border border-white/5 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] to-cyan-500/[0.02] pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <Send className="w-5 h-5 text-violet-400" />
                  M'envoyer un message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nom */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Votre nom</label>
                      <div className="relative flex items-center">
                        <User className="absolute left-3 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          placeholder="Ex: Jean Dupont"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Votre email</label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          placeholder="Ex: jean.dupont@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Objet */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Objet</label>
                    <div className="relative flex items-center">
                      <BookOpen className="absolute left-3 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Ex: Opportunité de freelance / Recrutement"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Décrivez votre projet ou votre demande en quelques mots..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Feedback Status */}
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <span>Message envoyé avec succès ! Je reviendrai vers vous rapidement.</span>
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>Veuillez remplir tous les champs obligatoires (Nom, Email, Message).</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bouton de soumission */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-6 text-sm font-bold shadow-lg shadow-violet-500/10"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Réseaux et Infos Directes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.contact.map((method) => {
                const Icon = iconMap[method.label] ?? Mail
                return (
                  <a
                    key={method.label}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-5 bg-gray-950/40 backdrop-blur-sm border border-white/5 hover:border-violet-500/20 hover:shadow-[0_10px_20px_rgba(139,92,246,0.05)] transition-all duration-300 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} shadow-md`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <Send className="w-4 h-4 text-gray-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">{method.label}</h4>
                        <p className="text-white text-xs truncate font-medium">{method.value}</p>
                      </div>
                    </Card>
                  </a>
                )
              })}
            </div>

            {/* Carte de localisation et disponibilité physique */}
            <Card className="p-6 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 border border-violet-500/10 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Informations complémentaires</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Pour toute urgence ou discussion directe, vous pouvez m'appeler sur mes lignes locales au Burkina Faso :
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-violet-400" />
                    <span>+226 06 13 90 16 (Ligne 1)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+226 62 20 28 77 (Ligne 2)</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-500">
                Ouagadougou, Burkina Faso • Permis de conduire C • Mobilité internationale
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
