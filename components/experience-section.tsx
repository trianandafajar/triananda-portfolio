import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Nine Dragon Labs",
      period: "July 2022 - January 2024",
    },
    {
      role: "Full-stack Developer",
      company: "Bratamedia",
      period: "May 2019 - February 2022",
    },
    {
      role: "Website Developer",
      company: "Nifty Educate",
      period: "April 2018 - February 2019",
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 max-w-3xl md:mb-20">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
            Experience
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Employee Experience
          </h2>
          <p className="mt-4 text-base text-gray-600">
            My professional journey building SaaS platforms and scalable web
            applications across multiple companies.
          </p>
        </div>

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="absolute bottom-0 left-[23px] top-2 w-px bg-gradient-to-b from-indigo-200 via-gray-200 to-transparent md:hidden" />
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent md:block" />

          {experiences.map((exp, index) => (
            <div key={exp.role} className="relative pl-16 md:pl-0">
              <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 md:static md:mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-sm">
                  <Briefcase className="h-4 w-4" />
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {String(index + 1).padStart(2, "0")} · {exp.period}
                </p>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  {exp.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
