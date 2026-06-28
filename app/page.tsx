import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ProductStage from "@/components/ProductStage";
import Roadmap from "@/components/Roadmap";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <ProductStage />
      <Roadmap />
      <Vision />
      <FAQ />
      <CTA />
    </main>
  );
}
