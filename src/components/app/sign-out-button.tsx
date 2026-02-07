"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/app/app/settings/actions";

export function SignOutButton({ className }: { className?: string }) {
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <Button variant="secondary" size="sm" className={className} onClick={handleSignOut}>
      Sign out
    </Button>
  );
}
