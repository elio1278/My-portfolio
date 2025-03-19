"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    // Explicitly check for home section
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const isAtTop = scrollPosition < windowHeight * 0.3 // 30% of viewport height

      if (isAtTop) {
        setActiveSection('home')
      } else {
        const sections = document.querySelectorAll("section[id]")
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop
          const sectionHeight = section.clientHeight
          if (
            scrollPosition >= sectionTop - windowHeight / 2 &&
            scrollPosition < sectionTop + sectionHeight - windowHeight / 2
          ) {
            setActiveSection(section.id)
          }
        })
      }
    }

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveSection('home')
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          elio<span className="text-foreground">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "nav-link text-sm font-medium transition-colors hover:text-primary",
                activeSection === (href === '/' ? 'home' : href.replace("#", "")) 
                  ? "active text-primary" 
                  : "text-muted-foreground"
              )}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <nav className="container px-4 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map(({ label, href }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={href}
                    className={cn(
                      "block py-2 text-muted-foreground hover:text-foreground transition-colors",
                      activeSection === href.replace("#", "") ? "active text-primary" : "text-muted-foreground"
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
                      closeMenu()
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
              >
                <Button className="w-full mt-2" asChild>
                  <Link href="#contact" onClick={closeMenu}>
                    Contact Me
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

