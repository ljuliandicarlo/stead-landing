import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";

export const metadata = buildMetadata({
  title: "About Stead",
  description:
    "Stead coordinates life insurance and organizes life-critical documents. We help you request the right coverage, work with licensed professionals, and keep documents in one place. We do not sell or issue insurance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            About Stead
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stead coordinates life insurance and organizes life-critical
            documents. We do not sell or issue insurance.
          </p>

          <section className="mt-10" aria-labelledby="what-we-do-heading">
            <h2 id="what-we-do-heading" className="text-xl font-medium text-foreground">
              What we do
            </h2>
            <p className="mt-3 text-muted-foreground">
              We help you request the right coverage, work with licensed
              professionals, and keep documents in one place. We collect
              requests for consultation and route them to properly licensed
              professionals.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="offerings-heading">
            <h2 id="offerings-heading" className="text-xl font-medium text-foreground">
              What we offer
            </h2>
            <p className="mt-3 text-muted-foreground">
              Life insurance coordination (consultation requests), Life Vault
              (secure document vault), and private review of coverage and
              documents. By request.
            </p>
          </section>

          <RelatedLinks currentPath="/about" />
        </div>
      </main>
      <Footer />
    </>
  );
}
