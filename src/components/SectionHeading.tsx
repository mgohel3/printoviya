type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  light = false,
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 font-heading text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-blue" : "text-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title} {highlight && <span className="text-blue">{highlight}</span>}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/75" : "text-slate"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
