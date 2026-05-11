import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, Gem, HeartHandshake, Sparkles } from "lucide-react";
import bride from "@/assets/bride.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Krishna Jewellers — Our Heritage & Craftsmanship" },
      { name: "description", content: "Learn the story of Krishna Jewellers — generations of trust, BIS hallmarked purity, and timeless Indian jewellery craftsmanship in Paschim Medinipur." },
      { property: "og:title", content: "About Krishna Jewellers" },
      { property: "og:description", content: "A legacy of trust, purity, and timeless craftsmanship." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading eyebrow="Our Story" title="A Legacy of Gold" subtitle="Crafting timeless jewellery with devotion, transparency, and unwavering purity." />
      </section>

      <section className="container mx-auto px-4 pb-24 grid gap-12 lg:grid-cols-2 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src={bride}
          alt="Krishna Jewellers heritage"
          loading="lazy"
          width={1200}
          height={1500}
          className="rounded-3xl shadow-luxe aspect-[4/5] object-cover w-full"
        />
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-display text-3xl md:text-4xl"><span className="text-gold">Where every piece tells a story.</span></h2>
          <div className="divider-gold w-24 my-6" />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Krishna Jewellers has been a trusted name in Paschim Medinipur for generations. Born from a family's deep love for traditional craftsmanship, we have grown into a destination for the most discerning jewellery connoisseurs in the region.</p>
            <p>Each piece in our collection is hand-crafted by master artisans who carry forward centuries-old techniques — kundan, polki, jadau, temple, and antique gold work — paired with contemporary diamond brilliance.</p>
            <p>We believe jewellery is more than ornament. It is heritage, emotion, and a promise that lasts lifetimes. That is why every gram of gold we sell carries a BIS Hallmark, every diamond is certified, and every customer is treated as family.</p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-[color:var(--secondary)]/40">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Values" eyebrow="What We Stand For" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: "Purity", text: "BIS hallmarked gold on every single piece, no exceptions." },
              { icon: Gem, title: "Craftsmanship", text: "Master artisans practising heritage techniques for generations." },
              { icon: HeartHandshake, title: "Trust", text: "Transparent pricing, honest weight, lifetime relationships." },
              { icon: Sparkles, title: "Elegance", text: "Designs that blend tradition with timeless modern beauty." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl glass p-8 text-center"
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-gold flex items-center justify-center shadow-luxe">
                  <v.icon className="h-6 w-6 text-[color:var(--crimson)]" />
                </div>
                <h3 className="font-display text-xl mt-4">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
