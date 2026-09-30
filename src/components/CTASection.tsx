import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

type Props = {
  title: string;
  highlight?: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title,
  highlight,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[40px] border-blue/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full border-[30px] border-blue/10"
        aria-hidden="true"
      />
      <div className="container-px relative mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {title} {highlight && <span className="text-blue">{highlight}</span>}
        </h2>
        {description && <p className="mx-auto mt-4 max-w-xl text-white/75">{description}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
          {secondaryLabel && secondaryHref && (
            <SecondaryButton href={secondaryHref} variant="outline-light">
              {secondaryLabel}
            </SecondaryButton>
          )}
        </div>
      </div>
    </section>
  );
}
