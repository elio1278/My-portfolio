"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center mb-12 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1.5 w-24 bg-primary rounded-full"></span>
    </motion.h2>
  )
}

