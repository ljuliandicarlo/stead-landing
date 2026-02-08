# Pre-Launch Checklist

Confirm all are true before launch.

## Core flows
- [ ] **Insurance lead form works end-to-end** — Form submits; required fields (name, email, what you want help with, consent) enforced; server validates and stores in Supabase.
- [ ] **Leads stored and visible in Supabase** — Table `insurance_leads`; `created_at` and `status: 'new'` set; RLS allows anon insert, no anon read (admin via dashboard or service role).
- [ ] **Vault signup + upload works** — Magic link sign-in; upload to Supabase Storage under `user_id` path; document list and detail drawer (download, delete) work.
- [ ] **Compliance language is consistent everywhere** — Single disclaimer text used verbatim (see `src/lib/compliance.ts`). No claims to sell, place, negotiate, or bind insurance.
- [ ] **No broken links or placeholders** — All nav and footer links work; legal pages (Privacy, Terms) have content or clear placeholder note.
- [ ] **Visual polish complete** — One H1 per page; consistent spacing; primary CTA = Get Insurance; secondary = Create your Life Vault, Request private review.
- [ ] **Footer and legal complete** — Contact email (hello@stead.org), Privacy, Terms, Legal & regulatory disclosure (collapsible), company name, copyright.

## SEO
- [x] **Metadata** — `buildMetadata()` used on public pages; title & description truncated (≤60 / ≤160 chars); canonical URLs set.
- [x] **Sitemap** — `src/app/sitemap.ts` includes public routes + life-insurance subpages (term, permanent, income-protection, key-person, buy-sell).
- [x] **Robots** — `src/app/robots.ts` allows `/`, disallows `/app/`, `/signin`, `/api/`, `/admin/`; sitemap URL set.
- [x] **Structured data** — Organization, WebSite, Service, FAQ, BreadcrumbList where relevant; JSON-LD from trusted props only.
- [x] **One H1 per page** — Verified across public and app pages.

## Mobile
- [x] **Viewport** — Root layout exports `viewport`: `device-width`, `initialScale: 1`, `themeColor`.
- [ ] **Responsive & touch** — Hero, lead form, and vault flows usable on small screens; no horizontal overflow; primary CTAs use adequate touch size (e.g. `size="lg"` where possible).

## Security
- [x] **Env** — `.env` / `.env.local` in `.gitignore`; no server secrets in `NEXT_PUBLIC_*`; `RESEND_API_KEY`, `OPENAI_API_KEY` server-only.
- [x] **Headers** — `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `X-XSS-Protection: 1; mode=block`, `Referrer-Policy`, `Permissions-Policy`.
- [x] **Forms** — Server actions validate required fields and consent; no `dangerouslySetInnerHTML` with user input (structured data uses JSON.stringify of trusted schema only).
- [x] **Auth** — Middleware protects `/app/*`; unauthenticated users redirected to `/signin`.

**Notes**

- Admin email on new lead: not implemented; add via Supabase trigger or Edge Function if needed.
- User confirmation email after submit: not implemented; add if desired.
- Replace Privacy and Terms placeholder copy before launch with real policies.
