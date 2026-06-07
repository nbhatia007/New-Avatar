"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What I Build", href: "#platforms" },
  { label: "Speaking", href: "#speaking" },
  { label: "Ecosystem", href: "#ecosystem" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--navy)]/95 backdrop-blur-sm shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 border border-[var(--gold)] flex items-center justify-center">
            <span
              className="text-[var(--gold)] text-base font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              NB
            </span>
          </div>
          <span className="hidden sm:block text-white font-semibold text-sm tracking-wider group-hover:text-[var(--gold)] transition-colors">
            NAVEEN BHATIA
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[var(--gray-300)] text-sm hover:text-[var(--gold)] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href="#contact" variant="outline">
            Let&apos;s Connect
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--navy-mid)] border-t border-[var(--navy-light)] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--gray-300)] text-sm hover:text-[var(--gold)] transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="w-full mt-2" onClick={() => setOpen(false)}>
            Let&apos;s Connect
          </Button>
        </div>
      )}
    </header>
  );
}
