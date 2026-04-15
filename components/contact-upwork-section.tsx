"use client";

import { ExternalLink } from "lucide-react";

export function ContactUpworkSection() {
  return (
    <section className="bg-black py-32" id="contact-upwork">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.2]">
          Let’s build your next product.
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          If you're looking for a reliable full-stack developer to help build,
          scale, or improve your web application, feel free to reach out. I'm
          available for new projects on Upwork.
        </p>

        <a
          href="https://www.upwork.com/"
          target="_blank"
          className="
            inline-flex items-center gap-3
            bg-white text-black
            px-8 py-4
            rounded-xl
            font-semibold
            hover:bg-gray-200
            transition
          "
        >
          Hire Me on Upwork
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
