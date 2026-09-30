import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageOff } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Testimonial from "@/components/Testimonial";
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

const JOURNEY = ["Understand", "Design", "Prepare", "Coordinate", "Print", "Deliver"];

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

  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: project.title },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["Category", project.category],
              ["Client", project.client ?? "—"],
              ["Industry", project.industry ?? "—"],
              ["Location", project.location ?? "—"],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="text-xs uppercase tracking-wide text-white/50">{term}</dt>
                <dd className="mt-1 text-sm font-medium text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Challenge</h2>
            <p className="mt-3 text-base leading-relaxed text-slate">
              {project.challenge ?? "Details coming soon."}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Approach</h2>
            <p className="mt-3 text-base leading-relaxed text-slate">
              {project.approach ?? "Details coming soon."}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-heading text-2xl font-bold text-navy">A-to-Z Journey</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {JOURNEY.map((step, i) => (
              <div key={step} className="rounded-2xl border border-border bg-off-white p-4 text-center">
                <p className="font-heading text-xs font-semibold text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm font-medium text-navy">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(project.images && project.images.length > 0
            ? project.images
            : Array.from({ length: 3 })
          ).map((_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-2xl bg-light-blue text-blue"
            >
              <ImageOff className="h-8 w-8" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-off-white p-10">
          <h2 className="font-heading text-2xl font-bold text-navy">The Printoviya Difference</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
            The client can use Printoviya for printing, or use their own printer while
            Printoviya coordinates the process.
          </p>
        </div>

        {project.results && (
          <div className="mt-20">
            <h2 className="font-heading text-2xl font-bold text-navy">Results</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">{project.results}</p>
          </div>
        )}

        {project.testimonial && (
          <div className="mt-20 max-w-lg">
            <Testimonial {...project.testimonial} />
          </div>
        )}
      </section>

      <CTASection
        title="Have a"
        highlight="Similar Project?"
        primaryLabel="Start a Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
