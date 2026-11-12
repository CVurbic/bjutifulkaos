# Odluke po fazama

Zaključane odluke. Kad sve faze budu gotove, iz ovoga i iz gotove stranice nastaje `DESIGN.md`.

## Faza 1: boje (10.11.2026.) ✓

Izvor: pikseli `resursi/logo.png` (bijela 79,7%, tinta 16,3%, siva ~1,2%, svaka boja šape ~0,14%).

| Token | Hex | Uloga |
|---|---|---|
| `--base` | `#f1efec` | podloga "Kamen", ~80% stranice; nikad čista bijela |
| `--ink` | `#231f20` | tinta iz loga: tekst, glavni gumb, crte (~16%) |
| `--muted` | `#5e5a5b` | sporedni tekst (6.3:1 na podlozi) |
| `--grey` | `#9a999b` | siva iz šape: samo ukras i rubovi, nikad tekst (2.6:1) |
| `--teal` | `#65c4b8` | boja šape |
| `--yellow` | `#f7c57a` | boja šape |
| `--orange` | `#ed8663` | boja šape |
| `--red` | `#d55d4e` | boja šape |

**Količina boja šape: ~2–3% svaka** (cijela stranica).
- Pune boje samo u mrljama, točkicama i tankim oznakama (npr. crta ispod aktivnog jezika).
- Blagi tonovi (`color-mix` boje s podlogom, ≤45%) za male oznake/tagove.
- Boje šape nikad nisu tekst ni velika ploha.
- Mrlje dolaze u grupama kao šapa (više boja zajedno), ne jedna boja sama.
- Logo ostaje kakav je; PNG ima bijelu pozadinu → `mix-blend-mode: multiply` na podlozi.

Kontrast provjeren: tinta 15.1, sporedni tekst 6.3 na `#f1efec` (WCAG AA ✓).

## Faza 2: tipografija (10.11.2026.) ✓

Izvor: font-match nad podnaslovom loga (geometrijski sans, lagan, širok); "KAOS" = isti tip, vrlo debeo; "Bjutiful" = grubi kist.

| Uloga | Font | Težina | Veličina / visina reda |
|---|---|---|---|
| Naslov (h1) | Red Hat Display | 900 | 2.35rem (37.6px), lh 1.02, ls -0.01em, `text-wrap: balance` |
| Podnaslov (h2) | Red Hat Display | 900 | 1.45rem (23.2px), lh 1.1 |
| Tekst | Red Hat Text | 400 | 1rem (16px), lh 1.55, `text-wrap: pretty`, max 70ch |
| Gumb | Red Hat Text | 700 | 1.05rem, `tabular-nums` za broj telefona |
| Sitno (meta) | Red Hat Text | 400 | 0.8rem, boja `--muted` |
| Kist (naglasak) | Caveat Brush | 400 | 1.22em roditelja, lh 0.8 |

Pravila za kist:
- Samo unutar naslova, 1–2 riječi, najviše jednom po ekranu.
- Nikad u tekstu, gumbima, cijenama ni navigaciji.

Isporuka (tipografija): u pravoj stranici fontovi se spremaju lokalno (`@font-face`, samo korištene težine, latin + latin-ext za č ć đ š ž). Mjerne skale 37.6 / 23.2 / 16 / 12.8 → koraci ≥1.25×.

## Faza 3: spacing i grid (10.11.2026.) ✓

Ritam **C · Ritam**: informacije gusto, fotke s puno zraka.

Skala (4px baza): `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (+160 samo za foto-sekcije na desktopu).

| Uloga | Mobitel | Desktop (≥900px) |
|---|---|---|
| `--gutter` (rub stranice) | 16 | 32 |
| `--inner` (unutar grupe: naslov→tekst, redovi) | 12 | 12 |
| `--group` (između grupa u sekciji) | 24 | 24 |
| `--section` (informacijske sekcije) | 48 | 64 |
| `--section-photo` (fotke, galerija) | 96 | 160 |
| razmak u galeriji | 4 | 4 |

- Širina sadržaja max **1040px**; stupac teksta max **52ch**.
- Galerija ide **od ruba do ruba** ekrana; naslov galerije ostaje u stupcu.
- Više zraka iznad naslova nego ispod; ponavljanje istog razmaka posvuda se izbjegava.
- Prijelom na desktop raspored: 900px.

## Faza 4: oblici (10.11.2026.) ✓

Oblici **A · Meko** + mrlje **2 · Mrlja iz loga**.

| Token | Vrijednost | Gdje |
|---|---|---|
| `--r-btn` | 12px | gumbi |
| `--r-photo` | 8px | fotke (galerija od ruba do ruba bez zaobljenja) |
| `--r-tag` | 999px | oznake (tablete) |
| `--line` | `1px solid #0000001f` | razdjelnici, rub zaglavlja/podnožja, redovi cijena |
| sjene | nema | |

- Sekundarni gumb: obrub 1px u tinti, isto zaobljenje kao glavni.
- Focus: `outline: 3px solid var(--teal)`, offset 3px.
- Aktivni link: tirkizna crta 3px ispod (`box-shadow: inset 0 -3px`).

**Mrlja:** crna mrlja tinte (nepravilni rub + 4–6 kapljica) s četiri jastučića šape u bojama (tirkizna, žuta, narančasta, crvena) i sivim dlanom, kao u logu.
- Generira se kao SVG iz seeda: svaka mrlja malo drugačija, ali stabilna (ne mijenja se pri učitavanju).
- Ukras uz naslove sekcija, `aria-hidden`, nikad preko teksta ili fotke.
- Ovo je glavni nositelj boja šape (vidi fazu 1: ~2–3% svaka).

## Faza 5: elementi (10.11.2026.) ✓

Referenca: `faze/5-elementi.html`.

- **Gumbi:** glavni = tinta, ikona telefona + "Nazovi 095 800 8133" (`tel:+385958008133`), min. visina 52px; sporedni = obrub 1px u tinti ("Pošalji poruku", kanal potvrditi). Stanja: hover (`#3a3435` / blagi ton tinte), fokus (tirkizni okvir), pritisnuto (pomak 1px, `scale(.985)`).
- **Poziv na mobitelu: C · okrugli gumb u kutu** (56px, tinta, ikona telefona, `aria-label="Nazovi"`, uvijek vidljiv). Dno stranice dobiva dovoljno razmaka da gumb ništa ne prekriva. Poruka se nudi u kontakt sekciji, ne u gumbu.
- **Jezik: tableta HR | EN** s crnom podlogom koja klizne ispod odabranog jezika (0,32 s, ease-out-quart, bez animacije uz `prefers-reduced-motion`).
- **Cjenik: "Odaberi svog psa"** — dva izbora (veličina: mali/srednji/veliki; dlaka: kratka/duga/kovrčava) → okvirna cijena + "Nazovi za termin". Uvijek piše da je cijena okvirna. Kategorije i iznosi dolaze od vlasnice; upisuju se u jednu tablicu (`PRICES`).
- **Ocjena:** "5,0 · 7 recenzija na Googleu", link na Google Maps. Citati samo doslovno prepisani.
- **Kontakt:** adresa, PON–PET 08–20, vikend po dogovoru + "Otvori u Google Mapama".
- **Prije/poslije: A · klizač** (povuci, tipkovnica radi preko range inputa). Treba parove fotki od vlasnice.
- **Naslov sekcije:** mrlja iz loga desno gore, kist na 1–2 riječi.
- Ikone: crtane, stroke 2px (stil Lucide), nikad emoji.

## Faza 6: pokret (10.11.2026.) ✓

Razina **B · Razigrano**. Referenca: `faze/6-pokret.html`.

- **Glavni trenutak — mrlja pljusne:** kad mrlja uđe u ekran (40% vidljivo), tinta se raširi (`scale .15→1.06→1`, 560ms), kapljice se razlete iz središta (520ms, +25ms po kapljici), jastučići šape se utisnu redom (260ms, +70ms, start 330ms). Ukupno ~0,75s, **samo jednom** po mrlji.
- **Galerija:** fotke se otkriju odozgo prema dolje (`clip-path inset`), 620ms, razmak 70ms, ukupni zaostatak max 350ms; jednom.
- **Okrugli gumb za poziv:** sakriven dok je gumb iz uvoda na ekranu, zatim uleti (`scale .6→1` + fade, 300ms).
- **Odziv:** gumbi (hover boja 180ms, pritisak 1px/`scale .985` 120ms), tablete (boja 200ms), jezik (klizna podloga 320ms), fotke na hover `scale(1.03)` 500ms.
- **Easing:** `cubic-bezier(.16, 1, .3, 1)` svugdje; bez odskakivanja i elastičnosti.
- **Nije uključeno:** rez škarama na fotki, riječi koje upadaju, tresenje mrlje, naginjanje fotki (opcija C).
- **Smanjeni pokret** (`prefers-reduced-motion`): bez pomaka; mrlje i galerija samo kratko pretapanje (200–250ms), odziv boja ostaje.
- Sadržaj je uvijek vidljiv bez JS-a; animacije samo dodaju ulazak (WAAPI, `fill: backwards`).

## Faza 7: slike (10.11.2026.) ✓

Obrada **B · Ujednačeno**. Referenca: `faze/7-slike.html`.

- **Obrada:** `saturate(.9) contrast(1.06) brightness(1.03) sepia(.07)` — u pravoj stranici se "upeče" u datoteke, ne ostaje kao CSS filter.
- **Rez:** uvod 4:5, galerija 1:1. Fokus `object-position: 50% 22%` (glave su u gornjem dijelu uspravnih fotki); iznimka #11 (`…3988725809111129309`) → `50% 0%`.
- **Isporuka:** WebP, tri širine 480 / 960 / 1440 (`srcset` + `sizes`), `loading="lazy"` osim fotke u uvodu, uvijek `width`/`height` da nema skakanja. Danas 12 fotki = 1,6 MB, sve 1440px.
- **Alt tekst:** opisuje psa (pasmina kad je poznata), npr. "Šnaucer nakon šišanja".
- **Izvor:** Instagram @bjutiful_kaos — dozvolu za korištenje potvrditi s vlasnicom. Fotke "prije" za klizač treba dobiti od nje.

## Faza 8: sklapanje (10.11.2026.)

- Desktop zaglavlje: linkovi Usluge · Cijene · Galerija · Kontakt **ostaju** (odobrio korisnik nakon završnog pregleda). Na mobitelu ih nema.
- Okrugli gumb za poziv samo ispod 900px.
- Desktop uvod: široka fotka preko cijele širine (`img/hero-sirok-*.webp`, 66vh, `object-position: 50% 35%`), na fotki vidljiva oznaka "okolina proširena AI-jem", Canva proširenje prave fotke pas-01: pas je pravi, okolina lijevo/desno je AI. **Prije objave zamijeniti** pravom širokom fotkom od vlasnice (specifikacija u nastavku). Mobitel: originalna 4:5.
- Rezultat "Odaberi svog psa": Kamen podloga s obrubom 1px u tinti (ne žuti ton: boje šape nisu velike plohe).
- Mrlja u uvodu: svijetla (Kamen) mrlja s jastučićima u bojama na spoju fotke i crne trake, kao logo u negativu; mobitel desno uz rub, desktop desno uz stupac sadržaja.

**Široka fotka za uvod (traži se):** min. 1920×800 px, idealno **2880×1200** (omjer 12:5). Pas stoji u sredini (cijeli pas unutar središnjih ~40% širine), crni stol preko cijele širine fotke i zauzima donjih ~25–30%, svijetli zid iznad, iznad glave psa barem ~15% zraka.

> **Napomena (10.11.2026.):** od sklapanja nadalje izvor istine je **`DESIGN.md`** (napisan iz gotove stranice). Gdje se ovaj dnevnik i build razlikuju (npr. stupac teksta 52ch, fokus okvir u tinti umjesto tirkiznog zbog kontrasta, svijetla mrlja u uvodu, desktop uvod 66vh), vrijedi DESIGN.md.
