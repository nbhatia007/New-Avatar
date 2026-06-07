"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const PILLARS = [
  { number: "1", label: "The Mission", title: "Create Opportunity" },
  { number: "10×", label: "The Effort", title: "Execute Relentlessly" },
  { number: "100×", label: "The Imagination", title: "Build What's Possible" },
];

export default function Framework() {
  return (
    <SectionWrapper id="framework" dark={false}>
      <div className="text-center mb-14">
        <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
          Operating Philosophy
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The 1 · 10 · 100 Framework
        </h2>
        <div className="gold-divider mx-auto mb-5" />
        <p className="text-[var(--gray-400)] text-base">
          One Philosophy. Three Multipliers. Limitless Impact.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="border border-[var(--navy-light)] p-10 text-center hover:border-[var(--gold)]/30 transition-colors"
          >
            <div
              className="text-6xl font-bold mb-3 text-gold-gradient"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {pillar.number}
            </div>
            <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-2">
              {pillar.label}
            </p>
            <h3 className="text-white text-lg font-semibold">{pillar.title}</h3>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-[var(--gold)] text-lg md:text-xl font-medium italic"
        style={{ fontFamily: "var(--font-display)" }}
      >
        "Creating Opportunity · Driving Prosperity · Delivering Lasting Value"
      </motion.p>
    </SectionWrapper>
  );
}
