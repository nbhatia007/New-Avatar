interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold text-white mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div className={`gold-divider ${centered ? "mx-auto" : ""} mb-6`} />
      {subtitle && (
        <p className="text-[var(--gray-400)] text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
