import type { Metadata } from "next";
import Link from "next/link";
import { ImageOff, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Business cards, packaging, apparel, mugs, stationery and custom products — request a quote.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Create. Customize. <span className="text-blue">Print. Your Way.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Need help choosing the right option?{" "}
            <Link href="/start-a-project" className="font-semibold text-blue hover:underline">
              Talk to Printoviya.
            </Link>
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-light-blue text-blue">
                <ImageOff className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue">
                  {product.category}
                </p>
                <h3 className="mt-1 font-heading text-base font-semibold text-navy">
                  {product.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{product.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue">
                  Request Quote <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
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
