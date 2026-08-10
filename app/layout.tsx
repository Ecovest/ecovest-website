import type { Metadata } from "next";
import "./globals.css";
// import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecovestt.vercel.app"),
  title: "EcoVest · Building Financial Intelligence",
  description:
    "An AI-powered financial growth ecosystem. Learn, earn, invest, and build long-term wealth through education, technology, and community. Starting in Nigeria.",
  openGraph: {
    title: "EcoVest · Building Financial Intelligence",
    description:
      "Learn, earn, invest, and build long-term wealth. An AI-powered financial growth ecosystem for young Africans.",
    type: "website",
    siteName: "EcoVest",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoVest · Building Financial Intelligence",
    description:
      "Learn, earn, invest, and build long-term wealth. An AI-powered financial growth ecosystem for young Africans.",
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bone text-ink">
        {/* <Loader /> */}
        <Nav />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
