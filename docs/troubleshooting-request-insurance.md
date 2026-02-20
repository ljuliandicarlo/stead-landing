# Request insurance form: "Failed to submit" on live

If the request-insurance form shows **"Failed to submit. Please try again."** on the live site, the server action is failing at the Supabase insert step. Check the following.

## 1. Production environment variables

In your hosting dashboard (e.g. **Vercel** → Project → Settings → Environment Variables), ensure **Production** has:

- **`NEXT_PUBLIC_SUPABASE_URL`** – your Supabase project URL (e.g. `https://xxxx.supabase.co`)
- **`NEXT_PUBLIC_SUPABASE_ANON_KEY`** – the **anon public** key from Supabase (Project Settings → API)

If either is missing or wrong, the insert will fail. After changing env vars, **redeploy** the app.

## 2. Production database: table and RLS

The `insurance_leads` table and RLS policies must exist in the **same** Supabase project you use in production.

- If production uses the **same** Supabase project as dev: run migrations there once (e.g. `supabase db push` or run the SQL from `supabase/migrations/00001_initial.sql` in the SQL editor).
- If production uses a **different** Supabase project: run the same migrations in that project so `insurance_leads` exists and has:
  - **RLS** enabled
  - Policy **"Allow anonymous insert for insurance_leads"** for `anon` with `with check (true)`
  - Policy **"No read for anon on insurance_leads"** for `anon` with `using (false)`

## 3. See the real error in logs

After a failed submit, check your host’s **server/function logs** (e.g. Vercel → Project → Logs, or Runtime Logs for the request-insurance request). You should see a line like:

```text
[request-insurance] Supabase insert error: { code: '...', message: '...', details: ... }
```

- **Missing env**: You may see a log about missing `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- **Table missing**: Often `code: '42P01'` or message about relation "insurance_leads" not existing → run migrations in that project.
- **RLS / permission**: Message about permission denied → check RLS policies for `anon` insert.
- **Column mismatch**: Message about column not existing → align payload in `src/app/request-insurance/actions.ts` with the table in `supabase/migrations/00001_initial.sql`.

## 4. Quick checklist

- [ ] `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` set in **Production** and redeploy done
- [ ] Migrations applied to the **production** Supabase project (table `insurance_leads` + RLS)
- [ ] Logs checked for the exact `[request-insurance] Supabase insert error` line
