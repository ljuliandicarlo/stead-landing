"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a] antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center px-6">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-center text-sm text-[#525252]">
            A critical error occurred. You can try again or refresh the page.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-8 rounded-md bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#2a2a2a]"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
