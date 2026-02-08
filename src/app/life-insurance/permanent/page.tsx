import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Permanent life insurance | Stead",
  description:
    "Long-term coverage with estate planning considerations. We coordinate permanent life through licensed professionals. We do not sell or issue insurance.",
  path: "/life-insurance/permanent",
});

export default function PermanentLifePage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Insurance", path: "/life-insurance" },
          { name: "Permanent life", path: "/life-insurance/permanent" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Permanent life insurance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Long-term coverage with estate planning considerations.
          </p>

          <section className="mt-10" aria-labelledby="who-permanent">
            <h2 id="who-permanent" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Individuals with long-term estate or liquidity needs</li>
              <li>High-net-worth families</li>
              <li>Business owners planning for succession</li>
              <li>Anyone seeking lifetime coverage with potential cash value or estate uses</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="covers-permanent">
            <h2 id="covers-permanent" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              What it covers
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Permanent life insurance provides coverage for the insured’s lifetime, subject to policy terms. Some types build cash value and can play a role in estate liquidity, business planning, or long-term financial strategy. Structure and suitability depend on your goals; licensed professionals can explain options.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="use-cases-permanent">
            <h2 id="use-cases-permanent" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Common use cases
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Estate liquidity</li>
              <li>Long-term family protection</li>
              <li>Business succession and key person</li>
              <li>Charitable or legacy planning</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="structuring-permanent">
            <h2 id="structuring-permanent" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Structuring considerations
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Ownership (personal, trust, or business), beneficiary designations, and coordination with estate, tax, and legal advisors matter. Review cadence should reflect life changes and long-term goals. Licensed professionals we connect you with can advise on your situation.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="stead-helps-permanent">
            <h2 id="stead-helps-permanent" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              How Stead helps
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We help you request the right structure and amount of permanent coverage and connect you with properly licensed professionals. We do not sell or issue insurance. Coordination includes clarifying goals, ownership, beneficiaries, and ongoing review with your advisors.
            </p>
          </section>

          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/request-insurance">Request coverage review</Link>
            </Button>
          </div>

          <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
            Stead does not sell, place, negotiate, or bind insurance. We connect you with properly licensed professionals. Insurance products are offered by licensed third parties and subject to underwriting and state regulations.
          </p>

          <RelatedLinks currentPath="/life-insurance/permanent" />
        </div>
      </main>
      <Footer />
    </>
  );
}
