import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CrossLink from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Press kit · EcoVest",
  description:
    "Press, brand assets, and contact for journalists covering EcoVest.",
};

export default function PressPage() {
  return (
    <main>
      <PageHeader
        kicker="Press"
        title={
          <>
            For writers, editors, and{" "}
            <span className="italic font-medium text-brand-600">
              anyone telling the story
            </span>
            .
          </>
        }
        subtitle="Logos, photography, fact sheet, and a direct line to our team."
      />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink">
              About EcoVest
            </h2>
          </div>
          <div className="md:col-span-7 space-y-4 text-ink/70 leading-relaxed">
            <p>
              EcoVest is a community-driven platform teaching young people
              financial literacy and sustainable investing. Founded in 2025,
              we&rsquo;re building a four-stage product (community, education,
              AI tools, and a full ecosystem) with a single goal: a smarter,
              more sustainable generation of investors.
            </p>
            <p>
              For interview requests, exclusives, or fact-checking, reach out
              to{" "}
              <a
                href="mailto:press@ecovest.app"
                className="text-brand-600 underline underline-offset-4"
              >
                press@ecovest.app
              </a>
              . We usually respond within 24 hours.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink mb-6">
            Quick facts
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Fact label="Founded" value="2025" />
            <Fact label="HQ" value="Lagos, Nigeria" />
            <Fact label="Team" value="Distributed" />
            <Fact label="Stage" value="Community · Cohort 01" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink mb-6">
            Brand assets
          </h2>
          <p className="text-ink/60 mb-6 max-w-2xl">
            Please use the marks as-is. Don&rsquo;t recolour, rotate, or place
            them on backgrounds that compromise contrast. The brand greens are{" "}
            <code className="px-1.5 py-0.5 rounded bg-ink/5 text-xs">
              #1F5F26
            </code>
            ,{" "}
            <code className="px-1.5 py-0.5 rounded bg-ink/5 text-xs">
              #2E7D32
            </code>
            , and{" "}
            <code className="px-1.5 py-0.5 rounded bg-ink/5 text-xs">
              #43A356
            </code>
            .
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Asset label="Logo · light" desc="SVG · PNG" />
            <Asset label="Logo · dark" desc="SVG · PNG" dark />
            <Asset label="Wordmark" desc="SVG · PNG" />
            <Asset label="Brand colours" desc="Hex · RGB · CMYK" colours />
          </div>
        </div>

        <div className="rounded-3xl border border-ink/8 p-8 md:p-10 bg-bone-warm">
          <div className="font-display text-2xl text-ink">Boilerplate</div>
          <p className="mt-3 text-ink/70 leading-relaxed">
            EcoVest is a community-driven finance and sustainability platform
            that teaches young people how to build wealth without burning the
            planet. Through bite-size lessons, a peer community, and a
            sustainability-first approach to investing, EcoVest is building a
            smarter generation of financially intelligent investors. Founded
            in 2025.
          </p>
        </div>
      </section>

      <CrossLink />
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink/8 p-5">
      <div className="text-xs uppercase tracking-[0.18em] text-ink/45">
        {label}
      </div>
      <div className="mt-1.5 font-display text-lg text-ink font-medium">
        {value}
      </div>
    </div>
  );
}

function Asset({
  label,
  desc,
  dark = false,
  colours = false,
}: {
  label: string;
  desc: string;
  dark?: boolean;
  colours?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-ink/8 overflow-hidden bg-bone">
      <div
        className={`aspect-[4/3] grid place-items-center ${
          dark ? "bg-ink" : colours ? "" : "bg-bone-warm"
        }`}
        style={
          colours
            ? {
                background:
                  "linear-gradient(135deg, #1F5F26 0%, #2E7D32 50%, #43A356 100%)",
              }
            : undefined
        }
      >
        {!colours && (
          <div
            className={`font-display text-xl font-semibold tracking-tight ${
              dark ? "text-bone" : "text-ink"
            }`}
          >
            Eco<span className="text-brand-400">Vest</span>
          </div>
        )}
        {colours && (
          <span className="text-bone font-display font-medium text-sm tracking-wider">
            Brand greens
          </span>
        )}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-ink">{label}</div>
          <div className="text-xs text-ink/50">{desc}</div>
        </div>
        <Link
          href="mailto:press@ecovest.app?subject=Brand%20asset%20request"
          className="text-xs text-brand-600 hover:text-brand-700 font-medium"
        >
          Request →
        </Link>
      </div>
    </div>
  );
}
