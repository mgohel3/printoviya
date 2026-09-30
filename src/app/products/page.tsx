import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import ProductsGrid from "@/components/ProductsGrid";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Business cards, packaging, apparel, mugs, stationery and custom products — request a quote and we'll guide you to the right option.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} light={false} />
          <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Our Products
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Create. Customize. <span className="text-blue">Print. Your Way.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
            From everyday essentials to custom creations — explore popular products ready
            for your brand, business or special occasion. Not sure which one fits?{" "}
            <Link href="/start-a-project" className="font-semibold text-blue hover:underline">
              Talk to Printoviya.
            </Link>
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {["Any Quantity", "Material Guidance", "Print-Ready Files", "Printer Coordination"].map(
              (label) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  <span className="text-xs font-medium text-navy">{label}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <ProductsGrid />
      </section>

      <CTASection
        title="Not sure what"
        highlight="you need?"
        description="Talk to a Print Concierge and we'll help you figure it out."
        primaryLabel="Talk to Printoviya"
        primaryHref="/start-a-project"
      />
    </>
  );
}
