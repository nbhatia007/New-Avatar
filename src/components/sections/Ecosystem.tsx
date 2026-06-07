"use client";

import { motion } from "framer-motion";
import { Users, Handshake, UserCheck, Lightbulb } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const AUDIENCES = [
  {
    icon: Users,
    title: "Clients",
    tagline: "Trusted Advisor",
    desc: "Better decisions. Stronger outcomes. Long-term value.",
    cta: "Real Estate or consulting client",
  },
  {
    icon: Handshake,
    title: "Partners",
    tagline: "Strategic Relationships",
    desc: "Shared opportunities, aligned incentives, mutual growth.",
    cta: "Strategic partner or referral source",
  },
  {
    icon: UserCheck,
    title: "Agents",
    tagline: "Build Your Career",
    desc: "Join a team built around systems, growth, and long-term success.",
    cta: "Real estate agent looking to grow",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs",
    tagline: "From Vision to Value",
    desc: "From start-up to scale-up — strategy, systems, and AI adoption.",
    cta: "Founder or business owner",
  },
];

export default function Ecosystem() {
  return (
    <SectionWrapper id="ecosystem" dark={true}>
      <div className="text-center mb-14">
        <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
          The Growth Ecosystem
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who I Serve
        </h2>
        <div className="gold-divider mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {AUDIENCES.map((a, index) => {
          const Icon = a.icon;
          return (
            <motion.a
              href="#contact"
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--navy-mid)] border border-[var(--navy-light)] p-7 flex flex-col hover:border-[var(--gold)]/30 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/20 transition-colors">
                <Icon size={18} className="text-[var(--gold)]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{a.title}</h3>
              <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
                {a.tagline}
              </p>
              <p className="text-[var(--gray-400)] text-sm leading-relaxed flex-1">
                {a.desc}
              </p>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border border-[var(--gold)]/20 p-8 text-center"
      >
        <p
          className="text-white text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &ldquo;I build growth ecosystems that create{" "}
          <span className="text-gold-gradient">opportunity, prosperity</span>{" "}
          and lasting value.&rdquo;
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
