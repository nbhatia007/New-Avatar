"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const PILLARS = [
  {
    number: "1",
    label: "The Mission",
    title: "Create Opportunity",
    description:
      "One unifying purpose drives everything — creating opportunity that leads to prosperity and lasting value for every person and organization I serve.",
  },
  {
    number: "10×",
    label: "The Effort",
    title: "Execute Relentlessly",
    description:
      "Extraordinary outcomes require extraordinary effort. Systems, discipline, and relentless execution turn strategy into results.",
  },
  {
    number: "100×",
    label: "The Imagination",
    title: "Build What's Possible",
    description:
      "The biggest constraint is imagination. Think bigger, build longer, and design growth ecosystems that compound over time.",
  },
];

export default function Framework() {
  return (
    <SectionWrapper id="framework" dark={false}>
      <div className="text-center mb-12">
        <p className="text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-3">
          Operating Philosophy
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The{" "}
          <span className="text-gold-gradient">1 · 10 · 100</span>{" "}
          Framework
        </h2>
        <div className="gold-divider mx-auto mb-5" />
        <p className="text-[var(--gray-300)] text-lg max-w-xl mx-auto">
          One Philosophy. Three Multipliers. Limitless Impact.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative p-8 border border-[var(--navy-light)] text-center group hover:border-[var(--gold)]/40 transition-colors"
          >
            {/* Big number */}
            <div
              className="text-6xl font-bold mb-2 text-gold-gradient"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {pillar.number}
            </div>
            <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-2">
              {pillar.label}
            </p>
            <h3 className="text-white text-lg font-bold mb-3">{pillar.title}</h3>
            <p className="text-[var(--gray-300)] text-sm leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p
          className="text-[var(--gold)] text-xl md:text-2xl font-bold italic"
          style={{ fontFamily: "var(--font-display)" }}
        >
          "Creating Opportunity · Driving Prosperity · Delivering Lasting Value"
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
