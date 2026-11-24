"use client";

import { Mail01Icon, TiktokIcon, WhatsappIcon, NewTwitterIcon} from "@hugeicons/core-free-icons";
import LogoMark from "@/components/LogoMark";
import MeadowRiseFooter from "@/components/ui/meadow-rise-footer";

/*
 * CTA + footer: the Meadow Rise footer, recoloured to EcoVest greens.
 * The email signup stays off until a real mailing list is connected,
 * so nobody gets a fake "you're subscribed".
 */

const ECOVEST_PALETTE = {
  sky: ["#fefefe", "#e8f1eb"] as [string, string],
  haze: "#e1ece4",
  glow: "#fffdf4",
  hills: [
    ["#b9d9c4", "#a2c8b0"],
    ["#94cfa6", "#73b58a"],
    ["#6cc08a", "#4a9f6b"],
    ["#45a96c", "#2f8653"],
    ["#228a52", "#156b3d"],
    ["#0f5a33", "#08391f"],
  ] as [string, string][],
  ground: "#032a16",
  ink: "#101010",
  sub: "#3e4641",
  pill: "#02381c",
  pillInk: "#ffffff",
  text: "#eef6f0",
  muted: "#9fbfab",
  line: "rgba(238,246,240,0.16)",
};

export default function Footer() {
  return (
    <MeadowRiseFooter
      id="get-started"
      name="EcoVest"
      brandHref="/"
      logo={
        <span className="grid h-8 w-8 place-items-center rounded-[28%] bg-[linear-gradient(180deg,#5fd897,#00a050)]">
          <LogoMark className="h-[60%] w-[60%] text-white" />
        </span>
      }
      heading={"Grow your money\n*with confidence*"}
      subheading="It's free to join, and the EcoVest community is open now."
      cta={{ label: "Get started free", href: "/#get-started" }}
      tagline="Money lessons, an AI coach and a community for young Africans."
      newsletter={false}
      columns={[
        {
          title: "Product",
          links: [
            { label: "How it works", href: "/#how-it-works" },
            { label: "Features", href: "/#features" },
            { label: "Pocketer", href: "/#features" },
            { label: "AI Coach", href: "/#features" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "/#problem" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "mailto:Ecovest00@gmail.com" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "FAQs", href: "/#faq" },
            { label: "Community", href: "https://wa.me/2349163655638" },
            { label: "Help centre", href: "mailto:Ecovest00@gmail.com?subject=Help" },
            { label: "Risk disclosure", href: "/risk" },
          ],
        },
      ]}
      socialTitle="Follow us"
      socials={[
        { icon: TiktokIcon, label: "TikTok", href: "https://www.tiktok.com/@ecovest.africa" },
        { icon: WhatsappIcon, label: "WhatsApp", href: "https://wa.me/2349163655638" },
        { icon: Mail01Icon, label: "Email", href: "mailto:Ecovest00@gmail.com" },
        { icon: NewTwitterIcon, label: "X", href: "https://x.com/ecovestafrica"}
      ]}
      copyright="© 2026 EcoVest Technologies Ltd. Investing involves risk."
      legal={[
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ]}
      preset="meadow"
      palette={ECOVEST_PALETTE}
      height="auto"
      heroHeight="clamp(420px, 62svh, 640px)"
      maxWidth="1280px"
      fontFamily="var(--font-body), Archivo, system-ui, sans-serif"
      serifFamily="var(--font-serif), Georgia, serif"
    />
  );
}

