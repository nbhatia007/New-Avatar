"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--navy)] px-6"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="w-14 h-14 border-2 border-[var(--gold)] flex items-center justify-center">
            <span className="text-[var(--gold)] text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              NB
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-5 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Naveen Bhatia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-8"
        >
          Entrepreneur &nbsp;·&nbsp; Operator &nbsp;·&nbsp; Investor &nbsp;·&nbsp; Transformation Leader
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-[var(--gray-300)] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building growth ecosystems that create opportunity,
          prosperity, and lasting value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button href="#platforms" variant="primary" className="text-sm px-8 py-3.5">
            Explore My Work
          </Button>
          <Button href="#contact" variant="outline" className="text-sm px-8 py-3.5">
            Let&apos;s Connect
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 pt-10 border-t border-[var(--navy-light)] grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: "30+", label: "Years" },
            { value: "3", label: "Platforms" },
            { value: "Triangle", label: "NC" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[var(--gold)] text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                {stat.value}
              </p>
              <p className="text-[var(--gray-500)] text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--gray-500)]"
      >
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
