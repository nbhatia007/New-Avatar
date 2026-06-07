"use client";

import { Mic } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const TOPICS = [
  {
    cat: "Business & Leadership",
    items: [
      "Profitability Before Growth",
      "Growth vs Scale",
      "AI, Leadership & The Future of Work",
      "Turning Around Challenged Operations",
    ],
  },
  {
    cat: "Personal Growth & Awareness",
    items: [
      "Building Growth With Clarity & Purpose",
      "Who Am I?",
      "Meditation, Mindfulness & Manifestation",
    ],
  },
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
            30 years of real-world business experience brought to the stage.
            Naveen speaks on leadership, profitability, AI adoption, and building
            a life of purpose — inspiring audiences to take action and grow.
          </p>
          <Button href="#contact" variant="primary">
            Book Naveen to Speak
          </Button>
        </div>

        <div className="space-y-10">
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
        </div>

      </div>
    </SectionWrapper>
  );
}
