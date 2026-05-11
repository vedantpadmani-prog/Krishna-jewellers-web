import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { business, waLink } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Krishna Jewellers — Visit Us in Paschim Medinipur" },
      { name: "description", content: "Visit Krishna Jewellers at Ranichak, Laxmi Bazar, Paschim Medinipur. Call 7584907128 or message us on WhatsApp for enquiries." },
      { property: "og:title", content: "Contact Krishna Jewellers" },
      { property: "og:description", content: "Reach out via WhatsApp, phone, or visit our showroom." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Krishna Jewellers,%0AName: ${form.name}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/${business.whatsapp}?text=${msg}`, "_blank");
  };

  const items = [
    { icon: MapPin, title: "Visit Us", text: business.address },
    { icon: Phone, title: "Call Us", text: business.phone, href: `tel:${business.phoneIntl}` },
    { icon: Mail, title: "Email Us", text: business.email, href: `mailto:${business.email}` },
    { icon: Clock, title: "Open Hours", text: "Mon – Sun · 10:00 AM – 9:00 PM" },
  ];

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading eyebrow="Get in Touch" title="We'd Love to Meet You" subtitle="Visit our showroom, call us, or drop a message — our team is always at your service." />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={it.href || "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl glass p-6 hover:shadow-luxe transition group"
            >
              <div className="h-12 w-12 rounded-full bg-gold flex items-center justify-center shadow-soft">
                <it.icon className="h-5 w-5 text-[color:var(--crimson)]" />
              </div>
              <h3 className="font-display text-lg mt-4 text-primary">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{it.text}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={onSubmit}
            className="rounded-3xl bg-card border border-[color:var(--gold)]/30 p-8 shadow-soft"
          >
            <h3 className="font-display text-2xl text-primary">Send an Enquiry</h3>
            <p className="text-sm text-muted-foreground mt-1">We typically respond within minutes via WhatsApp.</p>
            <div className="mt-6 space-y-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30 outline-none transition" />
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30 outline-none transition" />
              <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" rows={5} className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30 outline-none transition resize-none" />
              <button type="submit" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold w-full justify-center">
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold w-full justify-center bg-emerald-500 text-white hover:bg-emerald-600 transition">
                <MessageCircle className="h-4 w-4" /> Quick Chat on WhatsApp
              </a>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-3xl overflow-hidden shadow-luxe min-h-[400px] border border-[color:var(--gold)]/30">
            <iframe
              title="Krishna Jewellers Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`}
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        <div className="mt-16 text-center text-xs text-muted-foreground space-y-1">
          <div>GSTIN: {business.gstin}</div>
          <div>BIS Licence: {business.bis}</div>
        </div>
      </section>
    </Layout>
  );
}
