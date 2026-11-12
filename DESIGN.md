---
name: Bjutiful Kaos
description: Neighbourhood dog-grooming salon in Trnje, Zagreb. Kamen ground, logo ink, paw colours only in splashes.
colors:
  base: "#f1efec"
  ink: "#231f20"
  ink-hover: "#3a3435"
  muted: "#5e5a5b"
  grey: "#9a999b"
  teal: "#65c4b8"
  yellow: "#f7c57a"
  orange: "#ed8663"
  red: "#d55d4e"
  line-c: "#0000001f"
  on-ink: "#f1efec"
  on-ink-muted: "#f1efecbf"
  white-hover: "#ffffff"
  tbd-box-tint: "#e8e6e4"
  tbd-note-tint: "#f0cfc3"
typography:
  display:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "2.35rem"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  display-desktop:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "3.4rem"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 900
    lineHeight: 1.1
  headline-desktop:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 900
    lineHeight: 1.1
  figure:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 900
    lineHeight: 1
    fontFeature: "tnum"
  body:
    fontFamily: "Red Hat Text, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Red Hat Text, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.1
    fontFeature: "tnum"
  small:
    fontFamily: "Red Hat Text, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.55
  label-small:
    fontFamily: "Red Hat Text, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.4
  brush:
    fontFamily: "Caveat Brush, cursive"
    fontSize: "1.22em"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "0em"
rounded:
  btn: "12px"
  photo: "8px"
  pill: "999px"
spacing:
  hair: "4px"
  tight: "8px"
  inner: "12px"
  gutter: "16px"
  group: "24px"
  section: "48px"
  section-photo: "96px"
  maxw: "1040px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.btn}"
    padding: "14px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
    textColor: "{colors.on-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.btn}"
    padding: "14px 24px"
    height: "52px"
  button-light:
    backgroundColor: "{colors.on-ink}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.btn}"
    padding: "14px 24px"
    height: "52px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "44px"
  chip-checked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  lang-pill:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  lang-pill-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  result-card:
    backgroundColor: "{colors.base}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "24px"
  call-fab:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    size: "56px"
    rounded: "50%"
---

# Design System: Bjutiful Kaos

> **Sažetak (HR).** Podloga je "Kamen" (`#f1efec`), sve ostalo je tinta iz loga (`#231f20`); boje šape (tirkizna, žuta, narančasta, crvena) žive samo u mrljama i sitnim oznakama, nikad kao tekst ili velika ploha. Naslovi su Red Hat Display 900, tekst Red Hat Text, a Caveat Brush ide na jednu-dvije riječi u naslovu. Fokus je crni okvir 3px (svijetli na crnoj traci). Ritam je gust za informacije, prozračan za fotke; uglovi su mekani (gumbi 12px, tablete), crte tanke, sjene nema osim okruglog gumba za poziv. Uvod: crni stol s fotke pretapa se u crnu traku s naslovom i pozivom. Oznake `.tbd` služe samo za pitch i nestaju kad vlasnica potvrdi sadržaj; široka fotka u uvodu je privremena (AI proširenje).

## Overview

**Creative North Star: "The grooming table is the stage"**

Every photo in the salon shows a dog on the same black rubber table. The system takes that table as its one structural idea: on the first screen the table at the bottom of the photo fades into a solid ink band, and the headline and the call action sit on that band. Everything below is a calm Kamen page printed in the logo's ink, the way the logo itself is a black-and-white mark with one small burst of colour in the paw.

Density follows the "Ritam" rhythm: information sections are tight and practical (service rows, price choices, hours), photo sections get far more air. The tone is playful neighbourhood warmth, carried by the ink splash with its paw pads and by a single brushed word in a headline, never by decoration spread across the page. It is explicitly not a luxury spa: no gold, no soft pastels, no glossy depth.

Motion is "Razigrano" but disciplined: one focal moment per splash (ink lands, droplets fly out, pads stamp in), a one-time gallery reveal, and quick tactile feedback on controls, all on one ease-out curve with no bounce. The page is complete without JavaScript; animation only adds the entrance.

**Key Characteristics:**
- Kamen ground with logo ink for text, buttons, hairlines and the hero band.
- Paw colours only inside splashes and tiny marks, always as a group like the paw.
- Red Hat Display 900 headlines; Caveat Brush on one or two headline words.
- Soft corners (12px buttons, pills), 1px hairlines, flat surfaces.
- Real salon photos, graded once in the file; gallery runs edge to edge.
- One ease curve, `cubic-bezier(.16, 1, .3, 1)`, everywhere.

## Colors

A near-monochrome print palette (warm stone paper and the logo's black ink) with four paw colours used as ink-splash accents only.

### Primary
- **Logo Ink** (`ink`): text, primary buttons, the hero band, checked chips, the language-pill indicator, the call FAB and the splash body. About 16% of the page. Hover state is **Lifted Ink** (`ink-hover`).

### Tertiary (paw accents)
- **Paw Teal** (`teal`): the first paw pad, link underlines (2px), the 3px nav hover line. Not the focus ring (1.8:1 on Kamen).
- **Paw Yellow** (`yellow`): the second paw pad, the rating star fill, and the text-selection tint (45% on Kamen).
- **Paw Orange** (`orange`): the third paw pad; its 30% tint is the pitch-only placeholder note tint.
- **Paw Red** (`red`): the fourth paw pad.

### Neutral
- **Kamen** (`base`): the ground of the whole page (about 80%), and the text colour on ink as `on-ink`. Never pure white.
- **Kamen on Ink, Muted** (`on-ink-muted`): secondary text on the ink band (address line, review count).
- **Muted Ink** (`muted`): secondary text, leads, sub-lines, footer (5.9:1 on Kamen).
- **Paw Grey** (`grey`): the splash's palm pad, scrollbar, the placeholder dashed underline. Decoration only, never text (2.5:1).
- **Pure White** (`white-hover`): one-off, only the hover fill of the light button on the ink band. Never a ground.
- **Hairline** (`line-c`, 12% black): the 1px divider under the header, above the footer, under service rows and FAQ rows, and around the language pill.

### Pitch-only placeholder tints (removed with the placeholders)
- **Placeholder Box Tint** (`tbd-box-tint`): `color-mix(in srgb, grey 10%, Kamen)`, the ground of boxes standing in for missing photos.
- **Placeholder Note Tint** (`tbd-note-tint`): `color-mix(in srgb, orange 30%, Kamen)`, the ground of the small "to confirm" note pills.

Both exist only while the pitch placeholders exist; they are not available to new surfaces.

### Named Rules
**The Paw Ration Rule.** Each paw colour covers about 2–3% of the page at most. Full strength only in splashes, dots and thin marks; tints (paw colour mixed into Kamen, up to 45%) only for small tags. Paw colours are never text and never a large surface.

**The Whole Paw Rule.** Paw colours arrive together, as the four pads of one paw. A single paw colour on its own as a decorative block is off-system.

**The Logo As Is Rule.** The logo PNG is used unchanged on Kamen with `mix-blend-mode: multiply` so its white background drops out.

## Typography

**Display Font:** Red Hat Display, weight 900 only (with system-ui, sans-serif)
**Body Font:** Red Hat Text, weights 400 / 500 / 700 (with system-ui, sans-serif)
**Accent Font:** Caveat Brush 400 (with cursive)

All three are self-hosted (`fonts/fonts.css`, latin + latin-ext for č ć đ š ž), `font-display: swap`; the display 900 and text 400 latin files are preloaded.

**Character:** a heavy geometric sans matched to "KAOS" in the logo, a sturdy reading sans from the same family, and a rough brush matched to "Bjutiful". The weight contrast does the work; size steps stay modest.

### Hierarchy
- **Display** (900, 2.35rem mobile / `display-desktop` 3.4rem from 900px, lh 1.02, -0.01em, `text-wrap: balance`): the H1 on the ink band, one per page.
- **Headline** (900, 1.45rem mobile / `headline-desktop` 1.9rem from 900px, lh 1.1, 24px below): section titles.
- **Figure** (900, 2.2rem, lh 1, tabular figures): the price-picker amount. The review score uses the same face at 3.4rem with a 36px yellow star.
- **Body** (400, 1rem, lh 1.55, `text-wrap: pretty`, max 52ch): all running text.
- **Label** (700, 1.05rem, lh 1.1, tabular figures): buttons, so the phone number aligns. Chips, legends, nav (1rem), service names and FAQ questions also sit at 700.
- **Label Small** (700, .85rem): the language pill, slider tags, the small hint inside buttons (500 there), and the footer (400, muted).
- **Small** (400, .9rem, `muted`): service sub-lines, the price fine print, placeholder boxes.
- **Brush** (400, 1.22em of the parent, lh 0.8): one or two words inside a headline.

### Named Rules
**The One Brush Rule.** Caveat Brush appears only inside a headline, on one or two words, at most once per screen. Never in body text, buttons, prices or navigation.

**The Single Heavy Weight Rule.** Display type is always 900; hierarchy comes from size and the weight jump to 400/700 text, not from intermediate display weights.

## Layout

A single centred column (max 1040px, gutter 16px mobile / 32px from 900px), with text measures capped at 52ch. One breakpoint, 900px, switches two-column layouts on: services (1fr / 1.4fr), before-after, owner (360px / 1fr), contact and the hero band (1.3fr / 1fr, bottom-aligned), with 48–64px column gaps.

Spacing is a 4px-based scale used by role, not by habit: `inner` 12px inside a group (heading to text, list rows), `group` 24px between groups, `section` 48px (64px desktop) for information sections, `section-photo` 96px (160px desktop) for photo sections. Smaller steps (4px gallery gap, 8px chip gap) appear inside components.

The gallery is the one element that leaves the column: it runs edge to edge in a 2-column (3 from 900px) grid of square tiles with a 4px gap, while its heading stays in the column. Section anchors leave 72px for the header. The body reserves 88px at the bottom so the mobile call FAB never covers content.

### Named Rules
**The Rhythm Rule.** Information is dense, photos breathe: never give an information section photo-section padding, or the reverse.

## Elevation & Depth

Flat. Depth comes from tone (Kamen ground against the ink band) and from 1px hairlines, not from shadows. The hero seam is the one gradient: the bottom 28% of the photo fades to ink so the table runs into the band.

### Shadow Vocabulary
- **FAB lift** (`box-shadow: 0 6px 18px -6px #231f2080`): only on the floating mobile call button, which genuinely floats over content.

The nav hover line (`inset 0 -3px` teal) is drawn with box-shadow but is a line, not elevation.

### Named Rules
**The One Float Rule.** Only the element that physically floats above the page (the call FAB) casts a shadow. Cards, results, chips and photos stay flat.

## Shapes

Soft but not bubbly. Buttons and the price result use 12px corners; contained photos (the before-after slider) and placeholder boxes use 8px; tags, chips and the language pill are full pills; the FAB and slider knob are circles. The hero photo and gallery tiles have square corners: the hero is a full-bleed plate, the gallery is a continuous edge-to-edge sheet. Borders are 1px: hairline (`line-c`) for dividers, solid ink for secondary buttons and the result card, 20% black for unchecked chips.

The irregular shape in the system is the **ink splash**: a seeded blob, droplets, four pads and a palm, drawn from the logo's O.

## Components

### Buttons
Tactile and plain: ink blocks with an icon and a phone number.
- **Shape:** gently rounded (12px), minimum 52px tall, icon gap 10px, 1px border in the same colour.
- **Primary:** ink with Kamen text; "Nazovi 095 800 8133" with the phone icon, `tel:` link.
- **Light (on the ink band):** Kamen with ink text; the hero call. Hover goes to Pure White, a one-off value.
- **Secondary:** transparent with a 1px ink border; hover fills to a 7% ink tint. Used for "Pošalji poruku".
- **States:** colour change 180ms; press moves 1px down and scales to .985 (120ms); focus is a 3px ink outline with a 3px offset (Kamen on the ink band), on the element's own shape.

### Chips (price picker)
- **Style:** pill, 44px minimum, 1px border at 20% black, 700 label with an optional 500 muted `small` hint. The native radio covers the chip invisibly.
- **State:** hover darkens the border to ink; checked fills ink with Kamen text; keyboard focus draws the 3px ink outline on the chip.

### Cards / Containers
- **Price result:** Kamen ground, 1px ink border, 12px corners, 24px padding; what was picked (700), the amount in the Figure style, the "approximate" fine print, a primary call button. It stays Kamen on purpose: paw colours are never large surfaces.
- **Shadow strategy:** none (see Elevation).

### Navigation
- **Header:** Kamen, hairline below; logo 88px (104px desktop) left. From 900px only, anchor links (700, 1rem, 28px apart) with a teal 3px underline on hover; no active state. Mobile has no nav links.
- **Language pill:** a two-half pill with a hairline border; the ink indicator slides under the current language (320ms) and the link follows after 240ms. Instant under reduced motion.

### Lists and FAQ
- **Service rows:** name (700) with optional sub-line, 12px vertical padding, hairline below.
- **FAQ:** native `<details>`, 700 question with a plus icon that rotates 45° when open (250ms), muted answer, hairline below. Max width 720px.

### Hero (signature)
Photo plate over the ink band. Mobile: the 4:5 original (max 560px wide, `min(58svh, 125vw)` tall, focus 50% 30%). From 900px: a full-width wide plate 66vh tall (min 440px, focus 50% 35%). The bottom 28% fades to ink. The band holds the H1, the address/hours line, the light call button and the Google rating link with a yellow star.

**Temporary asset:** the desktop plate `img/hero-sirok-{960,1440,1776}.webp` is a Canva AI extension of the real pas-01 photo (dog real, surroundings left and right generated; provenance in the matching `.webp.json`). It is labelled on the page and must be replaced before publishing with an owner-shot landscape photo: at least 1920×800, ideally 2880×1200 (12:5), dog inside the central ~40%, black table across the bottom ~25–30%, light wall above, ~15% air above the head.

### Ink Splash (signature)
An inline SVG drawn from a seed (`data-splash`), so each splash differs but never changes between visits: ink blob, six droplets, four paw pads in teal / yellow / orange / red, a grey palm. It sits at the top right of a section heading (or on the hero seam), `aria-hidden`, never over text or a photo. On the hero band it is printed in reverse (Kamen body, coloured pads) like the logo in negative. Entrance, once, when 40% visible: blob scales .15 → 1.06 → 1 (560ms), droplets fly in from the centre (520ms, +25ms each), pads stamp in (260ms, +70ms each, from 330ms). Reduced motion: a 200ms fade.

### Before / After Slider
4:5, 8px corners, max 440px. A range input covers the frame (keyboard works); the "after" image is clipped at `--x`; a 2px Kamen handle with a 40px circular knob; "prije"/"poslije" pill tags in Kamen.

### Gallery
Square tiles, focus 50% 22% (50% 0% for tall-headed shots), hover zoom to 1.03 over 500ms, one-time clip-path reveal opening top to bottom (`inset(0 0 100% 0)` to `inset(0)`, 620ms, 70ms stagger, capped at 350ms).

### Call FAB (mobile only)
56px ink circle with the phone icon, bottom right with safe-area inset, below 900px only. Hidden while the hero call actions are on screen, then scales in from .6 with a fade (300ms).

### Photography
Real salon photos only. Grading `saturate(.9) contrast(1.06) brightness(1.03) sepia(.07)` is baked into the WebP files (480 / 960 / 1440 widths, `srcset` + `sizes`, explicit width/height, lazy except the hero); it is never a CSS filter. Alt text describes the dog. Every shipped raster has a `.webp.json` provenance file.

### Pitch placeholders (temporary, removed once the owner confirms)
Part of the pitch build only, so the owner sees what is missing. Not a design pattern for future surfaces.
- **Unconfirmed text:** dashed grey underline.
- **Placeholder note:** small pill on the placeholder note tint (700, .75rem) after the item, saying what is needed.
- **Placeholder box:** dashed 1px border, 8px corners, placeholder box tint, centred muted label; stands in for missing photos.

Each is deleted, not restyled, when the content arrives.

### Icons
Line icons in the Lucide style, inline SVG symbols, 20px (24px in the FAB), 2px stroke, round caps, `currentColor`. Never emoji or text glyphs.

## Do's and Don'ts

### Do:
- **Do** keep Kamen (`#f1efec`) as the ground everywhere; ink carries text, buttons, lines and the hero band.
- **Do** put paw colours only in splashes, the star, link and hover lines, and small tints up to 45%.
- **Do** use Red Hat Display 900 for headings and keep Caveat Brush to one or two headline words, once per screen.
- **Do** give photo sections 96px / 160px of padding and information sections 48px / 64px.
- **Do** use 12px corners on buttons and cards, 8px on contained photos, pills for tags and choices.
- **Do** use `cubic-bezier(.16, 1, .3, 1)` for every transition and animation, and give every animation a reduced-motion path.
- **Do** bake the photo grade into the file and record its provenance next to it.
- **Do** keep content fully visible without JavaScript; animations only add the entrance.
- **Do** draw focus as a 3px ink outline offset 3px, switching to Kamen on the ink band.

### Don't:
- **Don't** use paw colours as text, as a button fill, or as a large surface (the price result stays Kamen).
- **Don't** add shadows to cards, chips, photos or buttons; the call FAB is the only floating element.
- **Don't** use pure white as a ground; it exists only as the light button's hover.
- **Don't** use Caveat Brush in body text, buttons, prices or navigation.
- **Don't** add bounce, elastic or shake motion, or animate a splash more than once.
- **Don't** use emoji or glyph icons; use 2px line SVGs.
- **Don't** show generated or stock dogs; AI is allowed only as a labelled, temporary extension of a real salon photo.
- **Don't** carry the pitch placeholders (`.tbd`, `.tbd-note`, `.tbd-box`) into the published site or new surfaces.
