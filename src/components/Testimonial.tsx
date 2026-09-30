import { Star } from "lucide-react";

type Props = {
  quote: string;
  name: string;
  role: string;
};

export default function Testimonial({ quote, name, role }: Props) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex gap-0.5 text-blue">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-light-blue font-heading text-sm font-semibold text-blue">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-sm font-semibold text-navy">{name}</p>
          <p className="text-xs text-slate">{role}</p>
        </div>
      </div>
    </div>
  );
}
