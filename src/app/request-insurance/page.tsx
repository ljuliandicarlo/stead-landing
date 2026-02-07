import { RequestInsuranceForm } from "@/components/forms/request-insurance-form";
import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { InsuranceLicensingDisclosure } from "@/components/legal/insurance-licensing-disclosure";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { DISCLAIMER_SHORT, DISCLAIMER_FORM_INSURANCE } from "@/lib/compliance";

export const metadata = buildMetadata({
  title: "Get Insurance | Request consultation | Stead",
  description:
    "Submit a request for life insurance consultation. Stead connects you with licensed professionals. We do not sell or issue insurance.",
  path: "/request-insurance",
});

export default function RequestInsurancePage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Insurance", path: "/life-insurance" },
          { name: "Get Insurance", path: "/request-insurance" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Get Insurance
        </h1>
        <p className="mt-3 text-muted-foreground">
          We review requests and connect you with licensed professionals when
          there is a clear fit. We do not sell or issue insurance.
        </p>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Disclaimer.</strong> {DISCLAIMER_SHORT} {DISCLAIMER_FORM_INSURANCE}
          </p>
        </div>

        <RequestInsuranceForm />

        <section className="mt-12 border-t border-border pt-8" aria-labelledby="disclosure-heading">
          <h2 id="disclosure-heading" className="sr-only">
            Legal disclosure
          </h2>
          <InsuranceLicensingDisclosure />
        </section>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          <Link href="/" className="underline hover:text-foreground">
            Back to home
          </Link>
        </p>
      </div>
    </main>
      <Footer />
    </>
  );
}
