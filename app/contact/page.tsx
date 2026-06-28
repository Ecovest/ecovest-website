import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · EcoVest",
  description: "Get in touch with the EcoVest team.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        kicker="Contact"
        title={
          <>
            Say hi.{" "}
            <span className="italic font-medium text-brand-600">
              We read everything.
            </span>
          </>
        }
        subtitle="Questions, ideas, partnership requests, or just a friendly note. Drop a message below, or use the right channel for what you need."
      />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <aside className="lg:col-span-5 space-y-4">
          <Channel
            label="General"
            value="hello@ecovest.app"
            href="mailto:hello@ecovest.app"
            blurb="For anything that doesn't fit below."
          />
          <Channel
            label="Press"
            value="press@ecovest.app"
            href="mailto:press@ecovest.app"
            blurb="Interviews, brand assets, fact-checking."
          />
          <Channel
            label="Careers"
            value="careers@ecovest.app"
            href="mailto:careers@ecovest.app"
            blurb="Applications and speculative pitches."
          />
          <Channel
            label="Partnerships"
            value="partners@ecovest.app"
            href="mailto:partners@ecovest.app"
            blurb="Schools, creators, financial institutions."
          />

          <div className="mt-6 rounded-2xl border border-ink/8 p-5 bg-bone-warm">
            <div className="text-xs uppercase tracking-[0.18em] text-ink/45">
              Office
            </div>
            <div className="mt-1.5 font-display text-lg text-ink">
              Lagos, Nigeria
            </div>
            <div className="text-sm text-ink/55 mt-1 leading-relaxed">
              Most of the team is remote. We meet quarterly in Lagos.
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

function Channel({
  label,
  value,
  href,
  blurb,
}: {
  label: string;
  value: string;
  href: string;
  blurb: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-ink/8 p-5 hover:border-brand-500 transition group"
    >
      <div className="text-xs uppercase tracking-[0.18em] text-ink/45">
        {label}
      </div>
      <div className="mt-1.5 font-display text-lg text-brand-600 group-hover:text-brand-700">
        {value}
      </div>
      <div className="text-sm text-ink/55 mt-1">{blurb}</div>
    </a>
  );
}
