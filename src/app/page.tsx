import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { SectionLifeInsurance } from "@/components/landing/section-life-insurance";
import { SectionLifeVault } from "@/components/landing/section-life-vault";
import { SectionConcierge } from "@/components/landing/section-concierge";
import { SectionAbout } from "@/components/landing/section-about";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Stead — Life insurance and life organization, in one place",
  description:
    "Stead helps you request the right coverage, organize life-critical documents, and coordinate execution with trusted professionals. Secure document vault and estate planning support.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionLifeInsurance />
        <SectionLifeVault />
        <SectionConcierge />
        <SectionAbout />
        <Footer />
      </main>
    </>
  );
}
