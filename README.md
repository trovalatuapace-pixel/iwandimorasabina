# Orbis in Sabina

Sito web bilingue (IT/EN) per "Orbis in Sabina", casa vacanze di fascia alta a
Montopoli in Sabina (Rieti). Progetto Next.js (App Router) + TypeScript +
Tailwind, pensato per il deploy su Vercel.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Switch lingua IT/EN client-side (nessun routing per lingua, nessun redirect
  automatico)
- Route API `/api/availability` che legge i feed iCal di Booking.com e
  Airbnb lato server (evita problemi CORS) e restituisce le date occupate

## Sviluppo

```bash
npm install
npm run dev
```

Copia `.env.example` in `.env.local` e compila le variabili disponibili.

## Struttura

- `app/page.tsx` — homepage single page (Hero, Camere, Wellness,
  Disponibilità, Location)
- `components/` — un componente per sezione, più `DetailModal` (riusato per
  il dettaglio camere e wellness)
- `lib/data/rooms.ts`, `lib/data/wellness.ts` — contenuti IT/EN delle 5
  camere a tema continente e delle 4 aree wellness
- `lib/i18n/` — dizionario testi statici e contesto lingua
- `lib/ical.ts` + `app/api/availability/route.ts` — parsing dei feed iCal e
  calendario disponibilità

## Variabili d'ambiente (Vercel)

| Variabile | Obbligatoria | Note |
|---|---|---|
| `ICAL_BOOKING_URL` | per il calendario | Link iCal (.ics) dell'inserzione Booking.com |
| `ICAL_AIRBNB_URL` | per il calendario | Link iCal (.ics) dell'inserzione Airbnb |
| `NEXT_PUBLIC_BOOKING_URL` | consigliata | Link alla pagina della struttura su Booking.com |
| `NEXT_PUBLIC_AIRBNB_URL` | consigliata | Link alla pagina della struttura su Airbnb |
| `NEXT_PUBLIC_CONTACT_EMAIL` | opzionale | Mostrata in footer |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | opzionale | Formato internazionale, es. `39333xxxxxxx` |
| `NEXT_PUBLIC_INSTAGRAM_URL` / `NEXT_PUBLIC_FACEBOOK_URL` | opzionale | Link social in footer |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC` | opzionale | Solo se serve una mappa custom con API key a pagamento; di default si usa l'embed gratuito di Google Maps |

Finché `ICAL_BOOKING_URL` e `ICAL_AIRBNB_URL` non sono impostati, la sezione
disponibilità mostra un messaggio di calendario non ancora attivo invece di
un errore.

## Hero 3D (placeholder attuale)

L'hero usa al momento un gradiente CSS come sfondo, in attesa delle foto
reali della struttura. Quando Miriam riceverà il video di riferimento, lo
sfondo potrà essere sostituito da una scena Three.js seguendo il metodo già
usato per PrintLab (canvas fisso in `position:fixed; z-index:0` dietro a
tutte le sezioni, camera legata allo scroll) — vedi `components/Hero.tsx`
per il punto di innesto.

## Da confermare con Miriam/Iwan

- Nomi definitivi delle 5 camere (al momento: i 5 continenti classici, in
  `lib/data/rooms.ts`)
- Foto/video delle camere, sauna, palestra, terrazzo, vasca idromassaggio
- Video di riferimento per la scena 3D dell'hero
- Link iCal delle inserzioni Booking.com e Airbnb
- Testi definitivi in italiano (poi tradotti in inglese) — bozze già in
  `lib/i18n/translations.ts`, `lib/data/rooms.ts`, `lib/data/wellness.ts`

## Deploy

Progetto Vercel esistente `dimora-sabina`, da rinominare in "Orbis in
Sabina". Collegare questo repository e impostare le variabili d'ambiente
sopra elencate nel progetto Vercel.
