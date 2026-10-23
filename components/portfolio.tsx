import { ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PortfolioSectionProps {
  isPage?: boolean
}

const portfolioProjects = [
  {
    title: "WESTWOOD",
    description:
      "A responsive WordPress real estate website featuring property listings, smart filtering, valuation requests, and flexible content management.",
    image: "/images/projects/westwood.png?v=2",
    demoUrl: "https://westwood.yanafriyoko.com/",
    stack: ["WordPress", "Elementor", "Responsive"],
  },
  {
    title: "MERIDIAN",
    description:
      "A modern corporate energy website built with WordPress, featuring flexible layouts, customizable content, and easy content management.",
    image: "/images/projects/meridian.png?v=2",
    demoUrl: "https://meridian.yanafriyoko.com/",
    stack: ["WordPress", "Elementor", "ACF"],
  },
  {
    title: "CALENLY",
    description:
      "A web-based scheduling system that allows users to create, manage, and book appointments with a simple and intuitive interface.",
    image: "/images/projects/calenly.png",
    demoUrl: "https://calenly.trianandafajar.com",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "KEYSTHETIX",
    description:
      "A modern e-commerce web application that enables users to browse products, manage carts, and complete purchases through integrated payment gateways.",
    image: "/images/projects/keysthetix.webp",
    demoUrl: "https://keysthetix.trianandafajar.com",
    stack: ["FastAPI", "React", "Tailwind"],
  },
  {
    title: "MENTORA",
    description:
      "A web-based learning platform designed to manage courses, users, and structured learning modules.",
    image: "/images/projects/mentora.webp",
    demoUrl: "https://mentora.trianandafajar.com",
    stack: ["NuxtJs", "Tailwind", "Flask"],
  },
  {
    title: "INVOICE GENERATOR",
    description:
      "A simple and efficient SaaS tool that allows users to generate professional invoices instantly.",
    image: "/images/projects/invoice-generator.png",
    demoUrl: "https://invoice-generator.trianandafajar.com",
    stack: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    title: "CONTENNA",
    description:
      "A scalable headless CMS platform that enables developers to manage and deliver content via APIs.",
    image: "/images/projects/contenna.webp",
    demoUrl: "https://contenna.trianandafajar.com",
    stack: ["NextJs", "Laravel", "MySQL"],
  },
  {
    title: "METROAPI",
    description:
      "A robust backend system designed for high-performance API handling.",
    image: "/images/projects/metro.png",
    demoUrl: "http://io.metrorelay.com",
    stack: ["NextJs", "Laravel Octane", "Imagick"],
  },
  {
    title: "FITNESSAI",
    description:
      "Track every workout and meal in one place, built around your body's real progress.",
    image: "/images/projects/fitnessai.png",
    stack: ["NextJs", "Laravel", "AI Integration"],
  },
  {
    title: "EVENTBRO",
    description:
      "Helps people discover memorable events and gives organizers a cleaner way to publish, sell, and manage tickets.",
    image: "/images/projects/eventbro.webp",
    stack: ["NextJs", "Payload", "Stripe", "Supabase"],
  },
  {
    title: "HEALTHDATA",
    description:
      "Streamline patient registration, medical records, pharmacy, and billing in one integrated healthcare management platform.",
    image: "/images/projects/healthdata.webp",
    stack: ["Vue.js", "NuxtJs", "PostgreSQL"],
  },
  {
    title: "CHAT APP",
    description:
      "A simple place to chat with friends, family, and small teams, keeping every conversation clear, focused, and easy to access.",
    image: "/images/projects/chat-app.webp",
    stack: ["NextJs", "SaaS"],
  },
  {
    title: "DASHBOARD INVESTOR",
    description:
      "A modern dashboard interface designed to display investment data, analytics, and key metrics in a clean and structured layout.",
    image: "/images/dashboard.png",
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
      className={`relative bg-white ${isPage ? "pt-28 pb-16 md:pt-32 md:pb-24" : "py-16 md:py-24"}`}
      id="portfolio"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,247,237,0.92),rgba(255,255,255,0.5))]" />
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
                className="group flex flex-col overflow-hidden rounded-2xl border border-orange-100/80 bg-white/92 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.demoUrl && (
                    <>
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
                    </>
                  )}
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
