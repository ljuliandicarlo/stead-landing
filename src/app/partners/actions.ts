"use server";

import { createClient } from "@/lib/supabase/server";
import { sendLeadNotification } from "@/lib/notify-lead";
import type { PartnerLeadInsert } from "@/types/database";

export async function submitPartnerLead(formData: FormData) {
  const consent = formData.get("consent");
  if (consent !== "on" && consent !== "true") {
    return { error: "You must consent to be contacted." };
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const role = (formData.get("role") as string)?.trim();
  if (!name || !email || !role) {
    return { error: "Name, email, and professional role are required." };
  }

  const payload: PartnerLeadInsert = {
    name,
    email,
    phone: (formData.get("phone") as string)?.trim() || undefined,
    role,
    firm: (formData.get("firm") as string)?.trim() || undefined,
    jurisdiction: (formData.get("jurisdiction") as string)?.trim() || undefined,
    experience_range: (formData.get("experience_range") as string) || undefined,
    licenses: (formData.get("licenses") as string)?.trim() || undefined,
    current_workflow: (formData.get("current_workflow") as string)?.trim() || undefined,
    interest_reason: (formData.get("interest_reason") as string)?.trim() || undefined,
    consent: true,
  };

  const supabase = await createClient();
  const { error } = await supabase.from("partner_leads").insert(payload);

  if (error) {
    console.error("Partner lead insert error:", error);
    return { error: "Failed to submit. Please try again." };
  }

  await sendLeadNotification("partner", payload);
  return { success: true };
}
