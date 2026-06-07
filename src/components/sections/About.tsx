"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const DIFFERENTIATORS = [
  "Financial Analysis & Risk Assessment",
  "Data-Driven Decision Making",
  "Negotiation Strategy",
  "Systems & Process Excellence",
  "AI-Enabled Growth Mindset",
  "Long-Term Wealth Perspective",
];

export default function About() {
  return (
    <SectionWrapper id="about" dark={false}>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            {/* Gold border accent */}
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[var(--gold)] opacity-30 rounded-sm" />
            <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
              <Image
                src="/images/naveen-headshot.jpg"
                alt="Naveen Bhatia"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <SectionHeading
            eyebrow="Who I Am"
            title="Naveen The Builder"
            subtitle="For over 30 years, I have helped organizations—from Fortune 500 enterprises to founder-led businesses—build, improve, transform, and scale."
          />

          <p className="text-[var(--gray-300)] leading-relaxed mb-6">
            I have led complex programs, improved profitability, turned around challenged
            initiatives, launched new ventures, and helped organizations navigate growth
            and change. I have not only advised businesses — I have built businesses and
            applied the same principles to create profitable and respected brands.
          </p>

          <p className="text-[var(--gray-300)] leading-relaxed mb-8">
            Today, I operate three interconnected platforms — luxury real estate, business
            consulting, and professional speaking — each designed to create wealth, business
            value, and lasting impact for the people I serve.
          </p>

          {/* Differentiators */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {DIFFERENTIATORS.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-[var(--gold)] mt-0.5 text-xs">▪</span>
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
