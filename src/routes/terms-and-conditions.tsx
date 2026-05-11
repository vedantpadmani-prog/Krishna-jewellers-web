import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/lib/business";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Krishna Jewellers" },
      { name: "description", content: "Terms and conditions governing the use of Krishna Jewellers' website, products, and services." },
    ],
  }),
  component: Terms,
});

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-display text-2xl text-primary mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

function Terms() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <SectionHeading eyebrow="Legal" title="Terms & Conditions" subtitle={`Last updated: ${new Date().getFullYear()}`} />
        <article className="mt-12 rounded-3xl bg-card border border-[color:var(--gold)]/30 p-8 md:p-12 shadow-soft">
          <p className="text-muted-foreground leading-relaxed mb-8">
            Welcome to {business.name}. By accessing our website, visiting our showroom, or purchasing our products, you agree to the following terms and conditions.
          </p>

          <Section title="1. Pricing & Gold Rate Fluctuations">
            <p>Gold and diamond prices are subject to daily market fluctuations. All prices displayed on our website, brochures, or promotional materials are indicative only. Actual billing is done at the prevailing rate on the date of purchase.</p>
          </Section>

          <Section title="2. Product Availability">
            <p>All products are subject to availability. While we make every effort to keep our inventory updated, certain pieces may be sold out or available only on order. We reserve the right to limit quantities or discontinue products without prior notice.</p>
          </Section>

          <Section title="3. Order Confirmation">
            <p>An order is considered confirmed only after full or partial advance payment is received and acknowledged in writing by {business.name}. Verbal commitments do not constitute a binding order.</p>
          </Section>

          <Section title="4. Cancellation Policy">
            <ul className="list-disc pl-6 space-y-1">
              <li>Ready-stock items may be cancelled within 24 hours of confirmation, subject to a nominal restocking fee.</li>
              <li>Custom-made or personalised pieces are non-cancellable and non-refundable once production has begun.</li>
              <li>Cancellations after 24 hours may incur charges based on the work completed.</li>
            </ul>
          </Section>

          <Section title="5. Image Representation Disclaimer">
            <p>Product images are for representational purposes. Actual jewellery may vary slightly in colour, finish, weight, or stone arrangement due to handcrafted nature, photography lighting, and screen calibration.</p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>All content on this website — including logo, designs, photographs, text, and graphics — is the exclusive property of {business.name}. Unauthorised use, reproduction, or distribution is strictly prohibited.</p>
          </Section>

          <Section title="7. Customer Responsibilities">
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate contact and identification information for high-value purchases.</li>
              <li>Inspect jewellery at the time of delivery; complaints must be raised immediately.</li>
              <li>Maintain hallmark certificates and original invoices for warranty, exchange, or buyback claims.</li>
            </ul>
          </Section>

          <Section title="8. Exchange & Buyback">
            <p>Exchange and buyback are offered as per the prevailing scheme and gold rates on the date of transaction. Original invoice and BIS hallmark are mandatory. Stones, making charges, and GST may be deducted as per policy.</p>
          </Section>

          <Section title="9. Liability Limitations">
            <p>{business.name} shall not be liable for any indirect, incidental, or consequential losses arising from the use of our website or products, beyond the value of the product purchased.</p>
          </Section>

          <Section title="10. Force Majeure">
            <p>We shall not be held responsible for any delay or failure to perform due to events beyond our reasonable control including acts of God, government restrictions, or supply chain disruptions.</p>
          </Section>

          <Section title="11. Governing Law">
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Paschim Medinipur, West Bengal.</p>
          </Section>

          <Section title="12. Contact">
            <div>
              <strong>{business.name}</strong><br />
              {business.address}<br />
              Phone: {business.phone}<br />
              Email: {business.email}<br />
              GSTIN: {business.gstin} · BIS: {business.bis}
            </div>
          </Section>
        </article>
      </section>
    </Layout>
  );
}
