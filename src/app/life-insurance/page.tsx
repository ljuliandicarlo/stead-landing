import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { InsuranceLicensingDisclosure } from "@/components/legal/insurance-licensing-disclosure";
import { buildMetadata } from "@/lib/seo";
import { ServiceSchema, FAQPageSchema, BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Life Insurance Coordination | Stead",
  description:
    "Request life insurance consultation and coordinate with licensed professionals. Get the right coverage, structure ownership and beneficiaries, avoid gaps. We connect you—we do not sell or issue insurance.",
  path: "/life-insurance",
});

const outcomes = [
  "Get the right amount of coverage",
  "Structure ownership and beneficiaries correctly",
  "Avoid gaps and lapses",
  "Coordinate with advisors",
];

const coverageTypes = [
  "Term life",
  "Permanent life",
  "Key person",
  "Buy-sell funding",
  "Income protection coordination",
];

const faqs = [
  {
    question: "Does Stead sell or issue life insurance?",
    answer:
      "No. Stead Technologies, Inc. does not sell, place, negotiate, or bind insurance. We collect requests for consultation and route them to properly licensed professionals who can help you.",
  },
  {
    question: "What is life insurance coordination?",
    answer:
      "Life insurance coordination means we help you request the right coverage and connect you with licensed professionals who can advise on term life, permanent life, key person coverage, buy-sell funding, and income protection. We do not underwrite or issue policies.",
  },
  {
    question: "What information do I need to request a consultation?",
    answer:
      "You can share your location, occupation, income range, family status, timeline, and what you want help with (e.g., term life, review existing coverage). We do not collect medical history, DOB, SSN, or underwriting data.",
  },
  {
    question: "How does beneficiary and ownership structure work?",
    answer:
      "Licensed professionals we connect you with can advise on how to structure ownership and beneficiaries for your situation. Stead facilitates the request; we do not provide legal or insurance advice.",
  },
  {
    question: "What happens after I submit a request?",
    answer:
      "We review requests and respond when there is a clear fit. There is no guarantee of coverage or service. You will hear from us or a partner only if we can help.",
  },
  {
    question: "Can I also use Stead for document storage?",
    answer:
      "Yes. Life Vault is our secure document vault for life-critical documents—identity, legal, insurance, financial, property, medical. You can use it alongside requesting insurance consultation.",
  },
];

export default function LifeInsurancePage() {
  return (
    <>
      <Nav />
      <ServiceSchema
        name="Life insurance coordination"
        description="Stead facilitates requests for life insurance consultation and connects you with licensed professionals. We do not sell, place, negotiate, or bind insurance. Services include coordination for term life, permanent life, key person, buy-sell funding, and income protection."
        url="/life-insurance"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Insurance", path: "/life-insurance" },
        ]}
      />

      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Life insurance coordination
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We connect you with licensed professionals who can help you request
            the right coverage—not sell you a policy. Outcomes we care about:
          </p>

          <section className="mt-10" aria-labelledby="outcomes-heading">
            <h2 id="outcomes-heading" className="text-xl font-medium text-foreground">
              What we help with
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

          <section className="mt-10" aria-labelledby="coverage-heading">
            <h2 id="coverage-heading" className="text-xl font-medium text-foreground">
              Coverage types we coordinate
            </h2>
            <p className="mt-3 text-muted-foreground">
              Non-exhaustive: {coverageTypes.join(", ")}.
            </p>
          </section>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/request-insurance">Get Insurance</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/life-vault">Life Vault</Link>
            </Button>
          </div>

          <section className="mt-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-medium text-foreground">
              Frequently asked questions
            </h2>
            <ul className="mt-6 space-y-6">
              {faqs.map((faq) => (
                <li key={faq.question}>
                  <h3 className="font-medium text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 border-t border-border pt-10" aria-labelledby="disclosure-heading">
            <h2 id="disclosure-heading" className="sr-only">
              Legal disclosure
            </h2>
            <InsuranceLicensingDisclosure />
          </section>

          <RelatedLinks currentPath="/life-insurance" />
        </div>
      </main>
      <Footer />
    </>
  );
}
