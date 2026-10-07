import type { Metadata } from "next";
import Image from "next/image";
import {
  Compass,
  Eye,
  Heart,
  Globe2,
  Users2,
  Target,
  CheckSquare,
  Handshake,
  Lightbulb,
  Settings,
  PackageCheck,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import PrimaryButton from "@/components/PrimaryButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Printoviya is a partner in every step of your printing journey — design, coordination and production, without you having to figure it out alone.",
};

const TRUST_CHIPS = [
  { icon: Globe2, label: "Global Mindset" },
  { icon: Users2, label: "People First" },
  { icon: Lightbulb, label: "Solution Focused" },
  { icon: Heart, label: "Always Support" },
];

const STATS = [
  { value: "500+", label: "Projects Supported" },
  { value: "3+", label: "Countries Served" },
  { value: "100+", label: "Happy Clients" },
  { value: "End-to-End", label: "Support Always" },
];

const VALUES = [
  "Clarity",
  "Reliability",
  "Ownership",
  "Practical Design",
  "Problem Solving",
  "Customer First",
];

const TRUST_GRID = [
  { title: "Real Support", body: "We are here to guide you in every step.", icon: Handshake },
  { title: "Expert Guidance", body: "From design to technical details, we make it simple.", icon: Lightbulb },
  { title: "Printer Coordination", body: "We work with the right printer for the right product.", icon: Settings },
  { title: "Any Product", body: "From business cards to custom merchandise and packaging.", icon: PackageCheck },
  { title: "Global Reach", body: "Supporting customers across USA, Canada, Australia and beyond.", icon: Globe2 },
  { title: "No Headache", body: "Clear communication and a hassle-free process.", icon: HeartHandshake },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} light={false} />
          <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            About Printoviya
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            More Than Printing. <span className="text-blue">A Partner In Every Step.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
            Printoviya is built to make the printing journey simple, clear and hassle-free.
            From your first idea to the final printed product, we&apos;re here to guide,
            support and coordinate — whether you print with us or with a printer of your
            choice.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/start-a-project">Our Story</PrimaryButton>
          </div>
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Our Story"
            title="From Ideas to"
            highlight="Possibilities."
            description="Printoviya started with a simple belief — printing shouldn't be complicated. We saw businesses and individuals struggle with design files, printer communication, product selection and technical details. So we created a single place where you can get expert guidance and support through the entire journey. Today, Printoviya is more than a printing company — we are a creative and print partner for people, businesses and brands worldwide."
          />
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Globe2, title: "Global Perspective", body: "Supporting customers across USA, Canada, Australia and beyond." },
              { icon: Users2, title: "Multi-Printer Network", body: "We work with the right printers for the right products." },
              { icon: Compass, title: "Design + Print Expertise", body: "Creative support and technical guidance in one place." },
              { icon: Heart, title: "People Focused", body: "Real support. Real communication. Real results." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-off-white p-5">
                <item.icon className="h-6 w-6 text-blue" aria-hidden="true" />
                <p className="mt-3 font-heading text-sm font-semibold text-navy">{item.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-light-blue p-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          <div className="rounded-2xl border border-border bg-off-white p-8">
            <Target className="h-8 w-8 text-blue" aria-hidden="true" />
            <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              Our Mission
            </p>
            <h3 className="mt-1 font-heading text-xl font-semibold text-navy">
              Make Printing <span className="text-blue">Easier for Everyone.</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              To simplify the printing process by providing design support, expert guidance
              and complete coordination — so anyone can bring their ideas to life without
              the headache.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-off-white p-8">
            <Eye className="h-8 w-8 text-blue" aria-hidden="true" />
            <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              Our Vision
            </p>
            <h3 className="mt-1 font-heading text-xl font-semibold text-navy">
              A Global Partner <span className="text-blue">for Print Possibilities.</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              To be the most reliable and people-focused partner in the printing industry,
              helping individuals, businesses and brands worldwide turn their ideas into
              high-quality printed products, with confidence and ease.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-off-white p-8">
            <CheckSquare className="h-8 w-8 text-blue" aria-hidden="true" />
            <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              Our Values
            </p>
            <ul className="mt-3 space-y-2">
              {VALUES.map((value) => (
                <li key={value} className="flex items-center gap-2 text-sm font-medium text-navy">
                  <CheckSquare className="h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Why Printoviya
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            You Tell Us. <span className="text-blue">We Handle the Rest.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
            You focus on your ideas. We take care of the details — design, files, printer
            coordination, production and problem solving.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/start-a-project">Let&apos;s Make It Happen</PrimaryButton>
          </div>
        </div>
      </section>

      <section id="why-printoviya" className="container-px mx-auto max-w-[1440px] scroll-mt-24 py-20">
        <SectionHeading
          eyebrow="Why Brands Trust Us"
          title="A Partner You Can"
          highlight="Rely On."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative aspect-[3/1] w-full overflow-hidden rounded-3xl">
            <Image
              src="/banners/about-why-printoviya-journey.webp"
              alt="From idea to final product — Printoviya guides you at every step."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/1] w-full overflow-hidden rounded-3xl">
            <Image
              src="/banners/about-why-printoviya-planning.webp"
              alt="Thoughtful planning and design support behind every Printoviya project."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_GRID.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-off-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-blue">
                <item.icon className="h-5 w-5 text-blue" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-sm font-semibold text-navy">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to Bring"
        highlight="Your Ideas to Life?"
        description="Whether you need a design, print-ready files or just guidance — we're here to help."
        primaryLabel="Start Your Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
