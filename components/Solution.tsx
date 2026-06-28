"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const pillars = [
  {
    label: "Finance Basics",
    body: "Money mechanics, budgeting, credit, and taxes, taught in 5-minute lessons you actually finish.",
  },
  {
    label: "Investing",
    body: "Index funds, dollar-cost averaging, risk, and diversification. The moves that compound for decades.",
  },
  {
    label: "Sustainability",
    body: "ESG, green bonds, and climate-aligned portfolios. Invest in companies the future is rooting for.",
  },
  {
    label: "Mindset",
    body: "Long-term thinking, patience under volatility, and habits that make wealth inevitable.",
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
            EcoVest is a community-driven ecosystem that turns finance from
            intimidating into intuitive, with sustainability baked into every
            lesson.
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
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.5l2.2 2.2L9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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

/* ----------------- Realistic iPhone mockup ----------------- */

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ perspective: 1200 }}
    >
      {/* halo */}
      <div className="absolute -inset-16 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <IPhone />
      </motion.div>
    </motion.div>
  );
}

function IPhone() {
  return (
    <div
      className="
        relative
        w-[300px] sm:w-[340px]
        aspect-[9/19.5]
        rounded-[58px]
        bg-gradient-to-b from-[#2a2f2b] via-[#16191a] to-[#0a0d0b]
        p-[3px]
        shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8),0_30px_60px_-20px_rgba(31,95,38,0.35)]
      "
    >
      {/* outer steel frame highlight */}
      <div className="absolute inset-0 rounded-[58px] pointer-events-none ring-1 ring-white/[0.06]" />

      {/* side buttons */}
      <span className="absolute left-[-3px] top-[110px] w-[3px] h-[28px] rounded-l bg-[#2a2f2b]" />
      <span className="absolute left-[-3px] top-[160px] w-[3px] h-[56px] rounded-l bg-[#2a2f2b]" />
      <span className="absolute left-[-3px] top-[230px] w-[3px] h-[56px] rounded-l bg-[#2a2f2b]" />
      <span className="absolute right-[-3px] top-[180px] w-[3px] h-[80px] rounded-r bg-[#2a2f2b]" />

      {/* inner bezel */}
      <div className="relative w-full h-full rounded-[55px] bg-black p-[10px] overflow-hidden">
        {/* screen */}
        <div className="relative w-full h-full rounded-[46px] overflow-hidden bg-gradient-to-b from-brand-700 via-brand-800 to-brand-900">
          {/* subtle screen noise/light */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(165,214,167,0.25), transparent 60%)",
            }}
          />

          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[105px] h-[30px] rounded-full bg-black z-20 flex items-center justify-between px-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#222]" />
            <span className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#0a0a0a]" />
          </div>

          {/* Status bar */}
          <StatusBar />

          {/* App content */}
          <div className="pt-14 px-5 relative z-10 h-full">
            <AppHeader />
            <GrowthCard />
            <CategoriesGrid />
            <UpNext />
          </div>

          {/* home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[110px] h-[5px] rounded-full bg-bone/60 z-20" />
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-7 text-bone text-[11px] font-semibold z-10">
      <span className="tracking-tight">9:41</span>
      <div className="w-[105px]" />
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <rect x="0" y="7" width="2" height="3" rx="0.5" fill="currentColor" />
          <rect x="3.5" y="5" width="2" height="5" rx="0.5" fill="currentColor" />
          <rect x="7" y="2.5" width="2" height="7.5" rx="0.5" fill="currentColor" />
          <rect x="10.5" y="0" width="2" height="10" rx="0.5" fill="currentColor" />
        </svg>
        {/* wifi */}
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path
            d="M1 3.2C2.7 2 4.7 1.4 7 1.4s4.3.6 6 1.8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M3 5.4c1.2-.9 2.6-1.4 4-1.4s2.8.5 4 1.4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="7" cy="8" r="1.1" fill="currentColor" />
        </svg>
        {/* battery */}
        <div className="relative w-6 h-3 rounded-[3px] border border-bone/80 flex items-center px-[1px]">
          <div className="h-full w-[75%] rounded-[1.5px] bg-bone" />
          <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-[5px] rounded-r bg-bone/80" />
        </div>
      </div>
    </div>
  );
}

function AppHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-center justify-between"
    >
      <div>
        <div className="text-bone font-display text-xl font-semibold leading-tight">
          EcoVest
        </div>
        <div className="text-bone/60 text-[11px] mt-0.5">
          Welcome back, Ade
        </div>
      </div>
      <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-brand-300 to-brand-500 grid place-items-center text-bone text-[11px] font-semibold border border-bone/20">
        A
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-brand-800" />
      </div>
    </motion.div>
  );
}

function GrowthCard() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(1));
  const [val, setVal] = useState("0.0");

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setVal(v));
    const controls = animate(count, 45.2, {
      duration: 2,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [count, rounded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mt-5 bg-bone rounded-2xl p-4 text-ink shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-wider text-ink/50">
          Tidal learning hours
        </div>
        <div className="inline-flex items-center gap-1 text-[10px] text-brand-600 font-medium">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path
              d="M4 1L7 5H5v2H3V5H1L4 1Z"
              fill="currentColor"
            />
          </svg>
          12%
        </div>
      </div>
      <div className="flex items-end gap-1.5 mt-1">
        <span className="font-display text-[26px] font-semibold leading-none">
          +{val}
        </span>
        <span className="text-xs text-ink/60 mb-1">hrs · this month</span>
      </div>

      {/* sparkline with animated draw */}
      <svg viewBox="0 0 200 60" className="w-full h-14 mt-2">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#43A356" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#43A356" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          d="M0 45 L20 40 L40 42 L60 30 L80 35 L100 22 L120 28 L140 18 L160 22 L180 10 L200 14 L200 60 L0 60 Z"
          fill="url(#g1)"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          d="M0 45 L20 40 L40 42 L60 30 L80 35 L100 22 L120 28 L140 18 L160 22 L180 10 L200 14"
          fill="none"
          stroke="#2E7D32"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* end dot */}
        <motion.circle
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.4 }}
          cx="200"
          cy="14"
          r="3.5"
          fill="#2E7D32"
        />
      </svg>
    </motion.div>
  );
}

function CategoriesGrid() {
  const cats = [
    { label: "Finance", icon: <FinanceIcon /> },
    { label: "Invest", icon: <InvestIcon /> },
    { label: "Sustain", icon: <SustainIcon /> },
    { label: "Mindset", icon: <MindsetIcon /> },
  ];
  return (
    <div className="mt-4">
      <div className="text-bone/70 text-[10px] uppercase tracking-wider">
        Top categories
      </div>
      <div className="mt-2 grid grid-cols-4 gap-2">
        {cats.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
            className="rounded-2xl bg-brand-800/70 border border-bone/10 p-2.5 text-center backdrop-blur-[1px]"
          >
            <div className="w-8 h-8 rounded-xl bg-brand-300/25 mx-auto grid place-items-center text-brand-100">
              {c.icon}
            </div>
            <div className="text-[9px] text-bone mt-1.5 leading-tight">
              {c.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function UpNext() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1.3 }}
      className="mt-3 rounded-2xl bg-bone/8 border border-bone/10 p-3 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-lg bg-brand-300/20 grid place-items-center text-brand-100">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 5h14v14H5z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-bone/55">
          Up next · 4 min
        </div>
        <div className="text-[12px] text-bone font-medium truncate">
          What compound interest actually does
        </div>
      </div>
      <div className="shrink-0 w-7 h-7 rounded-full bg-bone text-ink grid place-items-center">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path
            d="M3.5 2.5L8.5 6L3.5 9.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

/* ----------- icons ----------- */

function FinanceIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 9l10-5 10 5-10 5L2 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 11v4c2 1.5 4 2 6 2s4-.5 6-2v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InvestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 18V8M10 18V4M16 18v-7M22 18H2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SustainIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 4c-9 0-13 5-13 11 0 2 1 4 2 5 0-7 5-11 11-13Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 20c2-5 6-9 11-11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MindsetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 4a4 4 0 00-4 4v1a3 3 0 00-1 5v2a3 3 0 003 3h2v-2M15 4a4 4 0 014 4v1a3 3 0 011 5v2a3 3 0 01-3 3h-2v-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 4v16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
