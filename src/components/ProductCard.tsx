import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { waLink } from "@/lib/business";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-[color:var(--gold)]/20 shadow-soft hover:shadow-luxe transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden bg-[color:var(--ivory)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-royal text-ivory px-3 py-1 rounded-full">
          {product.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground line-clamp-1">{product.name}</h3>
        <p className="text-xs uppercase tracking-wider text-primary/70 mt-1">{product.rate}</p>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-gold text-lg font-semibold">{product.price}</div>
          <a
            href={waLink(`Hello, I'd like to enquire about: ${product.name} (${product.price})`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Enquire
          </a>
        </div>
      </div>
    </motion.article>
  );
}
