import { Mail01Icon } from "@hugeicons/core-free-icons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Icon } from "@/components/ui/Icon";

/*
 * Shell for the smaller pages (legal, blog): header, a tag + headline,
 * the page's own content, then the same footer as the home page.
 * Legal pages show an honest "being finalised" note until counsel signs off,
 * instead of made-up legal text.
 */

export function InfoPage({
  tag,
  title,
  accent,
  intro,
  children,
}: {
  tag: string;
  title: string;
  accent?: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-paper">
        <Header />
        <main className="mx-auto max-w-[820px] px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20">
          <span className="inline-flex items-center rounded-[61px] border border-[rgba(0,178,91,0.25)] bg-white px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-[#555] lg:text-[13px]">
            {tag}
          </span>
          <h1 className="mt-5 font-sans text-[36px] font-normal leading-[1.08] tracking-[-0.03em] text-[#101010] md:text-[56px]">
            {title}
            {accent ? (
              <>
                {" "}
                <span className="font-serif italic">{accent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-5 max-w-[620px] text-[15px] leading-[1.6] text-[#3e4641] md:text-[17px]">{intro}</p>
          <div className="mt-10 md:mt-14">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
}

/** The "being finalised" note used by the legal pages. */
export function DraftNote({ what }: { what: string }) {
  return (
    <div className="rounded-[24px] bg-[#f3f5f4] p-5 md:p-8">
      <p className="text-[15px] leading-[1.6] text-[#1c201e] md:text-[17px]">
        Our full {what} is being finalised ahead of launch and will be published here. Until then, if you have a
        question about how EcoVest handles this, write to us and we&apos;ll reply.
      </p>
      <a
        href="mailto:Ecovest00@gmail.com"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[15px] font-medium text-white shadow-[inset_0_-5px_10px_rgba(147,222,131,0.45)] transition-colors hover:bg-brand-hover"
      >
        <Icon icon={Mail01Icon} size={18} className="text-white" />
        Ecovest00@gmail.com
      </a>
    </div>
  );
}
