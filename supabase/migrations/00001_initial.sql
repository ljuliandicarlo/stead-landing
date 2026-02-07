-- insurance_leads: consultation requests (admin-only read; insert via anon/service)
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

-- RLS: no direct read for anon; service role / admin only. Allow insert for anon.
alter table public.insurance_leads enable row level security;

create policy "Allow anonymous insert for insurance_leads"
  on public.insurance_leads for insert
  to anon
  with check (true);

create policy "No read for anon on insurance_leads"
  on public.insurance_leads for select
  to anon
  using (false);

-- review_leads: concierge / private review requests
create table if not exists public.review_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  location text,
  context text,
  consent boolean not null default false,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed'))
);

alter table public.review_leads enable row level security;

create policy "Allow anonymous insert for review_leads"
  on public.review_leads for insert
  to anon
  with check (true);

create policy "No read for anon on review_leads"
  on public.review_leads for select
  to anon
  using (false);

-- vault_documents: user documents (RLS by auth.uid())
create table if not exists public.vault_documents (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  category text not null check (category in (
    'identity', 'legal', 'insurance', 'financial', 'property', 'medical'
  )),
  storage_path text not null,
  file_size bigint,
  expires_at date,
  metadata jsonb default '{}'
);

create index vault_documents_user_id on public.vault_documents(user_id);
create index vault_documents_expires_at on public.vault_documents(expires_at) where expires_at is not null;

alter table public.vault_documents enable row level security;

create policy "Users can manage own vault_documents"
  on public.vault_documents
  for all
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Storage bucket for vault (user_id/*)
insert into storage.buckets (id, name, public)
values ('vault', 'vault', false)
on conflict (id) do nothing;

create policy "Users can upload to own vault path"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'vault' and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Users can read own vault objects"
  on storage.objects for select
  to authenticated
  using (
    bucket_id = 'vault' and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Users can delete own vault objects"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'vault' and (storage.foldername(name))[1] = auth.uid()::text
  );
