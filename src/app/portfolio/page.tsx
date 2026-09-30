import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Package,
  Shirt,
  Printer,
  Megaphone,
  Gift,
  Sparkles,
  ArrowRight,
  ImageOff,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ideas designed. Projects delivered. Real Printoviya projects, coming soon.",
};

const CATEGORY_STRIP = [
  { label: "Branding", icon: Palette },
  { label: "Packaging", icon: Package },
  { label: "Merchandise", icon: Shirt },
  { label: "Print Solutions", icon: Printer },
  { label: "Social Media", icon: Megaphone },
  { label: "Custom Gifts", icon: Gift },
  { label: "And More", icon: Sparkles },
];

const FILTERS = [
  "All",
  "Branding & Identity",
  "Packaging",
  "Merchandise",
  "Print Solutions",
  "Social Media Design",
  "Custom Gifts",
];

const CATEGORY_ROWS = [
  {
    title: "Branding & Identity Design",
    subtitle: "Logo, brand identity, business stationery and complete brand assets.",
    icon: Palette,
    items: ["Brand Identity Design", "Business Stationery", "Brand Guidelines"],
  },
  {
    title: "Packaging Solutions",
    subtitle: "Custom packaging, product boxes, labels, tags, stickers and more.",
    icon: Package,
    items: ["Product Packaging", "Shopping Bags", "Labels & Stickers"],
  },
  {
    title: "Merchandise Printing",
    subtitle: "T-shirts, hoodies, mugs, bottles, tote bags, keychains, caps and more.",
    icon: Shirt,
    items: ["Apparel Printing", "Drinkware", "Tote Bags"],
  },
  {
    title: "Print Solutions",
    subtitle: "Business cards, flyers, brochures, banners, signs and more.",
    icon: Printer,
    items: ["Business Cards", "Marketing Materials", "Banners & Signs"],
  },
  {
    title: "Social Media Design",
    subtitle: "Posts, stories, banners and digital creatives for your brand.",
    icon: Megaphone,
    items: ["Social Media Creatives", "Campaign Designs", "Carousel Designs"],
  },
  {
    title: "Custom Gifts Design",
    subtitle: "Personalized gifts, event merchandise and custom products.",
    icon: Gift,
    items: ["Corporate Gifts", "Custom Keychains", "Custom Stationery"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} light={false} />
          <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Our Portfolio
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Ideas Designed. <span className="text-blue">Projects Delivered.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
            A showcase of the work we help bring to life — from brand identities to
            packaging, merchandise, print solutions and more. As real projects are approved
            for publishing, they&apos;ll appear here.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {CATEGORY_STRIP.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-blue" aria-hidden="true" />
                <span className="text-xs font-medium text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-6">
        <div className="container-px mx-auto max-w-[1440px] flex flex-wrap gap-2">
          {FILTERS.map((filter, i) => (
            <span
              key={filter}
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                i === 0
                  ? "border-navy bg-navy text-white"
                  : "border-border text-navy"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="space-y-16">
          {CATEGORY_ROWS.map((row) => (
            <div key={row.title}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-light-blue">
                    <row.icon className="h-5 w-5 text-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-navy">{row.title}</h2>
                    <p className="text-xs text-slate">{row.subtitle}</p>
                  </div>
                </div>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
                >
                  Start This Kind of Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {row.items.map((item) => (
                  <div
                    key={item}
                    className="overflow-hidden rounded-2xl border border-border bg-white"
                  >
                    <PlaceholderPhoto icon={row.icon} className="aspect-square w-full" />
                    <p className="p-4 text-xs font-semibold text-navy">{item}</p>
                  </div>
                ))}
                <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-off-white p-4 text-center">
                  <ImageOff className="h-7 w-7 text-slate/40" aria-hidden="true" />
                  <p className="mt-2 font-heading text-xs font-semibold text-slate">
                    Project Coming Soon
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Have an Idea?"
        highlight="Let's Bring It to Life."
        description="Whether you need a design, print-ready files or just guidance — we're here to help."
        primaryLabel="Start a Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
