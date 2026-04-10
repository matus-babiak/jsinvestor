# JS Investor — Next.js

Marketing stránka a dotazník pre JS Investor (Next.js App Router).

## Setup

1. `npm install`
2. Skopíruj `.env.example` do `.env.local`
3. Doplň **Ecomail** kľúče (a voliteľne Upstash + webhook) podľa tabuľky nižšie
4. `npm run dev` → [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ECOMAIL_API_KEY` | API kľúč Ecomail (odosielanie leadu z `/api/ecomail`) | Yes (pre odoslanie do Ecomail) |
| `ECOMAIL_LIST_ID` | ID zoznamu v Ecomail | Yes (spolu s API kľúčom) |
| `WEBHOOK_URL` | URL serverového webhooku pre kompletný payload dotazníka (`/api/webhook`). **Len server — nikdy `NEXT_PUBLIC_`.** | Yes (pre odoslanie na webhook) |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL (rate limit API) | No |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token | No |

Bez Upstash súborov je rate limiting vypnutý (vhodné pre lokálny vývoj).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Produkčný build |
| `npm run start` | Spustenie po builde |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run test` | Vitest |

## Deploy

Odporúčaný hosting: [Vercel](https://vercel.com) (premenné nastav v Project Settings → Environment Variables).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
