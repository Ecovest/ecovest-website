import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of service · EcoVest",
  description: "The terms governing your use of EcoVest.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        kicker="Legal"
        title="Terms of service"
        subtitle="The rules of the road for using EcoVest. Written in plain English wherever we can manage it."
      />

      <LegalDoc effective="May 2026">
        <h2>1. Agreement</h2>
        <p>
          By accessing or using EcoVest, you agree to these terms. If you
          don&rsquo;t agree, please don&rsquo;t use the service.
        </p>

        <h2>2. Who can use EcoVest</h2>
        <p>
          You must be at least 13 years old. If you&rsquo;re under 18, you need
          a parent or guardian&rsquo;s consent. You must provide accurate
          information when you sign up.
        </p>

        <h2>3. Educational content, not advice</h2>
        <p>
          EcoVest is an educational platform. Nothing on it is personal
          financial, investment, legal, or tax advice. You should make your
          own decisions and, where the stakes are high, consult a qualified
          professional. We are not liable for losses arising from actions you
          take based on educational content.
        </p>

        <h2>4. Your account</h2>
        <ul>
          <li>You&rsquo;re responsible for keeping your password secure.</li>
          <li>You&rsquo;re responsible for activity that happens under your account.</li>
          <li>Tell us right away if you suspect unauthorised use.</li>
        </ul>

        <h2>5. Acceptable use</h2>
        <p>Don&rsquo;t use EcoVest to:</p>
        <ul>
          <li>Break the law or infringe anyone&rsquo;s rights</li>
          <li>Harass, abuse, or harm other members</li>
          <li>Scrape, spam, or attempt to break the platform</li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>
        <p>
          We can suspend or close accounts that violate these rules.
        </p>

        <h2>6. Content</h2>
        <p>
          We own the EcoVest brand, content, and software. You keep ownership
          of what you post in our community, but you grant us a worldwide
          licence to use, display, and distribute it for the purpose of
          running EcoVest.
        </p>

        <h2>7. Termination</h2>
        <p>
          You can stop using EcoVest any time. We can suspend access if you
          break these terms or if we need to protect the platform.
        </p>

        <h2>8. Disclaimers</h2>
        <p>
          EcoVest is provided &ldquo;as is&rdquo;. We don&rsquo;t guarantee it
          will be uninterrupted, error-free, or fit for a specific purpose. To
          the extent permitted by law, we exclude all implied warranties.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, EcoVest will not be liable
          for indirect, incidental, special, or consequential damages arising
          from your use of the service.
        </p>

        <h2>10. Changes</h2>
        <p>
          We may update these terms occasionally. Material changes will be
          announced at least 30 days before they take effect.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These terms are governed by the laws of the Federal Republic of
          Nigeria, without regard to its conflict-of-law principles.
        </p>
      </LegalDoc>
    </main>
  );
}
