"use client";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold text-sm tracking-wide transition-all duration-200 rounded-sm px-7 py-3.5 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)] active:scale-95",
    outline:
      "border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] active:scale-95",
    ghost:
      "text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-4 hover:underline",
  };

  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
