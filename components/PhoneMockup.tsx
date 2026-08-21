"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  GraduationCap,
  ChartLineUp,
  Robot,
  CaretRight,
  BookOpenText,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

export default function PhoneMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
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
          Total learning hours
        </div>
        <div className="inline-flex items-center gap-1 text-[10px] text-brand-600 font-medium tabular-nums">
          <TrendUp size={11} weight="bold" />
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
    { label: "Learn", icon: <GraduationCap size={17} weight="duotone" /> },
    { label: "Invest", icon: <ChartLineUp size={17} weight="duotone" /> },
    { label: "Trade", icon: <TrendUp size={17} weight="duotone" /> },
    { label: "AI Coach", icon: <Robot size={17} weight="duotone" /> },
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
        <BookOpenText size={15} weight="duotone" />
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
        <CaretRight size={11} weight="bold" />
      </div>
    </motion.div>
  );
}
