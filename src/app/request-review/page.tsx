import { RequestReviewForm } from "@/components/forms/request-review-form";
import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { DISCLAIMER_SHORT, DISCLAIMER_FORM_CONCIERGE } from "@/lib/compliance";

export const metadata = buildMetadata({
  title: "Request a private review | Stead",
  description:
    "Continuity Blueprint for complex lives. Limited availability. We review requests and respond when there is a clear fit.",
  path: "/request-review",
});

export default function RequestReviewPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Concierge", path: "/concierge" },
          { name: "Request private review", path: "/request-review" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Request a private review
        </h1>
        <p className="mt-3 text-muted-foreground">
          Continuity Blueprint for complex lives. Limited availability. We
          review requests and respond when there is a clear fit.
        </p>

        <div className="mt-8 rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer.</strong> {DISCLAIMER_SHORT} {DISCLAIMER_FORM_CONCIERGE}
          </p>
        </div>

        <RequestReviewForm />

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
