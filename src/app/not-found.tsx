import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
