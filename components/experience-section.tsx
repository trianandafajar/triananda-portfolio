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
    <section id="experience" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="mb-12 max-w-3xl md:mb-20">
          <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-5xl">
            Employee Experience
          </h2>

          <p className="text-sm text-gray-600 md:text-base">
            My professional journey building SaaS platforms and scalable web
            applications across multiple companies.
          </p>
        </div>

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-12">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-black/20 md:hidden" />
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-black/20 md:block" />

          {experiences.map((exp, index) => (
            <div key={exp.role} className="relative pl-16 md:pl-0">
              <div
                className="
                  absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center
                  rounded-full border-4 border-black bg-white font-bold
                  shadow-[4px_4px_0px_rgba(0,0,0,1)]
                  md:static md:mb-6
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mb-1 pt-2 text-2xl font-semibold leading-tight md:pt-0 md:text-xl">
                {exp.role}
              </h3>
              <p className="font-medium text-gray-700">{exp.company}</p>
              <p className="mt-1 text-sm text-gray-500">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
