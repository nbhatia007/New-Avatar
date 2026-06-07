"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const PILLARS = [
  "30+ Years of Business Leadership",
  "Proven Profitability & Transformation Track Record",
  "Entrepreneurial & Investment Perspective",
  "AI-Enabled Growth Mindset",
];

export default function About() {
  return (
    <SectionWrapper id="about" dark={false}>
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        <div className="relative max-w-xs mx-auto md:mx-0 w-full">
          <div className="absolute -top-3 -left-3 w-full h-full border border-[var(--gold)]/25" />
          <div className="relative overflow-hidden aspect-[3/4]">
            <Image
              src="/ChatGPT Image Jun 6, 2026, 08_29_12 AM.png"
              alt="Naveen Bhatia"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
            Who I Am
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Naveen<br />The Builder
          </h2>
          <div className="gold-divider mb-6" />

          <p className="text-[var(--gray-300)] text-base leading-relaxed mb-8">
            For 30+ years I&apos;ve helped organizations — from Fortune 500 enterprises to
            founder-led businesses — build, improve, transform, and scale. I haven&apos;t just
            advised businesses. I&apos;ve built them.
          </p>

          <div className="space-y-3 mb-10">
            {PILLARS.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)] shrink-0" />
                <span className="text-[var(--gray-300)] text-sm">{item}</span>
              </div>
            ))}
          </div>

          <Button href="#contact" variant="primary">
            Work With Naveen
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
