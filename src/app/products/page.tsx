import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { catalogCategories } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Business essentials, packaging, marketing print, banners, signage, event displays, apparel and custom products — tell us what you need and we'll help you choose the right option.",
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
            You Don&apos;t Need to Know <span className="text-blue">Exactly What to Order.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
            Just tell us what you&apos;re trying to create. Browse by category below, or{" "}
            <Link href="/start-a-project" className="font-semibold text-blue hover:underline">
              talk to Printoviya
            </Link>{" "}
            if you&apos;d rather skip straight to a conversation.
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogCategories.map((category, i) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
            >
              {category.thumbnailSrc ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={category.thumbnailSrc}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="eager"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <PlaceholderPhoto icon={category.icon} className="aspect-[4/3] w-full" />
              )}
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-heading text-base font-semibold text-navy">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{category.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue">
                  {category.isCustom ? "Tell Us What You Need" : "Browse Products"}{" "}
                  <ArrowRight className="h-3.5 w-3.5" />
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
