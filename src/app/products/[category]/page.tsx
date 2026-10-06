import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import PrimaryButton from "@/components/PrimaryButton";
import CTASection from "@/components/CTASection";
import {
  catalogCategories,
  getCategoryBySlug,
  CUSTOM_PRODUCTS_HELP,
  CUSTOM_PRODUCTS_PROMPTS,
} from "@/data/catalog";

export function generateStaticParams() {
  return catalogCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  return { title: category?.title ?? "Products" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <>
      {category.isCustom ? (
        <section className="bg-off-white py-16">
          <div className="container-px mx-auto max-w-[1440px]">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: category.title },
              ]}
              light={false}
            />
            <div className="relative mt-6 aspect-[2.4/1] w-full overflow-hidden rounded-3xl">
              <Image
                src="/banners/custom-products-showcase.webp"
                alt="Custom Products — something specific in mind? We'll help with sourcing, design, specifications, printer coordination and print-ready files."
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-off-white py-20">
          <div className="container-px mx-auto max-w-[1440px]">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: category.title },
              ]}
              light={false}
            />
            <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              {category.tagline}
            </p>
            <h1 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              {category.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">{category.description}</p>
          </div>
        </section>
      )}

      {category.isCustom ? (
        <section className="container-px mx-auto max-w-[1440px] py-20">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy">
                Have Something Specific in Mind?
              </h2>
              <ul className="mt-6 space-y-3">
                {CUSTOM_PRODUCTS_PROMPTS.map((prompt) => (
                  <li key={prompt} className="flex items-start gap-2 text-sm text-slate">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                    {prompt}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-heading text-lg font-semibold text-navy">
                Tell us what you need.
              </p>
              <div className="mt-6">
                <PrimaryButton href="/start-a-project">Tell Us What You Need</PrimaryButton>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy">
                We&apos;ll help with
              </h2>
              <div className="mt-4 space-y-4">
                {CUSTOM_PRODUCTS_HELP.map((item, i) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-off-white p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-light-blue font-heading text-xs font-bold text-blue">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-navy">{item.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="container-px mx-auto max-w-[1440px] py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${category.slug}/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
              >
                <PlaceholderPhoto icon={category.icon} className="aspect-[4/3] w-full" />
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-navy">{product.title}</h3>
                  <p className="mt-1.5 text-xs text-slate">
                    {product.options.length} option{product.options.length === 1 ? "" : "s"} available
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue">
                    View Options <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection
        title="Not sure what"
        highlight="you need?"
        description="Tell us what you're trying to create and we'll help you choose the right option."
        primaryLabel="Tell Us What You Need"
        primaryHref="/start-a-project"
      />
    </>
  );
}
