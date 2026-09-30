import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageOff } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
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
          <div className="flex aspect-square items-center justify-center rounded-3xl bg-light-blue text-blue">
            <ImageOff className="h-12 w-12" aria-hidden="true" />
          </div>

          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              {product.category}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate">{product.description}</p>

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
