export type InsuranceLeadStatus = "new" | "contacted" | "qualified" | "closed";

export interface InsuranceLeadInsert {
  name: string;
  email: string;
  city?: string;
  state?: string;
  country?: string;
  coverage_interest?: string;
  timeline?: string;
  occupation?: string;
  income_range?: string;
  net_worth_range?: string;
  family_status?: string;
  existing_coverage?: string;
  notes?: string;
  consent: boolean;
}

export interface ReviewLeadInsert {
  name: string;
  email: string;
  location?: string;
  context?: string;
  consent: boolean;
}

export type PartnerLeadRole =
  | "Estate attorney"
  | "Accountant / CPA"
  | "Tax advisor"
  | "Insurance professional"
  | "Trust / fiduciary"
  | "Notary"
  | "Other";

export interface PartnerLeadInsert {
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
  consent: boolean;
}

export type VaultCategory =
  | "identity"
  | "legal"
  | "insurance"
  | "financial"
  | "property"
  | "medical";

export interface VaultDocument {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  name: string;
  category: VaultCategory;
  storage_path: string;
  file_size: number | null;
  expires_at: string | null;
  metadata: Record<string, unknown>;
}
