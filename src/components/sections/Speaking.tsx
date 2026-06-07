"use client";

import { motion } from "framer-motion";
import { Mic, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const TOPICS = {
  "Business & Leadership": [
    "Profitability Before Growth",
    "Growth vs Scale",
    "Turning Around Challenged Operations",
    "AI, Leadership & The Future of Work",
  ],
  "Personal Growth & Awareness": [
    "Building Growth With Clarity & Purpose",
    "Who Am I?",
    "Meditation, Mindfulness & Manifestation",
  ],
};

const FUNNEL = [
  "Speaking",
  "Trust",
  "Relationships",
  "Opportunities",
];

export default function Speaking() {
  return (
    <SectionWrapper id="speaking" dark={false}>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <SectionHeading
            eyebrow="Professional Speaking"
            title="Authority · Influence · Impact"
            subtitle="Using speaking, storytelling, and thought leadership to build authority, attract opportunities, and create strategic partnerships."
          />

          {/* Topics */}
          {Object.entries(TOPICS).map(([category, items]) => (
            <div key={category} className="mb-7">
              <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-3">
                {category}
              </p>
              <ul className="space-y-2">
                {items.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-[var(--gray-300)] text-sm">
                    <Mic size={13} className="text-[var(--gold)] mt-0.5 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Button href="#contact" variant="primary" className="mt-4">
            Book Naveen to Speak
          </Button>
        </div>

        {/* Right */}
        <div>
          {/* Speaking funnel */}
          <div className="bg-[var(--navy)] border border-[var(--navy-light)] p-7 mb-6">
            <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-5">
              The Speaking Funnel
            </p>
            <div className="flex flex-col gap-0">
              {FUNNEL.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)] text-xs font-bold">
                      {i + 1}
                    </div>
                    {i < FUNNEL.length - 1 && (
                      <div className="w-px h-6 bg-[var(--gold)]/20" />
                    )}
                  </div>
                  <span className="text-white text-sm font-medium">{step}</span>
                </div>
              ))}
              {/* Outcomes */}
              <div className="ml-11 mt-2 flex flex-wrap gap-2">
                {["Clients", "Agents", "Partners", "Nimbus Opportunities"].map((o) => (
                  <span
                    key={o}
                    className="text-xs text-[var(--gold)] border border-[var(--gold)]/30 px-2 py-0.5 flex items-center gap-1"
                  >
                    <ArrowRight size={10} /> {o}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3-Year goals */}
          <div className="bg-[var(--navy)] border border-[var(--navy-light)] p-7">
            <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-5">
              3-Year Vision
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "1", label: "TEDx Talk" },
                { value: "10", label: "Strategic Platforms" },
                { value: "100", label: "Speeches" },
              ].map((v) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <p
                    className="text-[var(--gold)] text-3xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v.value}
                  </p>
                  <p className="text-[var(--gray-500)] text-xs mt-1">{v.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
