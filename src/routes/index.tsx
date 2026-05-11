import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Gem, HeartHandshake, Quote, Star, ArrowRight, MapPin, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { business, waLink } from "@/lib/business";
import bride from "@/assets/bride.jpg";
import necklace from "@/assets/p-necklace.jpg";
import bangles from "@/assets/p-bangles.jpg";
import earrings from "@/assets/p-earrings.jpg";
import ring from "@/assets/p-ring.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Jewellers — Luxury 22K Gold & Diamond Jewellery in Paschim Medinipur" },
      { name: "description", content: "Discover BIS hallmarked 22K gold, diamond and bridal jewellery at Krishna Jewellers, Ranichak, Laxmi Bazar, Paschim Medinipur. Trusted craftsmanship since generations." },
      { property: "og:title", content: "Krishna Jewellers — Timeless Gold & Diamond Jewellery" },
      { property: "og:description", content: "BIS hallmarked luxury jewellery hand-crafted with devotion." },
    ],
  }),
  component: HomePage,
});

const collections = [
  { name: "Bridal Edit", img: necklace },
  { name: "Heritage Bangles", img: bangles },
  { name: "Diamond Rings", img: ring },
  { name: "Antique Earrings", img: earrings },
];

const trust = [
  { icon: Award, title: "BIS Hallmarked", text: "916 / 22K & 18K certified purity on every piece." },
  { icon: ShieldCheck, title: "Lifetime Buyback", text: "Transparent buyback at prevailing market rates." },
  { icon: Gem, title: "Certified Diamonds", text: "IGI / GIA certified solitaires and natural diamonds." },
  { icon: HeartHandshake, title: "Trusted Craftsmanship", text: "Generations of legacy in temple-style jewellery." },
];

const testimonials = [
  { name: "Riya Mukherjee", text: "My bridal set from Krishna Jewellers was breathtaking. The craftsmanship is unmatched.", rating: 5 },
  { name: "Arnab Das", text: "Honest pricing, hallmarked purity, and the most patient staff. Highly recommended.", rating: 5 },
  { name: "Sutapa Sen", text: "Three generations of our family trust Krishna Jewellers. Truly heirloom quality.", rating: 5 },
];

function HomePage() {
  return (
    <Layout>
      <Hero />

      {/* Featured Collections */}
      <section className="py-24 container mx-auto px-4">
        <SectionHeading eyebrow="Curated Edits" title="Featured Collections" subtitle="Hand-picked pieces that celebrate the artistry of Indian jewellery." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              <img src={c.img} alt={c.name} loading="lazy" width={800} height={1066} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <h3 className="font-display text-2xl text-gold">{c.name}</h3>
                <Link to="/collection" className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-widest opacity-80 hover:opacity-100">
                  Discover <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-[color:var(--secondary)]/40">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Best Sellers" title="Most Loved Pieces" subtitle="Customer favourites — pieces that have adorned countless special moments." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/collection" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold">
              View Full Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 container mx-auto px-4">
        <SectionHeading eyebrow="Why Krishna Jewellers" title="A Legacy You Can Trust" subtitle="Four pillars that make us the preferred jeweller of Paschim Medinipur." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl glass shadow-soft hover:shadow-luxe transition"
            >
              <div className="mx-auto h-14 w-14 rounded-full bg-gold flex items-center justify-center shadow-luxe">
                <t.icon className="h-6 w-6 text-[color:var(--crimson)]" />
              </div>
              <h3 className="font-display text-xl mt-4">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gold Purity Assurance */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img src={bride} alt="Bridal jewellery showcase" loading="lazy" width={1200} height={1500} className="rounded-3xl shadow-luxe object-cover aspect-[4/5] w-full" />
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-luxe hidden md:block">
              <div className="text-gold text-4xl font-display">916</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">22K BIS Hallmark</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-xs tracking-[0.4em] uppercase text-primary mb-3">✦ Purity Promise ✦</div>
            <h2 className="font-display text-4xl md:text-5xl"><span className="text-gold">100% Pure.</span> Always.</h2>
            <div className="divider-gold w-24 my-6" />
            <p className="text-muted-foreground leading-relaxed">
              Every gram of gold at Krishna Jewellers is BIS Hallmarked, ensuring guaranteed purity. Our diamonds are individually certified, and our pricing is fully transparent — you only pay for what is genuine.
            </p>
            <ul className="mt-6 space-y-3">
              {["BIS Licence: " + business.bis, "GSTIN: " + business.gstin, "Daily updated gold rates", "Tamper-proof hallmark on every piece"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold inline-block" /> {x}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-royal text-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.4),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs tracking-[0.4em] uppercase text-gold mb-3">✦ Testimonials ✦</div>
            <h2 className="font-display text-4xl md:text-5xl text-gold">Loved by Generations</h2>
            <div className="divider-gold w-24 mx-auto mt-6" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-dark rounded-2xl p-8"
              >
                <Quote className="h-8 w-8 text-gold opacity-60" />
                <p className="mt-4 text-ivory/90 leading-relaxed">{t.text}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="font-display text-lg text-gold">{t.name}</div>
                  <div className="flex">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram-style gallery */}
      <section className="py-24 container mx-auto px-4">
        <SectionHeading eyebrow="@krishnajewellers" title="From Our Gallery" subtitle="A glimpse into the artistry, the craft, and the moments." />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[necklace, bangles, earrings, ring, bride, necklace, bangles, ring].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img src={img} alt="Gallery" loading="lazy" width={600} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-royal text-ivory p-10 md:p-16 shadow-luxe">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-2 items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-gold mb-3">Visit Our Showroom</div>
                <h2 className="font-display text-4xl md:text-5xl">Step Into a World of <span className="text-gold">Pure Gold</span></h2>
                <p className="mt-4 opacity-85">Experience our collection in person. Our experts are here to help you find the perfect piece for every occasion.</p>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex gap-3"><MapPin className="h-5 w-5 text-gold" /> {business.address}</div>
                  <div className="flex gap-3"><Phone className="h-5 w-5 text-gold" /> {business.phone}</div>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                  Chat on WhatsApp
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold glass-dark text-ivory hover:bg-[color:var(--gold)]/15">
                  Get Directions <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
