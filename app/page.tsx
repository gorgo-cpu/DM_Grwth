import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <Problems />
        <Solution />
        <Process />
        <Results />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
