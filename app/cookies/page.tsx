import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Cookie policy · EcoVest",
  description: "How EcoVest uses cookies and how to control them.",
};

export default function CookiesPage() {
  return (
    <main>
      <PageHeader
        kicker="Legal"
        title="Cookie policy"
        subtitle="What cookies we use, why we use them, and how you can turn them off."
      />

      <LegalDoc effective="May 2026">
        <h2>1. What cookies are</h2>
        <p>
          Cookies are small text files stored on your device by your browser
          when you visit a website. They help sites remember things, like
          whether you&rsquo;re signed in or what theme you prefer, and let us
          understand how the site is being used.
        </p>

        <h2>2. The cookies we use</h2>

        <h3>Essential</h3>
        <p>
          Required for the site to work, like remembering whether
          you&rsquo;ve seen the loading screen this session, or keeping you
          signed in. You can&rsquo;t turn these off without breaking the site.
        </p>

        <h3>Analytics</h3>
        <p>
          Anonymised stats about how the site is used (page views, device
          type, country). We use this to make the platform better. We
          don&rsquo;t link this data to your personal account.
        </p>

        <h3>Marketing</h3>
        <p>
          We don&rsquo;t use marketing or advertising cookies. If that ever
          changes, we&rsquo;ll update this page and ask for your consent first.
        </p>

        <h2>3. Third-party cookies</h2>
        <p>
          Some pages may embed content from third parties (e.g. fonts from
          Google Fonts). Those providers may set their own cookies, governed
          by their own policies.
        </p>

        <h2>4. How to control cookies</h2>
        <p>
          Most browsers let you block or delete cookies. Here&rsquo;s how:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/microsoft-edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>

        <h2>5. Updates</h2>
        <p>
          When we change this policy we&rsquo;ll update the effective date at
          the top.
        </p>
      </LegalDoc>
    </main>
  );
}
