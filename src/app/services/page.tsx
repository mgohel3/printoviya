import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Headphones, Globe2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { journeySteps } from "@/data/journey";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Branding, packaging, merchandise, print solutions, social media design, dedicated designers and print consultation — all in one place.",
};

const WHY_CHOOSE = [
  { icon: Sparkles, title: "Complete Support", body: "From design to final product, we're with you." },
  { icon: ShieldCheck, title: "Flexible & Open", body: "Print with us or any printer. We still help." },
  { icon: Headphones, title: "Expert Guidance", body: "Technical support and printer coordination." },
  { icon: Globe2, title: "Global Experience", body: "Supporting customers worldwide." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-off-white">
        <Image
          src="/banners/services-breadcrumb-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-off-white via-off-white/90 to-off-white/10"
          aria-hidden="true"
        />
        <div className="container-px relative mx-auto max-w-[1440px] py-20">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "What We Do" }]} light={false} />
          <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Our Services
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Design. Prepare. Coordinate. <span className="text-blue">Print. All in One Place.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
            From branding to packaging, merchandise to print solutions — we provide
            end-to-end support to make your printing journey simple. You tell us what you
            need, and we handle the rest.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/start-a-project">Start Your Project</PrimaryButton>
            <SecondaryButton href="/how-it-works" icon>
              See How It Works
            </SecondaryButton>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {["Any Product", "Any Printer", "Global Support", "No Headache"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                <span className="text-xs font-medium text-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Service Categories"
            title="Creative Support"
            highlight="for Every Print Need."
            description="Whether you need a new design, print-ready files, help coordinating with a printer, or complete product support — our services are designed to make the process easy for individuals, businesses and brands worldwide."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-blue">
                <service.icon className="h-5 w-5 text-blue" aria-hidden="true" />
              </div>
              <p className="mt-4 font-heading text-xs font-semibold text-blue">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-heading text-base font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate">{service.short_description}</p>
              <Link
                href={service.cta.href}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue hover:text-blue-dark"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              How We Support
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              More Than Just Design. <span className="text-blue">End-to-End Support.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
              You don&apos;t have to figure it all out. We guide you from the first idea to
              the final printed product — whether you print with us or with a printer of
              your choice.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/start-a-project">Let&apos;s Talk About Your Project</PrimaryButton>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue/25" aria-hidden="true" />
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy shadow-lg">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="7" />
                <path d="M8 15 L5 15 L5 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {journeySteps.slice(0, 5).map((step, i) => {
              const angle = (i / 5) * 2 * Math.PI - Math.PI / 2;
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={step.number}
                  className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white p-2 text-center shadow-md"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                >
                  <step.icon className="h-4 w-4 text-blue" aria-hidden="true" />
                  <span className="mt-1 text-[9px] font-semibold leading-none text-navy">
                    {step.title.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title="From Ideas to"
            highlight="Real Products."
            description="A glimpse of what we help businesses and individuals create across different industries."
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
          >
            View Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`#${service.slug}`}
              className="group relative block aspect-square overflow-hidden rounded-2xl"
            >
              {service.imageSrc ? (
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  loading="eager"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-light-blue p-4 text-center">
                  <service.icon className="h-7 w-7 text-blue" aria-hidden="true" />
                  <p className="text-[11px] font-medium text-navy">{service.title.split(" ")[0]}</p>
                </div>
              )}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 p-4 text-xs font-semibold text-white">
                  {service.title} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8">
            <p className="font-heading text-sm font-semibold text-navy">You Tell Us. We Handle the Rest.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              {["Design?", "Print-ready files?", "Need a printer?", "Facing an issue?", "Not sure what to do?"].map((q) => (
                <li key={q} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue" aria-hidden="true" />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-heading text-sm font-semibold text-blue">No worries.</p>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Any Product. <span className="text-blue">Any Printer. Anywhere.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
              We work with businesses, individuals and printers across USA, Canada,
              Australia and beyond. Your requirement is our priority.
            </p>
            <div className="mt-6">
              <PrimaryButton href="/start-a-project">Start Your Project</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <SectionHeading align="center" eyebrow="Why Choose Our Services" title="Built Around" highlight="You." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-off-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue">
                <item.icon className="h-6 w-6 text-blue" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-sm font-semibold text-navy">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to Start"
        highlight="Your Project?"
        description="Tell us what you need — design, print or just guidance. We'll take care of the rest."
        primaryLabel="Get Started Today"
        primaryHref="/start-a-project"
      />
    </>
  );
}
