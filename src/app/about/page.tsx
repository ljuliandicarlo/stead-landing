import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";

export const metadata = buildMetadata({
  title: "About Stead",
  description:
    "Stead is a tech-enabled life insurance coordination company. We help you request the right coverage, organize life-critical documents, and connect with trusted professionals. We do not sell or issue insurance.",
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
            Stead is a tech-enabled life insurance coordination company.
          </p>

          <section className="mt-10" aria-labelledby="what-we-do-heading">
            <h2 id="what-we-do-heading" className="text-xl font-medium text-foreground">
              What we do
            </h2>
            <p className="mt-3 text-muted-foreground">
              We help you request the right coverage, organize life-critical
              documents, and connect with trusted professionals. We do not sell
              or issue insurance. We collect requests for consultation and route
              them to properly licensed professionals.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="offerings-heading">
            <h2 id="offerings-heading" className="text-xl font-medium text-foreground">
              Our offerings
            </h2>
            <p className="mt-3 text-muted-foreground">
              Life insurance coordination (consultation requests), Life Vault
              (secure document vault for estate planning documents and important
              document storage), and private review and coordination for complex
              lives (limited availability).
            </p>
          </section>

          <RelatedLinks currentPath="/about" />
        </div>
      </main>
      <Footer />
    </>
  );
}
