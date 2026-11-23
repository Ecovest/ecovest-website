import type { Metadata } from "next";
import { DraftNote, InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = { title: "Cookie Policy · EcoVest" };

export default function Cookies() {
  return (
    <InfoPage tag="Legal" title="Cookie" accent="Policy" intro="Which cookies this website uses, and how you can control them.">
      <DraftNote what="Cookie Policy" />
    </InfoPage>
  );
}
