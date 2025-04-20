"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
}

export default function ParallaxSection({ children }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section ref={ref} className="w-full relative overflow-hidden bg-white">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/30 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-pink-200/20 blur-3xl" />
        </div>
      </motion.div>

      <div className="relative z-10">{children}</div>
    </section>
  )
}
