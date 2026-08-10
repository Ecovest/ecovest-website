import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 text-sm text-ink/55 max-w-sm leading-relaxed">
            EcoVest Technologies Ltd. An AI-powered financial growth ecosystem
            for young Africans. Learn · Earn · Invest · Grow.
          </p>
        </div>

        <FooterCol
          title="Platform"
          links={[
            ["Problem", "/#problem"],
            ["Solution", "/#solution"],
            ["Roadmap", "/#roadmap"],
            ["FAQ", "/#faq"],
            ["Waitlist", "/#waitlist"],
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            ["About", "/about"],
            ["Careers", "/careers"],
            ["Press kit", "/press"],
            ["Contact", "/contact"],
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["Cookies", "/cookies"],
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-14 pt-6 border-t border-ink/8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-ink/45">
        <div>© {new Date().getFullYear()} EcoVest. All rights reserved.</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-ink transition">Twitter / X</a>
          <a href="#" className="hover:text-ink transition">Instagram</a>
          <a href="#" className="hover:text-ink transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs uppercase tracking-[0.18em] text-ink/40 mb-4">{title}</div>
      <ul className="space-y-2.5 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-ink/75 hover:text-brand-600 transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
