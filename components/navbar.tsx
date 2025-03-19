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
  const [activeSection, setActiveSection] = useState<string>('home')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

  if (!mounted) return null

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-200",
        scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          elio<span className="text-foreground">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-muted-foreground">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href} className="relative">
              <Link
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
                {activeSection === (href === '/' ? 'home' : href.replace("#", "")) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 top-full h-0.5 w-full bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
          <ThemeToggle />
          <Button asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "md:hidden",
              scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-background"
            )}
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

