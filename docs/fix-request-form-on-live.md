# Fix "Failed to submit" on live (form works on localhost)

Follow these steps in order. The form fails on live almost always because of **missing production env vars** or **missing table in production Supabase**.

---

## Step 1: Set environment variables in Vercel (Production)

1. Go to **https://vercel.com** and sign in.
2. Open your **stead-landing** project (or whatever the project name is).
3. Click **Settings** (top tab).
4. In the left sidebar, click **Environment Variables**.
5. Add these **two** variables for **Production** (and optionally Preview if you test there):

   | Name | Value | Environment |
   |------|--------|-------------|
   | `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | ✅ Production (and Preview if you want) |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon (public) key | ✅ Production (and Preview if you want) |

   **Where to get the values (same as localhost):**

   - Open **https://supabase.com/dashboard** and select the **same project** you use in `.env.local` for localhost.
   - Go to **Project Settings** (gear icon in the left sidebar).
   - Open the **API** section.
   - Copy **Project URL** → use as `NEXT_PUBLIC_SUPABASE_URL`.
   - Under "Project API keys", copy the **anon** **public** key (not the `service_role` key) → use as `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

6. Click **Save** for each variable.
7. **Redeploy** so the new env vars are used:
   - Go to the **Deployments** tab.
   - Open the **⋯** menu on the latest deployment.
   - Click **Redeploy** (no need to change any options).
   - Wait until the deployment finishes.

8. Try the form again on the live site. If it still fails, go to Step 2.

---

## Step 2: Create the table in your production Supabase project

If production uses the **same** Supabase project as localhost, the table already exists and Step 1 was the fix. If you use a **different** Supabase project for production (e.g. a separate “production” project), that project must have the `insurance_leads` table and RLS.

1. In **https://supabase.com/dashboard**, select the project that matches the **Production** URL you set in Vercel (the one in `NEXT_PUBLIC_SUPABASE_URL`).
2. In the left sidebar, click **SQL Editor**.
3. Click **New query**.
4. Copy and paste the **entire** block below into the editor, then click **Run**.

```sql
-- insurance_leads: consultation requests (admin-only read; insert via anon)
create table if not exists public.insurance_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  city text,
  state text,
  country text,
  coverage_interest text,
  timeline text,
  occupation text,
  income_range text,
  net_worth_range text,
  family_status text,
  existing_coverage text,
  notes text,
  consent boolean not null default false,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed'))
);

alter table public.insurance_leads enable row level security;

drop policy if exists "Allow anonymous insert for insurance_leads" on public.insurance_leads;
create policy "Allow anonymous insert for insurance_leads"
  on public.insurance_leads for insert
  to anon
  with check (true);

drop policy if exists "No read for anon on insurance_leads" on public.insurance_leads;
create policy "No read for anon on insurance_leads"
  on public.insurance_leads for select
  to anon
  using (false);
```

5. You should see “Success. No rows returned” (or similar). That means the table and policies are in place.
6. Try the form again on the live site.

---

## Step 3: Confirm Vercel is using the right project

- In Vercel, the **Production** env vars must point to the **same** Supabase project where you ran the SQL in Step 2.
- If you use one Supabase project for localhost and another for production:
  - In Vercel **Production** env vars, use the **production** project’s URL and anon key.
  - Run the SQL in Step 2 in that **production** Supabase project.

---

## Step 4: If it still fails – check Vercel logs

1. In Vercel, open your project → **Deployments**.
2. Open the **latest** deployment.
3. Click **Functions** (or **Logs**) and find the log for the request when you submit the form.
4. Look for a line containing **`[request-insurance]`**:
   - **`Missing Supabase env`** → Step 1: add both env vars, save, and redeploy.
   - **`Supabase insert error`** with `code` / `message` → use that message (e.g. “relation does not exist” = run Step 2 in the correct project; “permission denied” = RLS policy issue, re-run the policy part of the SQL in Step 2).

---

## Checklist

- [ ] In Vercel → Settings → Environment Variables: **Production** has `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (values from the Supabase project you use for production).
- [ ] After adding/editing env vars, you clicked **Redeploy** on the latest deployment and waited for it to finish.
- [ ] The Supabase project whose URL is in `NEXT_PUBLIC_SUPABASE_URL` has the `insurance_leads` table and the two RLS policies (Step 2 SQL run in that project).
- [ ] If it still fails, you checked Vercel function/runtime logs for the exact `[request-insurance]` error message.
