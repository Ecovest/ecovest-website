"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Low financial literacy",
    body: "Most students leave school without ever being taught how money actually works.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path
          d="M12 6.5C10.4 5.6 8.1 5 6 5c-1.6 0-3 .3-4 1v13c1-.7 2.4-1 4-1 2.1 0 4.4.6 6 1.5 1.6-.9 3.9-1.5 6-1.5 1.6 0 3 .3 4 1V6c-1-.7-2.4-1-4-1-2.1 0-4.4.6-6 1.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 6.5V20" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Poor saving habits",
    body: "Young earners spend first and save whatever&rsquo;s left, usually nothing, instead of paying themselves first.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path
          d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M2 9v1c0 1.1.9 2 2 2h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 11h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Locked-out education",
    body: "Real finance education sits behind jargon, paywalls, or 400-page books no one reads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10.5V8a4 4 0 018 0v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 14.4v2.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="14" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "No sustainability lens",
    body: "Investing without considering climate, ethics, and longevity is investing with eyes closed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path
          d="M20 4c-9 0-13 5-13 11 0 2 1 4 2 5 0-7 5-11 11-13Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          kicker="The Problem"
          title="A generation taught to earn, but never to build wealth."
          body="The gap between what schools teach and what real life demands is widening every year. EcoVest closes it."
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
