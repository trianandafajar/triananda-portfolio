export function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT CONTENT */}
        <div className="space-y-4">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            About me
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            I’m <strong>Triananda</strong>, a <strong>Full Stack SaaS Developer</strong> specializing
            in <strong>SaaS development</strong>, <strong>AI-powered web applications</strong>, and
            <strong> scalable full-stack solutions</strong>.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            With 5+ years of experience and 60+ completed projects
            for clients across various countries, I build <strong>production-ready SaaS
            platforms, CRM systems, and e-commerce applications</strong> designed for real
            users and real business growth.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify">
            My core stack includes <strong>JavaScript, TypeScript, React, Node.js,
            Next.js, and Tailwind CSS</strong>, along with modern tools for cloud
            infrastructure, CI/CD pipelines, and AI integrations such as the
            <strong> OpenAI API</strong> and automation workflows.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify">
            I help businesses <strong>build, scale, and optimize SaaS products </strong>
            with clean architecture and fast delivery — turning ideas into
            high-performance digital products.
          </p>

        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="space-y-6 mt-16">

         
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
  )
}