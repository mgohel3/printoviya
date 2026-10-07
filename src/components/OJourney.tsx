import type { LucideIcon } from "lucide-react";

export type JourneyStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Square PO illustration for the larger step cards (e.g. How It Works) — the compact icon strip ignores this. */
  imageSrc?: string;
};

type Props = {
  steps: JourneyStep[];
  light?: boolean;
};

/**
 * Reusable A-to-Z journey / process strip used on Home, How It Works,
 * Print Concierge and Start a Project.
 */
export default function OJourney({ steps, light = false }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-2">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={step.number} className="relative flex flex-col items-center text-center">
            {i < steps.length - 1 && (
              <span
                className={`absolute left-1/2 top-7 hidden h-px w-full lg:block ${
                  light ? "bg-white/20" : "bg-blue/20"
                }`}
                aria-hidden="true"
              />
            )}
            <div
              className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border ${
                light ? "border-white/25 bg-navy-800" : "border-blue/20 bg-light-blue"
              }`}
            >
              <Icon className={`h-6 w-6 ${light ? "text-blue" : "text-blue"}`} aria-hidden="true" />
            </div>
            <p
              className={`mt-4 text-[11px] font-heading font-semibold uppercase tracking-wide ${
                light ? "text-blue" : "text-blue"
              }`}
            >
              {step.number}
            </p>
            <h3 className={`mt-1 font-heading text-sm font-semibold ${light ? "text-white" : "text-navy"}`}>
              {step.title}
            </h3>
            <p className={`mt-1.5 text-xs leading-relaxed ${light ? "text-white/70" : "text-slate"}`}>
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
