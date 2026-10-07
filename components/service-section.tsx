"use client"

import { useState } from "react"
import { Layers, Server, Brain, Code, Cpu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Layers,
    iconClass: "text-indigo-600",
    title: "SaaS Development",
    description:
      "Production-grade SaaS platforms including multi-tenant architecture, billing systems, dashboards and cloud deployment.",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    icon: Server,
    iconClass: "text-emerald-600",
    title: "Multi-Tenant Systems",
    description:
      "Scalable multi-tenant systems with secure data isolation and optimized performance.",
    stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
  },
  {
    icon: Brain,
    iconClass: "text-purple-600",
    title: "AI Integration",
    description:
      "AI integrations including chatbots, automation workflows and intelligent data processing.",
    stack: ["OpenAI API", "Python", "Node.js"],
  },
  {
    icon: Code,
    iconClass: "text-sky-600",
    title: "Web Development",
    description:
      "Fast and scalable web applications using modern frameworks and clean architecture.",
    stack: ["React", "Next.js", "Vue", "Tailwind"],
  },
  {
    icon: Cpu,
    iconClass: "text-amber-600",
    title: "System Architecture",
    description:
      "Backend systems optimized for scalability, performance and reliability.",
    stack: ["AWS", "Docker", "PostgreSQL"],
  },
]

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]"

function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      {services.map((service, index) => {
        const open = openIndex === index
        const Icon = service.icon
        const buttonId = `service-trigger-${index}`
        const panelId = `service-panel-${index}`

        return (
          <div
            key={service.title}
            onClick={() => setOpenIndex(open ? null : index)}
            className={cn(
              "relative min-w-0 cursor-pointer overflow-hidden rounded-3xl transition-[flex-grow,background-color,box-shadow] duration-500 motion-reduce:transition-none lg:flex-[1_1_0%]",
              EASE,
              open
                ? "z-10 bg-white shadow-[0_24px_70px_-12px_rgba(124,58,237,0.28)] ring-1 ring-[#ebe6f8] lg:flex-[2.8_1_0%]"
                : "bg-[#ede8f9] hover:bg-[#e6def8]"
            )}
          >
            {/* Faint dotted texture, only on the open card */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none",
                open ? "opacity-100" : "opacity-0"
              )}
              style={{
                backgroundImage:
                  "radial-gradient(rgba(124,58,237,0.09) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Large soft circle, bottom of the open card */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute -bottom-14 right-8 hidden h-36 w-36 rounded-full bg-[#ede8f9] transition-[opacity,scale] duration-500 motion-reduce:transition-none lg:block",
                EASE,
                open ? "scale-100 opacity-100" : "scale-50 opacity-0"
              )}
            />

            {/* Corner marker: dot + faint line when closed */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute right-6 top-5 hidden flex-col items-center transition-opacity duration-300 motion-reduce:transition-none lg:flex",
                open ? "opacity-0" : "opacity-100"
              )}
            >
              <span className="h-2 w-2 rounded-full bg-[#ff7a59]" />
              <span className="h-5 w-px bg-[#ff7a59]/30" />
            </div>

            {/* Corner marker: long line + dot when open */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute right-6 top-0 hidden origin-top flex-col items-center transition-[opacity,scale] duration-500 motion-reduce:transition-none lg:flex",
                EASE,
                open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              )}
            >
              <span className="h-14 w-px bg-[#ff7a59]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#7c3aed]" />
            </div>

            <h3 className="relative z-10 m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center gap-4 rounded-3xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#7c3aed] sm:p-6 lg:flex-col lg:items-start lg:gap-5"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-[#ece6fb] shadow-sm ring-1 ring-white/80 lg:h-16 lg:w-16">
                  <Icon className={cn("h-7 w-7", service.iconClass)} aria-hidden />
                </span>
                <span className="break-words text-xl font-semibold leading-snug text-slate-800 lg:text-lg">
                  {service.title}
                </span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "ml-auto h-5 w-5 shrink-0 text-slate-500 transition-transform duration-500 motion-reduce:transition-none lg:hidden",
                    EASE,
                    open && "rotate-180"
                  )}
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              onClick={(event) => event.stopPropagation()}
              className={cn(
                "relative z-10 grid cursor-auto transition-[grid-template-rows] duration-500 motion-reduce:transition-none",
                EASE,
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  inert={!open}
                  className={cn(
                    "px-5 pb-5 transition-[opacity,translate] duration-500 motion-reduce:transition-none sm:px-6 sm:pb-6 lg:min-w-[17rem]",
                    EASE,
                    open
                      ? "translate-y-0 opacity-100 delay-150"
                      : "translate-y-2 opacity-0"
                  )}
                >
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
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

        <ServiceAccordion />
      </div>
    </section>
  )
}
