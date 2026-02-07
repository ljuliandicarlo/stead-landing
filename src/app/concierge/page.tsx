import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { DISCLAIMER_SHORT } from "@/lib/compliance";
import { ServiceSchema, BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Private Review & Concierge | Stead",
  description:
    "Continuity Blueprint for complex lives. Limited availability. Coverage and document audit, execution readiness plan, introductions to vetted professionals. Request a private review.",
  path: "/concierge",
});

const outcomes = [
  "Coverage and document audit",
  "Execution readiness plan",
  "Introductions to vetted professionals",
];

export default function ConciergePage() {
  return (
    <>
      <Nav />
      <ServiceSchema
        name="Private review and coordination"
        description="Stead offers a private review and coordination service (Continuity Blueprint) for complex lives. Limited availability. Includes coverage and document audit, execution readiness plan, and introductions to vetted professionals. We do not sell or issue insurance."
        url="/concierge"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Concierge", path: "/concierge" },
        ]}
      />

      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Private review and coordination
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Continuity Blueprint for complex lives. Limited availability.
          </p>

          <section className="mt-10" aria-labelledby="outcomes-heading">
            <h2 id="outcomes-heading" className="text-xl font-medium text-foreground">
              What we offer
            </h2>
            <ul className="mt-4 space-y-3">
              {outcomes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <Check className="h-5 w-5 shrink-0 text-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="disclaimer-heading">
            <h2 id="disclaimer-heading" className="text-xl font-medium text-foreground">
              Note
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {DISCLAIMER_SHORT} Submitting a request does not create any contract or guarantee of service.
            </p>
          </section>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/request-review">Request a private review</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/partners">Partner with us</Link>
            </Button>
          </div>

          <RelatedLinks currentPath="/concierge" />
        </div>
      </main>
      <Footer />
    </>
  );
}
