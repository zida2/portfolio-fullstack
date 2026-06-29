"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

const getProjectCategory = (project: typeof siteConfig.projects[0]) => {
  const title = project.title.toLowerCase();
  const tech = project.technologies.map(t => t.toLowerCase());
  
  if (tech.includes("react native") || title.includes("mobile") || title.includes("chat")) return "Mobile";
  if (tech.includes("nestjs") || title.includes("api") || title.includes("microservices")) return "Backend";
  if (title.includes("3d") || title.includes("interactif") || title.includes("portfolio")) return "Frontend";
  if (tech.includes("next.js") || tech.includes("php") || title.includes("gestion") || title.includes("commerce")) return "Full Stack";
  return "Frontend";
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Tous")

  const filteredProjects = siteConfig.projects.filter(project => {
    if (filter === "Tous") return true;
    return getProjectCategory(project) === filter;
  });

  return (
    <section className="relative py-32 px-4 bg-black" id="projects">
      {/* Background decoration */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Projets Récents</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Mes Réalisations
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Une sélection de projets qui démontrent mes compétences en développement full stack et mobile
          </p>
        </motion.div>

        {/* Filtres de catégorie */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {["Tous", "Full Stack", "Frontend", "Backend", "Mobile"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-bold rounded-full border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/30"
                  : "bg-gray-950/40 border-white/5 text-gray-400 hover:border-violet-500/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille de projets avec animations de transition */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full flex flex-col bg-gray-950/40 backdrop-blur-sm border border-white/5 overflow-hidden hover:border-violet-500/20 hover:shadow-[0_20px_40px_rgba(139,92,246,0.1)] transition-all duration-500">
                  {/* Project Image/Icon */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/10" />
                    <motion.div
                      className="text-7xl relative z-10 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-3"
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      <span className="text-[10px] text-white font-semibold uppercase tracking-wider">{getProjectCategory(project)}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-5 text-sm leading-relaxed min-h-[3.5rem]">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-5 space-y-2">
                        {project.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-violet-500/5 text-violet-300 border border-violet-500/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="flex-1 group/btn shadow-md"
                        asChild
                      >
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 border-white/10 hover:border-violet-500"
                        asChild
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
