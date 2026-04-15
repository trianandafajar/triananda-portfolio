import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Triananda Fajar Ramadhan | Full Stack SaaS Developer",
  description:
    "Portfolio of Triananda Fajar Ramadhan, Full Stack SaaS Developer focused on AI-powered web apps and scalable systems.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>
        <main className="min-h-screen bg-[#FFFFFF]">
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
