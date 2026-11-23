import type { Metadata } from "next";
import { DraftNote, InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = { title: "Privacy Policy · EcoVest" };

export default function Privacy() {
  return (
    <InfoPage tag="Legal" title="Privacy" accent="Policy" intro="How EcoVest collects, uses and protects your personal information.">
      <DraftNote what="Privacy Policy" />
    </InfoPage>
  );
}
