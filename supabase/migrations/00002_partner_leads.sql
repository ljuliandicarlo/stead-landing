-- partner_leads: professional onboarding / partner interest (admin-only read; insert via anon)
create table if not exists public.partner_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  role text not null,
  firm text,
  jurisdiction text,
  experience_range text,
  licenses text,
  current_workflow text,
  interest_reason text,
  consent boolean not null default false,
  status text not null default 'new' check (status in ('new', 'reviewed', 'approved', 'declined'))
);

alter table public.partner_leads enable row level security;

create policy "Allow anonymous insert for partner_leads"
  on public.partner_leads for insert
  to anon
  with check (true);

create policy "No read for anon on partner_leads"
  on public.partner_leads for select
  to anon
  using (false);
