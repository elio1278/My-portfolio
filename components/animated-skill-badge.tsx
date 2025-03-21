"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedSkillBadgeProps {
  name: string
  icon: string
  index: number
}

export default function AnimatedSkillBadge({ name, icon, index }: AnimatedSkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col items-center gap-2 p-4 rounded-full bg-card hover:bg-accent/10 transition-colors w-[140px] h-[140px] justify-center group hover:scale-105 border border-black dark:border-purple-500"
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-110">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain dark:invert"
        />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-muted-foreground text-center">{name}</span>
    </motion.div>
  )
}

