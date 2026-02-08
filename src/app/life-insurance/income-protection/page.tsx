import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Income protection | Stead",
  description:
    "Planning for loss of earning ability. We coordinate income protection and disability-related coverage through licensed professionals. We do not sell or issue insurance.",
  path: "/life-insurance/income-protection",
});

export default function IncomeProtectionPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Insurance", path: "/life-insurance" },
          { name: "Income protection", path: "/life-insurance/income-protection" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Income protection
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Planning for loss of earning ability.
          </p>

          <section className="mt-10" aria-labelledby="who-income">
            <h2 id="who-income" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Primary earners and breadwinners</li>
              <li>Founders and sole proprietors</li>
              <li>Professionals with high income dependency</li>
              <li>Anyone who would face financial strain if unable to work</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="covers-income">
            <h2 id="covers-income" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              What it covers
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Income protection typically refers to disability or related coverage that replaces a portion of income if you cannot work due to illness or injury. Benefits, definitions (e.g. own occupation, any occupation), and terms vary. Licensed professionals can explain options and suitability for your situation.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="use-cases-income">
            <h2 id="use-cases-income" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Common use cases
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Replacing lost income during disability</li>
              <li>Protecting family or business from loss of a key earner</li>
              <li>Coordinating with life insurance for full protection</li>
              <li>Business overhead or key person continuity</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="structuring-income">
            <h2 id="structuring-income" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Structuring considerations
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Personal vs business ownership, benefit amount and duration, elimination period, and coordination with life insurance and other benefits. Review cadence should reflect income and role changes. Licensed professionals we connect you with can advise on your situation.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="stead-helps-income">
            <h2 id="stead-helps-income" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              How Stead helps
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We help you request the right income protection and coordinate with properly licensed professionals. We do not sell or issue insurance. Coordination includes clarifying needs, benefit levels, ownership, and ongoing review.
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

          <RelatedLinks currentPath="/life-insurance/income-protection" />
        </div>
      </main>
      <Footer />
    </>
  );
}
