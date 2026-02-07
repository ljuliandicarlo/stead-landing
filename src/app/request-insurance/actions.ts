"use server";

import { createClient } from "@/lib/supabase/server";
import type { InsuranceLeadInsert } from "@/types/database";

export async function submitInsuranceLead(formData: FormData) {
  const consent = formData.get("consent");
  if (consent !== "on" && consent !== "true") {
    return { error: "You must consent to be contacted." };
  }

  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const coverageInterest = (formData.get("coverage_interest") as string)?.trim();
  if (!name?.trim() || !email?.trim()) {
    return { error: "Name and email are required." };
  }
  if (!coverageInterest) {
    return { error: "Please select what you want help with." };
  }

  const payload: InsuranceLeadInsert = {
    name: name.trim(),
    email: email.trim(),
    city: (formData.get("city") as string)?.trim() || undefined,
    state: (formData.get("state") as string)?.trim() || undefined,
    country: (formData.get("country") as string)?.trim() || undefined,
    coverage_interest: coverageInterest,
    timeline: (formData.get("timeline") as string) || undefined,
    occupation: (formData.get("occupation") as string)?.trim() || undefined,
    income_range: (formData.get("income_range") as string) || undefined,
    net_worth_range: (formData.get("net_worth_range") as string) || undefined,
    family_status: (formData.get("family_status") as string) || undefined,
    existing_coverage: (formData.get("existing_coverage") as string) || undefined,
    notes: (formData.get("notes") as string)?.trim() || undefined,
    consent: true,
  };

  const supabase = await createClient();
  const { error } = await supabase.from("insurance_leads").insert(payload);

  if (error) {
    console.error("Insurance lead insert error:", error);
    return { error: "Failed to submit. Please try again." };
  }

  return { success: true };
}
