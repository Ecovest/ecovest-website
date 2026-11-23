"use client";

import { QuoteDownIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import LogoMark from "@/components/LogoMark";
import { Icon } from "@/components/ui/Icon";
import { delay, useInView } from "@/lib/useInView";

/*
 * Problem and solution, following the user's reference layout:
 * badge + two-line headline, then one large card with the problem as a quote,
 * and two solution cards with a few words picked out and a hashtag footer.
 * The quote is from EcoVest's CEO, Akinrinola Abdulqudus (photo and quote approved by him).
 * No decorative dots (site rule).
 */

/** Lighter words inside a sentence, like the reference's highlighted phrases. */
function Soft({ children }: { children: React.ReactNode }) {
  return <span className="text-[#636c67]">{children}</span>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[12px] font-medium text-[#3a3f3c] shadow-[0_1px_2px_rgba(16,24,20,0.06)] ring-1 ring-black/[0.04] lg:px-4 lg:py-1.5 lg:text-[14px]">
      {children}
    </span>
  );
}

function SolutionCard({ text, tag, d }: { text: React.ReactNode; tag: string; d: number }) {
  return (
    <div
      className="ev-rise flex min-h-[200px] flex-col rounded-[20px] bg-[#e9ecea] p-5 lg:min-h-[340px] lg:rounded-[28px] lg:p-8"
      style={delay(d)}
    >
      <div>
        <Tag>Solution</Tag>
      </div>
      <p className="mt-8 max-w-[520px] text-[15px] leading-[1.5] text-[#1c201e] lg:mt-auto lg:text-[20px] lg:leading-[1.45] xl:text-[22px]">{text}</p>
      <p className="mt-8 text-[14px] text-[#1c201e] lg:mt-12 lg:text-[17px]">
        <span className="text-[#636c67]"># </span>
        {tag}
      </p>
    </div>
  );
}

export default function Problem() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id="problem" ref={ref} data-in={inView} className="bg-paper px-4 py-16 md:px-8 md:py-28 xl:py-32">
      <div className="mx-auto max-w-[1040px] lg:max-w-[1180px] xl:max-w-[1280px]">
        {/* badge left, headline right */}
        <div className="ev-rise grid items-center gap-5 text-center md:grid-cols-[1fr_1.35fr] md:gap-10 md:text-left">
          <div>
            {/* Same tag style as Features: white pill, thin green border, uppercase grey text */}
            <span className="inline-flex items-center rounded-[61px] border border-[rgba(0,178,91,0.25)] bg-white px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-[#555] lg:px-4 lg:py-2 lg:text-[14px]">
              Problem and solution
            </span>
          </div>
          <h2 className="font-sans text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-[#101010] md:text-[52px] lg:text-[64px] xl:text-[72px]">
            Simple answers
            <br />
            for{" "}
            <span
              aria-hidden="true"
              className="relative mx-[0.08em] inline-grid h-[0.78em] w-[0.78em] translate-y-[0.08em] place-items-center rounded-[28%] bg-[linear-gradient(180deg,#5fd897,#00a050)] align-baseline shadow-[0_4px_10px_-4px_rgba(0,140,70,0.45)]"
            >
              <LogoMark className="h-[60%] w-[60%] text-white" />
            </span>{" "}
            money worries
          </h2>
        </div>

        {/* the big card */}
        <div className="ev-rise mt-10 rounded-[24px] bg-[#f3f5f4] p-3 md:mt-16 md:rounded-[30px] md:p-4 lg:mt-20 lg:rounded-[36px] lg:p-5" style={delay(150)}>
          <div className="px-2 pt-2 md:px-3 md:pt-3 lg:px-4 lg:pt-4">
            <Tag>Problem</Tag>
          </div>

          {/* the problem, in the user's words */}
          <figure className="mx-auto max-w-[560px] px-2 pb-12 pt-8 md:pb-24 md:pt-12 lg:max-w-[780px] lg:pb-32 lg:pt-16">
            <blockquote className="flex gap-3 lg:gap-4">
              <Icon icon={QuoteDownIcon} size={22} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#101010] lg:mt-1 lg:h-8 lg:w-8" />
              <p className="text-[17px] leading-[1.45] tracking-[-0.01em] text-[#101010] md:text-[22px] lg:text-[28px] lg:leading-[1.4] xl:text-[30px]">
                Young Nigerians want to grow their money, but no one shows them where to begin, who to trust, or that
                ₦20k a month is enough to start.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 pl-[34px] lg:mt-8 lg:gap-4 lg:pl-12">
              <Image
                src="/team/akinrinola-abdulqudus.webp"
                alt="Akinrinola Abdulqudus"
                width={56}
                height={56}
                className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white lg:h-14 lg:w-14"
              />
              <span>
                <span className="block text-[14px] font-medium text-[#101010] lg:text-[17px]">Akinrinola Abdulqudus</span>
                <span className="block text-[13px] text-[#626b66] lg:text-[15px]">CEO, EcoVest</span>
              </span>
            </figcaption>
          </figure>

          {/* the answers */}
          <div className="grid gap-3 md:grid-cols-2 lg:gap-4">
            <SolutionCard
              d={350}
              tag="Learning"
              text={
                <>
                  <Soft>Short lessons</Soft> and an <Soft>AI coach</Soft> explain money in plain language, from budgeting
                  basics to your first investment.
                </>
              }
            />
            <SolutionCard
              d={480}
              tag="Confidence"
              text={
                <>
                  Plan with <Soft>Pocketer</Soft>, practise without risk, and invest only through{" "}
                  <Soft>licensed partners</Soft> when you&apos;re ready.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
