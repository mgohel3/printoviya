import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Factory,
  Layers,
  Palette,
  FileText,
  Box,
  Printer as PrinterIcon,
  Hexagon,
  ArrowRight,
  Grid3x3,
  Gem,
  FilesIcon,
  Star,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import CTASection from "@/components/CTASection";
import { portfolioProjects, getProjectBySlug } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project?.title ?? "Project" };
}

const CAPABILITY_ICONS = [Palette, FileText, Layers, Box, PrinterIcon];
const RESULT_ICONS = [Gem, Grid3x3, FilesIcon, PrinterIcon];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioProjects.filter((p) => p.slug !== project.slug).slice(0, 4);

  return (
    <>
      {project.isTemplatePreview && (
        <div className="bg-blue py-2.5 text-center text-xs font-semibold text-white">
          Template Preview — this page shows the case-study layout, not a real client project.
        </div>
      )}

      <section className="bg-off-white py-16">
        <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: project.title },
              ]}
              light={false}
            />
            <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              {project.category}
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              {project.title}
            </h1>
            {project.description && (
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
                {project.description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/start-a-project">Start a Similar Project</PrimaryButton>
              <SecondaryButton href="/portfolio">View More Projects</SecondaryButton>
            </div>
          </div>
          <PlaceholderPhoto
            icon={Box}
            label={project.title}
            className="aspect-[4/3] w-full rounded-3xl"
          />
        </div>
      </section>

      <section className="border-y border-border bg-white py-6">
        <div className="container-px mx-auto flex max-w-[1440px] flex-wrap justify-center gap-x-10 gap-y-4">
          {[
            "Branding & Packaging Design",
            "Print-Ready Files",
            "Material & Finish Guidance",
            "Printer Coordination",
            "Final Production Support",
          ].map((label, i) => {
            const Icon = CAPABILITY_ICONS[i % CAPABILITY_ICONS.length];
            return (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-blue" aria-hidden="true" />
                <span className="text-xs font-medium text-navy">{label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              The Client
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              {project.client ?? "Client name pending"}
            </h2>
            {project.description && (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">{project.description}</p>
            )}
            <dl className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-navy">
                <MapPin className="h-4 w-4 text-blue" aria-hidden="true" />
                <span className="font-medium">{project.location ?? "—"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy">
                <Factory className="h-4 w-4 text-blue" aria-hidden="true" />
                <span className="font-medium">Industry: {project.industry ?? "—"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy">
                <Hexagon className="h-4 w-4 text-blue" aria-hidden="true" />
                <span className="font-medium">Project Type: {project.service}</span>
              </div>
            </dl>
          </div>
          <PlaceholderPhoto icon={Box} label="Client product" className="aspect-[4/3] w-full rounded-3xl" />
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                The Challenge
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                What They <span className="text-blue">Needed Help With.</span>
              </h2>
              {project.challenge && (
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">{project.challenge}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {(project.needsHelpWith ?? []).map((item, i) => {
                const Icon = CAPABILITY_ICONS[i % CAPABILITY_ICONS.length];
                return (
                  <div key={item} className="rounded-2xl border border-border bg-white p-4 text-center">
                    <Icon className="mx-auto h-6 w-6 text-blue" aria-hidden="true" />
                    <p className="mt-2 text-xs font-medium text-navy">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Our Approach
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              A Simple & <span className="text-blue">Structured Process.</span>
            </h2>
            {project.approach && (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">{project.approach}</p>
            )}
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-2 gap-y-6">
            {(project.processSteps ?? []).map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2 px-2 text-center" style={{ width: "5.5rem" }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue font-heading text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-[11px] font-medium leading-tight text-navy">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                The Solution
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                A Complete <span className="text-blue">Packaging System.</span>
              </h2>
              {project.solution && (
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">{project.solution}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {(project.solutionHighlights ?? []).map((item) => (
                <PlaceholderPhoto
                  key={item}
                  icon={Box}
                  label={item}
                  className="aspect-square w-full rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.keyResults && project.keyResults.length > 0 && (
        <section className="container-px mx-auto max-w-[1440px] py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                Key Results
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                Beautiful Packaging. <span className="text-blue">Real Impact.</span>
              </h2>
              {project.results && (
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">{project.results}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {project.keyResults.map((item, i) => {
                const Icon = RESULT_ICONS[i % RESULT_ICONS.length];
                return (
                  <div key={item} className="rounded-2xl border border-border bg-off-white p-5">
                    <Icon className="h-6 w-6 text-blue" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold text-navy">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {project.testimonial && (
        <section className="bg-off-white py-20">
          <div className="container-px mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-8">
              <div className="flex gap-0.5 text-blue">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-light-blue font-heading text-sm font-semibold text-blue">
                  {project.testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy">
                    {project.testimonial.name}
                  </p>
                  <p className="text-xs text-slate">{project.testimonial.role}</p>
                </div>
              </div>
            </div>
            <PlaceholderPhoto icon={Box} label="Thank you card" className="aspect-[4/3] w-full rounded-3xl" />
          </div>
        </section>
      )}

      <CTASection
        title="Ready for Your"
        highlight="Own Project?"
        description="Whether you need a new design, print-ready files or just guidance — we're here to help."
        primaryLabel="Start Your Project"
        primaryHref="/start-a-project"
      />

      {otherProjects.length > 0 && (
        <section className="container-px mx-auto max-w-[1440px] py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-heading text-2xl font-bold text-navy">More Projects You Might Like</h2>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <PlaceholderPhoto icon={Box} className="aspect-square w-full" />
                <div className="p-3">
                  <p className="text-xs font-semibold text-navy">{p.title}</p>
                  <p className="text-[11px] text-slate">{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
