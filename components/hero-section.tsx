import { FolderOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RotatingText } from "@/components/rotating-text"

export function HeroSection() {
  return (
    <section className="container mx-auto mt-28 px-4 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border-4 border-black bg-[#FDB927] shadow-[8px_8px_0px_rgba(0,0,0,1)] md:max-w-[425px]">
            <Image
              src="/images/profil.png"
              alt="Triananda profile"
              fill
              priority
              sizes="(max-width: 768px) 320px, 425px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-2 space-y-7 md:order-1">
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1] tracking-tight">
            I'm Triananda, a Full Stack SaaS Developer
            <span className="mt-2 block text-[clamp(28px,3.2vw,32px)] font-semibold">
              specializing in <RotatingText />
            </span>
          </h1>

          <p className="max-w-xl text-[16px] font-medium leading-7 text-[#393939] md:text-[18px]">
            With 5+ years of experience and 60+ completed projects for clients
            across various countries.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 sm:flex-row">
            <Link
              href="#portfolio"
              className="
                flex items-center rounded-lg border-[3px] border-black bg-white
                px-7 py-4 text-base font-semibold
                transition-transform duration-200 ease-out motion-reduce:transition-none
                hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                active:scale-95
                md:text-lg
              "
            >
              <FolderOpen className="mr-2 h-5 w-5" />
              View portfolio
            </Link>

            <Link
              href="https://www.upwork.com/freelancers/trianandafajar"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center rounded-lg border-[3px] border-black bg-white
                px-7 py-4 text-base font-semibold
                transition-transform duration-200 ease-out motion-reduce:transition-none
                hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                active:scale-95
                md:text-lg
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
