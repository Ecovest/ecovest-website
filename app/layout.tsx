import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecovestt.vercel.app"),
  title: "EcoVest · Smart Finance. Sustainable Future.",
  description:
    "Building a smarter generation of financially intelligent investors. Learn finance, build wealth, invest in tomorrow's earth.",
  openGraph: {
    title: "EcoVest · Smart Finance. Sustainable Future.",
    description:
      "Building a smarter generation of financially intelligent investors.",
    type: "website",
    siteName: "EcoVest",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoVest · Smart Finance. Sustainable Future.",
    description:
      "Building a smarter generation of financially intelligent investors.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bone text-ink">
        <Loader />
        <Nav />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
