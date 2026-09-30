import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import PrimaryButton from "@/components/PrimaryButton";
import CTASection from "@/components/CTASection";
import { products, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.title ?? "Product" };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-px mx-auto max-w-[1440px]">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.title },
            ]}
          />
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1440px] py-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <PlaceholderPhoto icon={product.icon} label={product.title} className="aspect-square w-full rounded-3xl" />

          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              {product.category}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate">{product.description}</p>
            <p className="mt-3 text-sm font-medium text-navy">
              <span className="text-blue">Ideal for:</span> {product.idealFor}
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy">
                  Specifications
                </h2>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {product.specifications.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-slate"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy">
                  Materials
                </h2>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {product.materials.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-slate"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy">
                  Finishes
                </h2>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {product.finishes.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-slate"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-light-blue px-6 py-5">
              <p className="text-sm font-medium text-navy">
                Need help choosing the right option? Talk to Printoviya.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/start-a-project">Request a Quote</PrimaryButton>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-heading text-2xl font-bold text-navy">You Might Also Need</h2>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
              >
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
                >
                  <PlaceholderPhoto icon={p.icon} className="aspect-[4/3] w-full" />
                  <div className="p-4">
                    <p className="text-xs font-semibold text-navy">{p.title}</p>
                    <p className="text-[11px] text-slate">{p.category}</p>
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
