import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — Gold, Diamond & Bridal Jewellery | Krishna Jewellers" },
      { name: "description", content: "Browse our curated collection of 22K gold necklaces, bangles, rings, earrings, mangalsutra and bridal sets — BIS hallmarked and crafted to perfection." },
      { property: "og:title", content: "Krishna Jewellers — Our Collection" },
      { property: "og:description", content: "Curated 22K gold and diamond jewellery." },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading eyebrow="Our Collection" title="The Krishna Edit" subtitle="From everyday elegance to bridal grandeur — explore our hand-crafted creations." />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? "btn-gold shadow-luxe"
                  : "border border-[color:var(--gold)]/40 text-foreground/80 hover:bg-[color:var(--gold)]/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <p className="mt-16 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          * Gold prices are indicative and subject to daily market rate fluctuations. Final price will be confirmed at the time of enquiry.
        </p>
      </section>
    </Layout>
  );
}
