import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Mail } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact | Stead",
  description:
    "Email hello@stead.org for general inquiries, life insurance coordination, Life Vault, or private review.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            For general inquiries, life insurance coordination, Life Vault, or
            private review.
          </p>

          <section className="mt-10" aria-labelledby="email-heading">
            <h2 id="email-heading" className="text-xl font-medium text-foreground">
              Email
            </h2>
            <a
              href="mailto:hello@stead.org"
              className="mt-3 inline-flex items-center gap-2 text-muted-foreground underline hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              hello@stead.org
            </a>
          </section>

          <section className="mt-10" aria-labelledby="actions-heading">
            <h2 id="actions-heading" className="text-xl font-medium text-foreground">
              Quick actions
            </h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <Link href="/request-insurance" className="underline hover:text-foreground">
                  Get Insurance
                </Link>
              </li>
              <li>
                <Link href="/signin?redirect=/app" className="underline hover:text-foreground">
                  Create your Life Vault
                </Link>
              </li>
              <li>
                <Link href="/request-review" className="underline hover:text-foreground">
                  Request a private review
                </Link>
              </li>
            </ul>
          </section>

          <RelatedLinks currentPath="/contact" />
        </div>
      </main>
      <Footer />
    </>
  );
}
