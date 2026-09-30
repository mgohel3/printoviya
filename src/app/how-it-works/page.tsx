import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProcessStep from "@/components/ProcessStep";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From requirement to reality — a simple A-to-Z process designed to remove the headache from printing.",
};

const STEPS = [
  {
    number: "01",
    title: "Tell Us What You Need",
    body: "No technical knowledge required. Share your idea, requirement or problem, in your own words.",
  },
  {
    number: "02",
    title: "We Understand",
    body: "We ask the right questions and clarify the requirement — size, quantity, material, deadline.",
  },
  {
    number: "03",
    title: "Design & Prepare",
    body: "We create or refine artwork and make files production-ready.",
  },
  {
    number: "04",
    title: "Coordinate",
    body: "We coordinate with Printoviya production or your preferred printer.",
  },
  {
    number: "05",
    title: "Produce",
    body: "Printing, manufacturing and finishing takes place.",
  },
  {
    number: "06",
    title: "Deliver",
    body: "The customer receives the final product — on time, hassle-free.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            From Requirement <span className="text-blue">to Reality.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            A simple A-to-Z process designed to remove the headache from printing.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="mx-auto max-w-2xl">
          {STEPS.map((step, i) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              isLast={i === STEPS.length - 1}
            >
              {step.body}
            </ProcessStep>
          ))}
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto max-w-[1440px] grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-8">
            <h3 className="font-heading text-xl font-semibold text-navy">
              Already Have a Printer?
            </h3>
            <p className="mt-2 font-heading text-sm font-semibold text-blue">
              Perfect. Keep your printer.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Printoviya can still help with artwork, specifications, file preparation,
              coordination, communication and troubleshooting.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8">
            <h3 className="font-heading text-xl font-semibold text-navy">Need a Designer?</h3>
            <p className="mt-2 font-heading text-sm font-semibold text-blue">
              We&apos;ll provide one.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              For US, UK and Canada clients, we offer a dedicated designer, managed by
              Printoviya, working directly with your team.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Requirement?"
        highlight="Let's Get Started."
        primaryLabel="Start a Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
