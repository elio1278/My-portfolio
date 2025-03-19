"use client"  // Add this at the top since we're using client-side features

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import AnimatedText from "@/components/animated-text"
import SectionHeading from "@/components/section-heading"
import AnimatedSkillBadge from "@/components/animated-skill-badge"
import AnimatedProjectCard from "@/components/animated-project-card"
import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/scroll-to-top"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  const skills = [
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg"
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg"
    },
    {
      name: "React",
      icon: "/icons/react.svg"
    },
    {
      name: "Firebase",
      icon: "/icons/firebase.svg"
    },
    {
      name: "Next.js",
      icon: "/icons/nextdotjs.svg"
    },
    {
      name: "Node.js",
      icon: "/icons/nodedotjs.svg"
    },
    {
      name: "Express",
      icon: "/icons/express.svg"
    },
    {
      name: "Kali Linux",
      icon: "/icons/kalilinux.svg"
    },
    {
      name: "Python",
      icon: "/icons/python.svg"
    },
    {
      name: "C++",
      icon: "/icons/cplusplus.svg"
    },
    {
      name: "C",
      icon: "/icons/c.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwindcss.svg"
    },
    {
      name: "Git",
      icon: "/icons/git.svg"
    },
    {
      name: "Redux",
      icon: "/icons/redux.svg"
    }
  ]

  const projects = [
    {
      title: "ShadowVault (Web Exploitation CTF Challenge)",
      description: "A web-based challenge where players interact with a file management system. The goal is to log in, obtain a token, gain elevated privileges, upload a file, and later retrieve it to uncover a hidden flag.",
      technologies: ["JSON Web Tokens (JWT)", "MongoDB", "Express.js","Node.js"],
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWxBttosbJ6g00eg9WBHKxJ2dSJJC1q1pKA&s",
      githubUrl: "https://github.com/shashwath1278/ShadowVault---Web-Exploitation-CTF-Challenge",
    },
    {
      title: "Kardia",
      description: "An advanced full-stack application that assesses heart risk based on ECG data and user-provided parameters.",
      technologies: ["React", "Firebase", "Tailwind CSS","Flask","Python"],
      imageUrl: "https://w7.pngwing.com/pngs/59/456/png-transparent-red-heart-illustration-heart-rate-red-love-pulse-heart-of-love-red-broken-line-love-text-heart.png",
      githubUrl: "https://github.com/shashwath1278/Heart-risk-score-wHACKiest2024",
    },
    {
      title: "ReactMate",
      description: "React Chess Master is a fully functional chess game built using React.js and chess.js.",
      technologies: ["React.js", "RxJS", "Chess.js","TypeScript"],
      imageUrl: "https://media.istockphoto.com/id/468721588/photo/horses-confronting.jpg?s=612x612&w=0&k=20&c=IRn3x2JqzgA8djGtPd-Xh2d_4ReS3xNT0p3RQvGLqE0=",
      githubUrl: "https://github.com/shashwath1278/ReactMate",
      liveUrl: "https://react-mate.vercel.app/",
    },
  ]

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const arrowVariants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      y: [0, 10, 0],
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative bg-gradient-to-b from-background to-muted pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" style={{ zIndex: 1 }}></div>
        <div className="container px-4 md:px-6 relative" style={{ zIndex: 2 }}>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary mb-4 shadow-lg">
              <Image
                src="https://avatars.githubusercontent.com/u/171487887?v=4"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
            <AnimatedText 
              text="Hi, I'm    Shashwath    Prabhu  (elio)" 
              className="text-4xl md:text-6xl font-bold tracking-normal text-foreground" 
            />
            <AnimatedText
              text="On a journey through Cybersecurity and Development"
              className="text-xl md:text-2xl text-gray-600 dark:text-muted-foreground"
            />
            <div className="flex gap-4 mt-6">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="https://github.com/elio1278" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:drs.prabhu2018@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              
            </div>
            <motion.button
              onClick={scrollToAbout}
              className="mt-16 mb-4 cursor-pointer text-foreground dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
              variants={arrowVariants}
              initial="initial"
              animate="animate"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6">
          <SectionHeading >About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto group">
              {/* Gradient border animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-spin-slow"></div>
              {/* Inner container with image */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background">
                <Image 
                  src="/171487887.png" 
                  alt="About me image" 
                  fill 
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-gray-700 dark:text-muted-foreground">
                Hi, I'm Shashwath, a passionate ISE student with interests in cybersecurity, web development, and ethical hacking. 
                I'm also a FIDE-rated chess player and a tech enthusiast.
              </p>
              <p className="text-gray-700 dark:text-muted-foreground">
                I'm currently honing my skills in Next.js, DSA and Kali Linux, aiming to build a career in cybersecurity. 
                I am quite interested in Development and love to make new websites and explore about more libraries and frameworks to work on.
              </p>
              <p className="text-gray-700 dark:text-muted-foreground">
                I like going to hackathons and CTF events throughout Bangalore. I also love cubing, playing guitar and keyboard as a hobby.
              </p>
              <p className="text-gray-700 dark:text-muted-foreground">
                I am currently working on a few projects on dev and cyber security, these projects are posted on my github account. 
                If you are interested we can connect, innovate and create together!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 md:py-32 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6">
          <SectionHeading>Skills & Technologies</SectionHeading>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-muted to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-muted to-transparent z-10" />
            <div className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/50 hover:scrollbar-thumb-primary/80 pb-4">
              <div className="flex gap-8 min-w-max px-8 py-4">
                {skills.map((skill, index) => (
                  <AnimatedSkillBadge 
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6">
          <SectionHeading>Get In Touch</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
              <p className="text-gray-700 dark:text-muted-foreground">
                I'm currently open to project opportunities and collaborations. Feel free to reach out if you have a
                project in mind or just want to connect!
              </p>
              <div className="flex items-center gap-2 text-gray-700 dark:text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>drs.prabhu2018@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Link href="https://github.com/shashwath1278" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary/10 hover:text-primary hover:border-primary"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/shashwath-prabhu-1b144827a/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary/10 hover:text-primary hover:border-primary"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} elio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  )
}

