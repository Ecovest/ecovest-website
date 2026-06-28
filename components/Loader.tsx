"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Display the splash, then fade and unmount. Dismissal is driven by plain
// setTimeout (NOT an animation callback) so it always fires even when the tab
// is backgrounded or the main thread is busy — the loader can never get stuck.
const HOLD = 2050; // ms the splash stays before it starts leaving
const FADE = 600; // ms fade-out duration

export default function Loader() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("out"), HOLD);
    const t2 = setTimeout(() => setPhase("gone"), HOLD + FADE);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  // restore scroll the moment we leave, regardless of animation state
  useEffect(() => {
    if (phase !== "in") document.body.style.overflow = "";
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      className={`fixed inset-0 z-[100] grid place-items-center bg-bone overflow-hidden transition-[opacity,transform,filter] duration-[600ms] ${
        phase === "out"
          ? "opacity-0 scale-[1.04] blur-[4px] pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0B0F0C 1px, transparent 1px), linear-gradient(to bottom, #0B0F0C 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(67,163,86,0.14), transparent 60%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        <MintScene />

        {/* wordmark — masked reveal */}
        <div className="mt-9 overflow-hidden">
          <motion.div
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
            className="font-display text-3xl font-semibold tracking-tight text-ink"
          >
            Eco<span className="text-brand-500">Vest</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.5 }}
          className="mt-2.5 text-[11px] uppercase tracking-[0.28em] text-ink/45"
        >
          Smart Finance · Sustainable Future
        </motion.div>
      </div>
    </div>
  );
}

function MintScene() {
  // live "return" counter ticking up
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(1));
  const [val, setVal] = useState("0.0");

  useEffect(() => {
    const unsub = rounded.on("change", setVal);
    const controls = animate(count, 12.4, { duration: 1.2, delay: 0.5, ease: EASE });
    return () => {
      controls.stop();
      unsub();
    };
  }, [count, rounded]);

  return (
    <div className="relative w-[240px] h-[240px]">
      {/* floating "return" chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.45, ease: "backOut" }}
        className="absolute -right-2 top-6 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-bone border border-ink/8 shadow-sm text-[11px] text-ink/75"
      >
        <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
          <path d="M4 1L7 5H5v2H3V5H1L4 1Z" fill="#2E7D32" />
        </svg>
        <span className="tabular-nums font-medium">{val}%</span>
      </motion.div>

      <svg viewBox="0 0 240 240" className="absolute inset-0 w-full h-full" fill="none">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6D277" />
            <stop offset="100%" stopColor="#D7A33C" />
          </linearGradient>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F6D277" />
            <stop offset="55%" stopColor="#43A356" />
            <stop offset="100%" stopColor="#1F5F26" />
          </linearGradient>
          <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFF0C4" />
            <stop offset="100%" stopColor="#E9BD55" />
          </linearGradient>
        </defs>

        {/* progress ring */}
        <circle cx="120" cy="120" r="110" stroke="#0B0F0C" strokeOpacity="0.08" strokeWidth="3" />
        <motion.circle
          cx="120"
          cy="120"
          r="110"
          stroke="url(#ring)"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(-90 120 120)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.7, ease: EASE }}
        />

        {/* shadow under coins */}
        <motion.ellipse
          cx="120"
          cy="182"
          rx="44"
          ry="9"
          fill="#0B0F0C"
          opacity="0.12"
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 0.12, scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ transformOrigin: "120px 182px" }}
        />

        {/* gold coin stack — drops in one by one */}
        {[
          { y: 172, r: 40 },
          { y: 160, r: 40 },
          { y: 148, r: 40 },
        ].map((c, i) => (
          <motion.g
            key={i}
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: [0.34, 1.4, 0.5, 1] }}
          >
            <ellipse cx="120" cy={c.y + 5} rx={c.r} ry="10.5" fill="#B5841F" />
            <rect x={120 - c.r} y={c.y} width={c.r * 2} height="5" fill="#B5841F" />
            <ellipse cx="120" cy={c.y} rx={c.r} ry="10.5" fill="url(#gold)" />
            <ellipse cx="120" cy={c.y} rx={c.r - 6} ry="7" fill="none" stroke="#FFE9A8" strokeOpacity="0.5" strokeWidth="1" />
          </motion.g>
        ))}

        {/* sheen sweep across top coin */}
        <motion.rect
          x="78"
          y="140"
          width="20"
          height="16"
          fill="url(#sheen)"
          opacity="0.6"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 150, opacity: [0, 0.7, 0] }}
          transition={{ delay: 0.75, duration: 0.6, ease: "easeInOut" }}
          transform="skewX(-20)"
        />

        {/* stem grows from the top coin */}
        <motion.path
          d="M120 144 C 120 122, 114 104, 120 86 C 125 70, 118 58, 120 48"
          stroke="#2E7D32"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        />

        <Leaf
          d="M117 110 C 96 106, 82 92, 82 76 C 99 78, 112 92, 117 110 Z"
          vein="M117 110 C 105 103, 95 93, 88 83"
          fill="#43A356"
          origin="117px 110px"
          delay={0.85}
        />
        <Leaf
          d="M121 88 C 144 84, 160 68, 160 52 C 140 54, 127 70, 121 88 Z"
          vein="M121 88 C 135 80, 148 67, 154 56"
          fill="#6FBA7E"
          origin="121px 88px"
          delay={1.0}
        />
        <Leaf
          d="M120 50 C 116 32, 107 22, 103 15 C 114 19, 124 35, 120 50 Z"
          vein="M120 50 C 117 40, 111 31, 105 24"
          fill="#9CD0A6"
          origin="120px 50px"
          delay={1.15}
        />
      </svg>
    </div>
  );
}

function Leaf({
  d,
  vein,
  fill,
  origin,
  delay,
}: {
  d: string;
  vein: string;
  fill: string;
  origin: string;
  delay: number;
}) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: "backOut" }}
      style={{ transformOrigin: origin }}
    >
      <path d={d} fill={fill} />
      <path d={vein} stroke="#0E2D12" strokeOpacity="0.3" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </motion.g>
  );
}
