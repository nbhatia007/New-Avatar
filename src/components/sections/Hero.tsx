"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

const ROLES = ["Entrepreneur", "Operator", "Investor", "Transformation Leader"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--navy)] px-6"
    >
      {/* Background gradient orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 pt-20">
        {/* NB monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 border-2 border-[var(--gold)] flex items-center justify-center">
            <span
              className="text-[var(--gold)] text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              NB
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Naveen Bhatia
        </motion.h1>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {ROLES.map((role, i) => (
            <span key={role} className="flex items-center gap-2">
              <span className="text-[var(--gold)] text-sm md:text-base font-medium tracking-widest uppercase">
                {role}
              </span>
              {i < ROLES.length - 1 && (
                <span className="text-[var(--gold-dark)] text-xs">·</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-[var(--gray-300)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building Growth Ecosystems That Create Opportunity,
          Prosperity &amp; Lasting Value — for Clients, Partners, Agents,
          and Communities.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button href="#platforms" variant="primary" className="text-base px-8 py-4">
            Explore My Work
          </Button>
          <Button href="#contact" variant="outline" className="text-base px-8 py-4">
            Let&apos;s Connect
          </Button>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 pt-10 border-t border-[var(--navy-light)] grid grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          {[
            { value: "30+", label: "Years of Experience" },
            { value: "3", label: "Active Platforms" },
            { value: "Triangle", label: "NC Market" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-[var(--gold)] text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-[var(--gray-500)] text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--gray-500)]"
      >
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
