import { Award } from "lucide-react"

type Stat = {
  value: string
  suffix: string
  decorativeSuffix?: boolean
  label: string
  description: string
  cardClass: string
  valueClass: string
  illustration?: boolean
}

const stats: Stat[] = [
  {
    value: "13",
    suffix: "+",
    label: "Jobs completed on Upwork",
    description:
      "Delivered SaaS, AI-powered, and full-stack projects with consistently positive client feedback.",
    cardClass: "col-span-2 bg-[#ede8f8] md:col-span-4",
    valueClass: "text-[#7c3aed]",
    illustration: true,
  },
  {
    value: "100",
    suffix: "%",
    label: "Job success",
    description: "A perfect success score across every contract.",
    cardClass: "col-span-1 bg-[#e8f7ef] md:col-span-2",
    valueClass: "text-[#7c3aed]",
  },
  {
    value: "Top",
    suffix: "★",
    decorativeSuffix: true,
    label: "Top rated",
    description: "Upwork Top Rated status, awarded to the top 10% of freelancers.",
    cardClass: "col-span-1 bg-[#e7eefb] md:col-span-2",
    valueClass: "text-[#7c3aed]",
  },
  {
    value: "665",
    suffix: "+",
    label: "Hours billed",
    description:
      "Reliable, ongoing collaboration with clients and measurable results.",
    cardClass: "col-span-1 bg-[#fff1ec] md:col-span-2",
    valueClass: "text-[#f4724f]",
  },
  {
    value: "4.7",
    suffix: "★",
    decorativeSuffix: true,
    label: "Client rating",
    description:
      "Average feedback score from clients on completed Upwork projects.",
    cardClass: "col-span-1 bg-[#fef7e0] md:col-span-2",
    valueClass: "text-[#e8821a]",
  },
]

function JobsIllustration() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 140 120"
      className="absolute right-6 top-1/2 hidden h-28 w-32 -translate-y-1/2 sm:block md:right-10 md:h-32 md:w-36"
    >
      <defs>
        <linearGradient id="sp-window" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7db4ff" />
          <stop offset="1" stopColor="#4a7fe8" />
        </linearGradient>
        <linearGradient id="sp-hex" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffa7b3" />
          <stop offset="1" stopColor="#e5546b" />
        </linearGradient>
        <filter id="sp-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#4a3a8f" floodOpacity="0.25" />
        </filter>
      </defs>

      <g transform="rotate(-6 70 60)" filter="url(#sp-shadow)">
        <rect x="42" y="14" width="86" height="68" rx="11" fill="url(#sp-window)" />
        <rect x="50" y="22" width="70" height="52" rx="6" fill="#fff" fillOpacity="0.28" />
        <circle cx="62" cy="34" r="4.5" fill="#fff" fillOpacity="0.8" />
        <path d="M50 74 L72 48 L88 64 L100 52 L120 74 Z" fill="#fff" fillOpacity="0.55" />
      </g>

      <g filter="url(#sp-shadow)">
        <polygon points="34,30 58,43 58,69 34,82 10,69 10,43" fill="url(#sp-hex)" />
        <rect x="26" y="48" width="16" height="16" rx="4" fill="#ffd36e" />
      </g>

      <circle cx="108" cy="98" r="8" fill="#c9b8ff" stroke="#7c3aed" strokeWidth="3" />
      <rect x="22" y="94" width="26" height="4" rx="2" fill="#f0a3b4" />
      <rect x="30" y="103" width="18" height="4" rx="2" fill="#f4c46a" />
    </svg>
  )
}

export function SocialProofSection() {
  return (
    <section id="social-proof" className="relative bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              <Award className="h-4 w-4" aria-hidden />
              Upwork Top Rated
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-800 md:text-4xl">
              Trusted results across{" "}
              <span className="text-indigo-600">
                AI-powered SaaS and full-stack delivery.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-500 md:text-lg">
              As an Upwork Top Rated freelancer: 13+ jobs completed, 665+ hours
              billed, and a 100% Job Success Score, backed by genuine client
              feedback.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-3xl p-6 md:p-8 ${stat.cardClass}`}
              >
                {stat.illustration && <JobsIllustration />}

                <div className={stat.illustration ? "sm:pr-36 md:pr-44" : ""}>
                  <p
                    className={`flex items-start font-bold leading-none tracking-tight text-5xl md:text-6xl ${stat.valueClass}`}
                  >
                    {stat.value}
                    <span
                      aria-hidden={stat.decorativeSuffix}
                      className="ml-1 mt-0.5 text-xl font-semibold md:text-2xl"
                    >
                      {stat.suffix}
                    </span>
                  </p>
                  <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-800 md:text-sm">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
