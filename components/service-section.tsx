import { Layers, Server, Brain, Code, Cpu } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "SaaS Development",
    description:
      "Production-grade SaaS platforms including multi-tenant architecture, billing systems, dashboards and cloud deployment.",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    icon: Server,
    title: "Multi-Tenant Systems",
    description:
      "Scalable multi-tenant systems with secure data isolation and optimized performance.",
    stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "AI integrations including chatbots, automation workflows and intelligent data processing.",
    stack: ["OpenAI API", "Python", "Node.js"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Fast and scalable web applications using modern frameworks and clean architecture.",
    stack: ["React", "Next.js", "Vue", "Tailwind"],
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description:
      "Backend systems optimized for scalability, performance and reliability.",
    stack: ["AWS", "Docker", "PostgreSQL"],
  },
]

function ServiceCard({
  icon: Icon,
  title,
  description,
  stack,
}: {
  icon: typeof Layers
  title: string
  description: string
  stack: string[]
}) {
  return (
    <div
      className="
        min-h-[330px] rounded-3xl border-4 border-black bg-white p-8
        shadow-[8px_8px_0px_rgba(0,0,0,1)]
        transition-transform duration-200 motion-reduce:transition-none
        hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]
      "
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
        <Icon size={22} className="text-purple-600" />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="mb-4 text-sm leading-relaxed text-gray-600">{description}</p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs text-purple-700"
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
    <section id="services" className="py-28">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">Services</h2>

        <p className="mx-auto max-w-xl text-xl text-gray-600">
          I help product teams ship faster with clean architecture, modern
          tooling and end-to-end delivery.
        </p>
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
