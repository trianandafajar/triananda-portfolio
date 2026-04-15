export function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-14">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            About me
          </h2>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="space-y-6">
          <div className="flex p-4 gap-4 items-start border-4 border-black rounded-md overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:border-2 hover:scale-99 transition-all duration-300">
            <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[6px] shrink-0 mt-1"></div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                5+ years building modern web applications
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-justify">
                I design and develop scalable web applications using modern
                frameworks and clean architecture for long-term maintainability.
              </p>
            </div>
          </div>

          <div className="flex p-4 gap-4 items-start border-4 border-black rounded-md overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:border-2 hover:scale-99 transition-all duration-300">
            <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[6px] shrink-0 mt-1"></div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                60+ completed SaaS & web projects
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-justify">
                I’ve delivered SaaS platforms, CRM systems, internal tools, and
                e-commerce applications for startups and growing businesses.
              </p>
            </div>
          </div>

          <div className="flex p-4 gap-4 items-start border-4 border-black rounded-md overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:border-2 hover:scale-99 transition-all duration-300">
            <div className="w-5 h-5 bg-[#F59E0B] border-2 border-black rounded-[6px] shrink-0 mt-1"></div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                SaaS architecture & AI integrations
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-justify">
                Experienced in multi-tenant systems, API integrations, AI
                automation, and cloud deployments on AWS or Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
