import { ArrowUpRight } from "lucide-react"

export function ContactUpworkSection() {
  return (
    <section
      id="contact-upwork"
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 py-28 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-indigo-200 ring-1 ring-white/20 backdrop-blur">
          Let’s work together
        </span>
        <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
          Let's build your next{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            product.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          If you're looking for a reliable full-stack developer to help build,
          scale, or improve your web application, feel free to reach out. I'm
          available for new projects on Upwork.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.upwork.com/freelancers/trianandafajar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100 hover:shadow-xl"
          >
            Hire Me on Upwork
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
