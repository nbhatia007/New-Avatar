"use client";

import { motion } from "framer-motion";
import { Home, TrendingUp, Mic } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const PLATFORMS = [
  {
    id: "bhatia-team",
    icon: Home,
    label: "Real Estate",
    title: "The Bhatia Team",
    tagline: "AI-Powered Luxury & Relocation Real Estate",
    description:
      "Helping executives, investors, and relocating families make confident, informed real estate decisions in the Triangle, NC — with the clarity of a trusted advisor, not just a transaction agent.",
    outcomes: [
      "Luxury & Relocation Specialists",
      "Investment & Wealth Creation",
      "Data-Driven Guidance",
    ],
    cta: "Real Estate Inquiry",
  },
  {
    id: "nimbus",
    icon: TrendingUp,
    label: "Consulting",
    title: "Nimbus Solutions",
    tagline: "Growth · Profitability · Scale",
    description:
      "Helping founder-led businesses improve profitability, strengthen operations, and leverage AI to scale sustainably — using the Nimbus Growth OS™: Build → Improve → Transform → Scale.",
    outcomes: [
      "Profitability Improvement",
      "Operational Excellence",
      "AI Enablement & Scalable Systems",
    ],
    cta: "Consulting Inquiry",
  },
  {
    id: "speaking-platform",
    icon: Mic,
    label: "Speaking",
    title: "Professional Speaking",
    tagline: "Authority · Influence · Impact",
    description:
      "Bringing 30 years of real-world business experience to the stage — inspiring audiences on leadership, profitability, AI adoption, and building growth with clarity and purpose.",
    outcomes: [
      "Business & Leadership Topics",
      "Personal Growth & Awareness",
      "Thought Leadership & Authority",
    ],
    cta: "Speaking Inquiry",
  },
];

export default function Platforms() {
  return (
    <SectionWrapper id="platforms" dark={true}>
      <div className="text-center mb-14">
        <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
          Three Powerful Vehicles
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What I Build
        </h2>
        <div className="gold-divider mx-auto mb-5" />
        <p className="text-[var(--gray-400)] text-base max-w-xl mx-auto">
          Three interconnected platforms — each creating value for the people I serve.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PLATFORMS.map((p, index) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-[var(--navy-mid)] border border-[var(--navy-light)] p-8 flex flex-col hover:border-[var(--gold)]/25 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--gold)]/10">
                  <Icon size={18} className="text-[var(--gold)]" />
                </div>
                <span className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest">
                  {p.label}
                </span>
              </div>

              <h3
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h3>
              <p className="text-[var(--gold)] text-xs font-medium tracking-wider uppercase mb-6">
                {p.tagline}
              </p>

              <p className="text-[var(--gray-400)] text-sm leading-relaxed flex-1 mb-8">
                {p.description}
              </p>

              <ul className="space-y-2 mb-8">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-[var(--gray-300)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)] shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="w-full text-xs py-3 flex items-center justify-center border border-[var(--gold)]/40 text-[var(--gold)] font-semibold tracking-wide hover:bg-[var(--gold)]/10 transition-colors"
              >
                {p.cta}
              </a>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
