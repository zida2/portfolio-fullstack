"use client"

import { motion } from "framer-motion"
import { Github, Download, ArrowRight, Code2, MapPin, Sparkles, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-20 bg-black bg-[linear-gradient(to_right,#8b5cf606_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf606_1px,transparent_1px)] bg-[size:40px_40px]">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] animate-pulse delay-1000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Overlay fading to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            
            {/* Badge disponibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(34,197,94,0.05)]">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Disponible immédiatement</span>
              </div>
            </motion.div>

            {/* Nom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-5 h-5 text-violet-400 animate-spin-slow" />
              <p className="text-violet-400 font-bold text-sm md:text-base tracking-widest uppercase">
                DESIRE ASSOMPTION W. ZIDA
              </p>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-violet-100 to-cyan-200 bg-clip-text text-transparent leading-none"
            >
              Full Stack <br/>
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Developer.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-base md:text-lg max-w-2xl mb-6 leading-relaxed"
            >
              {siteConfig.description}
            </motion.p>

            {/* Localisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-2.5 mb-8 text-gray-500 hover:text-violet-300 transition-colors"
            >
              <MapPin className="w-5 h-5 text-violet-400" />
              <span className="text-sm font-medium">Ouagadougou, Burkina Faso</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="lg" className="group shadow-lg shadow-violet-500/20" asChild>
                <a href="#projects" className="inline-flex items-center gap-2">
                  Voir mes projets
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="group" asChild>
                <a
                  href={siteConfig.links.cv}
                  download
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <Download className="w-5 h-5" />
                  CV PDF
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Editor Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl bg-gray-950/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(139,92,246,0.15)] overflow-hidden flex flex-col font-mono text-xs sm:text-sm select-none">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900/60 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 font-sans text-xs">
                  <Terminal className="w-3.5 h-3.5 text-violet-400" />
                  <span>DesireZida.ts — VS Code</span>
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Code Workspace */}
              <div className="p-5 flex-1 overflow-y-auto space-y-2 text-gray-300">
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">1</span>
                  <span><span className="text-violet-400 font-semibold">const</span> developer = &#123;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">2</span>
                  <span className="pl-4">name: <span className="text-cyan-300">"Desire Zida"</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">3</span>
                  <span className="pl-4">role: <span className="text-cyan-300">"Full Stack Web & Mobile"</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">4</span>
                  <span className="pl-4">location: <span className="text-cyan-300">"Ouagadougou, BF"</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">5</span>
                  <span className="pl-4">skills: [</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">6</span>
                  <span className="pl-8"><span className="text-cyan-300">"React/Next.js"</span>, <span className="text-cyan-300">"NestJS"</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">7</span>
                  <span className="pl-8"><span className="text-cyan-300">"PHP/MySQL"</span>, <span className="text-cyan-300">"Docker"</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">8</span>
                  <span className="pl-8"><span className="text-cyan-300">"Python/C/C++"</span></span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">9</span>
                  <span className="pl-4">],</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">10</span>
                  <span className="pl-4">availableForHire: <span className="text-amber-400">true</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-6 inline-block text-right pr-2">11</span>
                  <span>&#125;;</span>
                </div>
              </div>

              {/* Mock Terminal Output Panel */}
              <div className="bg-black/90 border-t border-white/5 p-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <span>Terminal</span>
                  <span className="text-white border-b border-violet-500 pb-0.5 px-0.5">Output</span>
                  <span>Console</span>
                </div>
                <div className="text-green-400 flex items-center gap-1.5">
                  <span className="text-violet-400">$</span>
                  <span>npm run start:dev</span>
                </div>
                <div className="text-gray-500 mt-1 animate-pulse">
                  &gt; Ready in 450ms. Listening on http://localhost:3000
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-9 border-2 border-gray-700 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-violet-400 rounded-full" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
