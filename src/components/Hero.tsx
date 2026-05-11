import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative -mt-24 h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Luxury gold jewellery"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.18),transparent_60%)]" />

      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-ivory">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-xs tracking-[0.3em] uppercase text-gold"
        >
          <Sparkles className="h-3 w-3" /> BIS Hallmarked Purity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] max-w-5xl"
        >
          Where Tradition <br />
          Meets <span className="text-gold">Timeless Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-ivory/85"
        >
          Discover heirloom-quality 22K gold and diamond jewellery, hand-crafted with devotion at Krishna Jewellers — your trusted destination in Paschim Medinipur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/collection" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
            Explore Collection <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold glass-dark text-ivory hover:bg-[color:var(--gold)]/15 transition"
          >
            Visit Our Store
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 text-xs tracking-widest uppercase animate-float"
      >
        Scroll to Discover
      </motion.div>
    </section>
  );
}
