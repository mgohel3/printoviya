import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  Printer,
  PackageCheck,
  SmilePlus,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import SectionHeading from "@/components/SectionHeading";
import OJourney from "@/components/OJourney";
import ServiceCard from "@/components/ServiceCard";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import CTASection from "@/components/CTASection";
import Testimonial from "@/components/Testimonial";
import { journeySteps } from "@/data/journey";
import { services } from "@/data/services";
import { products } from "@/data/products";

export const metadata: Metadata = {
  description:
    "Design. Coordinate. Print. We've Got You. Printoviya helps you move from requirement to final product — any product, any printer, anywhere.",
};

const TRUST_ITEMS = [
  { icon: Globe2, label: "Global Support" },
  { icon: Printer, label: "Any Printer" },
  { icon: PackageCheck, label: "All Print Products" },
  { icon: SmilePlus, label: "No Headache" },
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
      {/* Hero — full banner image */}
      <section className="relative isolate overflow-hidden">
        {/* Desktop / tablet banner */}
        <Image
          src="/hero/home-hero-desktop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover sm:block"
        />
        {/* Mobile banner (swap for a differently-cropped image so the subject isn't lost) */}
        <Image
          src="/hero/home-hero-mobile.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover sm:hidden"
        />
        <div className="absolute inset-0 bg-navy/55" aria-hidden="true" />

        <div className="container-px relative mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-center py-20 sm:min-h-[640px] lg:min-h-[680px]">
          <div className="max-w-2xl">
            <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Ideas to life. Without the headache.
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              Design. Coordinate. Print.
              <br />
              <span className="text-blue">We&apos;ve Got You.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              From design and print-ready artwork to printer coordination and production
              support, Printoviya helps you move from requirement to final product without
              the usual printing headache.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/start-a-project" variant="light">
                Tell Us What You Need
              </PrimaryButton>
              <SecondaryButton href="/how-it-works" icon variant="outline-light">
                See How It Works
              </SecondaryButton>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  <span className="text-xs font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A Simple Journey */}
      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="A Simple Journey" title="From" highlight="A to Z." />
          <p className="text-sm font-medium text-slate">You tell us. We take care of the rest.</p>
        </div>
        <div className="mt-14">
          <OJourney steps={journeySteps} />
        </div>
      </section>

      {/* More Than Printing */}
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="More Than Printing"
              title="Design. Products. Support."
              highlight="All in One Place."
              description="From branding to packaging, merchandise to social media — we help individuals, businesses and brands bring their ideas to life, without the runaround."
            />
            <div className="mt-8">
              <SecondaryButton href="/services">Explore All Services</SecondaryButton>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.short_description}
                icon={service.icon}
                href={`/services#${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Printoviya */}
      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Why Printoviya
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Your Partner <span className="text-blue">Beyond Printing.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate">
              You don&apos;t need to figure it all out. Whether you print with us or not,
              we&apos;re here to help you make it happen.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Expert guidance",
                "Printer coordination",
                "File & technical support",
                "Global reach",
                "Friendly, human support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  <span className="text-sm font-medium text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-navy p-10 text-white">
              <p className="font-heading text-lg font-semibold">100% Client-Focused</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-white/10 p-4">Global Support</div>
                <div className="rounded-xl bg-white/10 p-4">Any Printer, No Problem</div>
                <div className="col-span-2 rounded-xl bg-white/10 p-4">Hassle-Free Process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Products"
            title="Create. Customize. Print."
            highlight="Your Way."
            description="From everyday essentials to custom creations — explore popular products ready for your brand, business or special occasion."
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
            >
              <PlaceholderPhoto icon={product.icon} className="aspect-square w-full" />
              <p className="p-3 text-xs font-semibold text-navy">{product.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Real People."
            highlight="Real Experiences."
            align="left"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Testimonial key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to make"
        highlight="printing easier?"
        description="Tell us what you need — design, print or just guidance. We're here to help."
        primaryLabel="Start a Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
