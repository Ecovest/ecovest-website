"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react/dist/ssr";
import PhoneMockup from "./PhoneMockup";

const pillars = [
  {
    label: "Financial Education",
    body: "Structured, beginner-to-advanced courses across personal finance, investing, trading, and quantitative finance.",
  },
  {
    label: "AI Financial Assistant",
    body: "An intelligent coach that answers your finance questions, explains concepts simply, and guides your next step.",
  },
  {
    label: "Community Learning",
    body: "Join discussions, ask questions, learn from experts, and stay accountable alongside people on the same path.",
  },
  {
    label: "Investing",
    body: "Discover stocks, ETFs, mutual funds, and bonds, and practice in a simulator before you risk real money.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative py-24 md:py-32 bg-ink text-bone overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F7F8F4 1px, transparent 1px), linear-gradient(to bottom, #F7F8F4 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-200 mb-5">
            <span className="w-6 h-px bg-brand-300" />
            The Solution
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tightest">
            One platform. Four pillars.{" "}
            <span className="italic font-medium text-brand-200">
              A different future.
            </span>
          </h2>
          <p className="mt-5 text-lg text-bone/65 leading-relaxed max-w-xl">
            EcoVest guides you from beginner to confident investor, step by
            step. Instead of drowning you in jargon, it simplifies the concepts
            and lowers the barrier to actually getting started.
          </p>

          <ul className="mt-10 space-y-5">
            {pillars.map((p, i) => (
              <motion.li
                key={p.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex gap-4 pb-5 border-b border-bone/8 last:border-0"
              >
                <div className="shrink-0 w-7 h-7 rounded-full border border-brand-300/40 grid place-items-center text-brand-200">
                  <Check size={13} weight="bold" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold tracking-tight text-bone">
                    {p.label}
                  </div>
                  <div className="text-sm text-bone/55 mt-1 leading-relaxed">
                    {p.body}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
