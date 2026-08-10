import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CrossLink from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "About · EcoVest",
  description:
    "EcoVest is an AI-powered financial growth ecosystem helping young Africans learn, earn, invest, and build long-term wealth.",
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
        subtitle="EcoVest is an AI-powered financial growth ecosystem that combines education, personal guidance, community, and investing. Beginning in Nigeria, built for Africa."
      />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6 text-ink/70 leading-relaxed text-[17px]">
          <p>
            EcoVest started with a simple observation. Most young Africans
            leave school without ever being taught how money works. The ones
            who go looking find a wall of jargon, or investment apps that
            assume they already understand finance.
          </p>
          <p>
            So the gap isn't knowledge, and it isn't access. It's the bridge
            between the two. Educational platforms rarely show you a path to
            taking action. Investment platforms rarely teach. EcoVest is built
            to be both: structured courses, an AI coach that answers questions
            in plain language, a community for accountability, and a simulator
            to practise in before any real money moves.
          </p>
          <p>
            We're shipping in phases. Community, Academy, AI chat, and the
            budget tracker first. Then the simulator, news, and goals. Then
            regulated investing through licensed partners. Then Trade, Quant,
            Skills, and Capital. Built openly, with students, for the long
            game.
          </p>
        </div>

        <aside className="lg:col-span-5 space-y-4">
          <Card label="Founded" value="2025 · Lagos, Nigeria" />
          <Card label="Team" value="Students, builders, and educators" />
          <Card label="Stage" value="Phase 1 · Cohort 01" />
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
              title="Learning must lead to action"
              body="Every lesson connects to something you can actually do, a goal set, a budget built, a simulated trade placed."
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

