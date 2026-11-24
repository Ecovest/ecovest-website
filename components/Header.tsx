"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import LogoMark from "@/components/LogoMark";
import { Icon } from "@/components/ui/Icon";

const links = [
  // { href: "/", label: "Home" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#get-started", label: "Contact" },
];

const SECONDARY = { href: "/#community", label: "Join community" };
const PRIMARY = { href: "/#get-started", label: "Get started free" };

/**
 * Sits inside the hero card, so it blends with it (rule: header blends with the hero).
 * On phones and tablets the menu always opens full screen (rule).
 */
function Burger({ open }: { open: boolean }) {
  const bar =
    "absolute left-1/2 h-[1.5px] w-[20px] -translate-x-1/2 rounded-full bg-ink-950 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]";
  return (
    <span aria-hidden="true" className="relative block h-5 w-5">
      <span className={`${bar} top-[6px] ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
      <span className={`${bar} top-[13px] ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
    </span>
  );
}

/** White pill with a soft green inner glow, as in the design's "Get Demo" button. */
export function SoftPill({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center whitespace-nowrap rounded-[61px] border border-[#eef3f0] bg-white px-4 py-2.5 text-[16px] font-medium leading-[1.5] tracking-[-0.02em] text-ink-700 shadow-[inset_0_-8px_12px_0_rgba(1,173,95,0.10)] transition-colors hover:text-ink-950 ${className}`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [navH, setNavH] = useState<number | null>(null);

  // Fixed bar: a spacer keeps the page from jumping under it, and the bar
  // gets a solid paper background once the page scrolls (no glass, site rule).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    // Hide on scroll down, show again on any scroll up. Small moves (<6px) are
    // ignored so trackpad jitter doesn't make the bar flicker.
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const dy = y - lastY;
      if (Math.abs(dy) < 6) return;
      setHidden(dy > 0 && y > el.offsetHeight);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => setNavH(el.offsetHeight));
    ro.observe(el);
    return () => {
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (menuRef.current) menuRef.current.inert = !open;
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <div aria-hidden="true" className={navH === null ? "h-[78px] md:h-[82px]" : ""} style={navH === null ? undefined : { height: navH }} />
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,transform] duration-300 ease-out motion-reduce:transition-none ${
          scrolled || open ? "bg-paper shadow-[0_1px_0_rgba(16,24,20,0.06)]" : "bg-transparent"
        } ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        <nav
          aria-label="Main"
          className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 pb-[14px] pt-5 md:px-10 md:pt-6 xl:px-[100px]"
        >
          <Link href="/" className="flex items-center gap-2" aria-label="EcoVest home">
            <LogoMark className="h-9 w-9 text-green-600" />
            <span className="font-display text-[20px] font-semibold tracking-[-0.025em] text-ink-950">EcoVest</span>
          </Link>

          <ul className="absolute left-1/2 top-[calc(50%+5px)] hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="whitespace-nowrap text-[16px] font-medium leading-[1.5] tracking-[-0.02em] text-ink-950 transition-colors hover:text-green-700"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <SoftPill href={SECONDARY.href}>{SECONDARY.label}</SoftPill>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-ink-50 lg:hidden"
          >
            <Burger open={open} />
          </button>
        </nav>
      </header>

      {/* Full-screen menu (phones and tablets). */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-40 flex flex-col bg-paper pt-[76px] transition-opacity duration-300 ease-out lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col px-5 pb-8 pt-4 md:px-10">
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li
                key={l.label}
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex h-[68px] items-center border-b border-ink-950/[0.07] font-display text-[32px] font-medium tracking-[-0.035em] text-ink-950"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`mt-auto flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${80 + links.length * 50}ms` : "0ms" }}
            onClick={() => setOpen(false)}
          >
            <GlowCta href={PRIMARY.href} className="w-full">{PRIMARY.label}</GlowCta>
            <SoftPill href={SECONDARY.href} className="w-full py-3">{SECONDARY.label}</SoftPill>
          </div>
        </nav>
      </div>
    </>
  );
}

/** The main call to action: solid EcoVest green pill with a bright inner glow and an arrow. */
export function GlowCta({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[61px] bg-brand px-[18px] py-2.5 text-[16px] font-semibold leading-[1.4] sm:px-5 sm:py-3 sm:text-[18px] tracking-[-0.02em] text-[#f7f9fb] shadow-[inset_0_-5px_10px_0_rgba(147,222,131,0.45),0_8px_24px_-10px_rgba(2,56,28,0.55)] transition-[background-color,transform] duration-200 hover:bg-brand-hover active:scale-[0.98] md:text-[20px] ${className}`}
    >
      {children}
      <Icon
        icon={ArrowRight02Icon}
        size={20}
        strokeWidth={1.75}
        className="text-[#f7f9fb] transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
