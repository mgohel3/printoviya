import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ideas designed. Projects delivered. Real Printoviya projects, coming soon.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Ideas Designed. <span className="text-blue">Projects Delivered.</span>
          </h1>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <PortfolioGrid projects={portfolioProjects} />
      </section>

      <CTASection
        title="Your Project"
        highlight="Could Be Next."
        primaryLabel="Start a Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
