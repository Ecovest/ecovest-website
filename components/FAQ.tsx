"use client";

import { Add01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { delay, useInView } from "@/lib/useInView";

/*
 * Simple FAQ: heading on the left, an accordion on the right (stacked on phones).
 * Answers stick to what the brief/PRD says is true today: community is live,
 * free to start, investing only through licensed partners, no promised returns.
 */

const QA: { q: string; a: string }[] = [
  {
    q: "What is EcoVest?",
    a: "An app for young Africans who want to get better with money. You learn the basics, practise investing with pretend money, and invest for real through licensed partners when you're ready. We're starting in Nigeria.",
  },
  {
    q: "Is EcoVest free?",
    a: "Yes, you can start free. The free plan includes basic courses, the community, limited AI coach chats and financial news. A premium plan with advanced courses and unlimited AI will come later.",
  },
  {
    q: "Do I need a lot of money to start?",
    a: "No. Learning costs nothing, Pocketer helps you plan with whatever you earn (even ₦20k a month), and the simulator lets you practise investing without real money.",
  },
  {
    q: "Does EcoVest hold my money?",
    a: "No. EcoVest is where you learn and plan. When you're ready to invest, it will only be through licensed, regulated partners. We never promise returns, and investing always carries risk.",
  },
  {
    q: "What is Pocketer?",
    a: "Pocketer is EcoVest's budgeting and savings app. It shows where your money goes each month and helps you set savings goals and reach them.",
  },
  {
    q: "Is the AI coach financial advice?",
    a: "No. The AI coach explains money in plain language and helps you learn, but it isn't personal financial advice. For big decisions, speak to a licensed professional.",
  },
  {
    q: "What can I use today?",
    a: "The EcoVest community is live now. Lessons, the AI coach, Pocketer and the investing simulator are rolling out step by step. Join the community to get them first.",
  },
];

function Item({ q, a, open, onToggle, id }: { q: string; a: string; open: boolean; onToggle: () => void; id: string }) {
  return (
    <li className={`rounded-[18px] transition-colors duration-300 lg:rounded-[22px] ${open ? "bg-[#eef3f0]" : "bg-[#f3f5f4]"}`}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[15px] font-medium tracking-[-0.01em] text-[#101010] md:text-[17px] lg:px-7 lg:py-6 lg:text-[19px]"
        >
          {q}
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-[transform,background-color] duration-300 lg:h-9 lg:w-9 ${
              open ? "rotate-45 bg-brand" : "bg-white"
            }`}
          >
            <Icon icon={Add01Icon} size={16} strokeWidth={1.8} className={open ? "text-white" : "text-[#101010]"} />
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[600px] px-5 pb-5 text-[14px] leading-[1.6] text-[#3e4641] md:text-[15px] lg:px-7 lg:pb-7 lg:text-[17px]">{a}</p>
        </div>
      </div>
    </li>
  );
}

export default function FAQ() {
  const [ref, inView] = useInView<HTMLElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} data-in={inView} className="bg-paper px-4 py-16 md:px-8 md:py-28 xl:py-32">
      <div className="mx-auto grid max-w-[1040px] gap-10 lg:max-w-[1180px] lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:max-w-[1280px]">
        <div className="ev-rise text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
          <span className="inline-flex items-center rounded-[61px] border border-[rgba(0,178,91,0.25)] bg-white px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-[#555] lg:px-4 lg:py-2 lg:text-[14px]">
            FAQ
          </span>
          <h2 className="mt-5 font-sans text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-[#101010] md:text-[52px] lg:text-[60px] xl:text-[64px]">
            Questions, <span className="font-serif italic">answered</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[380px] text-[14px] leading-[1.6] text-[#3e4641] md:text-[16px] lg:mx-0">
            Still unsure about something? Write to us and a real person will reply.
          </p>
          <a
            href="mailto:Ecovest00@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[15px] font-medium text-white shadow-[inset_0_-5px_10px_rgba(147,222,131,0.45)] transition-colors hover:bg-brand-hover"
          >
            <Icon icon={Mail01Icon} size={18} className="text-white" />
            Ask a question
          </a>
        </div>

        <ul className="ev-rise flex flex-col gap-2.5 lg:gap-3" style={delay(150)}>
          {QA.map((item, i) => (
            <Item
              key={item.q}
              id={`faq-${i}`}
              q={item.q}
              a={item.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
