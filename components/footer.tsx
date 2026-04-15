import { Github } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-0">
      <hr className="border-gray-700" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-400 text-sm">


          <p>
            Copyright © {year}. Triananda Fajar Ramadhan. All Rights Reserved
          </p>

          <a
            href="https://github.com/trianandafajar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}