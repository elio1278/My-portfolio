"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  const headingVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const underlineVariants = {
    initial: { 
      scaleX: 0
    },
    animate: { 
      scaleX: [0, 1, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.3,
        times: [0, 0.4, 0.6, 1],
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="flex flex-col items-center relative space-y-2 mb-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold relative"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.h2>
      <motion.div
        className="h-1 bg-primary w-[120px] md:w-[160px] rounded-full origin-left"
        style={{ width: typeof children === 'string' ? `${children.length * 12}px` : undefined }}
        variants={underlineVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  )
}

