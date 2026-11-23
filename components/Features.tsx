"use client";

import {
  AiChat02Icon,
  BankIcon,
  BookOpen01Icon,
  Certificate01Icon,
  ChartLineData01Icon,
  Coins01Icon,
  File02Icon,
  FileValidationIcon,
  Leaf01Icon,
  LockIcon,
  PiggyBankIcon,
  Sent02Icon,
  Target02Icon,
  UserGroupIcon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";
import LogoMark from "@/components/LogoMark";
import { Icon } from "@/components/ui/Icon";
import { delay, useInView } from "@/lib/useInView";

/*
 * Features, rebuilt to the measurements of the user's Figma frame
 * ("Rolai — AI feature cards", node 6:58), scaled 1.5×, recoloured to EcoVest green.
 * Figma: frames #efefef r20 p10, cards white border #e6e6e6 r14 shadow 0 2 1.5 /13%,
 * titles 15px medium #101010, body 11.2px #666. The Figma illustrations are one flat
 * screenshot with third-party logos, so they're redrawn here at the same pixel positions.
 */

const VIVID = "#00b25b";
const VIVID_LIGHT = "#8be8b2";
const SOFT = "#5fd897"; // gentler green for borders and glows

/* ---------- helpers ---------- */

/** Draws children at Figma pixel size (w×h) and scales them to the available width. */
function ScaleBox({ w, h, children, className = "" }: { w: number; h: number; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => el.style.setProperty("--s", String(el.getBoundingClientRect().width / w));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={ref} className={`relative w-full [--s:1.5] ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: w, height: h, transform: "scale(var(--s))" }}>
        {children}
      </div>
    </div>
  );
}

const d = delay;

/* ---------- shared card chrome (Figma: frame + card) ---------- */

function Frame({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`ev-rise rounded-[22px] bg-[#efefef] p-[8px] lg:rounded-[calc(var(--k)*20px)] lg:p-[calc(var(--k)*10px)] ${className}`} style={d(delay)}>
      <div className="relative h-full overflow-hidden rounded-[16px] lg:rounded-[calc(var(--k)*14px)] border border-[#e6e6e6] bg-white shadow-[0_3px_2px_rgba(0,0,0,0.10)]">
        {children}
      </div>
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h3 className="font-sans text-[18px] font-medium leading-[1.2] tracking-[-0.01em] text-[#101010] lg:text-[calc(var(--k)*15px)]">{children}</h3>;
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mt-2 text-[14px] leading-[1.4] text-[#666] lg:mt-[calc(var(--k)*9.3px)] lg:text-[calc(var(--k)*11.2px)] lg:leading-[1.3] ${className}`}>{children}</p>;
}

/* ---------- 1. Hub (Figma illustration box 292×248) ---------- */

function Chip({ icon, x, y, ring, faded, tone = "text-[#2b2f2d]", delay }: {
  icon: IconSvgElement;
  x: number;
  y: number;
  ring?: boolean;
  faded?: boolean;
  tone?: string;
  delay: number;
}) {
  const size = ring ? 34 : 26;
  return (
    <div className="absolute" style={{ left: x - size / 2, top: y - size / 2, width: size, height: size }}>
      <div className={`ev-pop h-full w-full ${faded ? "opacity-40" : ""}`} style={d(delay)}>
        {ring ? (
          <div
            className="h-full w-full rounded-full p-[2.5px] shadow-[0_3px_8px_-3px_rgba(0,178,91,0.28)]"
            style={{ background: `linear-gradient(140deg, ${VIVID_LIGHT}, ${SOFT})` }}
          >
            <div className="grid h-full w-full place-items-center rounded-full bg-white">
              <Icon icon={icon} size={15} strokeWidth={1.8} className="text-green-600" />
            </div>
          </div>
        ) : (
          <div className="grid h-full w-full place-items-center rounded-full bg-white shadow-[0_1px_5px_rgba(0,0,0,0.12)] ring-1 ring-[#ececec]">
            <Icon icon={icon} size={13} strokeWidth={1.8} className={tone} />
          </div>
        )}
      </div>
    </div>
  );
}

function Hub() {
  const line = "#e4e4e4";
  return (
    <div className="relative h-[248px] w-[292px]">
      <svg width="292" height="248" viewBox="0 0 292 248" fill="none" className="absolute inset-0" aria-hidden="true">
        {/* rails */}
        <path className="ev-draw" pathLength={1} d="M58 4V246" stroke={line} style={d(100)} />
        <path className="ev-draw" pathLength={1} d="M238 4V246" stroke={line} style={d(100)} />
        {/* connectors */}
        <path className="ev-draw" pathLength={1} d="M58 48H120a6 6 0 0 1 6 6V68" stroke={line} style={d(500)} />
        <path className="ev-draw" pathLength={1} d="M58 148H98" stroke={line} style={d(600)} />
        <path className="ev-draw" pathLength={1} d="M171 68V36a6 6 0 0 1 6-6H202a6 6 0 0 0 6-6V4" stroke={line} style={d(700)} />
        <path className="ev-draw" pathLength={1} d="M124 185V246" stroke={line} style={d(700)} />
        <path className="ev-draw" pathLength={1} d="M171 185V219a6 6 0 0 0 6 6H238" stroke={line} style={d(800)} />
        {/* green accents */}
        <path d="M58 40V57M58 140V157M238 214V232" stroke={VIVID} strokeWidth="2.6" strokeLinecap="round" className="ev-rise" style={d(1100)} />
        <path d="M188 225H234" stroke={VIVID} strokeWidth="1.8" strokeLinecap="round" className="ev-rise" style={d(1200)} />
        {/* light running along the connectors */}
        <g className="motion-reduce:hidden">
          <circle r="2.2" fill={VIVID}>
            <animateMotion dur="2.8s" begin="1.4s" repeatCount="indefinite" path="M58 48H120a6 6 0 0 1 6 6V68" />
          </circle>
          <circle r="2.2" fill={VIVID}>
            <animateMotion dur="3.2s" begin="2s" repeatCount="indefinite" path="M171 185V219a6 6 0 0 0 6 6H238" />
          </circle>
          <circle r="2.2" fill={VIVID}>
            <animateMotion dur="3.6s" begin="2.6s" repeatCount="indefinite" path="M58 148H98" />
          </circle>
        </g>
      </svg>

      {/* left: what you use */}
      <Chip icon={BookOpen01Icon} x={28} y={25} faded delay={300} />
      <Chip icon={AiChat02Icon} x={28} y={75} ring delay={380} />
      <Chip icon={Wallet01Icon} x={28} y={125} delay={460} />
      <Chip icon={UserGroupIcon} x={28} y={175} tone="text-green-600" delay={540} />
      <Chip icon={ChartLineData01Icon} x={28} y={225} faded delay={620} />
      {/* right: where it leads */}
      <Chip icon={PiggyBankIcon} x={268} y={25} faded delay={340} />
      <Chip icon={Target02Icon} x={268} y={75} tone="text-green-600" delay={420} />
      <Chip icon={Coins01Icon} x={268} y={125} tone="text-gold-500" delay={500} />
      <Chip icon={Certificate01Icon} x={268} y={175} ring delay={580} />
      <Chip icon={Leaf01Icon} x={268} y={225} faded delay={660} />

      {/* the hub tile: x 98–198, y 68–185 */}
      <div className="absolute left-[98px] top-[68px] h-[117px] w-[100px]">
        <div className="ev-glow absolute -inset-3 rounded-[26px] bg-[radial-gradient(60%_60%_at_80%_85%,rgba(0,178,91,0.18),transparent_70%)] blur-md" />
        <div className="ev-pop relative h-full w-full" style={d(200)}>
          <div
            className="h-full w-full rounded-[18px] p-[4px] shadow-[0_8px_18px_-10px_rgba(0,178,91,0.32)]"
            style={{ background: `linear-gradient(135deg, #ffffff 38%, #c9f2db 70%, ${SOFT} 100%)` }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#ffffff,#f3f8f5)]">
              <LogoMark className="h-[20px] w-[20px] text-green-500" />
              <span className="mt-1 text-[12.5px] font-semibold tracking-[-0.01em] text-[#101010]">EcoVest</span>
              <span className="mt-0.5 text-[8.5px] text-[#9a9a9a]">One ecosystem</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 2. Shield ----------
 * Built at real sizes and laid out from the centre, so it's always centred and balanced
 * in the card. Fully static by request: no floating, drifting, pulsing or pop-in. */

function DocTile({ icon, corner, className, rotate, left }: { icon: IconSvgElement; corner: string; className: string; rotate: number; left: string }) {
  return (
    <div className={`absolute ${className}`} style={{ rotate: `${rotate}deg`, left }}>
      <div className="relative grid h-[50px] w-[42px] place-items-center rounded-[9px] xl:h-[62px] xl:w-[52px] xl:rounded-[11px] bg-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.18)] ring-1 ring-[#ececec]">
        <span className={`absolute right-0 top-0 h-[12px] w-[12px] rounded-bl-[5px] rounded-tr-[9px] ${corner}`} />
        <Icon icon={icon} size={18} strokeWidth={1.7} className="text-[#3a3f3c]" />
      </div>
    </div>
  );
}

function RoundChip({ icon, tone, className, left }: { icon: IconSvgElement; tone: string; className: string; left: string }) {
  return (
    <div
      className={`absolute grid h-[38px] w-[38px] place-items-center rounded-full xl:h-[48px] xl:w-[48px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.10)] ring-1 ring-[#ececec] ${className}`}
      style={{ left }}
    >
      <Icon icon={icon} size={17} strokeWidth={1.7} className={tone} />
    </div>
  );
}

function Shield() {
  // Horizontal offsets from the centre, capped so nothing crowds on narrow cards.
  const near = "min(140px, 32%)";
  const far = "min(185px, 41%)";
  return (
    <div className="relative mx-auto h-[210px] w-full max-w-[400px] lg:h-[calc(var(--k)*160px)] lg:max-w-[calc(var(--k)*270px)]">
      {/* two quiet rails across the full width */}
      <div className="absolute inset-x-0 top-[34%] h-px bg-[#eef0ef]" />
      <div className="absolute inset-x-0 top-[62%] h-px bg-[#eef0ef]" />

      {/* side items, placed symmetrically around the shield */}
      <DocTile icon={FileValidationIcon} corner="bg-green-500" rotate={-8} className="top-[10%] -translate-x-1/2" left={`calc(50% - ${far})`} />
      <RoundChip icon={BankIcon} tone="text-[#2b2f2d]" className="top-[17%] -translate-x-1/2" left={`calc(50% + ${near})`} />
      <RoundChip icon={LockIcon} tone="text-gold-500" className="top-[62%] -translate-x-1/2 -translate-y-1/2" left={`calc(50% - ${near})`} />
      <DocTile icon={File02Icon} corner="bg-gold-400" rotate={8} className="top-[52%] -translate-x-1/2" left={`calc(50% + ${far})`} />

      {/* soft, static glow and the shield, dead centre */}
      <div className="absolute left-1/2 top-[64%] h-[70px] w-[170px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,178,91,0.18),rgba(0,178,91,0))] blur-lg" />
      <div className="absolute left-1/2 top-[6%] w-[104px] -translate-x-1/2 lg:w-[calc(var(--k)*77px)]">
        <svg viewBox="0 0 78 98" className="block h-auto w-full drop-shadow-[0_8px_14px_rgba(0,120,60,0.16)]" aria-hidden="true">
          <defs>
            <linearGradient id="ev-shield" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#4fe39c" />
              <stop offset="1" stopColor="#00a050" />
            </linearGradient>
            <linearGradient id="ev-shield-shine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M39 1.5c8.5 5.6 21 8.6 34.5 8.6 2.4 0 3.5 1.2 3.5 3.6v28.6c0 25-16 42.6-36.8 53a3 3 0 0 1-2.4 0C17 85 1 67.4 1 42.3V13.7c0-2.4 1.1-3.6 3.5-3.6C18 10.1 30.5 7.1 39 1.5z" fill="url(#ev-shield)" />
          <path d="M39 1.5c8.5 5.6 21 8.6 34.5 8.6 2.4 0 3.5 1.2 3.5 3.6v28.6c0 25-16 42.6-36.8 53a3 3 0 0 1-2.4 0C17 85 1 67.4 1 42.3V13.7c0-2.4 1.1-3.6 3.5-3.6C18 10.1 30.5 7.1 39 1.5z" fill="url(#ev-shield-shine)" />
        </svg>
        <LogoMark className="absolute left-1/2 top-[42%] h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 text-white" />
      </div>

    </div>
  );
}

/* ---------- 3. AI coach prompt (Figma card coordinates, 282×185) ---------- */

const QUESTIONS = [
  "How do I start saving with ₦20k a month?",
  "What's the difference between a stock and an ETF?",
  "Is this investment offer a scam?",
];

function useTyping(active: boolean) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (!active || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let q = 0;
    let i = 0;
    let deleting = false;
    let timer: number;
    const tick = () => {
      const target = QUESTIONS[q];
      if (!deleting) {
        i++;
        setText(target.slice(0, i));
        if (i === target.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1800);
          return;
        }
        timer = window.setTimeout(tick, 45);
      } else {
        i--;
        setText(target.slice(0, i));
        if (i === 0) {
          deleting = false;
          q = (q + 1) % QUESTIONS.length;
          timer = window.setTimeout(tick, 500);
          return;
        }
        timer = window.setTimeout(tick, 18);
      }
    };
    timer = window.setTimeout(tick, 1600);
    return () => window.clearTimeout(timer);
  }, [active]);
  return text;
}

/**
 * Built at real sizes (not scaled), so text, the input ring and spacing stay crisp and
 * line up with the card text at every width. Proportions follow the Figma card.
 */
function Prompt({ active }: { active: boolean }) {
  const typed = useTyping(active);
  return (
    <div className="flex w-full flex-col gap-5 xl:gap-7">
      {/* earlier prompts */}
      <div className="ev-rise rounded-[22px] bg-[#f8f8f8] px-5 pb-5 pt-4 xl:rounded-[28px] xl:px-7 xl:pb-7 xl:pt-6 shadow-[0_1px_1px_rgba(0,120,60,0.08)]" style={d(250)}>
        <p className="text-[12.5px] leading-[1.35] text-[#6b6b6b] xl:text-[15px]">
          Explain compound interest with a ₦10,000 example, then tell me what to do next.
        </p>
        <div className="my-4 h-px bg-[#eaeaea] xl:my-5" />
        <p className="text-[12px] leading-none text-[#666666] xl:text-[14px]">Your question</p>
        <p className="mt-2 text-[14px] leading-[1.4] text-[#555] xl:text-[17px]">Is ₦5,000 a month too small to start investing?</p>
      </div>

      {/* input with a thin, soft green edge */}
      <div className="ev-rise relative" style={d(450)}>
        <div
          className="ev-glow absolute -inset-1.5 rounded-full blur-md"
          style={{ background: "linear-gradient(90deg, rgba(0,178,91,0.20), rgba(139,232,178,0.06) 50%, rgba(0,178,91,0.20))" }}
        />
        <div
          className="relative rounded-full p-[2px]"
          style={{ background: `linear-gradient(90deg, ${SOFT} 0%, #e3f6eb 28%, #f6fbf8 50%, #e3f6eb 72%, ${SOFT} 100%)` }}
        >
          <div className="flex h-12 items-center gap-3 rounded-full xl:h-[60px] xl:pl-6 border border-[#e4e6ee] bg-[#fbfbfb] pl-5 pr-4">
            <p className="min-w-0 flex-1 truncate text-[14px] xl:text-[17px]">
              {typed ? (
                <span className="text-[#2b2f2d]">
                  {typed}
                  <span className="ev-caret ml-px inline-block h-[14px] w-px translate-y-[2px] bg-green-500" />
                </span>
              ) : (
                <span className="text-[#9b9b9b]">Ask me anything about money...</span>
              )}
            </p>
            <Icon icon={Sent02Icon} size={18} strokeWidth={1.8} className="shrink-0 text-[#2b2f2d]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- section ---------- */

export default function Features() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="features"
      ref={ref}
      data-in={inView}
      className="bg-paper px-4 py-14 md:px-8 md:py-28 xl:py-32 lg:[--k:1.5] xl:[--k:1.95] 2xl:[--k:2.08]"
    >
      <div className="mx-auto max-w-[924px] lg:max-w-[calc(var(--k)*616px)]">
        <div className="ev-rise mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 rounded-[61px] border border-[rgba(0,178,91,0.25)] bg-white px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-[#555] lg:px-4 lg:py-2 lg:text-[14px]">
            {/* <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> */}
            Features
          </span>
          <h2 className="mt-4 font-sans text-[30px] font-medium leading-[1.08] tracking-[-0.03em] text-[#101010] md:mt-6 md:text-[56px] lg:text-[64px] xl:text-[72px]">
            Everything you need to{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-green-600">grow</span> with money
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[15px] leading-[1.5] text-[#666] md:mt-5 md:text-[18px] xl:max-w-[600px] xl:text-[20px]">
            Lessons, an AI coach, a community and tools to plan your money.
          </p>
        </div>

        {/* Figma: 616 wide → 924 here (1.5×). Gap 11–12 → 18. */}
        <div className="mt-9 grid grid-cols-1 gap-3 md:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-[calc(var(--k)*12px)]">
          {/* 1 — wide card: 596×274 → 894×411 */}
          <Frame className="lg:col-span-2" delay={100}>
            <div className="flex flex-col gap-4 p-4 lg:block lg:h-[calc(var(--k)*274px)] lg:p-0">
              <div className="order-2 lg:absolute lg:left-[calc(var(--k)*22px)] lg:top-[calc(var(--k)*81px)] lg:w-[calc(var(--k)*227px)]">
                <span aria-hidden="true" className="mb-3 flex flex-col gap-[4px] lg:mb-[calc(var(--k)*18px)]">
                  <span className="h-[4px] w-[26px] rounded-full bg-green-500" />
                  <span className="ml-[10px] h-[4px] w-[30px] rounded-full bg-green-500" />
                </span>
                <Title>
                  Learn, plan and invest
                  <br />
                  in one app
                </Title>
                <Body className="max-w-[340px]">
                  No more switching between a learning app, a budget app and an investing app.
                </Body>
              </div>
              <div className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:absolute lg:left-[calc(var(--k)*274px)] lg:top-[calc(var(--k)*10px)] lg:w-[calc(var(--k)*292px)] lg:max-w-none">
                <ScaleBox w={292} h={248}>
                  <Hub />
                </ScaleBox>
              </div>
            </div>
          </Frame>

          {/* 2 — shield card: 282×310 → 423×465 */}
          <Frame delay={250}>
            <div className="flex flex-col p-4 lg:block lg:h-[calc(var(--k)*310px)] lg:p-0">
              <div className="w-full pt-2 lg:absolute lg:left-[calc(var(--k)*8px)] lg:right-[calc(var(--k)*8px)] lg:top-[calc(var(--k)*26px)] lg:w-auto lg:pt-0">
                <Shield />
              </div>
              <div className="mt-4 lg:absolute lg:left-[calc(var(--k)*22px)] lg:top-[calc(var(--k)*205px)] lg:mt-0 lg:w-[calc(var(--k)*240px)]">
                <Title>
                  Licensed partners
                  <br />
                  only
                </Title>
                <Body>Every investment goes through a licensed partner. You see the risks before you commit, plus warnings about common scams.</Body>
              </div>
            </div>
          </Frame>

          {/* 3 — AI coach card: 282×310 → 423×465 */}
          <Frame delay={400}>
            <div className="flex flex-col p-4 lg:block lg:h-[calc(var(--k)*310px)] lg:p-0">
              {/* lg: sits in the Figma's top area (y 12–250), aligned with the title's left edge */}
              <div className="w-full lg:absolute lg:left-[calc(var(--k)*22px)] lg:right-[calc(var(--k)*22px)] lg:top-[calc(var(--k)*16px)] lg:w-auto">
                <Prompt active={inView} />
              </div>
              <div className="mt-7 lg:absolute lg:left-[calc(var(--k)*22px)] lg:top-[calc(var(--k)*205px)] lg:mt-0 lg:w-[calc(var(--k)*240px)]">
                <Title>
                  Ask your AI coach
                  <br />
                  anything
                </Title>
                <Body>Ask in plain English and get a straight answer, plus what to learn or do next.</Body>
              </div>
            </div>
          </Frame>
        </div>
      </div>
    </section>
  );
}
