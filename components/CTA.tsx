"use client";

import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="waitlist" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-ink text-bone p-10 md:p-16 lg:p-20"
        >
          {/* background photo */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          </div>

          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-200 mb-5">
                <span className="w-6 h-px bg-brand-300" />
                Join Cohort 01
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest">
                Start investing in <br />
                <span className="italic font-medium text-brand-200">tomorrow&rsquo;s earth.</span>
              </h2>
              <p className="mt-5 text-bone/65 text-lg max-w-lg leading-relaxed">
                Drop your email. We&rsquo;ll send a short welcome, your first lesson, and early access when EcoVest opens.
              </p>
            </div>

            <div className="lg:col-span-5">
              <WaitlistForm compact />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
