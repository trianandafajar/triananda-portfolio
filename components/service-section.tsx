"use client";

import { useState } from "react";
import { Layers, Server, Brain, Code, Cpu } from "lucide-react";

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
];

function ServiceCard({ service, index, hover }: any) {
  const Icon = service.icon;

  const isActive = hover === index;
  const isDim = hover !== null && hover !== index;

  return (
    <div
      className={`
      p-8 rounded-3xl bg-white
      min-h-[330px]
      border-4
      transition-all duration-300

      ${
        isActive
          ? "border-black scale-102 shadow-[16px_16px_0px_rgba(0,0,0,1)]"
          : isDim
            ? "border-black/50 scale-98 shadow-[1px_2px_0px_rgba(0,0,0,0.5)] opacity-90"
            : "border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
      }
    `}
    >
      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
        <Icon size={22} className="text-purple-600" />
      </div>

      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.stack.map((tech: string) => (
          <span
            key={tech}
            className="
            text-xs px-3 py-1 rounded-full
            bg-purple-100 text-purple-700
            border border-purple-200
          "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="services" className="py-28">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>

        <p className="text-gray-600 max-w-xl text-xl mx-auto">
          I help product teams ship faster with clean architecture, modern
          tooling and end-to-end delivery.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* row 1 */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <ServiceCard service={service} index={i} hover={hover} />
            </div>
          ))}
        </div>

        {/* row 2 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.slice(3).map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHover(i + 3)}
              onMouseLeave={() => setHover(null)}
            >
              <ServiceCard service={service} index={i + 3} hover={hover} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
