import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GlobalAnimations from '@/components/GlobalAnimations'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shashwath | Cy/Dev Enthusiast",
  description: "Portfolio website showcasing my projects and skills as a full stack developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <GlobalAnimations />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'