"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  UsersThree,
  Play,
  Bank,
  CirclesThreePlus,
} from "@phosphor-icons/react/dist/ssr";

const stages: {
  number: string;
  icon: ReactNode;
  label: string;
  status: "Now" | "Next" | "Soon" | "Future";
  body: string;
}[] = [
  {
    number: "01",
    label: "Community & Academy",
    status: "Now",
    body: "Community, EcoVest Academy, AI chat, and the budget tracker, the foundation everything else builds on.",
    icon: <UsersThree size={26} weight="duotone" />,
  },
  {
    number: "02",
    label: "Simulator & Goals",
    status: "Next",
    body: "Investment simulator, daily financial news, and savings goals you can set and actually hit.",
    icon: <Play size={26} weight="duotone" />,
  },
  {
    number: "03",
    label: "EcoVest Invest",
    status: "Soon",
    body: "Access regulated investment products through licensed partners, plus portfolio tracking.",
    icon: <Bank size={26} weight="duotone" />,
  },
  {
    number: "04",
    label: "Full Ecosystem",
    status: "Future",
    body: "EcoVest Trade, Quant, Skills, and Capital, the complete learn-earn-invest ecosystem.",
    icon: <CirclesThreePlus size={26} weight="duotone" />,
  },
];

const statusColor: Record<string, string> = {
  Now: "bg-brand-500 text-bone",
  Next: "bg-brand-100 text-brand-700",
  Soon: "bg-brand-50 text-brand-600",
  Future: "bg-ink/5 text-ink/55",
};

export default function ProductStage() {
  return (
    <section id="stage" className="relative py-24 md:py-32 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-600 mb-5">
            <span className="w-6 h-px bg-brand-500" />
            Product Stage
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tightest text-ink">
            Where we are.{" "}
            <span className="italic font-medium text-brand-600">
              And where we&rsquo;re heading.
            </span>
          </h2>
          <p className="mt-5 text-lg text-ink/60 leading-relaxed max-w-2xl">
            EcoVest isn&rsquo;t a single drop. It&rsquo;s a phased build.
            We&rsquo;re shipping the community, academy, and AI chat first, then
            layering on simulation, regulated investing, and the full ecosystem.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 relative">
          {stages.map((s, i) => {
            const isLast = i === stages.length - 1;
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center px-2">
                  <div className="font-display text-sm font-semibold text-brand-600 tracking-wider mb-3">
                    {s.number}
                  </div>

                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-full grid place-items-center border-2 ${
                        s.status === "Now"
                          ? "bg-brand-50 border-brand-500 text-brand-600"
                          : "bg-bone border-brand-200 text-brand-500"
                      }`}
                    >
                      {s.icon}
                    </div>
                    {s.status === "Now" && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-500 border-2 border-bone">
                        <span className="absolute inset-0 rounded-full bg-brand-400 animate-ping opacity-60" />
                      </span>
                    )}
                  </div>

                  <div className="mt-5 font-display text-lg font-semibold text-ink">
                    {s.label}
                  </div>
                  <div
                    className={`mt-2 inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-wider ${statusColor[s.status]}`}
                  >
                    {s.status}
                  </div>
                  <p className="mt-4 text-sm text-ink/55 leading-relaxed max-w-[220px]">
                    {s.body}
                  </p>
                </div>

                {/* connector arrow (desktop) */}
                {!isLast && (
                  <div className="hidden lg:flex absolute top-[58px] left-[calc(50%+44px)] right-[-12px] items-center pointer-events-none">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ transformOrigin: "left" }}
                      className="flex-1 h-px bg-gradient-to-r from-brand-300 to-brand-200"
                    />
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="text-brand-300 -ml-1"
                      fill="none"
                    >
                      <path
                        d="M3 7h8M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
