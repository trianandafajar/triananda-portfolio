export function ExperienceSection() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Nine Dragon Labs",
      period: "July 2022 — January 2024",
    },
    {
      role: "Full-stack Developer",
      company: "Bratamedia",
      period: "May 2019 — February 2022",
    },
    {
      role: "Website Developer",
      company: "Nifty Educate",
      period: "April 2018 — February 2019",
    },
  ];

  return (
    <section id="experience" className="py-28">
      <div className="max-w-7xl mx-auto">

        {/* title */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Employee Experience
          </h2>

          <p className="text-gray-600">
            My professional journey building SaaS platforms and scalable web
            applications across multiple companies.
          </p>
        </div>

        {/* flow */}
        <div className="relative grid md:grid-cols-3 gap-12">

          {/* horizontal line */}
          <div className="absolute top-6 left-0 right-0 h-0.75 bg-black/20 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative">

              <div
                className="w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center font-bold mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] relative z-10
              "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold mb-1">
                {exp.role}
              </h3>

              {/* company */}
              <p className="font-medium text-gray-700">
                {exp.company}
              </p>

              {/* period */}
              <p className="text-sm text-gray-500 mt-1">
                {exp.period}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}