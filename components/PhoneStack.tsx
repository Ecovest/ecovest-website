"use client";

import { useEffect, useRef, useState } from "react";

/**
 * pocketa screenshots for the three phones: [front, left, right].
 * Files live in /public/pocketer/. Use portrait screenshots (about 9:19.5).
 */
const pocketa_SCREENS: [string, string, string] = [
  "/pocketer/home.webp",
  "/pocketer/new-goal.webp",
  "/pocketer/goal-amount.webp",
];

/**
 * iPhone frame (public/devices/iphone-frame.webp, 978×2000) with a screen behind it.
 * The frame's screen area is transparent: 5.32% in from the sides, 2.5% from top and bottom.
 */
function Phone({ rotate = 0, screen, style, className = "" }: {
  rotate?: number;
  screen?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`absolute aspect-[978/2000] drop-shadow-[0_18px_30px_rgba(0,32,13,0.22)] ${className}`}
      style={{ rotate: `${rotate}deg`, ...style }}
    >
      <div className="absolute inset-x-[5.32%] inset-y-[2.5%] overflow-hidden rounded-[15%/6.9%] bg-[#f7f9f8]">
        {screen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={screen} alt="" className="h-full w-full object-cover object-top" />
        ) : null}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/devices/iphone-frame.webp" alt="" className="pointer-events-none relative block h-full w-full" draggable={false} />
    </div>
  );
}

/**
 * Three phones that fill the space left under the hero button.
 * One unit (--u) = 1.25% of that space's height, capped by its width and by 6.4px.
 * The front phone is 135 units (~170% of the space) tall, so it always runs off the hero's bottom edge,
 * on short laptops, tall monitors and phones alike. Measured in JS so it behaves
 * the same in Safari, Chrome and Firefox.
 */
// Entrance: the front phone rises into place, then the two side phones slide out
// from behind it and fan out to their tilted positions.
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const FRONT_IN = `translate 900ms ${EASE} 150ms, opacity 600ms ease 150ms`;
const SIDE_IN = `translate 1100ms ${EASE} 600ms, rotate 1100ms ${EASE} 600ms, opacity 250ms ease 600ms`;

export default function PhoneStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Skip the animation for people who prefer reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEntered(true);
      return;
    }
    const t = window.setTimeout(() => setEntered(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const { width, height } = el.getBoundingClientRect();
      const u = Math.min(height * 0.0125, width * 0.0072, 6.4);
      el.style.setProperty("--u", `${u.toFixed(3)}px`);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative mt-6 min-h-[300px] w-full flex-1 select-none [--u:4.6px] md:mt-8 md:min-h-[360px]"
    >
      {/* Left and right: the two goal screens, tilted behind */}
      {/* Before entering, each sits centred behind the front phone, upright. */}
      <Phone
        className="z-[1]"
        rotate={entered ? -9 : 0}
        screen={pocketa_SCREENS[1]}
        style={{
          width: "calc(var(--u) * 56)",
          left: "calc(50% - var(--u) * 80)",
          top: "calc(var(--u) * 14)",
          translate: entered ? "0 0" : "calc(var(--u) * 52) calc(var(--u) * 4)",
          opacity: entered ? 1 : 0,
          transition: SIDE_IN,
        }}
      />
      <Phone
        className="z-[1]"
        rotate={entered ? 9 : 0}
        screen={pocketa_SCREENS[2]}
        style={{
          width: "calc(var(--u) * 56)",
          left: "calc(50% + var(--u) * 24)",
          top: "calc(var(--u) * 14)",
          translate: entered ? "0 0" : "calc(var(--u) * -52) calc(var(--u) * 4)",
          opacity: entered ? 1 : 0,
          transition: SIDE_IN,
        }}
      />
      {/* Front: pocketa home */}
      <Phone
        className="z-[2]"
        screen={pocketa_SCREENS[0]}
        style={{
          width: "calc(var(--u) * 66)",
          left: "calc(50% - var(--u) * 33)",
          top: "0px",
          translate: entered ? "0 0" : "0 calc(var(--u) * 22)",
          opacity: entered ? 1 : 0,
          transition: FRONT_IN,
        }}
      />
    </div>
  );
}
