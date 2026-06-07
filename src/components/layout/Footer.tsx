import { ExternalLink, Mail } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Real Estate", href: "#bhatia-team" },
  { label: "Consulting", href: "#nimbus" },
  { label: "Speaking", href: "#speaking" },
  { label: "Connect", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] border-t border-[var(--navy-light)] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 border border-[var(--gold)] flex items-center justify-center">
                <span
                  className="text-[var(--gold)] text-sm font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  NB
                </span>
              </div>
              <span className="text-white font-semibold text-sm tracking-wider">
                NAVEEN BHATIA
              </span>
            </div>
            <p className="text-[var(--gray-500)] text-xs max-w-xs leading-relaxed">
              Building Growth With Clarity &amp; Purpose
            </p>
          </div>

          {/* Nav */}
          <ul className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[var(--gray-500)] text-xs hover:text-[var(--gold)] transition-colors tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="mailto:hellonaveen@gmail.com"
              aria-label="Email"
              className="text-[var(--gray-500)] hover:text-[var(--gold)] transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/naveenbhatia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--gray-500)] hover:text-[var(--gold)] transition-colors flex items-center gap-1 text-xs"
            >
              <ExternalLink size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--navy-light)] flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[var(--gray-500)] text-xs">
            © {new Date().getFullYear()} Naveen Bhatia. All rights reserved.
          </p>
          <p className="text-[var(--gray-500)] text-xs">
            Triangle, NC · Real Estate · Consulting · Speaking
          </p>
        </div>
      </div>
    </footer>
  );
}
