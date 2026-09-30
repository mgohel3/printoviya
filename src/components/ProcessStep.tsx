import type { ReactNode } from "react";

type Props = {
  number: string;
  title: string;
  children: ReactNode;
  isLast?: boolean;
};

export default function ProcessStep({ number, title, children, isLast = false }: Props) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-white">
          {number}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />}
      </div>
      <div className="pb-10">
        <h3 className="font-heading text-xl font-semibold text-navy">{title}</h3>
        <div className="mt-2 text-sm leading-relaxed text-slate">{children}</div>
      </div>
    </div>
  );
}
