import { Quote } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Triananda is a conscientious contractor and very good at keeping me up to date on his progress. He produces high-quality work and follows instruction well. He was a pleasure to work with.",
      name: "Antonia S",
      role: "Founder",
      initials: "AS",
      tint: "bg-indigo-100 text-indigo-700",
    },
    {
      quote:
        "Super easy to work with clear task, fast replies, and good vibes all around. The whole process was efficient and enjoyable, hope we can collab again sometime.",
      name: "Kezia Regina",
      role: "Project Manager",
      initials: "KR",
      tint: "bg-rose-100 text-rose-700",
    },
    {
      quote:
        "Triananda was great to work with. He quickly fixed bugs in our SaaS app built with Vue.js and Node.js. Super clear communication, fast delivery, and he really understands JavaScript inside out. Definitely recommend!",
      name: "Dimas Ahmad",
      role: "Web Developer",
      initials: "DA",
      tint: "bg-emerald-100 text-emerald-700",
    },
    {
      quote:
        "Always great working with him again! Nanda fixed the CRM bugs fast, improved the UI, and kept everything clean and smooth. Definitely recommend him for any JavaScript or web app project!",
      name: "Adri Andika",
      role: "UI UX Designer",
      initials: "AA",
      tint: "bg-amber-100 text-amber-700",
    },
  ]

  return (
    <section
      id="testimonial"
      className="relative overflow-hidden py-16 md:py-24 bg-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50/40 to-white" />
      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center md:mb-16">
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Trusted by clients & collaborators
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
              Feedback from clients and collaborators I’ve worked with on
              various web development projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-indigo-100" />

                <p className="relative z-10 mb-6 leading-relaxed text-gray-700">
                  “{item.quote}”
                </p>

                <div className="relative z-10 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold ${item.tint}`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
