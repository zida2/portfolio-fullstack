"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const techStack = {
  "Frontend Actuel": [
    { name: "HTML5", color: "from-orange-500 to-red-500" },
    { name: "CSS3", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript ES6+", color: "from-yellow-500 to-orange-500" },
    { name: "React (bases)", color: "from-cyan-500 to-blue-500" },
    { name: "TailwindCSS", color: "from-cyan-400 to-blue-500" },
    { name: "Responsive Design", color: "from-purple-500 to-violet-600" },
    { name: "UI/UX Integration", color: "from-pink-500 to-rose-500" },
    { name: "Web Animation", color: "from-green-500 to-emerald-500" },
  ],
  "Frontend Moderne": [
    { name: "React 18", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js 14", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", color: "from-blue-600 to-blue-700" },
    { name: "React Native", color: "from-blue-400 to-cyan-400" },
    { name: "Vite", color: "from-purple-500 to-violet-600" },
    { name: "shadcn/ui", color: "from-gray-800 to-gray-900" },
    { name: "Framer Motion", color: "from-pink-500 to-rose-500" },
  ],
  "Backend Actuel": [
    { name: "PHP", color: "from-indigo-600 to-purple-600" },
    { name: "MySQL", color: "from-blue-700 to-indigo-700" },
    { name: "Architecture API REST", color: "from-green-600 to-emerald-600" },
    { name: "Gestion Authentification", color: "from-purple-600 to-pink-600" },
    { name: "Traitement de données", color: "from-orange-500 to-amber-600" },
  ],
  "Backend Moderne": [
    { name: "NestJS", color: "from-red-600 to-pink-600" },
    { name: "Node.js", color: "from-green-600 to-emerald-600" },
    { name: "Prisma ORM", color: "from-indigo-600 to-purple-600" },
    { name: "Socket.io", color: "from-gray-900 to-black" },
    { name: "JWT Advanced", color: "from-purple-600 to-pink-600" },
    { name: "PostgreSQL", color: "from-blue-700 to-indigo-700" },
  ],
  "Outils & Environnement": [
    { name: "Git & GitHub", color: "from-gray-700 to-gray-900" },
    { name: "VS Code", color: "from-blue-500 to-cyan-500" },
    { name: "Docker", color: "from-blue-500 to-cyan-500" },
    { name: "XAMPP", color: "from-orange-500 to-red-500" },
    { name: "Postman", color: "from-orange-600 to-red-600" },
    { name: "Linux", color: "from-gray-800 to-black" },
  ],
  "Maintenance & Réseau": [
    { name: "Diagnostic informatique", color: "from-green-600 to-emerald-600" },
    { name: "Maintenance systèmes", color: "from-blue-600 to-indigo-600" },
    { name: "Configuration réseau", color: "from-purple-600 to-violet-600" },
    { name: "Support technique", color: "from-red-600 to-rose-600" },
    { name: "Web Analytics", color: "from-yellow-500 to-orange-500" },
  ],
}

export default function TechStackSection() {
  return (
    <section className="relative py-32 px-4" id="tech">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Stack Technique
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des applications modernes et performantes
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-violet-300">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="group p-4 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {tech.name.charAt(0)}
                        </div>
                        <p className="font-medium text-white group-hover:text-violet-300 transition-colors">
                          {tech.name}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
