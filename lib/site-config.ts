export const siteConfig = {
  name: "Triananda Fajar Ramadhan",
  shortName: "Triananda",
  title: "Triananda Fajar Ramadhan | Full Stack SaaS Developer",
  description:
    "Portfolio of Triananda Fajar Ramadhan, Full Stack SaaS Developer focused on AI-powered web apps and scalable systems.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://trianandafajar.com",
  themeColor: "#ffffff",
  socialImage: "/android-chrome-512x512.png",
}

export const siteRoutes = ["/", "/projects"] as const
