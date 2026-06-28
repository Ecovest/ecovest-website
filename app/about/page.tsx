import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CrossLink from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "About · EcoVest",
  description:
    "EcoVest is a community-driven platform building a smarter, more sustainable generation of investors.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        kicker="About"
        title={
          <>
            We&rsquo;re building the generation that{" "}
            <span className="italic font-medium text-brand-600">
              won&rsquo;t need a finance app
            </span>
            , because they&rsquo;ll already know.
          </>
        }
        subtitle="EcoVest is a community-first platform turning financial literacy and sustainable investing into something young people actually want to do."
      />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6 text-ink/70 leading-relaxed text-[17px]">
          <p>
            EcoVest started with a simple observation: most people leave school
            without ever being taught how money actually works, and the ones
            who go looking for answers find a wall of jargon, 400-page books,
            or trading apps designed to make them lose more often than they
            win.
          </p>
          <p>
            We thought there was a better way. A community-driven platform
            where young people could learn personal finance and investing in
            short, sharp lessons, and where the entire framework was built
            around sustainability, because the wealth we help people build
            should still mean something in 30 years.
          </p>
          <p>
            Today, EcoVest is a community-based learning platform, with
            structured education, AI-powered tools, and a full ecosystem
            shipping in phases. Built openly. Built with students. Built for
            the long game.
          </p>
        </div>

        <aside className="lg:col-span-5 space-y-4">
          <Card label="Founded" value="2025 · Lagos / Global" />
          <Card label="Team" value="Students, builders, and educators" />
          <Card label="Stage" value="Community · Live · Cohort 01" />
          <Card label="Funded by" value="Founders & early believers" />
        </aside>
      </section>

      <section className="bg-ink text-bone py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-200 mb-5">
            <span className="w-6 h-px bg-brand-300" />
            Our Values
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tightest leading-[1.05]">
            What we won&rsquo;t compromise on.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
            <Value
              n="01"
              title="Plain language"
              body="If a 16-year-old can&rsquo;t follow it, we rewrite it. Finance jargon is a gate, not a feature."
            />
            <Value
              n="02"
              title="Sustainability isn&rsquo;t a side dish"
              body="Every lesson, every tool, every product decision is filtered through long-term, climate-aligned thinking."
            />
            <Value
              n="03"
              title="Community over performance"
              body="We measure success by how many people actually change their financial habits, not by trades placed or hours logged."
            />
            <Value
              n="04"
              title="Build openly"
              body="Roadmap in public. Decisions in public. We&rsquo;ll be wrong sometimes, and we&rsquo;ll say so."
            />
          </div>
        </div>
      </section>

      <CrossLink />
    </main>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-ink/8 rounded-2xl p-5 bg-bone">
      <div className="text-xs uppercase tracking-[0.18em] text-ink/45">{label}</div>
      <div className="mt-1.5 font-display text-lg text-ink font-medium">{value}</div>
    </div>
  );
}

function Value({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div>
      <div className="text-brand-300 font-display text-sm tracking-wider">{n}</div>
      <div className="mt-2 font-display text-xl md:text-2xl text-bone">{title}</div>
      <p className="mt-3 text-bone/65 leading-relaxed">{body}</p>
    </div>
  );
}

