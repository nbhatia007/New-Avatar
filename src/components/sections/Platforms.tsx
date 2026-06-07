"use client";

import { motion } from "framer-motion";
import { Home, TrendingUp, Mic } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const PLATFORMS = [
  {
    id: "bhatia-team",
    icon: Home,
    eyebrow: "Lane 1",
    title: "The Bhatia Team",
    tagline: "AI-Powered Luxury & Relocation Real Estate",
    outcome: "Creates Wealth",
    color: "var(--gold)",
    mission:
      "Help executives, entrepreneurs, investors, and relocating families make informed real estate and wealth-building decisions in the Triangle, NC.",
    differentiators: [
      "Financial Analysis & Risk Assessment",
      "Data-Driven Decision Making",
      "Negotiation Strategy",
      "AI-Enabled Client Experience",
      "Long-Term Wealth Perspective",
    ],
    vision: [
      { value: "$1M", label: "Gross Commission Income" },
      { value: "100+", label: "Annual Transactions" },
      { value: "10", label: "Agent Team" },
    ],
    cta: { label: "Real Estate Inquiry", href: "#contact" },
  },
  {
    id: "nimbus",
    icon: TrendingUp,
    eyebrow: "Lane 2",
    title: "Nimbus Solutions",
    tagline: "Growth · Profitability · Scale",
    outcome: "Creates Business Value",
    color: "#4A90D9",
    mission:
      "Help founder-led businesses improve profitability, strengthen operations, leverage AI, and scale sustainably using the Nimbus Growth OS™.",
    differentiators: [
      "Profitability Improvement",
      "Operational Excellence",
      "AI Enablement",
      "Business Transformation",
      "Scalable Systems & Processes",
    ],
    vision: [
      { value: "1", label: "Signature Framework" },
      { value: "10", label: "Client Projects" },
      { value: "+$100K", label: "Revenue Added Annually" },
    ],
    cta: { label: "Business Consulting Inquiry", href: "#contact" },
  },
  {
    id: "speaking",
    icon: Mic,
    eyebrow: "Lane 3",
    title: "Professional Speaking",
    tagline: "Authority · Influence · Impact",
    outcome: "Creates Trust & Influence",
    color: "#9B7EC8",
    mission:
      "Use speaking, storytelling, and thought leadership to build authority, attract opportunities, recruit talent, and create strategic partnerships.",
    differentiators: [
      "Business & Leadership Topics",
      "Inspiration & Personal Growth",
      "Authority Platform",
      "Thought Leadership",
      "Opens Doors & Opportunities",
    ],
    vision: [
      { value: "1", label: "TEDx Talk" },
      { value: "10", label: "Strategic Platforms" },
      { value: "100", label: "Speeches & Presentations" },
    ],
    cta: { label: "Speaking Inquiry", href: "#contact" },
  },
];

export default function Platforms() {
  return (
    <SectionWrapper id="platforms" dark={true}>
      <SectionHeading
        eyebrow="Three Powerful Vehicles"
        title="What I Build"
        subtitle="Three interconnected platforms — each designed to create wealth, business value, and lasting impact."
        centered
      />

      {/* Framework teaser */}
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-6 bg-[var(--navy-mid)] border border-[var(--navy-light)] px-8 py-4 rounded-sm">
          {[
            { num: "3", label: "Years" },
            { num: "3", label: "Lanes" },
            { num: "3", label: "Goals" },
          ].map((item, i) => (
            <span key={item.label} className="flex items-center gap-6">
              <span className="text-center">
                <span className="block text-[var(--gold)] text-xl font-bold">{item.num}</span>
                <span className="block text-[var(--gray-500)] text-xs">{item.label}</span>
              </span>
              {i < 2 && <span className="text-[var(--navy-light)] text-lg">·</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PLATFORMS.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <motion.div
              key={platform.id}
              id={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[var(--navy-mid)] border border-[var(--navy-light)] p-7 flex flex-col hover:border-[var(--gold)]/30 transition-colors duration-300"
            >
              {/* Icon + eyebrow */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-full"
                  style={{ background: `${platform.color}20` }}
                >
                  <Icon size={20} style={{ color: platform.color }} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-2 py-1 rounded-sm"
                  style={{ color: platform.color, background: `${platform.color}15` }}
                >
                  {platform.eyebrow}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {platform.title}
              </h3>
              <p className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: platform.color }}>
                {platform.tagline}
              </p>
              <p className="text-[var(--gray-500)] text-xs mb-4 font-semibold uppercase tracking-wide">
                {platform.outcome}
              </p>

              <div className="gold-divider mb-5" style={{ background: platform.color }} />

              {/* Mission */}
              <p className="text-[var(--gray-300)] text-sm leading-relaxed mb-5">
                {platform.mission}
              </p>

              {/* Differentiators */}
              <ul className="space-y-1.5 mb-6 flex-1">
                {platform.differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-[var(--gray-300)]">
                    <span style={{ color: platform.color }} className="mt-0.5 text-xs">✓</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* 3-Year vision */}
              <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-t border-[var(--navy-light)]">
                {platform.vision.map((v) => (
                  <div key={v.label} className="text-center">
                    <p className="font-bold text-base" style={{ color: platform.color }}>
                      {v.value}
                    </p>
                    <p className="text-[var(--gray-500)] text-xs leading-tight mt-0.5">{v.label}</p>
                  </div>
                ))}
              </div>

              <Button href={platform.cta.href} variant="outline" className="w-full text-xs py-2.5">
                {platform.cta.label}
              </Button>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
