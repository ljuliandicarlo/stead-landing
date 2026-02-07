# Pre-Launch Checklist

Confirm all are true before launch.

- [ ] **Insurance lead form works end-to-end** — Form submits; required fields (name, email, what you want help with, consent) enforced; server validates and stores in Supabase.
- [ ] **Leads stored and visible in Supabase** — Table `insurance_leads`; `created_at` and `status: 'new'` set; RLS allows anon insert, no anon read (admin via dashboard or service role).
- [ ] **Vault signup + upload works** — Magic link sign-in; upload to Supabase Storage under `user_id` path; document list and detail drawer (download, delete) work.
- [ ] **Compliance language is consistent everywhere** — Single disclaimer text used verbatim (see `src/lib/compliance.ts`). No claims to sell, place, negotiate, or bind insurance.
- [ ] **No broken links or placeholders** — All nav and footer links work; legal pages (Privacy, Terms) have content or clear placeholder note.
- [ ] **Visual polish complete** — One H1 per page; consistent spacing; primary CTA = Get Insurance; secondary = Create your Life Vault, Request private review.
- [ ] **Mobile works** — Hero, lead form, and vault flows usable on small screens; no overflow or broken layouts; touch targets adequate.
- [ ] **Footer and legal complete** — Contact email (hello@stead.org), Privacy, Terms, Legal & regulatory disclosure (collapsible), company name, copyright.

**Notes**

- Admin email on new lead: not implemented; add via Supabase trigger or Edge Function if needed.
- User confirmation email after submit: not implemented; add if desired.
- Replace Privacy and Terms placeholder copy before launch with real policies.
