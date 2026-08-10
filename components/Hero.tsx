"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* soft background radial */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(67,163,86,0.10), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(31,95,38,0.06), transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 z-10">
          {/* <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink/10 text-xs text-ink/70 mb-7"
          >
            Now accepting early access
          </motion.div> */}

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tightest text-ink"
          >
            Building{" "}
            <span className="italic font-medium text-brand-600">
              financial
            </span>
            <br />
            intelligence.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 text-lg text-ink/65 max-w-xl leading-relaxed"
          >
            EcoVest is an AI-powered financial growth ecosystem that helps you
            learn, earn, invest, and build long-term wealth, through education,
            technology, and community. Starting in Nigeria, built for Africa.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-8 max-w-md"
          >
            <WaitlistForm />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-ink/55"
          >
            {/* <Stat value="2.4K+" label="On the waitlist" /> */}
            <Divider />
            <Stat
              value="4 pillars"
              label="Education · AI · Community · Investing"
            />
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <Hero3D />
          {/* tiny labels around the scene */}
          <FloatingTag
            className="top-8 right-4"
            text="AI Financial Coach"
            dot
          />
          <FloatingTag
            className="bottom-10 left-2"
            text="Learn · Invest · Grow"
            dot
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-xl text-ink font-semibold">{value}</div>
      <div className="text-xs uppercase tracking-wider text-ink/45 mt-0.5">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden sm:block w-px h-8 bg-ink/10" />;
}

function FloatingTag({
  text,
  className = "",
  dot = false,
}: {
  text: string;
  className?: string;
  dot?: boolean;
}) {
  return (
    <div
      className={`hidden md:flex absolute items-center gap-2 px-3 py-2 rounded-full bg-bone border border-ink/8 shadow-sm text-xs text-ink/75 animate-float ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
      {text}
    </div>
  );
}
