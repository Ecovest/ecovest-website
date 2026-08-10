"use client";

import { motion } from "framer-motion";
import {
  BookBookmark,
  PiggyBank,
  ShieldWarning,
  ArrowsLeftRight,
} from "@phosphor-icons/react/dist/ssr";

const items = [
  {
    title: "Little financial education",
    body: "Many young Africans finish school without ever being taught how money, saving, or investing actually works.",
    icon: <BookBookmark size={22} weight="duotone" />,
  },
  {
    title: "Poor saving habits",
    body: "Young earners spend first and save whatever&rsquo;s left, start investing too late, or never start at all.",
    icon: <PiggyBank size={22} weight="duotone" />,
  },
  {
    title: "No trustworthy guidance",
    body: "Investment information is confusing, personalized advice is scarce, and scams are everywhere.",
    icon: <ShieldWarning size={22} weight="duotone" />,
  },
  {
    title: "A gap between learning and doing",
    body: "Investment platforms assume you already understand finance. Learning platforms never show you how to take action.",
    icon: <ArrowsLeftRight size={22} weight="duotone" />,
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          kicker="The Problem"
          title="A generation taught to earn, but never to build wealth."
          body="Financial literacy affects nearly every part of life, better decisions, less debt, fewer scams, wealth built earlier. EcoVest closes the gap between knowing and doing."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/8 rounded-3xl overflow-hidden border border-ink/8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bone p-8 lg:p-9 flex flex-col gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-100 transition">
                {it.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink tracking-tight">
                {it.title}
              </h3>
              <p
                className="text-sm text-ink/60 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: it.body }}
              />
              <div className="mt-auto pt-4 text-xs uppercase tracking-wider text-ink/35">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  body,
  align = "left",
}: {
  kicker: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-600 mb-5">
        <span className="w-6 h-px bg-brand-500" />
        {kicker}
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tightest text-ink">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-lg text-ink/60 leading-relaxed max-w-2xl">
          {body}
        </p>
      )}
    </div>
  );
}
