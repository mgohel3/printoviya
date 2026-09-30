import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PrimaryButton from "@/components/PrimaryButton";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, packaging, merchandise, print solutions, social media design, dedicated designers and print consultation — all in one place.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Design. Prepare. Coordinate. <span className="text-blue">Print. All in One Place.</span>
          </h1>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="space-y-12">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-off-white p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12 lg:p-10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-light-blue">
                <service.icon className="h-8 w-8 text-blue" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 font-heading text-2xl font-bold text-navy">{service.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
                  {service.full_description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-navy">
                      <CheckCircle2 className="h-4 w-4 text-blue" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <PrimaryButton href={service.cta.href} className="lg:justify-self-end">
                {service.cta.label}
              </PrimaryButton>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            You don&apos;t have to <span className="text-blue">print with us.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Already have a preferred printer? Keep them. We can still help with design,
            file preparation, specifications and coordinating the whole process on your
            behalf.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/start-a-project">Tell Us What You Need</PrimaryButton>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a requirement?"
        highlight="Let's scope it out."
        primaryLabel="Tell Us What You Need"
        primaryHref="/start-a-project"
      />
    </>
  );
}
