"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithMagicLink } from "@/app/signin/actions";

export function SignInForm({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setPending(true);
    try {
      const params = await searchParams;
      const result = await signInWithMagicLink(formData, params.redirect);
      if (result?.error) {
        setError(result.error);
        setPending(false);
        return;
      }
      setSent(true);
      setPending(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-surface-2 p-6 text-center">
        <p className="text-sm font-medium text-foreground">
          Check your email for the sign-in link.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          The link will expire in 1 hour. You can close this tab.
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200">
          {error}
        </p>
      )}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Sending…" : "Send magic link"}
      </Button>
    </form>
  );
}
