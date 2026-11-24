import type { Metadata } from "next";
import { DraftNote, InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = { title: "Terms & Conditions · EcoVest" };

export default function Terms() {
  return (
    <InfoPage tag="Legal" title="Terms &" accent="Conditions" intro="The rules for using EcoVest, pocketa and the EcoVest community.">
      <DraftNote what="Terms & Conditions" />
    </InfoPage>
  );
}
