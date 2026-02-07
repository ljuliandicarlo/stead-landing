/**
 * Canonical disclaimer text. Use verbatim everywhere—no variations.
 */

/** Short disclaimer for footer and above-the-fold on forms. */
export const DISCLAIMER_SHORT =
  "Stead Technologies, Inc. does not sell, place, negotiate, or bind insurance. We collect requests for consultation and route them to properly licensed professionals. Insurance products are offered by licensed third parties.";

/** Line added next to insurance lead form. */
export const DISCLAIMER_FORM_INSURANCE =
  "Submitting this form does not create an insurance contract or guarantee of coverage.";

/** Line added next to concierge/private review form. */
export const DISCLAIMER_FORM_CONCIERGE =
  "Submitting this form does not create any contract or guarantee of service.";

/** Full disclaimer for footer collapsible "Legal & regulatory disclosure". */
export const DISCLAIMER_LEGAL_FULL = [
  "This website and Stead Life Vault are provided by Stead Technologies, Inc. Stead is not an insurance company, agency, or brokerage. We do not underwrite, sell, or issue any insurance product. We facilitate requests for life insurance consultation and coordinate with independently licensed professionals. All insurance-related services are performed by third parties. Your use of this site and submission of information does not create an insurance contract or guarantee of coverage.",
  "Life Vault is a document storage and organization product. Security and access controls are described in our Privacy Policy and Terms. For regulatory inquiries, contact hello@stead.org.",
] as const;

/**
 * Insurance & Licensing Disclosure (verbatim). Use everywhere this disclosure appears—footer collapsible and insurance-related pages. Do not modify wording.
 */
export const INSURANCE_LICENSING_DISCLOSURE_HEADING =
  "Insurance & Licensing Disclosure";

export const INSURANCE_LICENSING_DISCLOSURE_PARAGRAPHS = [
  "Stead Technologies, Inc. is not a licensed insurance agency or brokerage and does not sell, solicit, negotiate, place, or bind insurance. Stead facilitates requests for insurance consultations and connects individuals with properly licensed professionals.",
  "Julian DiCarlo is a licensed life insurance producer in the State of New York (National Producer Number (NPN): 21781673; New York License No.: LB-1948032). Insurance-related services are provided solely in his individual capacity and only in jurisdictions where he is properly licensed.",
  "Insurance products are offered by licensed third-party professionals and are subject to underwriting, carrier approval, and applicable state laws. Stead does not provide legal, tax, or accounting advice.",
] as const;
