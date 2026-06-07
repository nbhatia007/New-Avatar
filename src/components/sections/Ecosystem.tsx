"use client";

import { motion } from "framer-motion";
import { Users, Handshake, UserCheck, Lightbulb } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const AUDIENCES = [
  {
    icon: Users,
    title: "Clients",
    value: "Trusted Advisor",
    points: ["Better Decisions", "Stronger Outcomes", "Long-Term Value"],
    cta: "I'm a Potential Client",
    inquiry: "Real Estate Client",
  },
  {
    icon: Handshake,
    title: "Partners",
    value: "Strategic Relationships",
    points: ["Shared Opportunities", "Mutual Growth", "Aligned Incentives"],
    cta: "Explore Partnership",
    inquiry: "Partnership",
  },
  {
    icon: UserCheck,
    title: "Agents",
    value: "Build Your Career",
    points: ["Grow Your Business", "Create Freedom", "Be Part of Something Bigger"],
    cta: "Agent Opportunity",
    inquiry: "Agent Opportunity",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs",
    value: "From Vision to Value",
    points: ["Ideas to Impact", "From Start to Scale", "Practical AI Adoption"],
    cta: "Let's Talk Business",
    inquiry: "Business Consulting",
  },
];

export default function Ecosystem() {
  return (
    <SectionWrapper id="ecosystem" dark={true}>
      <SectionHeading
        eyebrow="The Growth Ecosystem"
        title="Who I Serve"
        subtitle="Connected by Purpose. Aligned for Growth. Built for Impact."
        centered
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {AUDIENCES.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--navy-mid)] border border-[var(--navy-light)] p-6 flex flex-col hover:border-[var(--gold)]/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--gold)]/20 transition-colors">
                <Icon size={18} className="text-[var(--gold)]" />
              </div>

              <h3 className="text-white font-bold text-lg mb-1">{audience.title}</h3>
              <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
                {audience.value}
              </p>

              <ul className="space-y-1.5 flex-1 mb-5">
                {audience.points.map((p) => (
                  <li key={p} className="text-[var(--gray-300)] text-sm flex items-start gap-2">
                    <span className="text-[var(--gold)] text-xs mt-0.5">→</span>
                    {p}
                  </li>
                ))}
              </ul>

              <Button href="#contact" variant="ghost" className="text-xs px-0 justify-start">
                {audience.cta} →
              </Button>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-14 p-8 border border-[var(--gold)]/20 text-center bg-[var(--navy-mid)]"
      >
        <p
          className="text-white text-lg md:text-2xl font-bold leading-relaxed max-w-4xl mx-auto"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &ldquo;I Build Growth Ecosystems That Create{" "}
          <span className="text-gold-gradient">Opportunity, Prosperity</span> and{" "}
          <span className="text-gold-gradient">Lasting Value</span> for Clients,
          Partners, Agents, Entrepreneurs and Communities.&rdquo;
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
