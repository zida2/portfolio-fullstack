"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

const navItems = [
  { label: "Accueil", href: "#" },
  { label: "À Propos", href: "#about" },
  { label: "Stack", href: "#tech" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "top-4 left-4 right-4 max-w-5xl mx-auto rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.1)] px-6" 
          : "top-0 left-0 right-0 bg-transparent px-4"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600 shadow-lg group-hover:shadow-violet-500/50 transition-shadow">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-white tracking-wider">DESIRE ZIDA</span>
              <span className="text-xs text-violet-400">Full Stack Dev</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-300 hover:text-white transition-colors relative group text-sm font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <Button size="sm" variant="glow" asChild>
              <a 
                href={siteConfig.links.cv} 
                download
                className="inline-flex items-center gap-2"
              >
                Télécharger CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border border-white/10 rounded-2xl mt-2 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2 text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" variant="glow" className="w-full" asChild>
                <a 
                  href={siteConfig.links.cv} 
                  download
                  className="inline-flex items-center justify-center gap-2"
                >
                  Télécharger CV
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
