"use server";

import { createClient } from "@/lib/supabase/server";
import type { ReviewLeadInsert } from "@/types/database";

export async function submitReviewLead(formData: FormData) {
  const consent = formData.get("consent");
  if (consent !== "on" && consent !== "true") {
    return { error: "You must consent to be contacted." };
  }

  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  if (!name?.trim() || !email?.trim()) {
    return { error: "Name and email are required." };
  }

  const payload: ReviewLeadInsert = {
    name: name.trim(),
    email: email.trim(),
    location: (formData.get("location") as string)?.trim() || undefined,
    context: (formData.get("context") as string)?.trim() || undefined,
    consent: true,
  };

  const supabase = await createClient();
  const { error } = await supabase.from("review_leads").insert(payload);

  if (error) {
    console.error("Review lead insert error:", error);
    return { error: "Failed to submit. Please try again." };
  }

  return { success: true };
}
