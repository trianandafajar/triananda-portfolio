"use client"

import { FolderOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const rotatingTexts = [
  "AI-powered web apps",
  "SaaS platforms",
  "scalable full-stack systems",
]

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingTexts.length)
        setVisible(true)
      }, 200)

    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4 py-16 md:py-20 mt-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-full max-w-[320px] md:max-w-[425px] aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <Image
              src="/images/profil.png"
              alt="Triananda profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-7 order-2 md:order-1">

          <h1 className="font-bold leading-[1] tracking-tight text-[clamp(36px,5vw,56px)]">

            I’m Triananda, a Full Stack SaaS Developer
            <span className="block mt-2 font-semibold text-[clamp(28px,3.2vw,32px)]">
              specializing in{" "}
              <span
                className={`inline-block transition-opacity duration-300 underline ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              >
                {rotatingTexts[index]}
              </span>
            </span>

          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-7 max-w-xl">
            With 5+ years of experience and 60+ completed projects for clients
            across various countries.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">

            <Link
              href="#portfolio"
              className="
                bg-white flex items-center border-[3px] border-black rounded-lg
                py-4 px-7 text-base md:text-lg font-semibold
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                active:scale-95
              "
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              View portfolio
            </Link>

            <Link
              href="https://www.upwork.com/freelancers/trianandafajar"
              target="_blank"
              className="
                bg-white flex items-center border-[3px] border-black rounded-lg
                py-4 px-7 text-base md:text-lg font-semibold
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                active:scale-95
              "
            >
              Hire me
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}