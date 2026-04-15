"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <div className="flex items-center gap-8 font-bold text-[18px]">
      <Link href="/#services" className="hover:opacity-70">
        Services
      </Link>
      <Link href="/#portfolio" className="hover:opacity-70">
        Portfolio
      </Link>
      <Link href="/#testimonial" className="hover:opacity-70">
        Testimonial
      </Link>
    </div>
  );

  const profile = (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
        <Image
          src="/images/profil.png"
          alt="Profile"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <h2 className="text-xl font-bold">Triananda Fajar R.</h2>
    </Link>
  );

  const cta = (
    <a
      href="https://www.upwork.com/freelancers/trianandafajar"
      target="_blank"
      className="border-4 border-black bg-yellow-300 px-6 py-2 rounded-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
    >
      Upwork
    </a>
  );

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
          {profile}
          <div className="text-dark">{navLinks}</div>
          {cta}
        </div>
      </nav>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 will-change-transform
        ${scrolled ? "translate-y-0" : "-translate-y-full"}
        bg-white border-b-4 border-black shadow-[0_6px_0px_0px_rgba(0,0,0,1)]`}
      >
        <div className="max-w-7xl mx-auto py-2 flex items-center justify-between">
          {profile}
          {navLinks}
          {cta}
        </div>
      </nav>
    </>
  );
}
