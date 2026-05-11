import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-royal text-ivory">
      <div className="divider-gold" />
      <div className="container mx-auto px-4 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Logo className="h-14" />
            <div>
              <div className="font-display text-xl font-semibold text-gold">{business.name}</div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-70">Since Generations</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            BIS Hallmarked 22K & 18K gold jewellery. Trusted craftsmanship, transparent pricing, timeless designs.
          </p>
          <div className="mt-4 text-xs opacity-70 space-y-1">
            <div>GSTIN: {business.gstin}</div>
            <div>BIS: {business.bis}</div>
          </div>
        </div>

        <div>
          <h4 className="text-gold text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/collection" className="hover:text-gold">Collection</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-lg mb-4">Legal</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-gold">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-lg mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> {business.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> <a href={`tel:${business.phoneIntl}`} className="hover:text-gold">{business.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> <a href={`mailto:${business.email}`} className="hover:text-gold">{business.email}</a></li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" className="p-2 rounded-full ring-1 ring-[color:var(--gold)]/40 hover:bg-[color:var(--gold)]/15"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-full ring-1 ring-[color:var(--gold)]/40 hover:bg-[color:var(--gold)]/15"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="divider-gold" />
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-80">
        <div>© {new Date().getFullYear()} {business.name}. All rights reserved.</div>
        <div>
          Designed & Developed by{" "}
          <a
            href="https://www.novaxistechnologies.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold hover:underline"
          >
            Novaxis Technologies
          </a>
        </div>
      </div>
    </footer>
  );
}
