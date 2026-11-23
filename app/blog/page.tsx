import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { Icon } from "@/components/ui/Icon";
import { POSTS, formatDate } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog · EcoVest" };

const TOPICS = [
  { tag: "Budgeting", title: "Where your money goes each month, and how to plan it" },
  { tag: "Saving", title: "Setting savings goals you'll actually reach" },
  { tag: "Investing", title: "Your first investment: what to know before you start" },
];

export default function Blog() {
  return (
    <InfoPage
      tag="Blog"
      title="Money, explained"
      accent="simply"
      intro="Plain-language guides on budgeting, saving and investing for young Africans. News from EcoVest, plus more guides on the way."
    >
      <ul className="grid gap-4">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group grid items-center gap-5 rounded-[24px] bg-[#f3f5f4] p-3 transition-colors hover:bg-[#eef3f0] sm:grid-cols-[180px_1fr] md:p-4"
            >
              <Image
                src={p.image.src}
                width={p.image.width}
                height={p.image.height}
                alt=""
                className="aspect-[4/3] w-full rounded-[16px] object-cover object-top sm:aspect-square"
              />
              <span className="block px-2 pb-2 sm:px-0 sm:pb-0 sm:pr-4">
                <span className="flex items-center gap-3 text-[12px] text-[#626b66]">
                  <span className="rounded-full bg-white px-3 py-1 font-medium text-[#3a3f3c] ring-1 ring-black/[0.04]">{p.tag}</span>
                  {formatDate(p.date)}
                </span>
                <span className="mt-3 block text-[18px] font-medium leading-[1.3] tracking-[-0.015em] text-[#101010] md:text-[22px]">
                  {p.title}
                </span>
                <span className="mt-2 block text-[14px] leading-[1.55] text-[#3e4641] md:text-[15px]">{p.excerpt}</span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-green-700">
                  Read post
                  <Icon icon={ArrowRight02Icon} size={16} className="text-current transition-transform group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-[13px] font-medium uppercase tracking-[0.12em] text-[#626b66]">Coming soon</p>
      <ul className="mt-4 grid gap-3 md:grid-cols-3">
        {TOPICS.map((t) => (
          <li key={t.title} className="flex min-h-[180px] flex-col rounded-[20px] bg-[#f3f5f4] p-5">
            <span className="self-start rounded-full bg-white px-3 py-1 text-[12px] font-medium text-[#3a3f3c] ring-1 ring-black/[0.04]">
              {t.tag}
            </span>
            <p className="mt-auto pt-8 text-[16px] leading-[1.4] text-[#1c201e]">{t.title}</p>
            <p className="mt-3 text-[13px] text-[#626b66]">Coming soon</p>
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/2349163655638"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[15px] font-medium text-white shadow-[inset_0_-5px_10px_rgba(147,222,131,0.45)] transition-colors hover:bg-brand-hover"
      >
        Join the community for updates
        <Icon icon={ArrowRight02Icon} size={18} className="text-white" />
      </a>
    </InfoPage>
  );
}
