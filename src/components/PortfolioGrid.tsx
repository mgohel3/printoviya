"use client";

import { useState } from "react";
import Link from "next/link";
import { ImageOff, ArrowRight } from "lucide-react";
import type { PortfolioCategory, PortfolioProject } from "@/data/portfolio";
import { portfolioCategories } from "@/data/portfolio";

type Props = {
  projects: PortfolioProject[];
};

export default function PortfolioGrid({ projects }: Props) {
  const [active, setActive] = useState<"All" | PortfolioCategory>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...portfolioCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
              active === cat
                ? "border-blue bg-blue text-white"
                : "border-border text-navy hover:border-blue hover:text-blue"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0
          ? filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-light-blue text-blue">
                  <ImageOff className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-heading text-base font-semibold text-navy">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate">{project.service}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue">
                    View Project <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))
          : Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-off-white text-center"
              >
                <ImageOff className="h-8 w-8 text-slate/40" aria-hidden="true" />
                <p className="mt-3 font-heading text-sm font-semibold text-slate">
                  {i % 2 === 0 ? "Project Coming Soon" : "Your Project Here"}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
