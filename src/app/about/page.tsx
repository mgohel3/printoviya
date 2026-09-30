import type { Metadata } from "next";
import { Compass, Eye, Sparkles, ShieldCheck, Handshake, PenLine, PuzzleIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About",
  description:
    "Printoviya is a partner in every step of your printing journey — design, coordination and production, without you having to figure it out alone.",
};

const DIFFERENTIATORS = [
  { title: "Design support", icon: PenLine },
  { title: "Print preparation", icon: Sparkles },
  { title: "Vendor coordination", icon: Handshake },
  { title: "Production problem solving", icon: PuzzleIcon },
  { title: "Dedicated designers", icon: ShieldCheck },
  { title: "Flexible printer choice", icon: Compass },
];

const VALUES = [
  "Clarity",
  "Reliability",
  "Ownership",
  "Practical Design",
  "Problem Solving",
  "Customer First",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            More Than Printing. <span className="text-blue">A Partner in Every Step.</span>
          </h1>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our Story"
            title="Finding a designer is easy."
            highlight="Coordinating everything isn't."
          />
          <div className="space-y-4 text-base leading-relaxed text-slate">
            <p>
              Customers can find designers. Customers can find printers. Customers can buy
              products. The difficult part has always been coordinating everything —
              matching the right design to the right printer, in the right format, on time.
            </p>
            <p>Printoviya exists to simplify that journey.</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-off-white p-8">
            <Compass className="h-8 w-8 text-blue" aria-hidden="true" />
            <h3 className="mt-4 font-heading text-xl font-semibold text-navy">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Make printing and design easier by taking the coordination headache away from
              the customer.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-off-white p-8">
            <Eye className="h-8 w-8 text-blue" aria-hidden="true" />
            <h3 className="mt-4 font-heading text-xl font-semibold text-navy">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Build a global support layer between customers, designers, printers,
              manufacturers and product suppliers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <SectionHeading
            align="center"
            eyebrow="What Makes Us Different"
            title="A partner across the"
            highlight="whole journey."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="flex items-center gap-4 rounded-2xl bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-light-blue">
                  <item.icon className="h-6 w-6 text-blue" aria-hidden="true" />
                </div>
                <p className="font-heading text-sm font-semibold text-navy">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <SectionHeading align="center" eyebrow="Values" title="What we" highlight="stand on." />
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {VALUES.map((value) => (
            <span
              key={value}
              className="rounded-full border border-border px-6 py-3 font-heading text-sm font-semibold text-navy"
            >
              {value}
            </span>
          ))}
        </div>
      </section>

      <CTASection
        title="Have a requirement?"
        highlight="Let's talk."
        description="Tell us what you're trying to make and we'll help you figure out how."
        primaryLabel="Start Your Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
