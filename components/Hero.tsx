import { FlashIcon } from "@hugeicons/core-free-icons";
import Header, { GlowCta } from "@/components/Header";
import LogoMark from "@/components/LogoMark";
import { Icon } from "@/components/ui/Icon";
import PhoneStack from "@/components/PhoneStack";

/*
 * Hero, rebuilt from the "Hero Sections by Simoom" Figma frame (Desktop - 19),
 * recoloured to EcoVest green and rewritten for EcoVest.
 *
 * Layers, back to front:
 *  1. Two large tilted triangles with a green gradient (the "BG" polygons).
 *  2. A frosted layer (backdrop blur) with soft vertical bands on top: this turns the
 *     triangles into the streaked glow rising from the bottom.
 *  3. Header, badge, headline, copy and button.
 *  4. Three pocketa phones fanned along the bottom edge.
 */

const GREEN_FROM = "#01ad5f"; // design: #0F7DFA
const GREEN_TO = "#9be8b4"; // design: #62CDFF

function Triangle({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 1732.05 753.615" preserveAspectRatio="none" className="block h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="597.568" y1="277.763" x2="1023.03" y2="490.184" gradientUnits="userSpaceOnUse">
          <stop stopColor={GREEN_FROM} />
          <stop offset="1" stopColor={GREEN_TO} />
        </linearGradient>
      </defs>
      <path d="M866.025 0L1732.05 753.615H0L866.025 0Z" fill={`url(#${id})`} />
    </svg>
  );
}

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[calc(50%+11.6px)] top-[300px] isolate sm:top-[220px] md:top-[90px] xl:top-0 h-[1657px] w-[3301px] origin-top -translate-x-1/2 scale-[0.45] bg-paper sm:scale-[0.6] md:scale-[0.8] xl:scale-100"
    >
      {/* Left triangle: flipped and turned 162° */}
      <div className="absolute left-0 top-[83px] flex h-[1574px] w-[2213px] items-center justify-center blur-[50px]">
        <div className="relative h-[1005px] w-[2000px]" style={{ rotate: "162deg", scale: "1 -1" }}>
          <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
            <Triangle id="tri-a" />
          </div>
        </div>
      </div>
      {/* Right triangle: turned 18° */}
      <div className="absolute left-[1088.6px] top-[83px] flex h-[1574px] w-[2213px] items-center justify-center blur-[50px]">
        <div className="relative h-[1005px] w-[2000px]" style={{ rotate: "18deg" }}>
          <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
            <Triangle id="tri-b" />
          </div>
        </div>
      </div>
      {/* Frosted bands: in Figma each band blurs what's under it (50px); here the
          triangles carry that blur and the bands add the soft vertical shading. */}
      <div className="absolute inset-0" style={{ backgroundPosition: "center top" }}>
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(40,40,40,0.38) 16.667%, rgba(255,255,255,0.12) 100%)",
            backgroundSize: "65px 100%",
            backgroundRepeat: "repeat-x",
          }}
        />
      </div>
    </div>
  );
}

/** Glossy EcoVest app icon set into the headline, with a soft glow behind it. */
function AppIcon() {
  const tile =
    "absolute inset-0 grid place-items-center overflow-hidden rounded-[21%] border-[2.3px] border-white bg-[linear-gradient(180deg,#016d3a_0%,#44c97c_100%)]";
  return (
    <span aria-hidden="true" className="relative mx-[0.12em] inline-block h-[0.9em] w-[0.9em] translate-y-[0.06em] align-baseline">
      <span className={`${tile} opacity-80 blur-[20px]`} />
      <span className={tile}>
        <span className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.45),rgba(255,255,255,0)_60%)]" />
        <LogoMark className="relative h-[62%] w-[62%] text-white drop-shadow-[0_1px_2px_rgba(0,32,13,0.35)]" />
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <div className="bg-paper">
      {/* Full-bleed: spans the whole screen width and at least the screen height. */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] w-full flex-col overflow-hidden rounded-b-[20px] bg-paper"
      >
        <Backdrop />
        <Header />

        <div className="relative z-10 mx-auto mt-6 flex max-w-[720px] flex-col items-center px-5 text-center md:mt-10 xl:mt-[44px]">
          <div className="inline-flex items-center gap-1 rounded-[61px] border border-[rgba(1,173,95,0.22)] bg-white px-2.5 py-1.5 sm:px-3 sm:py-2">
            <Icon icon={FlashIcon} size={16} className="text-green-600" />
            <span className="text-[12px] uppercase leading-[1.5] tracking-[-0.01em] text-ink-700 sm:text-[14px]">
              Building financial intelligence
            </span>
          </div>

          <h1 className="mt-5 font-display text-[36px] font-medium leading-[1.1] tracking-[-0.025em] text-ink-700 sm:mt-6 sm:text-[56px] md:text-[72px]">
            Learn <AppIcon /> Money
            <br />
            Grow Your <span className="font-serif text-[1.02em] font-normal italic tracking-[-0.02em]">Future</span>
          </h1>

          <p className="mt-4 max-w-[622px] text-[15px] leading-[1.45] tracking-[-0.015em] text-ink-700 sm:mt-6 md:text-[18px]">
            Learn how money works, practise investing with pretend money, and invest through licensed partners when
            you&apos;re ready. An AI coach answers your questions along the way.
          </p>

          <div className="mt-7 sm:mt-9">
            <GlowCta href="#get-started">Get started free</GlowCta>
          </div>
        </div>

        {/* Phones start just under the button and fill the rest of the hero; its edge crops them. */}
        <PhoneStack />
      </section>

      <Topics />
    </div>
  );
}

const TOPICS = ["Budgeting", "Saving", "Investing", "Stocks & ETFs", "Sustainability", "AI Coach", "Community"];

/** The design's "Trusted by" logo row, rewritten as what EcoVest teaches (no made-up logos or numbers). */
function Topics() {
  return (
    <section className="flex flex-col items-center gap-9 pb-10 pt-16 md:pt-20">
      <p className="px-5 text-center text-[16px] leading-[1.4] tracking-[-0.015em] text-ink-600 md:text-[18px]">
        What you&apos;ll{" "}
        <span className="bg-gradient-to-b from-green-600 to-green-400 bg-clip-text text-transparent">learn on EcoVest</span>
      </p>
      <div className="relative w-full max-w-[1225px] overflow-hidden">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 md:flex-nowrap md:gap-12">
          {TOPICS.map((t) => (
            <li key={t} className="whitespace-nowrap font-display text-[20px] font-semibold tracking-[-0.03em] text-ink-600 md:text-[24px]">
              {t}
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[153px] bg-gradient-to-r from-paper to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[153px] bg-gradient-to-l from-paper to-transparent md:block" />
      </div>
    </section>
  );
}
