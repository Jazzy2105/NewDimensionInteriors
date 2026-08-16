# Handoff: N.D.I. Kitchens — website redesign

## Overview
A full redesign of n-d-i.co.za, the site for N.D.I., a South African (Gauteng) family workshop that designs, manufactures and fits **kitchens, built-in cupboards, vanities and home decor joinery**. The audience is homeowners renovating one room; the tone is premium-showroom, design-magazine. The site is photography-led: the gallery is the product.

Four pages behind four nav tabs — **Home, About Us, Projects, Contact Us** (Contact is an anchor on Home) — plus a persistent WhatsApp call-to-action.

## About the design files
The files in this bundle are **design references written as HTML prototypes**. They show intended look, layout and behavior; they are not production code to lift wholesale. They are authored in a small in-house component runtime (`support.js`, `<x-dc>`, `{{ }}` template holes, a `Component extends DCLogic` class) that will not exist in your codebase — **ignore that runtime**. The logic classes are readable plain JS and map 1:1 onto React/Vue component state.

Your task is to **recreate these designs in the target environment** using its established patterns. If no codebase exists yet, pick the framework you prefer — the design has no server requirements beyond a contact form endpoint. Next.js or Astro both suit it (mostly static, image-heavy, good candidates for `next/image` or Astro image optimisation).

Styling in the prototypes is **all inline** — a constraint of the authoring tool, not a design decision. Move it into your normal styling layer (CSS modules, Tailwind, styled-components). The tokens are listed below.

## Fidelity
**High fidelity.** Colors, typography, spacing, shadows, radii and copy are final unless noted. Recreate faithfully. Two known placeholders:
- Contact details are dummy: phone `+27 (0) 00 000 0000`, email `info@n-d-i.co.za`, WhatsApp number `27000000000`.
- Business facts ("25+ years", "5000+ clients", "Established early 1990s") are the client's stated figures but should be confirmed.

---

## Design tokens

### Color
The site is dark. A light-ground design system was inverted; use these values.

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#070707` | page ground (mostly covered by the atmosphere layers) |
| `--color-surface` | `#161514` | raised panel fill |
| `--color-text` | `#f5f3f2` | body and heading text |
| `--color-divider` | `#38342f` | 2px rules, grid gaps |
| panel border | `#2e2a27` | 2px border on raised panels |
| `--color-accent` | `#BC1313` | **brand red** — active tab underline, CTA fills, kickers |
| `--color-accent-100` | `#fdecec` | white-button hover |
| `--color-accent-400` | `#e35555` | red text on the dark ground (legibility step) |
| `--color-accent-600` | `#a20f0f` | red button hover |
| `--color-accent-700` | `#7e0c0c` | red text on white buttons |
| `--color-neutral-500` | `#6b6663` | faint meta text |
| `--color-neutral-600` | `#9a9491` | secondary labels |
| `--color-neutral-700` | `#c3bebb` | body paragraphs |

Full neutral ramp: 100 `#100f0f`, 200 `#1b1a19`, 300 `#272524`, 400 `#3b3836`, 500 `#6b6663`, 600 `#9a9491`, 700 `#c3bebb`, 800 `#dedad8`, 900 `#f2f0ef`.
Full accent ramp: 100 `#fdecec`, 200 `#f7cfcf`, 300 `#f08b8b`, 400 `#e35555`, 500 `#cc2020`, 600 `#a20f0f`, 700 `#7e0c0c`, 800 `#5c0a0a`, 900 `#3d0b0b`.

**Rule:** never put `#BC1313` on black as paragraph text — it fails contrast. Use `--color-accent-400`. `#BC1313` is for fills, rules and the tab underline. On a white fill, red text uses `--color-accent-700`.

### Typography
**Archivo** throughout (Google Fonts, weights 400–900).
- Display headings: weight **900**, `letter-spacing: -0.035em`, `line-height: 0.92–0.98`, size `clamp(38px, 6.4vw, 92px)` for page h1, `clamp(30px, 3.8vw, 54px)` for section h2.
- Hero h1: `clamp(40px, 7.2vw, 104px)`, `line-height: 0.92`.
- Section kickers ("01 — Kitchens"): 11px, weight 700, `letter-spacing: 0.22em`, uppercase, `--color-accent-400`.
- Nav tabs / button labels: 12.5–14px, weight 700–800, `letter-spacing: 0.06–0.12em`, uppercase.
- Body: 15–16px, `line-height: 1.6–1.65`, `--color-neutral-700`.
- Small meta labels: 11px, weight 700, `letter-spacing: 0.14em`, uppercase, `--color-neutral-600`.

### Spacing & geometry
- Section padding: `clamp(32px, 5vw, 80px)` vertical, `clamp(16px, 3vw, 40px)` horizontal.
- Raised panels: `margin: clamp(18px, 2.6vw, 38px) auto`, `width: calc(100% - clamp(32px, 5.2vw, 76px))`, `max-width: 1720px`.
- Radius: **20px on raised panels only.** Everything else is square. Filter pills are `999px`.
- Rules and borders are **2px**, never hairlines.
- Grid gaps in galleries are `2px` over a `--color-divider` background — the gap *is* the rule.

### Shadows
- Raised panel: `inset 0 2px 0 rgba(255,255,255,0.05), 0 30px 60px -22px rgba(0,0,0,0.95), 0 80px 120px -60px rgba(188,19,19,0.22)` — note the third layer is a **red glow**, not a neutral shadow.
- Red CTA band: `0 40px 90px -30px rgba(188,19,19,0.5)`, with `#6d0d0d` 2px top/bottom borders.
- Sticky nav: `0 18px 40px -18px rgba(0,0,0,0.9)`.

---

## The background ("the sky")
The most distinctive part of the design and the thing most likely to be lost in translation. Every page carries **six fixed, pointer-events-none layers** behind the content, stacked `z-index: -5` to `-1`. They do not scroll. Together they make the black look like an illuminated night sky with a focal point at top-centre rather than flat #000.

1. `z-index:-5` — flat `#050505`, `inset: 0`.
2. `z-index:-4`, `inset: -18%` — the **focal glow**: `radial-gradient(52% 44% at 50% 6%, #2b2930 0%, #201f25 34%, rgba(24,23,28,0) 72%), radial-gradient(70% 58% at 50% 34%, #16161b 0%, rgba(22,22,27,0) 70%)`. Animation `ndiSkyC 38s ease-in-out infinite`.
3. `z-index:-3`, `inset: -22%` — **colored blacks**: `radial-gradient(46% 38% at 14% 30%, #1b1d26 …), radial-gradient(44% 36% at 88% 22%, #241a1a …), radial-gradient(56% 46% at 62% 88%, #14161c …)`. Animation `ndiSkyA 52s`.
4. `z-index:-2`, `inset: -26%` — **red and steel blooms**: `radial-gradient(40% 34% at 80% 64%, rgba(140,18,18,0.26) …), radial-gradient(38% 32% at 10% 78%, rgba(48,52,66,0.34) …), radial-gradient(30% 26% at 44% 12%, rgba(188,19,19,0.16) …)`. Animation `ndiSkyB 74s`.
5. `z-index:-1` — **grain**: an inline SVG `feTurbulence` fractal noise tile (220×220, baseFrequency 0.85, 3 octaves) at `opacity: 0.05`, `mix-blend-mode: overlay`.
6. `z-index:-1` — **vignette**: `radial-gradient(120% 90% at 50% 24%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.62) 100%)`.

Keyframes (all `ease-in-out infinite`, transform-only so they stay on the compositor):
```css
@keyframes ndiSkyA { 0%,100% { transform: translate3d(-3%,-2%,0) scale(1.18); } 50% { transform: translate3d(4%,3%,0) scale(1.34); } }
@keyframes ndiSkyB { 0%,100% { transform: translate3d(5%,4%,0) scale(1.3); } 50% { transform: translate3d(-6%,-5%,0) scale(1.12); } }
@keyframes ndiSkyC { 0%,100% { transform: translate3d(0,0,0) scale(1.1); opacity: .85; } 50% { transform: translate3d(-4%,5%,0) scale(1.28); opacity: 1; } }
```
Set `will-change: transform` on layers 2–4. Consider gating the animation behind `prefers-reduced-motion`. This is a good candidate for a single `<SiteAtmosphere />` component rendered once in the app shell.

## Depth: the flat/raised rhythm
Sections **alternate** down every page. This is the core visual idea — do not flatten it.

- **Raised**: the panel styles above (surface fill, 2px `#2e2a27` border, 20px radius, `overflow: hidden`, the three-layer shadow). It floats over the sky.
- **Flat**: full-bleed, `background: rgba(5,5,5,0.22)` (a 22% veil so the sky reads through), `border-top`/`border-bottom: 2px solid var(--color-divider)`, no radius, no shadow.
- **Red band**: full-bleed `#BC1313`, its own red-cast shadow. Used for the closing CTA on every page.

Home order: hero (full-bleed) → stats (flat) → Kitchens (raised) → Built-in cupboards (flat) → Vanities (raised) → Home decor (flat) → Process (flat) → Suppliers (raised) → About (raised) → red CTA → Contact (raised) → footer.

---

## Screens

### Shared: site nav (`SiteNav.dc.html`)
Sticky, `top: 0`, `z-index: 60`, height **76px**. Background `rgba(10,10,10,0.86)` with `backdrop-filter: blur(18px)` so panels slide under it. Bottom border 2px `--color-text`.

- **Left**: logo image, 46px tall, plus "Kitchens & Cupboards" at 9.5px / 0.18em uppercase / `--color-neutral-600`, max-width 8em, wrapping to two lines.
- **Centre-right**: four tabs — **Home · About Us · Projects · Contact Us**. Each tab is a **fixed width** `clamp(112px, 11vw, 160px)`, centred label, so the underline is identical on every tab regardless of label length. Label 12.5px / 700 / 0.1em uppercase.
- **Active tab**: `border-bottom: 4px solid #BC1313`; inactive `4px solid transparent`.
- **Right**: WhatsApp button — `#BC1313` fill, white label 13px/800/0.06em uppercase, 14px 20px padding, square corners, Lucide `message-square` icon at 16px. Hover `--color-accent-600`.
- Href targets: `/`, `/about`, `/projects`, `/#contact`. WhatsApp is `https://wa.me/<digits>` in a new tab.

**Active state logic:** the page passes its own key (`home`/`about`/`projects`). On Home only, a scroll listener overrides it: when `#contact` has `getBoundingClientRect().top <= 160`, the Contact Us tab lights instead. In a router-based app, derive from the route and keep the scroll override for the contact anchor.

**Page transition:** clicking a tab is intercepted (`preventDefault`). A fixed full-viewport `#BC1313` panel (`z-index: 500`, `pointer-events: none`) slides from `translateY(101%)` to `translateY(0)` over **260ms** `cubic-bezier(0.6, 0, 0.2, 1)`, carrying the destination name bottom-left in display type (`clamp(40px, 8vw, 120px)`, weight 900, white) above a 64×5px white bar; the label itself fades up 34px over 240ms. Navigation fires at **300ms**. There is deliberately **no arrival animation** — earlier versions had one and it read as a double-load. A re-entrancy guard blocks a second click while leaving. Anchor links (`/#contact`) skip the panel and smooth-scroll to `top - 74` instead.

### Shared: footer (`SiteFooter.dc.html`)
Background `#040404`, 2px `--color-divider` top border, preceded by a `clamp(18px, 2.6vw, 38px)` gap so it reads as a separate slab. Flex row, wrapping, `padding: clamp(32px, 4vw, 56px) clamp(16px, 3vw, 40px)`.
- Logo at 60px tall, `margin-left: -6px` for optical alignment.
- Tagline: "Kitchens · Built-in cupboards · Vanities · Home decor", 11px / 0.18em uppercase.
- "Gauteng, South Africa · info@n-d-i.co.za" at 13px `--color-neutral-500`.
- Nav column: Home, About Us, Projects, Contact Us — 12px / 700 / 0.12em uppercase, `--color-neutral-600`, hover `#fff`.
- Copyright at 12px `--color-neutral-500`.

### Home (`Home.dc.html`)
**Hero** — `height: calc(100vh - 76px)`, `min-height: 600px`. Six stacked absolutely-positioned kitchen photographs; the active one is `opacity: 1`, the rest `0`, with a **1400ms** opacity transition. Auto-advances every **6s** (prop-controlled, 3–12s). Each image runs a slow Ken Burns: `@keyframes ndiKB { from { scale(1.0) } to { scale(1.12) } }`, `14s ease-out infinite alternate`.
Over it: a scrim `linear-gradient(100deg, rgba(6,6,6,0.9) 0%, rgba(6,6,6,0.5) 44%, rgba(6,6,6,0.08) 74%)`. Content is bottom-left: logo (`clamp(52px, 6vw, 88px)` tall) beside "Custom cabinetry · Gauteng"; h1 "The kitchen is / the room you / actually live in." (hard line breaks); a 560px intro paragraph; two buttons (red "WhatsApp us", ghost "See the work" with a 2px `rgba(255,255,255,0.6)` border).
Bottom strip: six clickable **progress bars**, each `clamp(28px, 5vw, 64px) × 4px`, active `#BC1313` / inactive `rgba(255,255,255,0.45)`, 300ms transition; and a right-aligned "03 / 06" counter (current `clamp(28px, 3.2vw, 44px)` weight 900, total 13px at 60% opacity). Above them a 2px `rgba(255,255,255,0.35)` rule.

**Stats** (flat) — four equal cells, `repeat(auto-fit, minmax(230px, 1fr))`, 2px divider between. Value `clamp(30px, 3.4vw, 46px)` weight 900; the "+" is `#BC1313`. Label 12px / 0.14em uppercase.
> 25+ Years at the bench · One Workshop, start to finish · 5000+ Clients served · Free Measure & quotation

**Four category sections**, numbered 01–04, alternating raised/flat and mirroring image side:
1. **01 — Kitchens** (raised): heading "Every kitchen is drawn around one house.", then a full-width 6-tile photo grid (`repeat(auto-fit, minmax(300px, 1fr))`, 2px gaps, `aspect-ratio: 4/3`) opening a lightbox. Tile captions sit bottom-left on a `--color-bg` chip, 11px / 0.14em uppercase. Hover scales the image to 1.06 over 900ms `cubic-bezier(0.2, 0.7, 0.2, 1)`.
2. **02 — Built-in cupboards** (flat): image left, text right. "Storage built into the wall, not against it."
3. **03 — Vanities & bathrooms** (raised): text left, image right. "Wet rooms, dry joinery."
4. **04 — Home decor** (flat): image left, text right. "The pieces that finish the room."

Each has a text link with a trailing arrow, `border-bottom: 3px solid #BC1313`, 6px padding-bottom → `/projects`.

**Process** (flat) — "Four steps, one point of contact." Four cells: Site measure / Drawing & quote / Manufacture / Installation, each with a red 01–04 numeral, a 20px weight-800 heading and 14.5px body.

**Suppliers** (raised) — header row with the "Materials & suppliers" kicker and a 52ch note; below, six names in a `justify-content: space-between` flex row, each `clamp(15px, 1.5vw, 21px)` weight 800 `--color-neutral-700`, hover `#fff`:
> PG Bison · Sonae Novolam · SenoSA · Egger · AG Marble and Granite · Wood@Ease

**About preview** (raised) — two-column: copy left, two stacked photographs right.

**Red CTA** — "Built in our workshop. Fitted in your home." at `clamp(34px, 6vw, 88px)`, plus a white WhatsApp button with `--color-accent-700` label.

**Contact** (raised, `id="contact"`) — left column: "Tell us about the room.", then a definition list of phone / email / workshop separated by 1px `--color-neutral-300` rules. Right column: Name, Phone or email, and "What are you planning?" (4-row textarea), each with an 11px / 0.14em uppercase label; a red submit button whose label swaps to "Thank you — we'll be in touch" on submit. **The form is not wired** — no endpoint, no validation. You'll need to implement submission (and the client will likely want the enquiry emailed).

### About Us (`About.dc.html`)
Header (flat) → a raised full-bleed photograph panel at `height: min(60vh, 520px)` → a two-column flat section: narrative copy left ("A family workshop, not a showroom chain."), and right a **spec list** of label/value rows separated by 2px dividers (Established / Where we work / What we make / Guarantee / Quotation) → red CTA "Come and see the workshop." → footer.

### Projects (`Projects.dc.html`)
Header (flat) with the h1 "Work we have fitted." and, right-aligned, **five filter pills**: All work · Kitchens · Built-in cupboards · Vanities · Home decor. Pills are `border-radius: 999px`, 2px border, 14px 20px padding, 12px / 800 / 0.12em uppercase, 220ms transition. Active = `#BC1313` fill, white label, red border. Inactive = transparent fill, `--color-neutral-400` border, `--color-neutral-700` label.

Below, four raised category panels, each with a ruled header (a 30×4px red bar, the category name, and a one-line description) and a masonry-ish grid: `repeat(auto-fill, minmax(320px, 1fr))`, 2px gaps over `--color-divider`, tiles carrying varied `aspect-ratio` (16/10, 3/4, 3/2, 2/1, 5/4) and some spanning two columns. Filtering shows/hides whole panels; "All work" shows all four.

Then the suppliers panel, red CTA, footer.

**Lightbox** (kitchens grid): fixed, `rgba(6,6,6,0.95)`, `z-index: 200`, fades/rises in over 240ms. Image is contained, centred. Prev/next buttons are 52×52 at the left/right edges with a 2px `rgba(255,255,255,0.45)` border, hover fills red; a matching 48×48 close button sits top-right; the caption sits bottom-left in 13px / 0.12em uppercase. **Keyboard: Escape closes, ArrowLeft/ArrowRight step, wrapping.** Only the ten real kitchen photos are wired; the other categories are placeholders.

---

## State
Small and local — no store needed.

| Where | State | Notes |
| --- | --- | --- |
| Nav | `active` route key; `spy` (contact-in-view, Home only); `phase` (`idle`/`up0`/`up1`) + `label` for the transition panel | `leaving` re-entrancy flag |
| Hero | `index` 0–5 | 6s interval, cleared on unmount; clicking a bar sets it directly |
| Galleries | `lightboxIndex` (null = closed) | keydown listener on window, removed on unmount |
| Projects | `category` (`all`/`kitchens`/`cupboards`/`vanities`/`decor`) | |
| Contact | `sent` boolean | only swaps the button label today |

## Responsive
Everything is fluid — `clamp()` for type and padding, `auto-fit`/`auto-fill` grids with `minmax(300–340px, 1fr)`. There are **no media queries**, and the design has **not been checked on a real phone**. Before launch you should: collapse the four-tab nav into a drawer or scrollable row below ~640px (fixed-width tabs plus a logo and a button will not fit), verify the hero's `100vh` against mobile browser chrome (use `100dvh`), and confirm the two-column sections stack in a sensible order.

## Assets
- `assets/kitchen-01.jpg` … `kitchen-10.jpg` — the client's own project photographs. Mixed sizes (548×364 up to 1500×1000) and orientations. **These are the only real photographs**; everything else is a placeholder. They need re-export at consistent, larger sizes with responsive `srcset` and lazy loading below the fold.
- `assets/ndi-logo.png` — the client's logo, background removed and cropped from a JPEG. There is faint compression speckle at the chevron edges when scaled large. **Ask the client for the vector original** and use SVG.
- **Fonts**: Archivo from Google Fonts, weights 400–900. Self-host for performance.
- **Icons**: Lucide. The prototypes inline a few SVG paths (arrow-right, message-square, chevrons, x); use the real icon package.
- **Empty photo frames**: the prototypes use an `<image-slot>` web component as a drag-and-drop placeholder for photos the client hasn't supplied yet — cupboards, vanities, home decor. **Do not port it.** Replace each with a real image, and treat the placeholder copy in each frame as the brief for what photograph to shoot.

## Files in this bundle
| File | What it is |
| --- | --- |
| `Home.dc.html` | Home page — hero, stats, four categories, process, suppliers, about preview, CTA, contact form |
| `About.dc.html` | About Us |
| `Projects.dc.html` | Projects gallery with category filters and lightbox |
| `SiteNav.dc.html` | Sticky nav, active-tab logic, page-transition panel |
| `SiteFooter.dc.html` | Footer |
| `assets/` | Photographs and logo |
| `image-slot.js` | Placeholder web component — reference only, do not port |
| `support.js` | The prototype runtime — reference only, do not port |

To view any prototype, open the `.dc.html` file directly in a browser; they are self-contained apart from the `assets/` folder and the Google Fonts link.

## Open items for the client
1. Real phone number, email, physical/workshop address, WhatsApp number, operating hours.
2. Confirm "25+ years", "5000+ clients", "Established early 1990s", and the guarantee wording.
3. Photographs for built-in cupboards, vanities and home decor.
4. Vector logo.
5. Where contact-form enquiries should be delivered.
6. Whether the supplier names should be logos rather than typeset names (a logo row would need permission and clean assets).
