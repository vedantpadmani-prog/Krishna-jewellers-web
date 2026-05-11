import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      {eyebrow && (
        <div className="text-xs tracking-[0.4em] uppercase text-primary/80 mb-3">
          ✦ {eyebrow} ✦
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
        <span className="text-gold">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
      <div className="divider-gold mt-6 w-32 mx-auto" />
    </motion.div>
  );
}
