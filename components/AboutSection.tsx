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
    description: "NestJS, Node.js, PHP, Python, Java, C/C++, MySQL, PostgreSQL, API REST, JWT, WebSockets",
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
    description: "Intelligence Artificielle, Cybersécurité, Architectures modernes, Applications temps réel",
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
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

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
            À Propos de moi
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
              <Card className="p-6 bg-gray-950/40 backdrop-blur-sm border border-white/5 text-center hover:border-violet-500/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="group p-6 bg-gray-950/40 backdrop-blur-sm border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-violet-500/10 to-cyan-500/10 group-hover:from-violet-500/20 group-hover:to-cyan-500/20 border border-white/5 transition-all">
                    <feature.icon className="w-6 h-6 text-violet-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Langues & Intérêts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="p-6 bg-gray-950/40 backdrop-blur-sm border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <h3 className="text-xl font-bold mb-5 text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-violet-400 animate-pulse" />
              Langues
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span className="text-gray-300">Français</span>
                  <span className="text-violet-300">Langue maternelle</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" 
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span className="text-gray-300">Anglais</span>
                  <span className="text-cyan-300">Intermédiaire</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" 
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gray-950/40 backdrop-blur-sm border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-5 text-white flex items-center gap-2">
                <Rocket className="w-5 h-5 text-cyan-400" />
                Centres d'intérêt
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["Développement logiciel", "Intelligence Artificielle", "Cybersécurité", "Technologies web", "Architecture logicielle"].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-xs rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 hover:text-white transition-all duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}
