"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="relative pt-32 md:pt-40 pb-14 md:pb-20 overflow-hidden border-b border-ink/8">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(67,163,86,0.10), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(31,95,38,0.05), transparent 55%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-600 mb-6"
        >
          <span className="w-6 h-px bg-brand-500" />
          {kicker}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tightest text-ink"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 text-lg md:text-xl text-ink/65 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
}
