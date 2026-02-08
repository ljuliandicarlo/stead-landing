# Stead

Life insurance and continuity, in one place. A tech-enabled life insurance coordination business with supporting software.

## What this is

- **Marketing site**: Landing page with hero, Life Insurance, Life Vault, Concierge, and About sections.
- **Lead intake**: `/request-insurance` (primary) and `/request-review` (concierge) forms; compliant, no underwriting data collected.
- **Life Vault**: Authenticated app (magic link) at `/app` with documents, categories, uploads, expiration alerts, and an assistant scaffold.

## Tech stack

- **Next.js** (App Router), **TypeScript**, **Tailwind CSS**
- **shadcn/ui**-style components (Radix, CVA, Tailwind)
- **Framer Motion** for subtle animations
- **Supabase**: Auth (magic link), DB (Postgres), Storage (vault bucket)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL` — Base URL (e.g. `http://localhost:3000` or `https://stead.com`) for magic link redirects.
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key.
- `OPENAI_API_KEY` — Optional. When set, the Life Vault assistant is enabled; otherwise the UI shows “Assistant coming soon.”

### 3. Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In **Authentication → URL configuration**, set:
   - **Site URL**: your `NEXT_PUBLIC_SITE_URL`
   - **Redirect URLs**: `{NEXT_PUBLIC_SITE_URL}/auth/callback`
3. Run the migration to create tables and RLS:

   - In Supabase: **SQL Editor** → New query → paste contents of `supabase/migrations/00001_initial.sql` → Run.

   Or with Supabase CLI:

   ```bash
   npx supabase link --project-ref YOUR_REF
   npx supabase db push
   ```

4. Ensure the `vault` storage bucket exists (the migration inserts it). If you create it manually: private bucket named `vault`, with RLS policies as in the migration.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Description |
|-------|-------------|
| `/` | Marketing landing |
| `/request-insurance` | Insurance consultation lead form (primary CTA) |
| `/request-review` | Concierge / private review lead form |
| `/signin` | Magic link sign-in for Life Vault |
| `/app` | Redirects to `/app/overview` |
| `/app/overview` | Life Vault overview and readiness |
| `/app/documents` | Upload and list documents; detail drawer with download/delete |
| `/app/assistant` | Document Q&A (uses OpenAI if key set; else “coming soon”) |
| `/app/alerts` | Expiration alerts (90-day window) |
| `/app/settings` | Account and sign out |
| `/privacy` | Privacy policy (placeholder) |
| `/terms` | Terms of service (placeholder) |

## Compliance

- Stead Technologies, Inc. is **not** a licensed insurance agency or brokerage.
- The site does **not** say Stead sells, places, negotiates, or binds insurance.
- Lead forms collect only allowed data (location, occupation, income/net worth ranges, family status, intent, timeline); **no** DOB, SSN, medical history, smoker status, or underwriting data.
- Consent checkbox and disclaimers are required on forms and in the footer.

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
