import { ArrowUpRight, FolderOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RotatingText } from "@/components/rotating-text"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gray-200/80" />
        <div className="absolute top-20 left-8 h-24 w-24 rounded-[2rem] border border-indigo-100 bg-indigo-50/70" />
        <div className="absolute right-10 bottom-16 h-20 w-20 rounded-full border border-purple-100 bg-purple-50/80" />
      </div>

      <div className="container mx-auto mt-28 px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <Image
              src="/images/profil.png"
              alt="Triananda profile"
              width={425}
              height={425}
              priority
              fetchPriority="high"
              sizes="(max-width: 778px) 320px, 425px"
              className="h-auto w-[320px] bg-white object-cover md:w-[425px]"
            />
          </div>

          <div className="order-2 space-y-7 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              Available for new projects
            </span>

            <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.05] tracking-tight text-gray-900">
              I'm Triananda, a{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Full Stack SaaS Developer
              </span>
              <span className="mt-3 block text-[clamp(22px,2.8vw,30px)] font-semibold text-gray-700">
                specializing in <RotatingText />
              </span>
            </h1>

            <p className="max-w-xl text-[16px] leading-7 text-gray-600 md:text-[18px]">
              With 5+ years of experience and 60+ completed projects for clients
              across various countries.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 sm:flex-row">
              <Link
                href="#portfolio"
                className="inline-flex items-center rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md md:text-lg"
              >
                <FolderOpen className="mr-2 h-5 w-5" />
                View portfolio
              </Link>

              <Link
                href="https://www.upwork.com/freelancers/trianandafajar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-900 shadow-sm transition hover:border-gray-300 hover:shadow-md md:text-lg"
              >
                Hire me
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
