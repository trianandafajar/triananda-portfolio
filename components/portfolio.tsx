"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface PortfolioSectionProps {
  isPage?: boolean;
}

export function PortfolioSection({ isPage = false }: PortfolioSectionProps) {
  const portfolioProjects = [
    {
      title: "CALENLY",
      description:
        "A web-based scheduling system that allows users to create, manage, and book appointments with a simple and intuitive interface.",
      image: "/images/calenly.png",
      demoUrl: "https://calenly.trianandafajar.com",
      stack: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "KEYSTHETIX",
      description:
        "A modern e-commerce web application that enables users to browse products, manage carts, and complete purchases through integrated payment gateways.",
      image: "/images/keysthetic.png",
      demoUrl: "https://keysthetix.trianandafajar.com",
      stack: ["FastAPI", "React", "Tailwind"],
    },
    {
      title: "MENTORA",
      description:
        "A web-based learning platform designed to manage courses, users, and structured learning modules.",
      image: "/images/mentora.png",
      demoUrl: "https://mentora.trianandafajar.com",
      stack: ["NuxtJs", "Tailwind", "Flask"],
    },
    {
      title: "INVOICE GENERATOR",
      description:
        "A simple and efficient SaaS tool that allows users to generate professional invoices instantly.",
      image: "/images/invoice-generator.png",
      demoUrl: "https://invoice-generator.trianandafajar.com",
      stack: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "CONTENNA",
      description:
        "A scalable headless CMS platform that enables developers to manage and deliver content via APIs.",
      image: "/images/contenna.png",
      demoUrl: "https://contenna.trianandafajar.com",
      stack: ["NextJs", "Laravel", "MySQL"],
    },
    {
      title: "METROAPI",
      description:
        "A robust backend system designed for high-performance API handling.",
      image: "/images/metroapp.png",
      demoUrl: "http://io.metrorelay.com",
      stack: ["NextJs", "Laravel Octane", "Imagick"],
    },
    {
      title: "DASHBOARD INVESTOR",
      description:
        "A modern dashboard interface designed to display investment data, analytics, and key metrics in a clean and structured layout.",
      image: "/images/dashboard.png",
      demoUrl: "#",
      stack: ["NextJs", "Zustand", "Leaflet"],
    },
    {
      title: "FLIX MOVIES",
      description:
        "A web platform for browsing movie collections and streaming content through YouTube integration with a simple and user-friendly interface.",
      image: "/images/flix-movies.png",
      demoUrl: "https://cable-defender.com/",
      stack: ["Laravel", "YouTube Integration"],
    },
  ];

  const projects = isPage
    ? portfolioProjects
    : portfolioProjects.slice(0, 6);

  return (
    <section className="bg-white py-16 md:py-24" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* header */}
          <div
            className={`mb-12 md:mb-16 ${
              isPage ? "text-center" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-6 md:mb-8 leading-[1.3]">
              Featured Projects
            </h2>

            <p
              className={`text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl ${
                isPage ? "mx-auto" : ""
              }`}
            >
              A selection of my recent work showcasing my expertise in
              full-stack development and scalable SaaS platforms.
            </p>
          </div>

          {/* grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                group bg-white border-4 border-black rounded-3xl
                overflow-hidden
                transition-all duration-200
                shadow-[4px_4px_0px_rgba(0,0,0,1)]
                hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
                "
              >
                {/* IMAGE */}
                <div className="relative w-full aspect-[6/3] overflow-hidden bg-[#EDEDED]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* overlay */}
                  <div
                    className="
                    absolute inset-0
                    flex items-center justify-center
                    bg-black/40
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    "
                  >
                    <Button
                      asChild
                      className="
                      bg-white text-black
                      hover:bg-gray-200
                      rounded-lg
                      font-semibold
                      px-6 py-3
                      "
                    >
                      <a href={project.demoUrl} target="_blank">
                        View Demo
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-[#393939] text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
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
              </div>
            ))}
          </div>

          {/* More Portfolio button */}
          {!isPage && (
            <div className="flex justify-center mt-12">
              <Link
                href="/projects"
                className="
                bg-white flex items-center border-[3px] border-black rounded-lg
                py-4 px-7 text-base md:text-lg font-semibold
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                active:scale-95
                "
              >
                More Portfolio
              </Link>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
