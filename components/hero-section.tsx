import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RotatingText } from "@/components/rotating-text";

const UPWORK_URL = "https://www.upwork.com/freelancers/trianandafajar";
const ROLES = ["a Full-Stack Developer", "an AI Developer", "a WordPress Developer"];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: [
            "radial-gradient(60% 55% at 28% 12%, rgba(129,140,248,0.28), transparent 70%)",
            "radial-gradient(45% 50% at 62% 24%, rgba(232,98,168,0.16), transparent 70%)",
            "radial-gradient(55% 45% at 42% 95%, rgba(167,139,250,0.2), transparent 70%)",
          ].join(", "),
        }}
      />

      <div className="mx-auto grid min-h-[44rem] max-w-7xl lg:min-h-svh items-center gap-12 px-4 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-20 lg:pt-28">
        <div className="space-y-6">
          <Link
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#4b43a8]"
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#45bd91]" />
            Available for new projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
          </Link>

          <h1 className="max-w-[580px] text-[clamp(2.25rem,3.6vw,3.25rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
            Hi, I'm Triananda Fajar
            <span className="block">
              <RotatingText
                words={ROLES}
                className="text-[#fbbf24]"
              />
            </span>
          </h1>

          <p className="max-w-lg text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            With 5+ years of experience and 13+ completed projects for clients
            across various countries. I specialize in scalable SaaS, AI-powered web apps, and custom WordPress development.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#portfolio"
              className="inline-flex items-center rounded-full border border-white px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#4b43a8]"
            >
              View portfolio
            </Link>
            <Link
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#171717] transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#4b43a8]"
            >
              Hire me
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:mx-0 lg:max-w-[440px] lg:justify-self-end">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-white/[0.035]"
          />
          <div className="relative aspect-square overflow-hidden rounded-full bg-[#e9e9e7] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/profil_2.png"
              alt="Triananda profile"
              priority
              fill
              fetchPriority="high"
              sizes="(max-width: 639px) 300px, (max-width: 1023px) 380px, 440px"
              className="scale-[1.15] object-cover"
            />
          </div>

          <div className="absolute -left-2 bottom-[10%] z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#4b43a8]/85 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur sm:-left-6">
            <Sparkles className="h-4 w-4 text-[#fbbf24]" aria-hidden />
            AI-Powered Solutions
          </div>
        </div>
      </div>
    </section>
  );
}
