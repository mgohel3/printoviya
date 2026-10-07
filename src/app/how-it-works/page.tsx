import type { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  Printer,
  Users2,
  Globe2,
  SmilePlus,
  BadgeCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import OJourney from "@/components/OJourney";
import FAQItem from "@/components/FAQItem";
import CTASection from "@/components/CTASection";
import { journeySteps } from "@/data/journey";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From requirement to reality — a simple A-to-Z process designed to remove the headache from printing.",
};

const TRUST_CHIPS = [
  { icon: Box, label: "Any Product" },
  { icon: Users2, label: "Any Printer" },
  { icon: Globe2, label: "Global Support" },
  { icon: SmilePlus, label: "No Headache" },
  { icon: BadgeCheck, label: "End-to-End Guidance" },
];

const STEP_DETAILS = [
  {
    body: "We discuss options based on your goals, budget and timeline.",
    checklist: ["Share your product idea or requirement", "Tell us quantity, size, material or finishing (if you know)", "Attach reference images (optional)"],
  },
  {
    body: "We discuss options based on your goals, budget and timeline.",
    checklist: ["We ask the right questions", "Suggest materials, finishes and options", "Guide you with budget and timeline"],
  },
  {
    body: "We create or refine your design and prepare print-ready files.",
    checklist: ["Create new designs or work on your files", "Check size, bleed, resolution and colors", "Ensure files are print-ready"],
  },
  {
    body: "We communicate with your chosen printer if needed.",
    checklist: ["Communicate with your chosen printer", "Share and confirm print specifications", "Handle technical questions if needed"],
  },
  {
    body: "We help with materials, finishes, technical questions and any issues.",
    checklist: ["Suggest the right materials and finishes", "Help with print-related issues", "Provide guidance to avoid common mistakes"],
  },
  {
    body: "On time, hassle-free. Just results.",
    checklist: ["Your product goes to print", "We ensure everything is aligned", "You get your final product — simple and stress-free"],
  },
];

const EXAMPLE_JOURNEY = [
  "Requirement",
  "Suggestions",
  "Design & Files",
  "Printer Coordination",
  "Final Product",
];

const MINI_FAQ = [
  { question: "Do I have to print with Printoviya?", answer: "No. You can print with any printer of your choice. We're here to support you." },
  { question: "Can you help me choose a printer?", answer: "Yes. We can suggest reliable printers based on your product, quantity and location." },
  { question: "What file formats can I share?", answer: "You can upload JPG, PNG, PDF, AI, PSD or any reference files you have." },
  { question: "How long does the process take?", answer: "It depends on the project. We'll give you a clear timeline after understanding your requirements." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} light={false} />
            <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              How It Works
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              A Simple Process. <span className="text-blue">From Your Idea to Final Print.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
              Whether you have a clear idea or just a rough requirement — we make the entire
              printing journey simple, guided and stress-free.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/start-a-project">Start Your Project</PrimaryButton>
              <SecondaryButton href="/portfolio" icon>
                See Example Project
              </SecondaryButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {TRUST_CHIPS.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-blue" aria-hidden="true" />
                  <span className="text-xs font-medium text-navy">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <PlaceholderPhoto label="You Tell Us. We Handle the Rest." className="aspect-[4/3] w-full rounded-3xl" />
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              The Printoviya Process
            </p>
            <h2 className="mt-2 max-w-xl font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              6 Simple Steps. <span className="text-blue">We&apos;ve Got You at Every Stage.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate">
            From design to print, we guide, coordinate and support you through the entire
            process — whether you print with us or with a printer of your choice.
          </p>
        </div>
        <div className="mt-14">
          <OJourney steps={journeySteps} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeySteps.map((step, i) => (
            <div key={step.number} className="overflow-hidden rounded-2xl border border-border bg-off-white">
              <PlaceholderPhoto icon={step.icon} className="aspect-[16/10] w-full" />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-navy">{step.title}</h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {STEP_DETAILS[i].checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate">
                      <span className="mt-0.5 text-blue">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Print With Any Printer
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              Your Choice. <span className="text-blue">Our Support.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
              You can print with us or with any printer of your choice, anywhere in the
              world. We&apos;re here to guide, prepare the files, coordinate and make the
              process easy.
            </p>
            <div className="mt-6">
              <PrimaryButton href="/start-a-project">Start Your Project</PrimaryButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Printer, label: "Local Printers" },
              { icon: Printer, label: "Any Printer, Anywhere" },
              { icon: MapPin, label: "USA" },
              { icon: Globe2, label: "Canada" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 text-center">
                <item.icon className="h-6 w-6 text-blue" aria-hidden="true" />
                <span className="text-xs font-medium text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Real Example Journey
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-navy sm:text-3xl">
              See How It Works <span className="text-blue">for a Real Project.</span>
            </h2>
          </div>
          <Link
            href="/portfolio/template-preview"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
          >
            View Full Case Study <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {EXAMPLE_JOURNEY.map((label, i) => (
            <div key={label} className="overflow-hidden rounded-2xl border border-border bg-white">
              <PlaceholderPhoto className="aspect-square w-full" />
              <p className="p-3 text-[11px] font-medium text-navy">
                {i + 1}. {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Quick Answers.</h2>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
            >
              See All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {MINI_FAQ.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
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
