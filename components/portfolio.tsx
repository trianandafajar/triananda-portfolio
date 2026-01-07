import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PortfolioSection() {
  const portfolioProjects = [
    {
      title: "Nifty Educate",
      description: "Learning materials contain various themes for preschool, kindergarten, and early elementary school children",
      image: "/images/nifty.jpeg",
      demoUrl: "https://niftyforkids.com",
    },
    {
      title: "Javabica",
      description: "Javabica is Indonesia's leading coffee producer. bringing premium coffee whereever you are",
      image: "/images/javabica.jpeg",
      demoUrl: "https://javabica.com",
    },
    {
      title: "Attention",
      description: "An Event Ecosystem Platform that simplifies event activities through seamless connections and collaboration.",
      image: "/images/attention.jpeg",
      demoUrl: "https://attention.id",
    },
    {
      title: "Inilah.com",
      description: "online media that is committed to presenting exclusive, credible information that is in the public interest",
      image: "/images/inilah.jpeg",
      demoUrl: "https://inilah.com",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-[1.3]">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              A selection of my recent work showcasing my expertise in full-stack development and UI/UX design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <div className="relative w-full aspect-5/3 overflow-hidden bg-[#EDEDED]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-2">{project.title}</h3>
                  <p className="text-[#393939] text-sm md:text-base leading-relaxed mb-6">{project.description}</p>

                  <Button
                    asChild
                    className="bg-black text-white hover:bg-[#1a1a1a] rounded-lg py-3 px-6 font-semibold h-auto w-full sm:w-auto"
                  >
                    <a href={project.demoUrl} target="_blank">
                      View Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
