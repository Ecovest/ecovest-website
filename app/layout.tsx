import type { Metadata, Viewport } from "next";
import { Archivo, Familjen_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

// latin-ext is required: it carries the naira (₦) and cedi (₵) signs.
const display = Familjen_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Accent word in headlines only (italic), as in the hero design.
const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoVest · Building Financial Intelligence",
  description:
    "Learn how money works, practise investing with pretend money, and invest through licensed partners when you're ready. Built for young Africans, starting in Nigeria.",
  // Set NEXT_PUBLIC_SITE_URL in the hosting dashboard; see .env.example.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ecovest.community"),
};

export const viewport: Viewport = {
  themeColor: "#fefefe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
