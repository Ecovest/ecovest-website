import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Problem from "@/components/Problem";

// Sections get added here one by one as we design them.
export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <FAQ />
    </main>
    <Footer />
    </>
  );
}
