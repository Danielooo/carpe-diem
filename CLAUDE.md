# Pluk de dag – de site van Daan & Vic

Persoonlijke website rond "Carpe Diem – pluk de dag". Grappig, warm en eigenzinnig: alsof een vrolijk stel zijn leven laat zien, géén zakelijk portfolio. Alle teksten in het Nederlands, in de wij-vorm (Daan en Vic samen).

## Techniek

- Gewone statische site: HTML, één stylesheet, vanilla JavaScript. Geen framework, geen build-stap. Houd dat zo tenzij we er expliciet om vragen.
- `index.html` homepage · `karper.html` De Diem Karper (quote van de dag) · `404.html` foutpagina.
- `css/style.css` alle stijl, mobile-first. Breakpoints: 720px (tablet) en 1100px (desktop).
- `js/main.js` pluk-tip, mobiel menu, bucketlist, dagteller · `js/karper.js` quotes.
- `img/` voor foto's en de favicon.
- Lokaal bekijken: `python3 -m http.server` in deze map, dan http://localhost:8000.

## Concept

Speel met de letterlijke betekenis van "plukken": dagen als fruit aan een boom. Een hand die een zonnetje plukt, een fruitmand vol geplukte dagen, rijp fruit als beloning voor afgevinkte dromen. Humor zit in woordgrapjes, kleine illustraties en microcopy.

De **Diem Karper** (Carpe Diem, omgedraaid) is onze huisfilosoof: een karper die er dom uitziet (scheve ogen, open bek, konijnentanden, kwijl) en elke dag een lichtzinnige pluk-de-dag-wijsheid deelt.

## Stijl: jaren 90, fletse kleuren, speels neo-brutalisme

- Dikke inktkleurige randen (3px), harde schaduwen zonder blur (`6px 6px 0`), hoeken ca. 16px.
- Knoppen "drukken in" bij hover: schaduw kleiner, knop schuift mee.
- Sommige elementen licht gedraaid (-3° tot 3°), als opgeplakte stickers.
- Handgetekende doodles als inline SVG: pijltjes, sterretjes, krabbels, zonnetje met gezicht.
- 90s-details: lichtkrant onder de navigatie, Memphis-vormpjes (kronkels, driehoekjes, zigzags, confetti), lila kopschaduw, Windows-achtige venstertitels (`pluktip.exe`), bezoekersteller-cijfers, "Beste bekeken in Netscape Navigator".
- Veel witruimte, zodat het vrolijk blijft en niet druk wordt.

## Kleuren (CSS-variabelen in `:root`)

| Rol | Variabele | Hex |
|---|---|---|
| Achtergrond (vergeeld papier) | `--creme` | #F2EBDD |
| Kaarten | `--papier` | #FAF6EE |
| Hoofdkleur, knoppen | `--koraal` | #D8796A |
| Highlights, stickers, zon | `--mosterd` | #E9C77E |
| Tags, afgevinkt | `--mint` | #9CCBBE |
| Spaarzaam accent | `--roze` | #E6A9BD |
| 90s-accent (kopschaduw, venstertitels) | `--lila` | #B9AAD6 |
| Tekst, lijnen, schaduwen | `--inkt` | #2F2B3D |

Gebruik altijd de variabelen. Contrast: tekst op gekleurde vlakken is altijd `--inkt`, nooit wit (wit op deze fletse kleuren is onleesbaar).

## Typografie (maximaal deze drie)

- Koppen: **Bricolage Grotesque**, 800, groot en met karakter.
- Lopende tekst: **DM Sans**, 400/500, minimaal 16px.
- Handgeschreven accenten (korte notities, pijl-labels): **Caveat**.

## Toon & microcopy

Droog grappig, warm, nooit geforceerd. Voorbeelden: "Dag aan het plukken..." (laden), "Oeps, deze dag is al geplukt" (404), "Nog niet rijp" (open bucketlist-item), "Rijp & geplukt" (afgevinkt).

## Toegankelijkheid

Echte `<button>`/`<a>`, zichtbare focusstijl, `aria-label` op iconen zonder tekst, `aria-hidden` op decoratie, `prefers-reduced-motion` respecteren. Klikdoelen minimaal 44px.

## Nog in te vullen

- Echte foto's (nu `[foto: ...]`-vakjes) in `img/`.
- Echte geplukte dagen, feitjes en bucketlist-items (nu voorbeeldteksten).
- E-mailadres (`jullie@email.nl`) en de links naar Instagram en de playlist.
