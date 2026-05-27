"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="relative">
        {/* Animated rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-violet-500/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "120px", height: "120px" }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-cyan-500/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{ width: "120px", height: "120px" }}
        />

        {/* Center icon */}
        <motion.div
          className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center shadow-2xl"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Code2 className="w-12 h-12 text-white" />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="text-violet-400 font-medium">Chargement...</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
