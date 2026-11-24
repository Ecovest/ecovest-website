"use client";

import Image from "next/image";
import { delay, useInView } from "@/lib/useInView";

/*
 * How it works, following the user's reference: illustration on the left,
 * three numbered steps on the right. A plain list: no clicking, no auto-cycling.
 * Set HAS_ILLUSTRATION to false to show a placeholder instead of the image.
 */

const HAS_ILLUSTRATION = true;

const STEPS = [
  { title: "Join free", body: "Sign up and join the EcoVest community. It costs nothing." },
  {
    title: "Learn and plan",
    body: "Take short lessons, ask the AI coach, and use pocketa to set a budget and savings goals.",
  },
  {
    title: "Practise, then invest",
    body: "Try investing with pretend money first. When you're ready, invest through a licensed partner.",
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id="how-it-works" ref={ref} data-in={inView} className="bg-paper px-4 py-16 md:px-8 md:py-28 xl:py-32">
      <div className="mx-auto grid max-w-[1040px] items-center gap-10 lg:max-w-[1180px] lg:grid-cols-2 lg:gap-16 xl:max-w-[1280px]">
        {/* illustration */}
        <div className="ev-rise relative order-2 lg:order-1">
          {HAS_ILLUSTRATION ? (
            <Image
              src="/illustrations/how-it-works.webp"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 560px, 100vw"
              alt="A young woman at her desk checking her budget and savings goal on a laptop"
              className="mx-auto h-auto w-full max-w-[560px]"
            />
          ) : (
            <div className="mx-auto grid aspect-[4/3] w-full max-w-[560px] place-items-center rounded-[28px] border border-dashed border-[rgba(0,178,91,0.3)] bg-[#f3f5f4] text-[13px] text-[#626b66]">
              Illustration goes here
            </div>
          )}
        </div>

        {/* steps */}
        <div className="order-1 lg:order-2">
          <div className="ev-rise text-center lg:text-left">
            <span className="inline-flex items-center rounded-[61px] border border-[rgba(0,178,91,0.25)] bg-white px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-[#555] lg:px-4 lg:py-2 lg:text-[14px]">
              How it works
            </span>
            <h2 className="mt-5 font-sans text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-[#101010] md:text-[52px] lg:text-[60px] xl:text-[64px]">
              Three steps to <span className="font-serif italic">start</span>
            </h2>
          </div>

          <ol className="ev-rise mt-8 flex flex-col gap-2 md:mt-10 lg:gap-3" style={delay(150)}>
            {STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4 px-4 py-4 lg:px-6 lg:py-5">
                    <span
                      aria-hidden="true"
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#eef3f0] text-[14px] font-medium text-[#3e4641] lg:h-9 lg:w-9 lg:text-[15px]"
                    >
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-[16px] font-medium tracking-[-0.01em] text-[#101010] md:text-[18px] lg:text-[20px]">
                        {s.title}
                      </span>
                      <span className="mt-1 block text-[14px] leading-[1.55] text-[#3e4641] md:text-[15px] lg:text-[17px]">
                        {s.body}
                      </span>
                    </span>
                </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
