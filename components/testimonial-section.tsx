import { Quote } from "lucide-react";

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Triananda is a conscientious contractor and very good at keeping me up to date on his progress. He produces high-quality work and follows instruction well. He was a pleasure to work with.",
      name: "Antonia S",
      role: "Founder",
    },
    {
      quote:
        "Super easy to work with clear task, fast replies, and good vibes all around. The whole process was efficient and enjoyable, hope we can collab again sometime.",
      name: "Kezia Regina",
      role: "Project Manager",
    },
    {
      quote:
        "Triananda was great to work with. He quickly fixed bugs in our SaaS app built with Vue.js and Node.js. Super clear communication, fast delivery, and he really understands JavaScript inside out. Definitely recommend!",
      name: "Dimas Ahmad",
      role: "Web Developer",
    },
    {
      quote:
        "Always great working with him again! Nanda fixed the CRM bugs fast, improved the UI, and kept everything clean and smooth. Definitely recommend him for any JavaScript or web app project!",
      name: "Adri Andika",
      role: "UI UX Designer",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24" id="testimonial">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* header */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-6 leading-[1.3]">
              Testimonials
            </h2>

            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Feedback from clients and collaborators I’ve worked with on
              various web development projects.
            </p>
          </div>

          {/* grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                    relative bg-white border-4 border-black rounded-3xl p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all overflow-hidden
                "
              >
                <Quote className="absolute bottom-6 right-6 w-20 h-20 text-black/80 pointer-events-none drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]" />

                <p className="relative z-10 text-gray-700 leading-relaxed mb-6">
                  “{item.quote}”
                </p>

                <div className="relative z-10">
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
