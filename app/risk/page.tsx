import type { Metadata } from "next";
import { DraftNote, InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = { title: "Risk disclosure · EcoVest" };

export default function Risk() {
  return (
    <InfoPage
      tag="Legal"
      title="Risk"
      accent="disclosure"
      intro="Investing involves risk. The value of investments can go down as well as up, and you may get back less than you put in. EcoVest's lessons and AI coach are for education, not personal financial advice."
    >
      <DraftNote what="risk disclosure" />
    </InfoPage>
  );
}
