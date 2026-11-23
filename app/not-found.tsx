import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Page not found · EcoVest" };

// Illustration: unDraw "Page not found" by Katerina Limpitsouni (undraw.co), recoloured to EcoVest green.
export default function NotFound() {
  return (
    <>
      <div className="bg-paper">
        <Header />
        <main className="mx-auto flex max-w-[720px] flex-col items-center px-5 pb-20 pt-8 text-center md:pb-28 md:pt-12">
          <Image
            src="/illustrations/404.svg"
            width={860}
            height={571}
            alt=""
            priority
            className="h-auto w-full max-w-[420px] md:max-w-[520px]"
          />
          <span className="mt-8 inline-flex items-center rounded-[61px] border border-[rgba(0,178,91,0.25)] bg-white px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-[#555]">
            Error 404
          </span>
          <h1 className="mt-5 font-sans text-[32px] font-normal leading-[1.1] tracking-[-0.03em] text-[#101010] md:text-[52px]">
            This page <span className="font-serif italic">wandered off</span>
          </h1>
          <p className="mt-4 max-w-[440px] text-[15px] leading-[1.6] text-[#3e4641] md:text-[17px]">
            The link may be old or mistyped. Head back home, or read the latest from the blog.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[15px] font-medium text-white shadow-[inset_0_-5px_10px_rgba(147,222,131,0.45)] transition-colors hover:bg-brand-hover"
            >
              Back to home
              <Icon icon={ArrowRight02Icon} size={18} className="text-white" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-[#101010] ring-1 ring-black/[0.08] transition-colors hover:bg-[#f3f5f4]"
            >
              Visit the blog
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
