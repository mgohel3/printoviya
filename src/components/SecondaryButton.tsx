import Link from "next/link";
import { Play } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: boolean;
  variant?: "outline" | "outline-light";
};

export default function SecondaryButton({
  href,
  children,
  className = "",
  icon = false,
  variant = "outline",
}: Props) {
  const styles =
    variant === "outline-light"
      ? "border-white/40 text-white hover:bg-white/10"
      : "border-border bg-white text-navy hover:border-navy";

  const iconBadge =
    variant === "outline-light" ? "bg-white/15 text-white" : "bg-navy text-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full border px-6 py-3.5 font-heading text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {icon && (
        <span className={`flex h-5 w-5 items-center justify-center rounded-full ${iconBadge}`}>
          <Play className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
        </span>
      )}
      {children}
    </Link>
  );
}
