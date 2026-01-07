export function AboutSection() {
  return (
    <section className="container mx-auto px-4 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's behind all this<br/>great work?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">5+ years in web development</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  I specialize in building modern, high-performance websites and web applications from landing pages to full-stack platforms.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">150+ completed web projects</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Over the years, I’ve delivered more than 150 web projects helping businesses launch, grow, and improve their online presence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
