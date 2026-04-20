import { Layers, Server, Brain, Code, Cpu } from "lucide-react"

const services = [
  {
    icon: Layers,
    accent: "bg-indigo-50 text-indigo-600",
    title: "SaaS Development",
    description:
      "Production-grade SaaS platforms including multi-tenant architecture, billing systems, dashboards and cloud deployment.",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    icon: Server,
    accent: "bg-emerald-50 text-emerald-600",
    title: "Multi-Tenant Systems",
    description:
      "Scalable multi-tenant systems with secure data isolation and optimized performance.",
    stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
  },
  {
    icon: Brain,
    accent: "bg-purple-50 text-purple-600",
    title: "AI Integration",
    description:
      "AI integrations including chatbots, automation workflows and intelligent data processing.",
    stack: ["OpenAI API", "Python", "Node.js"],
  },
  {
    icon: Code,
    accent: "bg-sky-50 text-sky-600",
    title: "Web Development",
    description:
      "Fast and scalable web applications using modern frameworks and clean architecture.",
    stack: ["React", "Next.js", "Vue", "Tailwind"],
  },
  {
    icon: Cpu,
    accent: "bg-amber-50 text-amber-600",
    title: "System Architecture",
    description:
      "Backend systems optimized for scalability, performance and reliability.",
    stack: ["AWS", "Docker", "PostgreSQL"],
  },
]

function ServiceCard({
  icon: Icon,
  accent,
  title,
  description,
  stack,
}: {
  icon: typeof Layers
  accent: string
  title: string
  description: string
  stack: string[]
}) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg">
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${accent}`}
      >
        <Icon size={22} />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>

      <p className="mb-6 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f3f3f3] py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 via-violet-50/40 to-purple-50/60" />
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-200/35 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
            Services
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            What I can help you build
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            I help product teams ship faster with clean architecture, modern
            tooling and end-to-end delivery.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {services.slice(3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
