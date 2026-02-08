import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { PartnerLeadForm } from "@/components/forms/partner-lead-form";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Partner with Stead",
  description:
    "Stead works with a small number of trusted professionals to support individuals and families with complex insurance, estate, tax, and continuity needs. Selective partnership, not an open marketplace.",
  path: "/partners",
});

const benefits = [
  "Better-prepared clients with organized documents",
  "Clear scope and context before engagement",
  "Secure, permissioned access to relevant information",
  "Reduced administrative friction",
  "Long-term relationships, not one-off transactions",
];

const whoList = [
  "Estate planning attorneys",
  "Accountants and tax advisors",
  "Trust and fiduciary professionals",
  "Insurance professionals (properly licensed)",
  "Notaries and related specialists",
];

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Partners", path: "/partners" },
        ]}
      />

      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Partner with Stead
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Stead works with a small number of trusted professionals to support
            individuals and families with complex insurance, estate, tax, and
            continuity needs.
          </p>
          <p className="mt-4 text-muted-foreground">
            We help clients arrive prepared, organized, and clear — so
            professionals can focus on high-value work, not intake and
            back-and-forth.
          </p>
          <p className="mt-4 text-muted-foreground">
            This is a selective partnership, not an open marketplace.
          </p>

          <section className="mt-12" aria-labelledby="benefits-heading">
            <h2 id="benefits-heading" className="text-xl font-medium text-foreground">
              What partners get
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Benefits, not guarantees.
            </p>
            <ul className="mt-4 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-xl font-medium text-foreground">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {whoList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm italic text-muted-foreground">
              We prioritize professionals with strong credentials, client focus,
              and long-term alignment.
            </p>
          </section>

          <section className="mt-16" aria-labelledby="form-heading">
            <h2 id="form-heading" className="text-xl font-medium text-foreground">
              Express interest
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We review partner inquiries on a rolling basis.
            </p>
            <PartnerLeadForm />
          </section>

          <section className="mt-16 rounded-lg border border-border bg-surface-2 p-6" aria-labelledby="disclaimer-heading">
            <h2 id="disclaimer-heading" className="text-sm font-medium text-foreground">
              Disclaimer
            </h2>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>Stead does not guarantee referrals.</li>
              <li>Stead does not employ or supervise partner professionals.</li>
              <li>All services are provided independently by licensed professionals under their own engagement terms.</li>
            </ul>
          </section>

          <RelatedLinks currentPath="/partners" />
        </div>
      </main>
      <Footer />
    </>
  );
}
