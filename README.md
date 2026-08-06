# Pixelora

Web design & development agency site for [pixelora.org](https://www.pixelora.org).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- Supabase (feedback form)

## Setup

```bash
npm install
cp .env.example .env.local
# add NEXT_PUBLIC_CALENDLY_URL + Supabase credentials
npm run dev
```

WhatsApp CTAs use `+91 9591020880` by default. Without a Calendly URL, the primary CTA falls back to WhatsApp.

Open [http://localhost:3000](http://localhost:3000).

## Supabase feedback table

```sql
create table if not exists feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  comment text not null,
  created_at timestamptz default now()
);

alter table feedback enable row level security;
```

Use `SUPABASE_SERVICE_ROLE_KEY` on the server for inserts.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm start` — start production server
- `npm run lint` — ESLint
