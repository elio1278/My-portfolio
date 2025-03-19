"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AnimatedProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  index: number
}

export default function AnimatedProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
}: AnimatedProjectCardProps) {
  return (
    <motion.div 
      className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-black dark:border-purple-500"
    >
      <div className="aspect-video relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-center h-full gap-4">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="sm"
                className="border-2 border-white/70 hover:border-white bg-transparent text-white hover:bg-white/10"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </Link>
            {liveUrl && (
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-2 border-white/70 hover:border-white bg-transparent text-white hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

