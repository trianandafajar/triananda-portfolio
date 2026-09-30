import { ArrowRight, FolderOpen, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { RotatingText } from "@/components/rotating-text";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f5f4]">
      <div className="mx-auto mt-24 max-w-7xl pb-12 pt-4 lg:mt-28 lg:pb-16">
        <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(340px,0.86fr)_minmax(0,1.84fr)] lg:gap-5">
          <article className="rounded-[32px] border border-[#e2e2e0] bg-[#fafaf9] p-[5px] shadow-[0_8px_30px_rgba(20,20,20,0.06)]">
            <div className="h-full rounded-[26px] border border-[#ececea] bg-white p-3">
              <div className="relative aspect-[1.05/1] overflow-hidden rounded-[23px] ">
                <Image
                  src="/images/profil_2.png"
                  alt="Triananda profile"
                  priority
                  fill
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 100vw, 34vw"
                  className="h-full w-full object-contain object-bottom"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-5">
                <div className="min-w-0">
                  <p className="truncate text-[clamp(1.25rem,2vw,1.8rem)] font-semibold leading-tight tracking-[-0.04em] text-[#171717]">
                    Triananda Fajar R.
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#707070] sm:text-base">
                    Full-Stack Developer 
                  </p>
                </div>
                <Link
                  href="https://www.upwork.com/freelancers/trianandafajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hire me"
                  title="Hire me"
                  className="group inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#ededeb] bg-white text-[#4a4a4a] transition-colors hover:border-[#171717] hover:bg-[#171717] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2"
                >
                  <Send className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </article>

          <div className="rounded-[32px] border border-[#e2e2e0] bg-[#fafaf9] p-[5px] shadow-[0_8px_30px_rgba(20,20,20,0.06)]">
            <div className="flex h-full min-w-0 flex-col justify-center rounded-[26px] border border-[#ececea] bg-white px-4 py-4 md:px-8 sm:py-4">
              <div className="space-y-2">
                <Link
                  href="https://www.upwork.com/freelancers/trianandafajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-[#ececea] bg-white py-1.5 pl-3.5 pr-1.5 text-sm font-medium text-[#303030] transition-colors hover:border-[#dadad7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2"
                >
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#45bd91]" />
                  Available for new projects
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ededeb] bg-[#fafaf9] text-[#303030] transition-colors group-hover:bg-[#f1f1ef]">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                  </span>
                </Link>

                <h1 className="max-w-[920px] text-[clamp(2.35rem,4.15vw,4rem)] font-medium leading-[1.08] tracking-[-0.045em] text-[#181818]">
                  Hi, I'm Triananda Fajar
                  <span className="block">
                    {" "}
                    I'm a{" "}
                    <span className="text-[#463D9D]">
                      Full-Stack Developer 
                    </span>
                  </span>
                  {/* <span className="mt-4 block text-[clamp(1.5rem,2.2vw,2rem)] font-semibold leading-[1.14] tracking-[-0.040em] text-[#272727]">
                  specializing in <RotatingText />
                </span> */}
                </h1>

                <p className="max-w-2xl text-base leading-7 text-[#4b4b4b] sm:text-lg sm:leading-8">
                  With 5+ years of experience and 60+ completed projects for
                  clients across various countries.
                </p>

                <div className="pt-1">
                  <Link
                    href="#portfolio"
                    className="group inline-flex min-h-13 items-center gap-5 rounded-[16px] bg-[#111111] py-2 pl-6 pr-2 text-base font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition-colors hover:bg-[#292929] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 sm:text-lg"
                  >
                    View portfolio
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[11px] border border-white/20 bg-white/[0.08]">
                      <FolderOpen className="h-[18px] w-[18px] transition-transform group-hover:scale-105" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
