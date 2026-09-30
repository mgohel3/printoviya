import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Printer,
  Globe2,
  Ban,
  Clock3,
  Lightbulb,
  Compass,
  Network,
  FileSearch,
  Wrench,
  PackageCheck,
  CheckCircle2,
  Building2,
  Rocket,
  User,
  ArrowRight,
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
  title: "Print Concierge",
  description:
    "Printing shouldn't be this complicated. Tell us what you need and we'll help you figure out how to get it done — with us, or your own printer.",
};

const TRUST_CHIPS = [
  { icon: ShieldCheck, label: "Expert Guidance" },
  { icon: Printer, label: "Any Printer" },
  { icon: Globe2, label: "Global Support" },
  { icon: Ban, label: "No Obligation" },
  { icon: Clock3, label: "Save Time & Avoid Errors" },
];

const WHAT_IS_IT = [
  { icon: Lightbulb, title: "Understand Your Need", body: "We listen and ask the right questions." },
  { icon: Compass, title: "Suggest the Right Options", body: "Materials, sizes and printing methods." },
  { icon: Network, title: "Coordinate With Your Printer", body: "We work with any printer you choose." },
  { icon: FileSearch, title: "Review Files & Prevent Errors", body: "We check artwork, size, bleed, resolution and more." },
  { icon: Wrench, title: "Solve Print-Related Issues", body: "Facing a problem? We help you find a solution." },
  { icon: PackageCheck, title: "End-to-End Support", body: "From idea to final product, we're with you." },
];

const LOVE_IT = [
  "Clear guidance, no technical jargon",
  "Honest suggestions based on your needs",
  "Works with any printer worldwide",
  "Helps you avoid common print mistakes",
  "Saves your time, effort and cost",
];

const AUDIENCE = [
  { icon: Rocket, title: "Startups & Small Businesses", body: "Get expert guidance without the confusion." },
  { icon: Building2, title: "Established Brands", body: "Streamline your print process." },
  { icon: User, title: "Individuals & Creators", body: "Bring your ideas to life with the right support." },
];

const USE_CASES = [
  "Choose the right packaging for your product",
  "Prepare print-ready files for your printer",
  "Find the best options for merchandise printing",
  "Select materials and finishes for business stationery",
  "Get guidance for banners, signs and large format",
  "Plan customized gifts for your brand",
];

const MINI_FAQ = [
  { question: "Do I have to print with Printoviya?", answer: "No — Print Concierge support works whether or not you print with us." },
  { question: "Do you review print files for errors?", answer: "Yes. We check artwork for size, bleed, resolution and color before it goes to print." },
  { question: "Can you help me choose a printer?", answer: "Yes, if you don't already have one we can help you find the right fit." },
  { question: "Can you suggest materials and finishes?", answer: "Yes, that's a core part of the Print Concierge service." },
  { question: "What information do I need to share?", answer: "Just your requirement — quantity, size and deadline help, but aren't required to start." },
  { question: "Do you work with international printers?", answer: "Yes, we coordinate with printers across USA, Canada, Australia and beyond." },
];

export default function PrintConciergePage() {
  return (
    <>
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Print Concierge" }]} light={false} />
            <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Print Concierge
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              Your Personal <span className="text-blue">Print Concierge.</span>
              <br />
              Any Product. Any Printer. Anywhere.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
              Not sure where to print or how to get it done? That&apos;s okay. Our Print
              Concierge is here to guide you, coordinate with printers, and make the entire
              process simple and stress-free.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/start-a-project">Get Concierge Support</PrimaryButton>
              <SecondaryButton href="/how-it-works" icon>
                How It Works
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
          <PlaceholderPhoto label="Print Concierge" className="aspect-[4/3] w-full rounded-3xl" />
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              What Is Print Concierge?
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              More Than a Service. <span className="text-blue">A Partner by Your Side.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
              Print Concierge is a dedicated support service to help you with everything
              related to printing. From understanding your requirement to suggesting the
              right materials, finishes, printers and production options — we make it easy,
              even if you don&apos;t print with us.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {WHAT_IS_IT.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-off-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-light-blue">
                  <item.icon className="h-5 w-5 text-blue" aria-hidden="true" />
                </div>
                <p className="mt-3 font-heading text-sm font-semibold text-navy">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <PlaceholderPhoto label="printoviya" className="aspect-[4/3] w-full rounded-3xl" />
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Why You&apos;ll Love It
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              No Confusion. No Headache. <span className="text-blue">Just Results.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
              Printing can be confusing — different materials, finishes, file formats and
              printers. Our Print Concierge simplifies everything, so you can focus on your
              ideas while we handle the details.
            </p>
            <ul className="mt-6 space-y-3">
              {LOVE_IT.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
          How It Works
        </p>
        <h2 className="mt-2 max-w-xl font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
          A Simple Process. <span className="text-blue">From Your Idea to Final Print.</span>
        </h2>
        <div className="mt-12">
          <OJourney steps={journeySteps} />
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <PlaceholderPhoto label="Any Printer. Anywhere." className="aspect-[4/3] w-full rounded-3xl" tone="navy" />
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Who Is It For?
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              Designed for Creators, <span className="text-blue">Businesses and Brands.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
              Whether you&apos;re a startup, small business, established brand or an
              individual — our Print Concierge is here to make your printing journey easy.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {AUDIENCE.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-4">
                  <item.icon className="h-6 w-6 text-blue" aria-hidden="true" />
                  <p className="mt-2 text-xs font-semibold text-navy">{item.title}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Common Use Cases
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-navy sm:text-3xl">
              How We Can <span className="text-blue">Help You.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
          >
            See More Examples <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {USE_CASES.map((label, i) => (
            <div key={label} className="overflow-hidden rounded-2xl border border-border bg-white">
              <PlaceholderPhoto className="aspect-square w-full" />
              <p className="p-3 text-[11px] leading-snug text-slate">
                {String(i + 1)}. {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
            >
              Have more questions? Contact us <ArrowRight className="h-4 w-4" />
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
        title="Let's Make Your"
        highlight="Printing Journey Simple."
        description="Tell us what you need — design, print-ready files, or just guidance. We're here to help at every step."
        primaryLabel="Start Your Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
