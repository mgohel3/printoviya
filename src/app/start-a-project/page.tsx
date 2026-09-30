import type { Metadata } from "next";
import { Share2, ClipboardCheck, Lightbulb as LightbulbIcon, MonitorCog, Users, PackageCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "You tell us what you need. We'll handle the rest. Share your requirement and Printoviya will help you figure out the next step.",
};

const NEXT_STEPS = [
  { icon: Share2, label: "Share" },
  { icon: ClipboardCheck, label: "Review" },
  { icon: LightbulbIcon, label: "Suggest" },
  { icon: MonitorCog, label: "Prepare" },
  { icon: Users, label: "Coordinate" },
  { icon: PackageCheck, label: "Complete" },
];

export default function StartAProjectPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Start a Project" }]} />
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            You Tell Us What You Need. <span className="text-blue">We&apos;ll Handle the Rest.</span>
          </h1>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-heading text-xl font-semibold text-navy">What happens next</h2>
            <div className="mt-6 space-y-6">
              {NEXT_STEPS.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light-blue font-heading text-sm font-bold text-blue">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-2">
                    <step.icon className="h-4 w-4 text-blue" aria-hidden="true" />
                    <span className="font-heading text-sm font-semibold text-navy">
                      {step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-border bg-off-white p-6">
              <p className="text-sm leading-relaxed text-slate">
                Already have a printer? No problem — tell us who you&apos;re working with and
                we&apos;ll help coordinate specifications, artwork and communication.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
