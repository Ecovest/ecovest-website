"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  UsersThree,
  ChartLineUp,
  Bank,
  Planet,
} from "@phosphor-icons/react/dist/ssr";

const phases: {
  quarter: string;
  label: string;
  icon: ReactNode;
  body: string;
}[] = [
  {
    quarter: "Phase 1",
    label: "Foundation",
    body: "Community, EcoVest Academy, AI chat, and the budget tracker.",
    icon: <UsersThree size={26} weight="duotone" />,
  },
  {
    quarter: "Phase 2",
    label: "Practice",
    body: "Investment simulator, daily financial news, and savings goal tracking.",
    icon: <ChartLineUp size={26} weight="duotone" />,
  },
  {
    quarter: "Phase 3",
    label: "Invest",
    body: "EcoVest Invest and portfolio tracking, through licensed partners.",
    icon: <Bank size={26} weight="duotone" />,
  },
  {
    quarter: "Phase 4 & 5",
    label: "Ecosystem",
    body: "EcoVest Trade, Quant, Skills, and Capital, expanding across Africa.",
    icon: <Planet size={26} weight="duotone" />,
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(67,163,86,0.06), transparent 55%), #F7F8F4",
      }}
    >
      {/* faint skyline */}
      <Skyline />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-600 mb-5">
              <span className="w-6 h-px bg-brand-500" />
              Roadmap
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tightest text-ink">
              The path to a global,{" "}
              <span className="italic font-medium text-brand-600">
                financially intelligent
              </span>{" "}
              generation.
            </h2>
          </div>
          <div className="text-sm text-ink/55 md:text-right max-w-xs">
            Five phases. One mission. We&rsquo;ll keep this page updated as
            milestones ship.
          </div>
        </div>

        <div className="relative">
          {/* dotted progress line */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-px">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #2E7D32 0 6px, transparent 6px 12px)",
              }}
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "25%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 h-[2px] -translate-y-1/2 bg-brand-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {phases.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink/45 mb-3">
                  {p.quarter}
                </div>

                <div
                  className={`relative w-[88px] h-[88px] rounded-full grid place-items-center text-bone shadow-lg ${
                    i === 0
                      ? "bg-brand-600"
                      : "bg-gradient-to-br from-brand-500 to-brand-700"
                  }`}
                >
                  <div className="absolute inset-1.5 rounded-full ring-1 ring-bone/15" />
                  {p.icon}
                  {i === 0 && (
                    <span className="absolute -bottom-1 right-1 px-2 py-0.5 rounded-full bg-bone text-brand-700 text-[9px] font-semibold uppercase tracking-wider border border-brand-100 shadow-sm">
                      Live
                    </span>
                  )}
                </div>

                <div className="mt-6 font-display text-base font-semibold uppercase tracking-[0.12em] text-ink">
                  {p.label}
                </div>
                <p className="mt-3 text-sm text-ink/55 leading-relaxed max-w-[230px]">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skyline() {
  return (
    <svg
      aria-hidden
      className="absolute bottom-0 left-0 right-0 w-full h-32 text-ink/[0.04] pointer-events-none"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0 200V120h40v-30h30v40h25v-50h35v60h30v-20h40v50h30v-40h35v60h25v-20h45v50h35v-70h30v40h35v-20h40v60h25v-40h35v70h35v-20h30v40h40v-30h25v50h35v-20h30v40h40V120h30v40h35v-20h30v40h40v60H0Z" />
    </svg>
  );
}
