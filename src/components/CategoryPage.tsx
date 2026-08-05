import { PageHeading, PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { categories, products, type CategorySlug } from "@/data/catalog";

export function CategoryPage({ slug }: { slug: CategorySlug }) {
  const category = categories.find((c) => c.slug === slug)!;
  const items = products.filter((p) => p.category === slug);

  return (
    <PageShell>
      <PageHeading eyebrow="Catalog" title={category.title} description={category.blurb} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">
          {items.length} product{items.length === 1 ? "" : "s"} · prices in Sri Lankan Rupees
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
