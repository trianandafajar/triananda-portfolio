import { Github } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            Copyright © {year}. Triananda Fajar Ramadhan. All Rights Reserved
          </p>

          <a
            href="https://github.com/trianandafajar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-gray-900"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
