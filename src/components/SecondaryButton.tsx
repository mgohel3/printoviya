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
      ? "border-white text-white hover:bg-white/10"
      : "border-navy text-navy hover:bg-navy hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 bg-transparent px-6 py-3.5 font-heading text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {icon && <Play className="h-4 w-4" aria-hidden="true" />}
      {children}
    </Link>
  );
}
