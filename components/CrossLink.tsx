import Link from "next/link";

export default function CrossLink() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-ink/8">
      <div>
        <div className="font-display text-2xl md:text-3xl tracking-tight text-ink">
          Want to get involved early?
        </div>
        <p className="text-ink/55 mt-1.5">
          Join the waitlist or send us a note.
        </p>
      </div>
      <div className="flex gap-3">
        <Link href="/#waitlist" className="btn-primary text-sm">
          Join waitlist
        </Link>
        <Link href="/contact" className="btn-ghost text-sm">
          Contact us
        </Link>
      </div>
    </section>
  );
}
