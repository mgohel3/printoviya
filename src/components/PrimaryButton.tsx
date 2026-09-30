import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: boolean;
};

export default function PrimaryButton({ href, children, className = "", icon = true }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue px-6 py-3.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${className}`}
    >
      {children}
      {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
