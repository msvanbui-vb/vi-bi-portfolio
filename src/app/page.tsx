import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { AISection } from "@/components/AISection";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Capabilities />
        <CaseStudies />
        <Process />
        <AISection />
        <About />
      </main>
      <Footer />
    </>
  );
}
