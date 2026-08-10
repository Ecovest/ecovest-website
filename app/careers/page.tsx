import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CrossLink from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Careers · EcoVest",
  description:
    "Help young Africans go from financial literacy to confident investing. EcoVest is hiring builders, educators, and community leads.",
};

const roles: {
  title: string;
  team: string;
  type: string;
  location: string;
  status: "Open" | "Soon";
}[] = [
  {
    title: "Founding Community Lead",
    team: "Community",
    type: "Full-time",
    location: "Lagos / Remote",
    status: "Open",
  },
  {
    title: "Senior Product Designer",
    team: "Product",
    type: "Full-time",
    location: "Remote · GMT±3",
    status: "Open",
  },
  {
    title: "Curriculum Writer (Finance)",
    team: "Education",
    type: "Contract",
    location: "Remote",
    status: "Open",
  },
  {
    title: "Full-stack Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Remote",
    status: "Soon",
  },
  {
    title: "AI Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Remote",
    status: "Soon",
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageHeader
        kicker="Careers"
        title={
          <>
            Help build the platform that{" "}
            <span className="italic font-medium text-brand-600">
              didn&rsquo;t exist
            </span>{" "}
            when we were younger.
          </>
        }
        subtitle="We&rsquo;re a small team of students, builders, and educators. We&rsquo;re hiring for the next chapter."
      />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mb-16">
          <Perk
            title="Real ownership"
            body="Meaningful equity, real autonomy. We hire judgement, not job titles."
          />
          <Perk
            title="Remote-friendly"
            body="Work where you do your best thinking. Quarterly team meetups."
          />
          <Perk
            title="Learning budget"
            body="Books, courses, conferences. If it makes you sharper, we&rsquo;ll pay for it."
          />
        </div>

        <div className="flex items-end justify-between mb-6 border-b border-ink/8 pb-4">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink">
            Open roles
          </h2>
          <span className="text-sm text-ink/45">
            {roles.filter((r) => r.status === "Open").length} open ·{" "}
            {roles.filter((r) => r.status === "Soon").length} coming soon
          </span>
        </div>

        <ul className="divide-y divide-ink/8">
          {roles.map((r) => (
            <li
              key={r.title}
              className="py-5 grid md:grid-cols-12 gap-3 items-center"
            >
              <div className="md:col-span-5">
                <div className="font-display text-lg font-medium text-ink">
                  {r.title}
                </div>
                <div className="text-sm text-ink/55 mt-0.5">{r.team}</div>
              </div>
              <div className="md:col-span-2 text-sm text-ink/70">{r.type}</div>
              <div className="md:col-span-3 text-sm text-ink/70">
                {r.location}
              </div>
              <div className="md:col-span-2 flex md:justify-end">
                {r.status === "Open" ? (
                  <Link
                    href={`mailto:careers@ecovest.app?subject=Application: ${encodeURIComponent(r.title)}`}
                    className="btn-primary text-xs"
                  >
                    Apply
                  </Link>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-ink/5 text-ink/55 text-xs uppercase tracking-wider">
                    Coming soon
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 p-6 md:p-8 rounded-2xl border border-ink/8 bg-bone-warm">
          <div className="font-display text-xl text-ink">
            Don&rsquo;t see your role?
          </div>
          <p className="mt-2 text-ink/65 leading-relaxed max-w-xl">
            We&rsquo;re always interested in exceptional people, especially in
            growth, partnerships, and education. Send a note with what
            you&rsquo;d build here and why.
          </p>
          <Link
            href="mailto:careers@ecovest.app?subject=Speculative application"
            className="inline-flex mt-5 btn-ghost text-sm"
          >
            careers@ecovest.app
          </Link>
        </div>
      </section>

      <CrossLink />
    </main>
  );
}

function Perk({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-ink/8 p-6">
      <div className="font-display text-lg text-ink font-medium">{title}</div>
      <p className="mt-2 text-sm text-ink/60 leading-relaxed">{body}</p>
    </div>
  );
}
