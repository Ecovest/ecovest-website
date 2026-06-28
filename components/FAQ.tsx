"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is EcoVest?",
    a: "EcoVest is a community-driven platform that teaches young people how money actually works, and how to invest it in a way that builds wealth without burning the planet. Financial literacy, sustainable investing, and a community that takes the long game seriously, all in one place.",
  },
  {
    q: "What are the features?",
    a: "Four core pillars: Finance Basics (budgeting, credit, taxes), Investing (index funds, compounding, risk), Sustainability (ESG, green bonds, climate-aligned portfolios), and Mindset (the habits and patience that make wealth inevitable). On top of that: a peer community, structured lesson tracks, and AI-powered finance tools shipping in the next phase.",
  },
  {
    q: "Why is it good?",
    a: "Most finance education is either locked behind jargon and 400-page books, or hidden inside trading apps that just want you to gamble. EcoVest is built for short attention spans, taught in 5-minute lessons you actually finish, and grounded in sustainability, so the wealth you build is wealth the future can still spend.",
  },
  {
    q: "How competitive is it?",
    a: "The space splits into two camps: 'learn finance' apps that are dry and theoretical, and 'invest now' apps that skip the education. EcoVest sits in the gap with three things neither does well: a real community for accountability, a sustainability lens on every lesson, and pricing built for students, not hedge-fund analysts.",
  },
  {
    q: "What are my gains?",
    a: "Hard skills: financial literacy you can actually apply, an investing playbook that compounds for decades, and a sustainability framework most adults don't have. Softer ones: long-term thinking, money habits that quietly change your life, and an early-mover seat in a community that's going to matter.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-600 mb-5">
              <span className="w-6 h-px bg-brand-500" />
              FAQ
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] leading-[1.05] tracking-tightest text-ink">
              Questions, <br />
              <span className="italic font-medium text-brand-600">
                answered.
              </span>
            </h2>
            <p className="mt-5 text-ink/60 leading-relaxed">
              Still curious? Drop a note at{" "}
              <a
                href="mailto:hello@ecovest.app"
                className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                hello@ecovest.app
              </a>{" "}
              and we&rsquo;ll get back within a day.
            </p>

            {/* desktop-only photo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative mt-10 aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[28px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1518644730709-0835105d9daa?auto=format&fit=crop&w=900&q=80"
                alt="A young learner thinking through a question on their laptop"
                fill
                sizes="340px"
                className="object-cover"
              />
              {/* soft tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

              {/* floating chip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-3 py-2.5 rounded-2xl bg-bone/95 backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  <span className="text-xs text-ink/75 truncate">
                    Average reply time · under 6 hrs
                  </span>
                </div>
                <span className="shrink-0 text-[10px] uppercase tracking-wider text-ink/45">
                  Live
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-ink/8 border-y border-ink/8">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-start gap-6 py-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-sm text-brand-600 font-semibold pt-0.5 tabular-nums">
                        0{i + 1}
                      </span>
                      <span className="flex-1 font-display text-lg md:text-xl font-medium tracking-tight text-ink leading-snug">
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 mt-1 w-8 h-8 rounded-full border border-ink/12 grid place-items-center text-ink/70 transition-all ${
                          isOpen
                            ? "bg-ink text-bone rotate-45 border-ink"
                            : "group-hover:border-brand-500 group-hover:text-brand-600"
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M6 1v10M1 6h10"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.25 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[3.25rem] pr-12 pb-7 text-ink/65 leading-relaxed text-[15px]">
                            {f.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
