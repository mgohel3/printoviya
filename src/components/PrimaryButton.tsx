import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: boolean;
  /** "dark" (default): navy pill for light backgrounds. "light": white pill for navy/dark backgrounds. */
  variant?: "dark" | "light";
};

export default function PrimaryButton({
  href,
  children,
  className = "",
  icon = true,
  variant = "dark",
}: Props) {
  const styles =
    variant === "light"
      ? "bg-white text-navy hover:bg-light-blue focus-visible:outline-white"
      : "bg-navy text-white hover:bg-blue focus-visible:outline-blue";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-heading text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles} ${className}`}
    >
      {children}
      {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
