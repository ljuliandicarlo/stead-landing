"use server";

import { createClient } from "@/lib/supabase/server";

export async function signInWithMagicLink(
  formData: FormData,
  redirectTo?: string
) {
  const email = formData.get("email") as string | null;
  if (!email?.trim()) {
    return { error: "Email is required." };
  }

  const supabase = await createClient();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: {
      emailRedirectTo: `${baseUrl}/auth/callback?next=${encodeURIComponent(redirectTo || "/app")}`,
    },
  });

  if (error) {
    console.error("Magic link error:", error);
    return { error: error.message };
  }

  return { success: true };
}
