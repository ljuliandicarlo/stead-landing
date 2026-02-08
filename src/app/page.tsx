import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { HeroCoverageGrid } from "@/components/landing/hero-coverage-grid";
import { TrustStrip } from "@/components/landing/trust-strip";
import { HowItWorks } from "@/components/landing/how-it-works";
import { SectionIncludedWithCoverage } from "@/components/landing/section-included-with-coverage";
import { SectionConcierge } from "@/components/landing/section-concierge";
import { SectionAbout } from "@/components/landing/section-about";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Stead — Life insurance, done right",
  description:
    "Get the right coverage, structured correctly, and keep everything organized for when it actually matters. Coordinated through licensed professionals. Private by default.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HeroCoverageGrid />
        <TrustStrip />
        <HowItWorks />
        <SectionIncludedWithCoverage />
        <SectionConcierge />
        <SectionAbout />
        <Footer />
      </main>
    </>
  );
}
