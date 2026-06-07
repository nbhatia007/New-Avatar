"use client";

import { motion } from "framer-motion";
import { Home, TrendingUp, Mic } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const PLATFORMS = [
  {
    id: "bhatia-team",
    icon: Home,
    label: "Real Estate",
    title: "The Bhatia Team",
    tagline: "AI-Powered Luxury & Relocation Real Estate",
    description: "Helping executives, investors, and families make confident real estate decisions in the Triangle, NC.",
    color: "var(--gold)",
    vision: [
      { value: "$1M", label: "GCI" },
      { value: "100+", label: "Transactions" },
      { value: "10", label: "Agent Team" },
    ],
    cta: "Real Estate Inquiry",
  },
  {
    id: "nimbus",
    icon: TrendingUp,
    label: "Consulting",
    title: "Nimbus Solutions",
    tagline: "Growth · Profitability · Scale",
    description: "Helping founder-led businesses improve profitability, leverage AI, and scale with the Nimbus Growth OS™.",
    color: "#4A90D9",
    vision: [
      { value: "1", label: "Framework" },
      { value: "10", label: "Projects" },
      { value: "+$100K", label: "Revenue / Year" },
    ],
    cta: "Consulting Inquiry",
  },
  {
    id: "speaking-platform",
    icon: Mic,
    label: "Speaking",
    title: "Professional Speaking",
    tagline: "Authority · Influence · Impact",
    description: "Using storytelling and thought leadership to build authority, open doors, and create strategic partnerships.",
    color: "#9B7EC8",
    vision: [
      { value: "1", label: "TEDx Talk" },
      { value: "10", label: "Platforms" },
      { value: "100", label: "Speeches" },
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
        <div className="gold-divider mx-auto" />
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
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full"
                  style={{ background: `${p.color}18` }}
                >
                  <Icon size={18} style={{ color: p.color }} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: p.color }}
                >
                  {p.label}
                </span>
              </div>

              <h3
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h3>
              <p className="text-xs font-medium tracking-wider uppercase mb-5" style={{ color: p.color }}>
                {p.tagline}
              </p>

              <p className="text-[var(--gray-400)] text-sm leading-relaxed flex-1 mb-8">
                {p.description}
              </p>

              <div className="grid grid-cols-3 gap-3 py-5 border-t border-b border-[var(--navy-light)] mb-6">
                {p.vision.map((v) => (
                  <div key={v.label} className="text-center">
                    <p className="font-bold text-lg" style={{ color: p.color }}>
                      {v.value}
                    </p>
                    <p className="text-[var(--gray-500)] text-xs mt-0.5">{v.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="w-full text-xs py-3 flex items-center justify-center border font-semibold tracking-wide transition-all duration-200 hover:opacity-80"
                style={{ borderColor: `${p.color}60`, color: p.color }}
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
