import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Buy–sell funding | Stead",
  description:
    "Ownership transition planning. We coordinate buy-sell funding through licensed professionals. We do not sell or issue insurance.",
  path: "/life-insurance/buy-sell",
});

export default function BuySellPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Insurance", path: "/life-insurance" },
          { name: "Buy–sell funding", path: "/life-insurance/buy-sell" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Buy–sell funding
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ownership transition planning.
          </p>

          <section className="mt-10" aria-labelledby="who-buysell">
            <h2 id="who-buysell" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Business partners and co-owners</li>
              <li>Shareholders in closely held companies</li>
              <li>LLC members and partnerships</li>
              <li>Anyone with a buy-sell or similar ownership agreement</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="covers-buysell">
            <h2 id="covers-buysell" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              What it covers
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Buy-sell funding uses life insurance (and sometimes disability) to fund the purchase of a deceased or disabled owner’s interest per a buy-sell agreement. Proceeds provide liquidity so remaining owners can acquire the interest and the business continues. Structure (entity vs cross-purchase, etc.) and amount depend on the agreement and valuation; licensed professionals can advise.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="use-cases-buysell">
            <h2 id="use-cases-buysell" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Common use cases
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Funding partnership or shareholder buyout at death or disability</li>
              <li>Keeping ownership within the business or chosen successors</li>
              <li>Providing liquidity for estate and family</li>
              <li>Aligning with operating or shareholder agreements</li>
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="structuring-buysell">
            <h2 id="structuring-buysell" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Structuring considerations
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Entity vs cross-purchase (or hybrid), ownership and beneficiaries, valuation method and review, and coordination with legal and tax advisors. Licensed professionals we connect you with can advise on structure and alignment with your buy-sell agreement.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="stead-helps-buysell">
            <h2 id="stead-helps-buysell" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              How Stead helps
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We help you request the right buy-sell funding and connect you with properly licensed professionals. We do not sell or issue insurance. Coordination includes clarifying agreement terms, ownership, beneficiaries, and ongoing review.
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

          <RelatedLinks currentPath="/life-insurance/buy-sell" />
        </div>
      </main>
      <Footer />
    </>
  );
}
