create table if not exists public.leaderboard (
  id uuid primary key default gen_random_uuid(),
  passport_no text unique not null,
  name text not null default 'Guest Learner',
  points integer not null default 0,
  level integer not null default 1,
  yen integer not null default 0,
  rank text not null default 'Learner',
  kanji integer not null default 0,
  lessons integer not null default 0,
  streak integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.leaderboard enable row level security;

drop policy if exists "Public leaderboard read" on public.leaderboard;
create policy "Public leaderboard read"
on public.leaderboard
for select
to anon
using (true);

drop policy if exists "Public leaderboard submit" on public.leaderboard;
create policy "Public leaderboard submit"
on public.leaderboard
for insert
to anon
with check (
  length(name) between 1 and 32
  and yen between 0 and 999999
  and points between 0 and 9999999
  and level between 1 and 999
);

drop policy if exists "Public leaderboard update own passport" on public.leaderboard;
create policy "Public leaderboard update own passport"
on public.leaderboard
for update
to anon
using (true)
with check (
  length(name) between 1 and 32
  and yen between 0 and 999999
  and points between 0 and 9999999
  and level between 1 and 999
);

create index if not exists leaderboard_score_idx
on public.leaderboard (yen desc, points desc, updated_at desc);
