"use client"

import { FolderOpen } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/profil.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-[42px] leading-12.5 md:text-[72px] font-bold md:leading-21.25">
            Triananda Fajar
            Ramadhan
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-7 md:leading-7.5 max-w-xl">
            Full Stack Developer & UI/UX Designer passionate about creating innovative digital experiences
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">

            <Link
              href="#portfolio"
              className="
                bg-white flex flex-row items-center cursor-pointer border-[3px] border-black rounded-lg 
                py-5 px-8 md:py-5.5 md:px-15.5 text-base md:text-lg font-semibold 
                h-auto w-full sm:w-auto sm:min-w-60
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                active:scale-95
              "
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              View portfolio
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}