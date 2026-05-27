"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const timeline = [
  {
    id: "bit-formation",
    icon: GraduationCap,
    title: "Ingénieur en Génie Logiciel",
    organization: "Burkina Institute of Technology",
    period: "2021 - Présent",
    description: "Formation complète en développement logiciel, architectures modernes et gestion de projets. Spécialisation en développement web full stack et technologies modernes.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "freelance-dev",
    icon: Briefcase,
    title: "Freelance - Développeur Full Stack",
    organization: "Ouagadougou, Burkina Faso",
    period: "En cours",
    description: "Développement frontend et backend, intégration de bases de données, création d'interfaces modernes, maintenance et optimisation de plateformes web pour divers clients.",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "agent-recouvrement",
    icon: Award,
    title: "Agent de recouvrement",
    organization: "Intégrale Service & Recouvreur Optimal",
    period: "Oct 2025 - Mars 2026",
    description: "Gestion des dossiers clients, suivi administratif et traitement des créances avec rigueur et professionnalisme.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "stagiaire-moov",
    icon: Briefcase,
    title: "Stagiaire",
    organization: "Moov Africa",
    period: "Août 2025 - Oct 2025",
    description: "Mise à jour de bases de données, support web et assistance technique. Expérience enrichissante dans les télécommunications.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "technicien-maintenance",
    icon: Award,
    title: "Technicien maintenance",
    organization: "Rock Techno",
    period: "Août 2025 - Sept 2025",
    description: "Maintenance informatique, configuration réseau, diagnostic matériel et logiciel. Développement des compétences techniques.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "stagiaire-sonabel",
    icon: Briefcase,
    title: "Stagiaire",
    organization: "SONABEL",
    period: "Sept 2022 - Juillet 2024",
    description: "Maintenance et dépannage informatique, support utilisateurs, assistance réseau. Première expérience professionnelle significative.",
    color: "from-green-500 to-emerald-500",
  },
]

export default function ExperienceSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Parcours
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mon expérience et ma formation en développement logiciel
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-cyan-500 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="hidden md:block relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="flex items-start gap-4">
                      <div className={`md:hidden w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-sm text-violet-400 font-medium">{item.period}</span>
                        </div>
                        <p className="text-cyan-400 font-medium mb-3">{item.organization}</p>
                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
