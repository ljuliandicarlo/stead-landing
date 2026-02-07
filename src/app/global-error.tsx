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
      <body className="bg-white text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-100">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 font-sans">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
            A critical error occurred. You can try again or refresh the page.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-8 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
