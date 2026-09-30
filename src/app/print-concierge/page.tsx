import type { Metadata } from "next";
import { MessageCircleQuestion, Lightbulb, Compass, Network, Wrench, PackageCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import PrimaryButton from "@/components/PrimaryButton";

export const metadata: Metadata = {
  title: "Print Concierge",
  description:
    "Printing shouldn't be this complicated. Tell us what you need and we'll help you figure out how to get it done — with us, or your own printer.",
};

const STEPS = [
  {
    icon: MessageCircleQuestion,
    title: "01 — Tell Us",
    body: "What are you trying to make? Start with your requirement — nothing else.",
  },
  {
    icon: Lightbulb,
    title: "02 — We Understand",
    body: "We clarify size, quantity, material, finish, usage, deadline and location.",
  },
  {
    icon: Compass,
    title: "03 — We Recommend",
    body: "We help identify the right production approach for your requirement.",
  },
  {
    icon: Network,
    title: "04 — We Coordinate",
    body: "Printoviya can work with Printoviya production, your own printer, or a third-party vendor.",
  },
  {
    icon: Wrench,
    title: "05 — We Solve",
    body: "Artwork issues, specification issues, communication issues, production issues.",
  },
  {
    icon: PackageCheck,
    title: "06 — You Get It Done",
    body: "Your project moves to completion — hassle-free.",
  },
];

export default function PrintConciergePage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Print Concierge" }]} />
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Printing Shouldn&apos;t Be <span className="text-blue">This Complicated.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Tell us what you need. We&apos;ll help you figure out how to get it done.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/start-a-project">Talk to a Print Concierge</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-16">
        <div className="container-px mx-auto max-w-3xl text-center">
          <p className="font-heading text-xl font-semibold leading-relaxed text-navy sm:text-2xl">
            You don&apos;t need to know the printer. You don&apos;t need to know the
            material. You don&apos;t need to know the technical specifications.{" "}
            <span className="text-blue">Start with your requirement.</span>
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.title} className="rounded-2xl border border-border bg-off-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue">
                <step.icon className="h-6 w-6 text-blue" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Print with us. <span className="text-blue">Or don&apos;t.</span> We&apos;re still
            here to help.
          </h2>
        </div>
      </section>

      <CTASection
        title="Have a requirement?"
        highlight="Talk to a Print Concierge."
        primaryLabel="Talk to a Print Concierge"
        primaryHref="/start-a-project"
      />
    </>
  );
}
