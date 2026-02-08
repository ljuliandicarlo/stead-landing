import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Term life insurance | Stead",
  description:
    "Straightforward protection for defined periods of risk. We coordinate term life coverage through licensed professionals. We do not sell or issue insurance.",
  path: "/life-insurance/term",
});

export default function TermLifePage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Insurance", path: "/life-insurance" },
          { name: "Term life", path: "/life-insurance/term" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Term life insurance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Straightforward protection for defined periods of risk.
          </p>

          <section className="mt-10" aria-labelledby="who-term">
            <h2 id="who-term" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Families with dependents</li>
              <li>Early-stage founders</li>
              <li>New parents</li>
              <li>Anyone with a defined period of financial obligation (e.g. mortgage, education)</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="covers-term">
            <h2 id="covers-term" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              What it covers
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Term life provides a death benefit for a set period (e.g. 10, 20, 30 years). If the insured dies during the term, the policy pays out to beneficiaries. After the term ends, coverage ends unless renewed or converted. No cash value; pure protection for a defined period.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="use-cases-term">
            <h2 id="use-cases-term" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Common use cases
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mortgage protection</li>
              <li>Family income replacement</li>
              <li>Business continuity (key person or buy-sell)</li>
              <li>Education funding</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="structuring-term">
            <h2 id="structuring-term" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Structuring considerations
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Ownership and beneficiaries should align with your goals: personal vs business ownership, primary and contingent beneficiaries, and review cadence (e.g. every few years or when life events occur). Licensed professionals we connect you with can advise on your situation.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="stead-helps-term">
            <h2 id="stead-helps-term" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              How Stead helps
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We help you request the right amount and structure of term coverage and connect you with properly licensed professionals. We do not sell or issue insurance. Coordination includes clarifying needs, ownership, beneficiaries, and ongoing review.
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

          <RelatedLinks currentPath="/life-insurance/term" />
        </div>
      </main>
      <Footer />
    </>
  );
}
