"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionWrapper({
  id,
  className = "",
  children,
  dark = true,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        py-28 md:py-36
        px-6 md:px-12 lg:px-24
        border-t border-[var(--navy-light)]
        ${dark ? "bg-[var(--navy)]" : "bg-[var(--navy-mid)]"}
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}
