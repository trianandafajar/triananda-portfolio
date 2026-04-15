import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface PortfolioSectionProps {
  isPage?: boolean
}

const portfolioProjects = [
  {
    title: "CALENLY",
    description:
      "A web-based scheduling system that allows users to create, manage, and book appointments with a simple and intuitive interface.",
    image: "/images/calenly.png",
    demoUrl: "https://calenly.trianandafajar.com",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "KEYSTHETIX",
    description:
      "A modern e-commerce web application that enables users to browse products, manage carts, and complete purchases through integrated payment gateways.",
    image: "/images/keysthetic.png",
    demoUrl: "https://keysthetix.trianandafajar.com",
    stack: ["FastAPI", "React", "Tailwind"],
  },
  {
    title: "MENTORA",
    description:
      "A web-based learning platform designed to manage courses, users, and structured learning modules.",
    image: "/images/mentora.png",
    demoUrl: "https://mentora.trianandafajar.com",
    stack: ["NuxtJs", "Tailwind", "Flask"],
  },
  {
    title: "INVOICE GENERATOR",
    description:
      "A simple and efficient SaaS tool that allows users to generate professional invoices instantly.",
    image: "/images/invoice-generator.png",
    demoUrl: "https://invoice-generator.trianandafajar.com",
    stack: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    title: "CONTENNA",
    description:
      "A scalable headless CMS platform that enables developers to manage and deliver content via APIs.",
    image: "/images/contenna.png",
    demoUrl: "https://contenna.trianandafajar.com",
    stack: ["NextJs", "Laravel", "MySQL"],
  },
  {
    title: "METROAPI",
    description:
      "A robust backend system designed for high-performance API handling.",
    image: "/images/metroapp.png",
    demoUrl: "http://io.metrorelay.com",
    stack: ["NextJs", "Laravel Octane", "Imagick"],
  },
  {
    title: "DASHBOARD INVESTOR",
    description:
      "A modern dashboard interface designed to display investment data, analytics, and key metrics in a clean and structured layout.",
    image: "/images/dashboard.png",
    demoUrl: "#",
    stack: ["NextJs", "Zustand", "Leaflet"],
  },
  {
    title: "FLIX MOVIES",
    description:
      "A web platform for browsing movie collections and streaming content through YouTube integration with a simple and user-friendly interface.",
    image: "/images/flix-movies.png",
    demoUrl: "https://cable-defender.com/",
    stack: ["Laravel", "YouTube Integration"],
  },
]

export function PortfolioSection({ isPage = false }: PortfolioSectionProps) {
  const projects = isPage ? portfolioProjects : portfolioProjects.slice(0, 6)

  return (
    <section className="bg-white py-16 md:py-24" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 md:mb-16 ${isPage ? "text-center" : ""}`}>
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] text-black md:mb-8 md:text-4xl lg:text-6xl">
              Featured Projects
            </h2>

            <p
              className={`max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg ${
                isPage ? "mx-auto" : ""
              }`}
            >
              A selection of my recent work showcasing my expertise in
              full-stack development and scalable SaaS platforms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  group overflow-hidden rounded-3xl border-4 border-black bg-white
                  shadow-[4px_4px_0px_rgba(0,0,0,1)]
                  transition-transform duration-200 motion-reduce:transition-none
                  hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
                "
              >
                <div className="relative aspect-[6/3] w-full overflow-hidden bg-[#EDEDED]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 33vw, 360px"
                    className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-105"
                  />

                  <div
                    className="
                      absolute inset-0 flex items-center justify-center bg-black/40
                      opacity-0 transition-opacity duration-300 motion-reduce:transition-none
                      group-hover:opacity-100
                    "
                  >
                    <Button
                      asChild
                      className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        View Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="mb-2 text-xl font-bold text-[#0B0B0B] md:text-2xl">{project.title}</h3>

                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[#393939] md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs text-purple-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isPage && (
            <div className="mt-12 flex justify-center">
              <Link
                href="/projects"
                className="
                  flex items-center rounded-lg border-[3px] border-black bg-white
                  px-7 py-4 text-base font-semibold md:text-lg
                  transition-transform duration-200 ease-out motion-reduce:transition-none
                  hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  active:scale-95
                "
              >
                More Portfolio
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
