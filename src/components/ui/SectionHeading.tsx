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
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div className={`gold-divider ${centered ? "mx-auto" : ""} mb-5`} />
      {subtitle && (
        <p className="text-[var(--gray-300)] text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
