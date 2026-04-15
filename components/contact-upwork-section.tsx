import { ExternalLink } from "lucide-react"

export function ContactUpworkSection() {
  return (
    <section className="bg-black py-32" id="contact-upwork">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-6 text-4xl font-bold leading-[1.2] text-white md:text-6xl">
          Let's build your next product.
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
          If you're looking for a reliable full-stack developer to help build,
          scale, or improve your web application, feel free to reach out. I'm
          available for new projects on Upwork.
        </p>

        <a
          href="https://www.upwork.com/freelancers/trianandafajar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-black transition-colors duration-200 hover:bg-gray-200 motion-reduce:transition-none"
        >
          Hire Me on Upwork
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
