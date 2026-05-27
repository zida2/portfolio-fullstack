"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Shield, Rocket, Database, Globe, Cpu, Wifi } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Code2,
    title: "Frontend Moderne",
    description: "HTML5, CSS3, JavaScript ES6+, React, Next.js, TailwindCSS, Responsive Design, UI/UX",
  },
  {
    icon: Database,
    title: "Backend & API",
    description: "PHP, Node.js, NestJS, MySQL, PostgreSQL, Architecture API REST, Authentification JWT",
  },
  {
    icon: Shield,
    title: "Outils & DevOps",
    description: "Git & GitHub, VS Code, Docker, XAMPP, Postman, Linux, CI/CD",
  },
  {
    icon: Wifi,
    title: "Maintenance & Réseau",
    description: "Diagnostic informatique, Configuration réseau, Support technique, Dépannage matériel",
  },
  {
    icon: Zap,
    title: "Performance & Animation",
    description: "Web Animation, Web Analytics, Optimisation des performances, Framer Motion",
  },
  {
    icon: Cpu,
    title: "Spécialisations",
    description: "Intelligence Artificielle, Cybersécurité, Architectures modernes, Temps réel",
  },
]

const stats = [
  { label: "Années d'expérience", value: "4+" },
  { label: "Projets réalisés", value: "10+" },
  { label: "Technologies maîtrisées", value: "20+" },
  { label: "Clients satisfaits", value: "5+" },
]

export default function AboutSection() {
  return (
    <section className="relative py-32 px-4" id="about">
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
            À Propos
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Développeur Full Stack passionné spécialisé dans la conception d'applications web modernes,
            systèmes backend et automatisation de solutions numériques. Capable de transformer une idée
            en produit fonctionnel avec une forte capacité d'adaptation et d'apprentissage rapide.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 cursor-pointer h-full">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 group-hover:from-violet-500/30 group-hover:to-cyan-500/30 transition-all">
                  <feature.icon className="w-6 h-6 text-violet-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-violet-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Langues & Intérêts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="p-6 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-violet-500/20">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-violet-400" />
              Langues
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Français</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-6 h-2 rounded-full bg-violet-500" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Anglais</span>
                <div className="flex gap-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-2 rounded-full bg-cyan-500" />
                  ))}
                  {[4,5].map(i => (
                    <div key={i} className="w-6 h-2 rounded-full bg-white/10" />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-violet-500/20">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <Rocket className="w-5 h-5 text-cyan-400" />
              Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Développement logiciel", "Intelligence Artificielle", "Cybersécurité", "Technologies web", "Architecture logicielle"].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 text-xs rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}
