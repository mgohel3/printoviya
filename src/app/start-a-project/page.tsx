import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Timer,
  Printer,
  Ban,
  Send,
  ClipboardList,
  Lightbulb,
  Settings2,
  PackagePlus,
  Lightbulb as LightbulbIcon2,
  FileSearch,
  Users2,
  SlidersHorizontal,
  Calculator,
  Globe2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "You tell us what you need. We'll handle the rest. Share your requirement and Printoviya will help you figure out the next step.",
};

const TRUST_CHIPS = [
  { icon: Timer, label: "Quick Response" },
  { icon: ShieldCheck, label: "Expert Guidance" },
  { icon: Printer, label: "Any Printer" },
  { icon: Ban, label: "No Obligation" },
];

const SIDEBAR_ITEMS = [
  { icon: Lightbulb, title: "Expert Guidance", body: "We help you choose the right options." },
  { icon: FileSearch, title: "Artwork & File Support", body: "We check and prepare print-ready files." },
  { icon: Users2, title: "Printer Coordination", body: "We work with any printer you choose." },
  { icon: SlidersHorizontal, title: "Material & Finishing Suggestions", body: "We guide you on the best options." },
  { icon: Calculator, title: "Quantity & Cost Guidance", body: "We help you plan within your budget." },
  { icon: Globe2, title: "Global Support", body: "Working with customers across USA, Canada, Australia and beyond." },
];

const NEXT_STEPS = [
  { icon: Send, label: "You Share Your Requirement" },
  { icon: ClipboardList, label: "We Review & Understand" },
  { icon: LightbulbIcon2, label: "We Suggest Solutions" },
  { icon: Settings2, label: "Design, Prepare or Coordinate" },
  { icon: PackagePlus, label: "You Get Final Output" },
];

const MINI_FAQ = [
  {
    question: "Do I have to print with Printoviya?",
    answer:
      "No. Keep your own printer if you'd like — we'll still help with design, artwork and coordination.",
  },
  {
    question: "Can you help me choose a printer?",
    answer: "Yes. If you don't already have one, we'll help identify the right fit for your project.",
  },
  {
    question: "What file formats can I upload?",
    answer: "JPG, PNG, PDF, AI or PSD files up to 10MB each.",
  },
  {
    question: "How soon will I get a response?",
    answer: "We aim to review and respond to new requirements promptly.",
  },
];

export default function StartAProjectPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-off-white">
        <Image
          src="/banners/contact-po-on-phone.webp"
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
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Start a Project" }]}
            light={false}
          />
          <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Start a Project
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            You Tell Us What You Need. <span className="text-blue">We&apos;ll Handle the Rest.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
            Whether you need a new design, print-ready files, help coordinating with a
            printer, or just expert guidance — tell us about your project and we&apos;ll get
            back to you with the best solution.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {TRUST_CHIPS.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                <span className="text-xs font-medium text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div id="project-form" className="scroll-mt-24 rounded-3xl border border-border bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-heading text-2xl font-bold text-navy">Tell Us About Your Project</h2>
            <p className="mt-2 text-sm text-slate">
              Share a few details and our team will get back to you soon with suggestions,
              next steps or a quote.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="rounded-3xl bg-light-blue p-8 sm:p-10">
            <h3 className="font-heading text-xl font-bold text-navy">
              Not Sure What You Need? <span className="text-blue">That&apos;s Okay.</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              You don&apos;t need to have all the details. Share whatever you have and
              we&apos;ll help you figure out the rest.
            </p>
            <div className="mt-6 space-y-5">
              {SIDEBAR_ITEMS.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                    <item.icon className="h-4 w-4 text-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-navy">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
            What Happens Next?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate">
            A simple and clear process from your request to the final product.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-5">
            {NEXT_STEPS.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">
                {i < NEXT_STEPS.length - 1 && (
                  <span
                    className="absolute left-1/2 top-7 hidden h-px w-full bg-blue/20 sm:block"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-blue/20 bg-white">
                  <step.icon className="h-6 w-6 text-blue" aria-hidden="true" />
                </div>
                <p className="mt-3 font-heading text-xs font-semibold text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 max-w-[9rem] text-xs font-medium text-navy">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Any Product. <span className="text-blue">Any Printer. Anywhere.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
              Whether you print with us, or with a printer of your choice, we&apos;re here to
              support you with design, file preparation, technical guidance and
              coordination.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Design Support", "File Preparation", "Printer Coordination", "Material Suggestion", "Technical Guidance", "Ongoing Support"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-light-blue px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                  <span className="text-xs font-medium text-navy">{item}</span>
                </div>
              ),
            )}
          </div>
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
              Still have questions? Contact us <ArrowRight className="h-4 w-4" />
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
        title="Ready to Bring"
        highlight="Your Ideas to Life?"
        description="Tell us what you need — design, print or just guidance. We're here to help."
        primaryLabel="Start Your Project"
        primaryHref="#project-form"
      />
    </>
  );
}
