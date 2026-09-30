"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { products, productCategories } from "@/data/products";

export default function ProductsGrid() {
  const [active, setActive] = useState<"All" | (typeof productCategories)[number]>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...productCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
              active === cat
                ? "border-navy bg-navy text-white"
                : "border-border text-navy hover:border-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
          >
            <PlaceholderPhoto icon={product.icon} className="aspect-[4/3] w-full" />
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
    </div>
  );
}
