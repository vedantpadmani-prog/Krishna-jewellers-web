import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/lib/business";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Krishna Jewellers" },
      { name: "description", content: "How Krishna Jewellers collects, uses, and protects your personal information when you enquire about our jewellery." },
    ],
  }),
  component: Privacy,
});

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-display text-2xl text-primary mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

function Privacy() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" subtitle={`Last updated: ${new Date().getFullYear()}`} />
        <article className="mt-12 rounded-3xl bg-card border border-[color:var(--gold)]/30 p-8 md:p-12 shadow-soft">
          <p className="text-muted-foreground leading-relaxed mb-8">
            At {business.name}, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our showroom, contact us, or use our website.
          </p>

          <Section title="1. Information We Collect">
            <p>We may collect the following information when you interact with us:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, phone number, email address, and postal address.</li>
              <li>Enquiry details submitted via our contact form, WhatsApp, or phone calls.</li>
              <li>Preferences regarding products, designs, gold rates, or custom orders.</li>
              <li>Identification documents required for high-value transactions as per Indian law.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to enquiries about products, pricing, or custom designs.</li>
              <li>To process and fulfil orders, billing, GST invoicing, and delivery.</li>
              <li>To inform you about new collections, festive offers, and gold rate updates (only with your consent).</li>
              <li>To comply with statutory and regulatory requirements (BIS, GST, KYC).</li>
            </ul>
          </Section>

          <Section title="3. Payment Information">
            <p>Payments are processed in person at our showroom or through trusted, secure third-party payment gateways. We do not store your full card details, UPI PINs, or banking credentials on our servers.</p>
          </Section>

          <Section title="4. Enquiry Forms & WhatsApp Communication">
            <p>When you submit an enquiry through our website forms or WhatsApp, the information shared is used solely for the purpose of responding to your query. WhatsApp communications are governed by Meta's privacy policies in addition to ours.</p>
          </Section>

          <Section title="5. Cookies & Website Usage">
            <p>Our website may use minimal cookies and analytics tools to understand user behaviour and improve experience. No personally identifiable data is sold or shared with third parties for advertising.</p>
          </Section>

          <Section title="6. Product Pricing Disclaimer">
            <p>All prices displayed on our website are indicative and based on prevailing gold market rates at the time of publishing. Actual prices may vary daily. Final pricing is confirmed only at the point of purchase or via direct enquiry.</p>
          </Section>

          <Section title="7. Data Protection">
            <p>We implement appropriate physical, electronic, and procedural safeguards to protect your information against unauthorised access, alteration, disclosure, or destruction.</p>
          </Section>

          <Section title="8. Sharing of Information">
            <p>We do not sell, rent, or trade your personal information. Information may be shared only with trusted service providers (logistics, payment, IT) bound by confidentiality, or when required by law.</p>
          </Section>

          <Section title="9. Your Rights">
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at the details below.</p>
          </Section>

          <Section title="10. Contact Us">
            <p>For any privacy-related concerns, please contact:</p>
            <div className="mt-2 text-foreground">
              <strong>{business.name}</strong><br />
              {business.address}<br />
              Phone: {business.phone}<br />
              Email: {business.email}
            </div>
          </Section>
        </article>
      </section>
    </Layout>
  );
}
