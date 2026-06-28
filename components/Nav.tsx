"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const LINKS: [string, string][] = [
  ["Problem", "/#problem"],
  ["Solution", "/#solution"],
  ["Roadmap", "/#roadmap"],
  ["FAQ", "/#faq"],
  ["About", "/about"],
  ["Careers", "/careers"],
  ["Press", "/press"],
  ["Contact", "/contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-bone/85 backdrop-blur-sm border-b border-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" aria-label="EcoVest home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] text-ink/70">
          {LINKS.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-ink transition">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#waitlist" className="hidden sm:inline-flex btn-primary text-sm">
            Join waitlist
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden w-10 h-10 -mr-2 grid place-items-center text-ink"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-bone/95 backdrop-blur-sm border-b border-ink/8"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-[15px] text-ink/75 hover:text-ink transition border-b border-ink/5 last:border-0"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/#waitlist"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-sm justify-center mt-3"
              >
                Join waitlist
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
