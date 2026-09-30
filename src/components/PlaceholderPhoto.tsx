import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type Props = {
  icon?: LucideIcon;
  label?: string;
  className?: string;
  tone?: "light" | "navy";
};

/**
 * Local, offline stand-in for real photography. Used anywhere the design
 * reference shows a product/lifestyle photo but no real asset exists yet —
 * keeps the layout honest (clearly a placeholder) while matching the
 * reference's image-driven composition.
 */
export default function PlaceholderPhoto({
  icon: Icon = ImageIcon,
  label,
  className = "",
  tone = "light",
}: Props) {
  const bg = tone === "navy" ? "bg-navy-800" : "bg-light-blue";
  const iconColor = tone === "navy" ? "text-blue" : "text-blue";
  const labelColor = tone === "navy" ? "text-white/70" : "text-navy/70";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${bg} ${className}`}
      role="img"
      aria-label={label ?? "Placeholder image"}
    >
      <Icon className={`h-8 w-8 ${iconColor}`} aria-hidden="true" />
      {label && (
        <span className={`px-4 text-center text-xs font-medium ${labelColor}`}>{label}</span>
      )}
    </div>
  );
}
