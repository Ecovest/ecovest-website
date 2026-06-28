import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy policy · EcoVest",
  description: "How EcoVest collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        kicker="Legal"
        title="Privacy policy"
        subtitle="The short version: we collect only what we need to run EcoVest, we don't sell your data, and you can ask us to delete it any time."
      />

      <LegalDoc effective="May 2026">
        <h2>1. Who we are</h2>
        <p>
          EcoVest (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a community-driven
          finance and sustainability platform. This policy describes how we
          handle your personal data when you visit our website or use our
          services.
        </p>

        <h2>2. What we collect</h2>
        <ul>
          <li>
            <strong>Account data:</strong> name and email when you join the
            waitlist or sign up.
          </li>
          <li>
            <strong>Communications:</strong> messages you send through our
            contact form, email, or community channels.
          </li>
          <li>
            <strong>Usage data:</strong> anonymised analytics about how the
            site is used (pages visited, device type, country) so we can
            improve it.
          </li>
        </ul>

        <h2>3. How we use it</h2>
        <ul>
          <li>To send you product updates, lessons, and early-access drops.</li>
          <li>To respond to your messages.</li>
          <li>To improve the platform and understand what works.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>4. What we don&rsquo;t do</h2>
        <p>
          We don&rsquo;t sell your personal data. We don&rsquo;t share it with
          third parties for advertising. We don&rsquo;t use it to build
          profiles outside what&rsquo;s needed to run EcoVest.
        </p>

        <h2>5. Who we share it with</h2>
        <p>
          Only the service providers we need to operate, for example our
          email provider, hosting platform, and analytics tool. Each one is
          contractually bound to handle your data carefully.
        </p>

        <h2>6. Your rights</h2>
        <p>You can ask us, at any time, to:</p>
        <ul>
          <li>Show you the data we have on you</li>
          <li>Correct anything that&rsquo;s wrong</li>
          <li>Delete your account and all related data</li>
          <li>Stop sending you marketing emails (every email has an unsubscribe link)</li>
        </ul>
        <p>
          Send requests to{" "}
          <a href="mailto:privacy@ecovest.app">privacy@ecovest.app</a> and
          we&rsquo;ll act within 30 days.
        </p>

        <h2>7. How long we keep it</h2>
        <p>
          We keep your data for as long as your account is active, plus a
          reasonable period for legal and audit purposes. Inactive waitlist
          entries are purged after 24 months.
        </p>

        <h2>8. Security</h2>
        <p>
          We use industry-standard measures to protect your data:
          HTTPS-only, encrypted databases, and limited internal access. No
          system is perfectly secure, but we treat your data the way we&rsquo;d
          want ours treated.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          When we update this policy, we&rsquo;ll change the effective date at
          the top and email account holders if the changes are material.
        </p>
      </LegalDoc>
    </main>
  );
}
