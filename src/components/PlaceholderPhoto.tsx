import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type Props = {
  icon?: LucideIcon;
  label?: string;
  className?: string;
  tone?: "light" | "navy";
};

/**
 * Local, offline stand-in for real photography — a layered gradient +
 * icon composition rather than a flat "no image" box. Used anywhere the
 * design reference shows a photo but no licensed asset exists yet.
 */
export default function PlaceholderPhoto({
  icon: Icon = ImageIcon,
  label,
  className = "",
  tone = "light",
}: Props) {
  const isNavy = tone === "navy";

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden ${
        isNavy ? "bg-navy" : "bg-gradient-to-br from-light-blue via-white to-light-blue"
      } ${className}`}
      role="img"
      aria-label={label ?? "Placeholder image"}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl ${
          isNavy ? "bg-blue/25" : "bg-blue/20"
        }`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full blur-2xl ${
          isNavy ? "bg-white/10" : "bg-navy/10"
        }`}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(${isNavy ? "#fff" : "#0B1F3B"} 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />
      <div
        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${
          isNavy ? "bg-white/10 backdrop-blur" : "bg-white"
        }`}
      >
        <Icon className="h-7 w-7 text-blue" aria-hidden="true" />
      </div>
      {label && (
        <span
          className={`relative z-10 px-4 text-center text-xs font-medium ${
            isNavy ? "text-white/75" : "text-navy/70"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
