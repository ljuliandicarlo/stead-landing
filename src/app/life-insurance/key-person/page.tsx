import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Key person insurance | Stead",
  description:
    "Protecting critical people in a business. We coordinate key person coverage through licensed professionals. We do not sell or issue insurance.",
  path: "/life-insurance/key-person",
});

export default function KeyPersonPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Insurance", path: "/life-insurance" },
          { name: "Key person", path: "/life-insurance/key-person" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Key person insurance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Protecting critical people in a business.
          </p>

          <section className="mt-10" aria-labelledby="who-key">
            <h2 id="who-key" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Founders and C-suite executives</li>
              <li>Businesses that depend on one or a few key people</li>
              <li>Partnerships and closely held companies</li>
              <li>Companies seeking continuity and financial protection</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="covers-key">
            <h2 id="covers-key" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              What it covers
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Key person insurance is life (and sometimes disability) coverage on an individual whose death or incapacity would materially harm the business. The business is typically the owner and beneficiary. Proceeds can fund continuity, recruitment, or debt repayment. Structure and amount depend on the business’s needs; licensed professionals can advise.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="use-cases-key">
            <h2 id="use-cases-key" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Common use cases
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Business continuity after loss of a key leader</li>
              <li>Funding recruitment or transition costs</li>
              <li>Creditor or lender requirements</li>
              <li>Partner or shareholder protection</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="structuring-key">
            <h2 id="structuring-key" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Structuring considerations
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Business as owner and beneficiary, coordination with buy-sell or partnership agreements, and review when roles or ownership change. Licensed professionals we connect you with can advise on amount, ownership, and alignment with your agreements.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="stead-helps-key">
            <h2 id="stead-helps-key" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              How Stead helps
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We help you request the right key person coverage and connect you with properly licensed professionals. We do not sell or issue insurance. Coordination includes clarifying business needs, ownership, beneficiaries, and ongoing review.
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

          <RelatedLinks currentPath="/life-insurance/key-person" />
        </div>
      </main>
      <Footer />
    </>
  );
}
