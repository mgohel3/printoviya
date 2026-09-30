import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQItem from "@/components/FAQItem";
import CTASection from "@/components/CTASection";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Printoviya's design, print and coordination services.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Frequently Asked <span className="text-blue">Questions.</span>
          </h1>
        </div>
      </section>

      <section className="container-px mx-auto max-w-4xl py-20">
        <div className="space-y-14">
          {faqData.map((group) => (
            <div key={group.category}>
              <h2 className="font-heading text-2xl font-bold text-navy">{group.category}</h2>
              <div className="mt-2">
                {group.items.map((item) => (
                  <FAQItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Still have"
        highlight="a question?"
        description="Tell us what you're trying to make and we'll help you figure out the rest."
        primaryLabel="Start a Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
