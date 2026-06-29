"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { GitBranch, Star, GitFork, Activity } from "lucide-react"

const stats = [
  {
    icon: GitBranch,
    label: "Repositories",
    value: "25+",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Star,
    label: "Stars",
    value: "150+",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: GitFork,
    label: "Contributions",
    value: "500+",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Activity,
    label: "Commits",
    value: "1000+",
    color: "from-blue-500 to-cyan-500",
  },
]

// Données statiques pour éviter l'hydratation mismatch
const contributionData = Array.from({ length: 53 }, (_, weekIndex) =>
  Array.from({ length: 7 }, (_, dayIndex) => {
    // Utiliser une fonction déterministe basée sur les indices
    const seed = (weekIndex * 7 + dayIndex) * 0.1
    const intensity = Math.sin(seed) * 0.5 + 0.5 // Valeur entre 0 et 1
    
    if (intensity > 0.8) return "bg-violet-500"
    if (intensity > 0.6) return "bg-violet-600/70"
    if (intensity > 0.4) return "bg-violet-700/50"
    if (intensity > 0.2) return "bg-violet-800/30"
    return "bg-white/5"
  })
)

const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"]

function ContributionGraph() {
  return (
    <div className="flex flex-col gap-2">
      {/* Month Labels */}
      <div className="flex gap-[3.8px] pl-8 text-[10px] text-gray-500 font-sans select-none">
        {months.map((m, idx) => (
          <span key={m} style={{ marginLeft: idx === 0 ? "0px" : "34px" }}>
            {m}
          </span>
        ))}
      </div>
      
      <div className="flex items-start gap-2">
        {/* Day Labels */}
        <div className="flex flex-col justify-between text-[10px] text-gray-500 h-[88px] pr-1 font-sans select-none pt-0.5">
          <span>Lun</span>
          <span>Mer</span>
          <span>Ven</span>
        </div>
        
        {/* Grid Calendar */}
        <div className="flex-1 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 select-none">
          <div className="flex gap-[3.5px] min-w-[700px]">
            {contributionData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3.5px]">
                {week.map((bgColor, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-[9px] h-[9px] rounded-[1.5px] ${bgColor} transition-colors hover:brightness-125`}
                    whileHover={{ scale: 1.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (weekIndex * 7 + dayIndex) * 0.0005 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-end gap-1.5 text-[10px] text-gray-500 font-sans mt-2 pr-2 select-none">
        <span>Moins</span>
        <div className="w-[9px] h-[9px] rounded-[1.5px] bg-white/5" />
        <div className="w-[9px] h-[9px] rounded-[1.5px] bg-violet-800/30" />
        <div className="w-[9px] h-[9px] rounded-[1.5px] bg-violet-700/50" />
        <div className="w-[9px] h-[9px] rounded-[1.5px] bg-violet-600/70" />
        <div className="w-[9px] h-[9px] rounded-[1.5px] bg-violet-500" />
        <span>Plus</span>
      </div>
    </div>
  )
}

export default function GitHubStats() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Statistiques de mes contributions open source et projets personnels
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-br from-violet-500/5 to-cyan-500/5">
            <h3 className="text-xl font-semibold mb-6 text-white">Contributions</h3>
            <ContributionGraph />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
