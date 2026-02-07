import Link from "next/link";
import Image from "next/image";
import { SignInForm } from "@/components/auth/sign-in-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Life Vault.",
  robots: { index: false, follow: false },
};

export default function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex flex-col items-center gap-2">
            <Image
              src="/stead-logo.png"
              alt="Stead"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Stead
            </span>
          </Link>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
            Sign in to your Life Vault
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We’ll send you a magic link. No password needed.
          </p>
        </div>
        <SignInForm searchParams={searchParams} />
        <p className="text-center text-sm text-muted-foreground">
          <Link href="/" className="underline hover:text-foreground">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
