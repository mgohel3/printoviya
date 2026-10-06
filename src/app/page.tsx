import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Printer,
  ArrowRight,
  Scissors,
  Ruler,
  FileWarning,
  HelpCircle,
  CreditCard,
  Package,
  GalleryHorizontal,
  BookOpen,
  Shirt,
  Sparkles,
} from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import POMascot from "@/components/POMascot";
import CampaignCarousel, { type CampaignSlide } from "@/components/CampaignCarousel";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  description:
    "Design it. Print it. Make it yours. From creative design to print-ready production, Printoviya helps businesses bring their ideas to life.",
};

// Each slide maps to one of the uploaded PO banner images — swap the
// PlaceholderPhoto in CampaignCarousel for a real <Image> per slide once
// the files are saved into public/banners (see DESIGN.md §14).
const CAROUSEL_SLIDES: CampaignSlide[] = [
  {
    pendingLabel: "\"More than Printing\" — PO at desk with branded products",
    src: "/banners/home-more-than-printing-desk.webp",
  },
  {
    pendingLabel: "\"Print More Than Just Paper\" — event booth photo",
    src: "/banners/home-print-more-than-paper-booth.webp",
  },
  {
    pendingLabel: "\"More than Printing\" — PO gesturing at event booth",
    src: "/banners/home-more-than-printing-booth-gesture.webp",
  },
];

const HERO_PRODUCTS = [
  { icon: CreditCard, label: "Business Card" },
  { icon: Package, label: "Packaging" },
  { icon: Shirt, label: "T-Shirt" },
];

const DESIGN_ITEMS = ["Branding", "Packaging Design", "Print-Ready Design", "Social Media Design"];
const PRINT_ITEMS = ["Business Cards", "Packaging", "Signage", "Marketing Materials", "Merchandise"];

const POPULAR_SERVICES = [
  { title: "Business Cards", icon: CreditCard, href: "/products/business-essentials/business-cards" },
  { title: "Packaging", icon: Package, href: "/products/packaging-product-branding" },
  { title: "Banners & Signage", icon: GalleryHorizontal, href: "/products/banners-large-displays" },
  { title: "Marketing Materials", icon: BookOpen, href: "/products/marketing-promotional-print" },
  { title: "Merchandise", icon: Shirt, href: "/products/apparel-branded-merchandise" },
  { title: "Custom Projects", icon: Sparkles, href: "/products/custom-products" },
];

const PO_PROBLEMS = [
  { icon: Ruler, label: "Wrong size?" },
  { icon: Scissors, label: "Missing bleed?" },
  { icon: FileWarning, label: "Low resolution?" },
  { icon: HelpCircle, label: "Confusing printer specs?" },
];

const TESTIMONIALS = [
  {
    quote:
      "Printoviya made our packaging process so easy. They understood our requirement, coordinated with our printer and we got perfect results!",
    name: "Sarah M.",
    role: "Small Business Owner, USA",
  },
  {
    quote:
      "Highly professional and super supportive. Even though we printed locally, Printoviya helped with the file preparation and coordination experience.",
    name: "James T.",
    role: "Entrepreneur, Canada",
  },
  {
    quote:
      "Great design support and quick response. They really take the headache out of printing. Will definitely work with them again!",
    name: "Emily R.",
    role: "Brand Manager, Australia",
  },
];

export default function HomePage() {
  return (
    <>
      <CampaignCarousel slides={CAROUSEL_SLIDES} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-off-white">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-[3.4rem]">
              Design it.
              <br />
              Print it.
              <br />
              <span className="text-blue">Make it yours.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate">
              From creative design to print-ready production, Printoviya helps businesses
              bring their ideas to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/start-a-project">Start a Project</PrimaryButton>
              <SecondaryButton href="/services">Explore Services</SecondaryButton>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full bg-light-blue" aria-hidden="true" />
              <POMascot className="h-32 w-32 sm:h-36 sm:w-36" />
              {HERO_PRODUCTS.map((item, i) => {
                const angle = (i / HERO_PRODUCTS.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 130;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={item.label}
                    className="absolute flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-2xl bg-white p-2 text-center shadow-lg"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                  >
                    <item.icon className="h-6 w-6 text-blue" aria-hidden="true" />
                    <span className="text-[9px] font-semibold leading-none text-navy">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Design + Print */}
      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <h2 className="max-w-xl font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Whatever you need to create. <span className="text-blue">We can help you bring it to life.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-off-white p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy">
                <Palette className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                Design
              </p>
              <h3 className="mt-1 font-heading text-2xl font-bold text-navy">Build the look.</h3>
              <ul className="mt-4 space-y-2">
                {DESIGN_ITEMS.map((item) => (
                  <li key={item} className="text-sm text-slate">
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
              >
                Explore Design <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl bg-off-white p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue">
                <Printer className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                Print
              </p>
              <h3 className="mt-1 font-heading text-2xl font-bold text-navy">Make it real.</h3>
              <ul className="mt-4 space-y-2">
                {PRINT_ITEMS.map((item) => (
                  <li key={item} className="text-sm text-slate">
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
              >
                Explore Print <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Printoviya — the uploaded "100% Client-Focused" banner */}
      <section className="bg-off-white py-16">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="relative aspect-[3/1] w-full overflow-hidden rounded-3xl">
            <Image
              src="/banners/client-focused-global.webp"
              alt="100% Client-Focused — Global Support, Any Printer No Problem, Hassle-Free Process"
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Print Concierge — the uploaded "Your Print Concierge" banner already carries its own headline/flow/CTA, so it runs full-width rather than squeezed into a text column */}
      <section className="bg-navy py-16 text-white">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="relative aspect-[8/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/banners/home-print-concierge-flow.webp"
              alt="Your Print Concierge — you focus on your business, we handle the printing part"
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/print-concierge" variant="light">
              Meet Your Print Concierge
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            What are you printing <span className="text-blue">today?</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {POPULAR_SERVICES.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
              >
                <div className="flex aspect-square items-center justify-center bg-light-blue">
                  <item.icon className="h-8 w-8 text-blue" aria-hidden="true" />
                </div>
                <p className="p-3 text-xs font-semibold text-navy">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — the uploaded 5-step banner carries its own flow + headline */}
      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            From idea to print. <span className="text-blue">Without the headache.</span>
          </h2>
          <div className="relative mt-10 aspect-[8/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/banners/home-how-it-works-flow.webp"
              alt="You Share Your Idea → We Design & Prepare → We Handle Printer Requirements → Your Products Get Printed → Delivered to You"
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PO Personality Section */}
      <section className="bg-navy py-20 text-white">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center lg:order-2">
            <POMascot className="h-40 w-40" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
              Got a print problem? <span className="text-blue">Send it to PO.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
              PO knows the little things that can mess up a print job.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {PO_PROBLEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
                  <item.icon className="h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 font-heading text-lg font-semibold text-blue">PO&apos;s got it.</p>
            <div className="mt-6">
              <PrimaryButton href="/print-concierge" variant="light">
                Ask PO
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon / Shop teaser — the uploaded "Custom Products" banner */}
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px] text-center">
          <span className="inline-flex rounded-full bg-light-blue px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-wide text-blue">
            Coming Soon
          </span>
          <h2 className="mx-auto mt-4 max-w-xl font-heading text-3xl font-bold text-navy sm:text-4xl">
            Something new is coming to <span className="text-blue">PO World.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate">
            Custom products. Special collections. Seasonal drops.
          </p>
          <div className="relative mx-auto mt-8 aspect-[2.4/1] w-full overflow-hidden rounded-3xl">
            <Image
              src="/banners/custom-products-made-yours.webp"
              alt="Custom Products — something specific in mind? Tell us what you need."
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Real People. <span className="text-blue">Real Experiences.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Testimonial key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[40px] border-blue/10"
          aria-hidden="true"
        />
        <div className="container-px relative mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Have something in mind? <span className="text-blue">Let&apos;s make it real.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Design it. Print it. Brand it.</p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/start-a-project" variant="light">
              Start Your Project
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
