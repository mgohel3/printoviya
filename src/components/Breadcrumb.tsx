import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
  light?: boolean;
};

export default function Breadcrumb({ items, light = true }: Props) {
  const mutedClass = light ? "text-white/60" : "text-slate";
  const activeClass = light ? "text-white" : "text-navy";
  const hoverClass = light ? "hover:text-white" : "hover:text-navy";

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-xs ${mutedClass}`}>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
          {item.href ? (
            <Link href={item.href} className={hoverClass}>
              {item.label}
            </Link>
          ) : (
            <span className={activeClass}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
