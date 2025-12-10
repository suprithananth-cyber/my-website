"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (href: string) => {
    const isActive = pathname === href;
    return [
      "text-sm font-medium transition-colors",
      isActive ? "text-brand-sky" : "text-slate-600 hover:text-brand-sky",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-brand-sand/70 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-brand-deep">
          <span className="rounded-full bg-brand-sunrise/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-sunrise">
            Namma
          </span>
          <span className="text-xl">Sangha</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="pill bg-brand-sky text-white shadow-sm shadow-brand-sky/40"
          >
            Let&apos;s Connect
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-7 w-7 text-brand-deep"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 18 12-12M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-brand-sand/80 bg-white/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(link.href)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="pill justify-center bg-brand-sunrise text-white"
              onClick={() => setIsOpen(false)}
            >
              Reach Out
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
