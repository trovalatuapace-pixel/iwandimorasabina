#!/usr/bin/env bash
# Deploy da Vercel API: completa i file invariati dal repo GitHub
# (commit 75a390c) senza sovrascrivere quelli nuovi, poi installa.
set -euo pipefail
curl -sSL https://codeload.github.com/trovalatuapace-pixel/iwandimorasabina/tar.gz/75a390cee253c551137d96b71437ff5af4d59517 \
  | tar xz --strip-components=1 --skip-old-files
mkdir -p "app/(it)/benvenuto"
if [ -f app/benvenuto/page.tsx ]; then mv -f app/benvenuto/page.tsx "app/(it)/benvenuto/page.tsx"; fi
rm -rf app/benvenuto app/layout.tsx app/page.tsx \
  components/Header.tsx components/Hero.tsx components/Rooms.tsx components/Wellness.tsx \
  components/Booking.tsx components/Location.tsx components/DetailModal.tsx components/Footer.tsx
npm install --no-audit --no-fund
