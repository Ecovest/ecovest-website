"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-600 mb-5">
            <span className="w-6 h-px bg-brand-500" />
            Our Vision
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tightest text-ink">
            Building <span className="text-brand-600">financially intelligent</span> and{" "}
            <span className="text-brand-600">sustainability-driven</span> youth, prepared for the future economy.
          </h2>
          <p className="mt-6 text-lg text-ink/65 leading-relaxed max-w-xl">
            We&rsquo;re not building another finance app. We&rsquo;re building the
            generation that won&rsquo;t need one, because they&rsquo;ll already know
            how to think, save, invest, and grow.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-bone border border-ink/8 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-brand-600 grid place-items-center text-bone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 4c-9 0-13 5-13 11 0 2 1 4 2 5 0-7 5-11 11-13Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-sm leading-tight">
              <div className="font-display font-semibold text-ink">Smart Finance</div>
              <div className="text-ink/60">Sustainable Future · Stronger Youth</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[5/4] w-full"
          >
            {/* blob mask via clip-path */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath:
                  "path('M 60 20 C 200 0, 360 30, 470 100 C 580 170, 580 320, 480 400 C 380 480, 220 460, 120 410 C 20 360, -20 220, 20 130 C 35 90, 50 50, 60 20 Z')",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="The EcoVest team collaborating around a table"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>

            {/* floating chips */}
            <div className="absolute -left-2 top-6 px-3 py-2 rounded-full bg-bone border border-ink/8 shadow-sm text-xs flex items-center gap-2 animate-float">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              Built with students, for students
            </div>
            <div className="absolute -right-2 bottom-10 px-3 py-2 rounded-full bg-ink text-bone shadow-sm text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-300" />
              EST. 2025 · Lagos / Global
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
