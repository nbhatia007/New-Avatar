"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const TOPICS = [
  { cat: "Business & Leadership", items: ["Profitability Before Growth", "Growth vs Scale", "AI, Leadership & The Future of Work", "Turning Around Challenged Operations"] },
  { cat: "Personal Growth", items: ["Building Growth With Clarity & Purpose", "Who Am I?", "Meditation, Mindfulness & Manifestation"] },
];

export default function Speaking() {
  return (
    <SectionWrapper id="speaking" dark={false}>
      <div className="grid md:grid-cols-2 gap-16 items-start">

        <div>
          <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
            Professional Speaking
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Authority.<br />Influence.<br />Impact.
          </h2>
          <div className="gold-divider mb-8" />

          <p className="text-[var(--gray-400)] text-base leading-relaxed mb-10">
            Using storytelling and thought leadership to build authority,
            attract opportunities, and create strategic partnerships.
          </p>

          <Button href="#contact" variant="primary">
            Book Naveen to Speak
          </Button>
        </div>

        <div className="space-y-8">
          {TOPICS.map((group) => (
            <div key={group.cat}>
              <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
                {group.cat}
              </p>
              <ul className="space-y-3">
                {group.items.map((topic) => (
                  <li key={topic} className="flex items-center gap-3 text-[var(--gray-300)] text-sm">
                    <Mic size={12} className="text-[var(--gold)] shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pt-8 border-t border-[var(--navy-light)]">
            <p className="text-[var(--gray-500)] text-xs uppercase tracking-widest mb-5">3-Year Vision</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "1", label: "TEDx Talk" },
                { value: "10", label: "Platforms" },
                { value: "100", label: "Speeches" },
              ].map((v) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[var(--gold)] text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
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
