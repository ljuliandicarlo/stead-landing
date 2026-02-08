import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const title = query
    ? `Search: ${query} | Stead`
    : "Search | Stead";
  const description = query
    ? `Search results for "${query}" on Stead. Life insurance coordination, Life Vault, concierge.`
    : "Search Stead for life insurance coordination, document vault, and concierge services.";
  return buildMetadata({
    title,
    description,
    path: query ? `/search?q=${encodeURIComponent(query)}` : "/search",
    noindex: true,
    nofollow: true,
  });
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {query ? `Search: ${query}` : "Search"}
          </h1>
          <p className="mt-3 text-muted-foreground">
            {query
              ? `Results for "${query}". Use the links below to explore.`
              : "Enter a search term in the URL: /search?q=your-query"}
          </p>

          {!query && (
            <p className="mt-6 text-sm text-muted-foreground">
              Example: <Link href="/search?q=life+insurance" className="underline hover:text-foreground">/search?q=life+insurance</Link>
            </p>
          )}

          {query && (
            <nav className="mt-8 space-y-3" aria-label="Search results">
              <Link
                href="/life-insurance"
                className="block text-foreground underline-offset-4 hover:underline"
              >
                Life insurance coordination
              </Link>
              <Link
                href="/life-vault"
                className="block text-foreground underline-offset-4 hover:underline"
              >
                Life Vault — document vault
              </Link>
              <Link
                href="/concierge"
                className="block text-foreground underline-offset-4 hover:underline"
              >
                Private review
              </Link>
              <Link
                href="/contact"
                className="block text-foreground underline-offset-4 hover:underline"
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
