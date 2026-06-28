"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const stages: {
  number: string;
  icon: ReactNode;
  label: string;
  status: "Now" | "Next" | "Soon" | "Future";
  body: string;
}[] = [
  {
    number: "01",
    label: "Community",
    status: "Now",
    body: "Community-based learning platform, the foundation everything else is built on.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6M14 19c0-2.6 1.9-4.7 4.5-4.9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Education",
    status: "Next",
    body: "Structured finance content, lessons, and engagement loops that compound knowledge.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 5h7c1.5 0 2 .5 2 2v12c-.5-1-1.5-1.5-3-1.5H3V5ZM21 5h-7c-1.5 0-2 .5-2 2v12c.5-1 1.5-1.5 3-1.5h6V5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    label: "AI Tools",
    status: "Soon",
    body: "AI-powered finance tools and personalized insights tuned to each learner.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <text
          x="12"
          y="14.5"
          textAnchor="middle"
          fontSize="6"
          fontWeight="700"
          fill="currentColor"
        >
          AI
        </text>
      </svg>
    ),
  },
  {
    number: "04",
    label: "Full Ecosystem",
    status: "Future",
    body: "A complete EcoVest digital ecosystem: finance, sustainability, and community as one.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
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
            EcoVest isn&rsquo;t a single drop. It&rsquo;s a four-stage build.
            We&rsquo;re shipping the community first, then layering on education,
            AI tools, and the full ecosystem.
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
