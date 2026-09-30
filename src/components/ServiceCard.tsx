import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export default function ServiceCard({ title, description, icon: Icon, href }: Props) {
  const content = (
    <>
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue">
          <Icon className="h-6 w-6 text-blue" aria-hidden="true" />
        </div>
        {href && (
          <ArrowUpRight
            className="h-5 w-5 text-slate transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue"
            aria-hidden="true"
          />
        )}
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
    </>
  );

  const cardClass =
    "group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5";

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {content}
      </Link>
    );
  }
  return <div className={cardClass}>{content}</div>;
}
