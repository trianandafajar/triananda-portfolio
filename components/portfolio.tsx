import { ArrowUpRight, ExternalLink } from "lucide-react"
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
    <section
      className={`bg-white ${isPage ? "pt-28 pb-16 md:pt-32 md:pb-24" : "py-16 md:py-24"}`}
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className={`mb-12 md:mb-16 ${isPage ? "mx-auto max-w-3xl text-center" : ""}`}>
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
              Portfolio
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg ${
                isPage ? "mx-auto" : ""
              }`}
            >
              A selection of my recent work showcasing my expertise in
              full-stack development and scalable SaaS platforms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md opacity-0 transition group-hover:opacity-100"
                  >
                    View Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!isPage && (
            <div className="mt-14 flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md md:text-lg"
              >
                More Portfolio
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
