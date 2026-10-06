import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import PrimaryButton from "@/components/PrimaryButton";
import CTASection from "@/components/CTASection";
import { catalogCategories, getProductBySlug, NOT_SURE_CTA } from "@/data/catalog";

export function generateStaticParams() {
  return catalogCategories.flatMap((c) =>
    c.products.map((p) => ({ category: c.slug, product: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category, product } = await params;
  const match = getProductBySlug(category, product);
  return { title: match?.product.title ?? "Product" };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const match = getProductBySlug(categorySlug, productSlug);

  if (!match) {
    notFound();
  }

  const { category, product } = match;
  const related = category.products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.title, href: `/products/${category.slug}` },
              { label: product.title },
            ]}
          />
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <PlaceholderPhoto icon={category.icon} label={product.title} className="aspect-square w-full rounded-3xl" />

          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              {category.title}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate">Available in standard, premium and custom options, including:</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {product.options.map((option) => (
                <li
                  key={option}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-slate"
                >
                  {option}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-light-blue px-6 py-5">
              <p className="text-sm font-medium text-navy">{NOT_SURE_CTA}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/start-a-project">Tell Us What You Need</PrimaryButton>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-heading text-2xl font-bold text-navy">
                More from {category.title}
              </h2>
              <Link
                href={`/products/${category.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${category.slug}/${p.slug}`}
                  className="overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
                >
                  <PlaceholderPhoto icon={category.icon} className="aspect-[4/3] w-full" />
                  <div className="p-4">
                    <p className="text-xs font-semibold text-navy">{p.title}</p>
                    <p className="text-[11px] text-slate">{p.options.length} options</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <CTASection
        title="Ready to bring this"
        highlight="idea to life?"
        primaryLabel="Start a Project"
        primaryHref="/start-a-project"
      />
    </>
  );
}
