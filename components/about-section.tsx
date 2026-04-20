import { Sparkles, Rocket, Cpu } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    accent: "from-indigo-500 to-blue-500",
    tint: "bg-indigo-50 text-indigo-600",
    title: "5+ years building modern web applications",
    description:
      "I design and develop scalable web applications using modern frameworks and clean architecture for long-term maintainability.",
  },
  {
    icon: Rocket,
    accent: "from-pink-500 to-rose-500",
    tint: "bg-rose-50 text-rose-600",
    title: "60+ completed SaaS & web projects",
    description:
      "I’ve delivered SaaS platforms, CRM systems, internal tools, and e-commerce applications for startups and growing businesses.",
  },
  {
    icon: Cpu,
    accent: "from-amber-500 to-orange-500",
    tint: "bg-amber-50 text-amber-600",
    title: "SaaS architecture & AI integrations",
    description:
      "Experienced in multi-tenant systems, API integrations, AI automation, and cloud deployments on AWS or Vercel.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
            About me
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Crafting dependable products with clean code
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, accent, tint, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
              />
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${tint}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
