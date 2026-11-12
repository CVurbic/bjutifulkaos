---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["en/index.html"]
---

# index.html (HR) + en/index.html (EN): Bjutiful Kaos landing page

**Mode:** Persuade. Visitor: dog owner in Zagreb on a phone, arriving from Google Maps or Instagram. In 5 seconds: what (dog grooming salon), where (Trnje), how to book (one tap to call).

**Visual world:** pinned by the user phase by phase in `faze/ODLUKE.md` (colours, type, spacing, shapes, elements, motion, photos). Do not re-open those decisions.

**Sections (in order):** header (logo, HR|EN pill) · hero · Usluge · Odaberi svog psa (size + coat → approximate price) · Prije/poslije slider · gallery (edge to edge) · O vlasnici · Recenzije (5,0 · 7 on Google, link, no invented quotes) · Česta pitanja (`<details>`) · Kontakt (address, hours, Google Maps link, call + message) · footer. Call FAB appears after the hero.

**Placeholders:** visibly marked (`.tbd`) so the owner sees what is missing on Thursday: services, prices and categories, owner name/story/photo, "before" photos, message channel, FAQ answers, Instagram permission.

**Constraints:** static HTML/CSS + small vanilla JS, no build step. Self-hosted fonts. Map is a link only (no embed, no cookies). EN is a separate static page; the pill is a plain link. WCAG 2.2 AA. Reduced-motion path.

## Direction contract

THESIS: The grooming table is the stage. Every photo shows a dog on the salon's black rubber table; the first viewport lets that table run out of the photo into a solid ink band where the headline and the call action sit. It refuses the category's split hero (copy left, photo right, a badge row underneath).

OWN-WORLD: Kamen ground `#f1efec`, ink `#231f20` for the table band, text and buttons; paw colours (teal, yellow, orange, red) only inside ink splashes and tiny marks. Red Hat Display 900 headlines, Red Hat Text body, Caveat Brush on one or two words. Soft corners (buttons 12px, photos 8px, pills), hairlines, no shadows except the call FAB.

STORY: The visitor sees a real dog from this salon, learns the name and the neighbourhood, and has the number under the thumb. Scrolling answers the questions people phone about today: what is offered, what it costs for my dog, what the result looks like, who does it, what others say, practical answers, where and when.

FIRST VIEWPORT: Header on Kamen (logo left, HR|EN pill right). Below it a full-width photo of a dog standing on the table (mobile 4:5, desktop about 60vh, dog centred); the black table at the photo's bottom fades into a full-width ink band. In the band: H1 in Kamen "Šišanje i njega pasa *u Trnju*" (brush on "u Trnju"), one line "Ul. grada Vukovara 237A · PON–PET 08–20", the primary button "Nazovi 095 800 8133" (Kamen ground, ink text, phone icon), and "5,0 ★ · 7 recenzija na Googleu" as a link. An ink splash with paw pads sits on the seam between photo and band and splashes once on load. Signature interaction: the splash; second: the price picker.

FORM: Roll skipped on purpose: the user pinned the direction phase by phase (faze/ODLUKE.md, phases 1–7) before any build, and a pinned direction beats the roll. No concept-seed was run, so there is no seed reference. Desktop hero plate: resursi/hero-sirok.jpg, the real pas-01 photo extended to 2:1 with Canva image generation (dog real, side surroundings AI-extended); replace with an owner-shot landscape photo before publishing. Mobile keeps the 4:5 original.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
