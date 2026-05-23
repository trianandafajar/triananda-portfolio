import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      role: "Freelance Full-stack Developer",
      company: "Upwork",
      period: "March 2024 - Present",
      description:
        "Working as an independent full-stack developer on Upwork, building web applications and SaaS platforms for clients across various industries. Focused on delivering clean, production ready software from initial architecture through to deployment with clear communication and on time delivery throughout every engagement.",
    },
    {
      role: "Full-stack Developer",
      company: "Listu Labs",
      period: "December 2020 - January 2024",
      description:
        "Worked as a full-stack developer at Listu Labs, contributing to the design and development of web based applications. Responsible for building and maintaining frontend and backend systems, collaborating with the team to deliver functional, well structured software across multiple projects.",
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 max-w-3xl md:mb-20">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur">
            Experience
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-base text-indigo-100/90">
            My professional journey building SaaS platforms and scalable web
            applications across multiple companies.
          </p>
        </div>

        <div className="relative grid gap-10 md:grid-cols-2 md:gap-8">
          <div className="absolute bottom-0 left-[23px] top-2 w-px bg-gradient-to-b from-white/60 via-white/30 to-transparent md:hidden" />
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/40 to-transparent md:block" />

          {experiences.map((exp, index) => (
            <div key={exp.role} className="relative flex flex-col pl-16 md:pl-0">
              <div className="absolute left-0 top-0 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 md:relative md:mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-sm">
                  <Briefcase className="h-4 w-4" />
                </div>
              </div>

              <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {String(index + 1).padStart(2, "0")} · {exp.period}
                </p>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  {exp.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
