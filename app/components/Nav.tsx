"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-rangers-ink/85 backdrop-blur-xl border-b border-rangers-blue-deep/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-7 h-7 bg-rangers-red flex items-center justify-center font-display font-bold text-white text-sm transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
              M
            </div>
            <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-rangers-blue-bright" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-medium text-[15px] tracking-tight">
              Monday Likes Baseball
            </span>
            <span className="label-mono text-[9px] text-rangers-red mt-0.5">
              BASEBALL · DATA · INSIGHT
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "/story", label: "Story" },
            { href: "/services", label: "Services" },
            { href: "/team", label: "Team" },
            { href: "/projects/tex-2025", label: "Projects" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="link-underline text-[15px] font-semibold text-rangers-bone hover:text-rangers-blue-deep transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="group relative px-5 py-2 bg-rangers-red text-white text-sm font-medium overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Launch Dashboard
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M1 6h11M7 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-rangers-blue-bright transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
