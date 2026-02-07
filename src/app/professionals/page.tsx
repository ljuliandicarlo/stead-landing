import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Professionals & Partners | Stead",
  description:
    "Partner with Stead. For licensed professionals: life insurance coordination, document vault referrals, estate planning support. Join our network.",
  path: "/professionals",
});

export default function ProfessionalsPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Professionals", path: "/professionals" },
        ]}
      />

      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Professionals & partners
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            For licensed professionals and firms interested in partnering with
            Stead on life insurance coordination and Life Vault referrals.
          </p>

          <section className="mt-10" aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-xl font-medium text-foreground">
              Who this is for
            </h2>
            <p className="mt-3 text-muted-foreground">
              Licensed insurance professionals, estate attorneys, financial
              advisors, and firms who want to coordinate with Stead on
              consultation requests and secure document vault (Life Vault)
              referrals.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="disclaimer-heading">
            <h2 id="disclaimer-heading" className="text-xl font-medium text-foreground">
              Note
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Stead does not sell or issue insurance. We facilitate requests and
              connect clients with licensed professionals. All insurance
              services are performed by third parties.
            </p>
          </section>

          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>

          <RelatedLinks currentPath="/professionals" />
        </div>
      </main>
      <Footer />
    </>
  );
}
