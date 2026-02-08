/**
 * Sends a lead notification email to the configured address via Resend.
 * If RESEND_API_KEY is not set, this is a no-op (lead is still saved in Supabase).
 */

const RESEND_API = "https://api.resend.com/emails";

const DEFAULT_TO = "hello@stead.org";
const DEFAULT_FROM = "Stead Leads <onboarding@resend.dev>";

function getTo(): string {
  return process.env.LEAD_NOTIFICATION_EMAIL || DEFAULT_TO;
}

function getFrom(): string {
  return process.env.RESEND_FROM || DEFAULT_FROM;
}

function formatRow(label: string, value: string | undefined): string {
  if (!value?.trim()) return "";
  return `<tr><td style="padding:4px 8px 4px 0;vertical-align:top;font-weight:600;">${label}</td><td style="padding:4px 0;">${escapeHtml(value.trim())}</td></tr>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type InsuranceLeadPayload = {
  name: string;
  email: string;
  city?: string;
  state?: string;
  country?: string;
  coverage_interest: string;
  timeline?: string;
  occupation?: string;
  income_range?: string;
  net_worth_range?: string;
  family_status?: string;
  existing_coverage?: string;
  notes?: string;
};

export type ReviewLeadPayload = {
  name: string;
  email: string;
  location?: string;
  context?: string;
};

export type PartnerLeadPayload = {
  name: string;
  email: string;
  phone?: string;
  role: string;
  firm?: string;
  jurisdiction?: string;
  experience_range?: string;
  licenses?: string;
  current_workflow?: string;
  interest_reason?: string;
};

export async function sendLeadNotification(
  type: "insurance" | "review" | "partner",
  payload: InsuranceLeadPayload | ReviewLeadPayload | PartnerLeadPayload
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey?.trim()) {
    return;
  }

  let subject: string;
  let html: string;

  if (type === "insurance") {
    const p = payload as InsuranceLeadPayload;
    subject = `New insurance lead: ${p.name}`;
    html = `
      <p>New insurance consultation request from stead.org:</p>
      <table style="border-collapse:collapse;">
        ${formatRow("Name", p.name)}
        ${formatRow("Email", p.email)}
        ${formatRow("Location", [p.city, p.state, p.country].filter(Boolean).join(", "))}
        ${formatRow("Coverage interest", p.coverage_interest)}
        ${formatRow("Timeline", p.timeline)}
        ${formatRow("Occupation", p.occupation)}
        ${formatRow("Income range", p.income_range)}
        ${formatRow("Net worth range", p.net_worth_range)}
        ${formatRow("Family status", p.family_status)}
        ${formatRow("Existing coverage", p.existing_coverage)}
        ${formatRow("Notes", p.notes)}
      </table>
    `;
  } else if (type === "review") {
    const p = payload as ReviewLeadPayload;
    subject = `New private review lead: ${p.name}`;
    html = `
      <p>New private review request from stead.org:</p>
      <table style="border-collapse:collapse;">
        ${formatRow("Name", p.name)}
        ${formatRow("Email", p.email)}
        ${formatRow("Location", p.location)}
        ${formatRow("Context", p.context)}
      </table>
    `;
  } else {
    const p = payload as PartnerLeadPayload;
    subject = `New partner lead: ${p.name}`;
    html = `
      <p>New partner interest from stead.org:</p>
      <table style="border-collapse:collapse;">
        ${formatRow("Name", p.name)}
        ${formatRow("Email", p.email)}
        ${formatRow("Phone", p.phone)}
        ${formatRow("Role", p.role)}
        ${formatRow("Firm", p.firm)}
        ${formatRow("Jurisdiction", p.jurisdiction)}
        ${formatRow("Experience", p.experience_range)}
        ${formatRow("Licenses", p.licenses)}
        ${formatRow("Current workflow", p.current_workflow)}
        ${formatRow("Interest reason", p.interest_reason)}
      </table>
    `;
  }

  try {
    const res = await fetch(RESEND_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: getFrom(),
        to: [getTo()],
        subject,
        html: html.trim().replace(/\n\s+/g, "\n"),
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("Resend lead notification error:", res.status, body);
    }
  } catch (err) {
    console.error("Resend lead notification error:", err);
  }
}
