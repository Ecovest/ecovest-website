export default function LegalDoc({
  effective,
  children,
}: {
  effective: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-20">
      <div className="text-sm text-ink/45 mb-10">
        Effective date · {effective}
      </div>
      <article className="legal-prose space-y-6 text-[16px] leading-relaxed text-ink/75">
        {children}
      </article>

      <div className="mt-16 pt-8 border-t border-ink/8 text-sm text-ink/55">
        Questions about this policy? Reach us at{" "}
        <a
          href="mailto:legal@ecovest.app"
          className="text-brand-600 underline underline-offset-4"
        >
          legal@ecovest.app
        </a>
        .
      </div>
    </section>
  );
}
