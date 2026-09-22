# Pluk de dag

De homepage van Daan & Vic. Professionele dagplukkers, amateur in al het andere.

Next.js (App Router) met TypeScript.

## Bekijken

```
npm install
npm run dev
```

en ga naar http://localhost:3000.

## Scripts

| Commando | Doet |
|---|---|
| `npm run dev` | Dev-server met hot reload |
| `npm run build` | Productiebuild |
| `npm start` | Productiebuild draaien |
| `npm run lint` | ESLint |

## Indeling

- `app/` – pagina's: `page.tsx` (home), `karper/page.tsx`, `not-found.tsx`. `globals.css` bevat alle stijl.
- `components/` – losse stukken van de site. Alles wat op een klik of de datum reageert is een client component.
- `lib/inhoud.ts` – de teksten: pluk-tips, karper-quotes, geplukte dagen, bucketlist.
- `lib/datum.ts` – datumhelpers en `useVandaag()`.
- `public/img/` – foto's en de favicon.

## Verder bouwen met Claude Code

Open een terminal in deze map en typ `claude`. In `CLAUDE.md` staan de huisstijl en afspraken, die leest Claude Code automatisch.

## Online zetten

De site is volledig statisch te prerenderen, dus Vercel, Netlify of Cloudflare Pages kan allemaal.
