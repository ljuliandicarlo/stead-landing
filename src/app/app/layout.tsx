import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { AppNav } from "@/components/app/app-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin?redirect=/app");
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="w-full border-b border-border bg-surface-2 md:w-56 md:border-b-0 md:border-r">
        <div className="flex h-14 items-center border-b border-border px-4 md:border-b-0">
          <Link href="/app" className="flex items-center gap-2">
            <Image
              src="/stead-logo.png"
              alt="Stead"
              width={24}
              height={24}
              className="h-6 w-6 rounded-lg object-contain"
            />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Stead
            </span>
          </Link>
        </div>
        <AppNav />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
