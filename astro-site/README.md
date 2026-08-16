# N.D.I. Kitchens — Astro site

This is the production build of the N.D.I. Kitchens website, recreated in
[Astro](https://astro.build) from the design handoff in the parent folder
(`../README.md`, `../Home.dc.html`, `../About.dc.html`, `../Projects.dc.html`,
`../SiteNav.dc.html`, `../SiteFooter.dc.html`). That handoff is design
reference only — this folder is the real codebase.

## Running it

```sh
npm install       # first time only
npm run dev       # dev server at http://localhost:4321
```

Other commands: `npm run build` (production build to `dist/`), `npm run preview`
(serve that build locally).

## Adding photos

Drop photo files straight into the matching folder — **no renaming needed**:

```
src/assets/images/kitchens/     src/assets/images/vanities/
src/assets/images/cupboards/    src/assets/images/decor/
```

Every photo in those folders is picked up automatically (restart `npm run
dev` if a newly-added one doesn't show up right away). A category with zero
photos shows a labeled placeholder frame instead; the moment it has at least
one, the Home page section and the Projects gallery for that category both
switch to a real photo grid on their own — no code changes needed.

That auto-generated caption is just the filename, prettified. To give a
specific photo a better caption, mark it as one of the Home page's featured
picks, or pin it into the homepage hero carousel, add an entry to
`src/data/photo-meta.js` (keyed by `"<category>/<filename-without-extension>"`
— the file documents every field). Nothing there is required; it's purely
for polishing photos you care about, whenever you get to it.

## Project structure

Every tab and every section of every page is its own file, so a change to
(say) the Vanities section never touches the file for Process or Contact.

```
src/
├── layouts/
│   └── BaseLayout.astro       # <head>, fonts, the animated background
├── pages/
│   ├── index.astro            # Home — assembles the sections below
│   ├── about.astro             # About Us
│   └── projects.astro          # Projects gallery
├── components/
│   ├── nav/SiteNav.astro       # sticky header, tabs, page-transition panel
│   ├── footer/SiteFooter.astro
│   ├── atmosphere/SiteAtmosphere.astro   # the animated "sky" background
│   ├── gallery/Lightbox.astro   # shared fullscreen photo viewer
│   ├── icons/                   # inlined Lucide SVGs (no icon-package dep)
│   ├── ui/                      # CtaBand, SuppliersPanel, PlaceholderPhoto
│   ├── home/                    # one file per Home section:
│   │   ├── HeroSection.astro          (the hero carousel)
│   │   ├── StatsSection.astro
│   │   ├── KitchensSection.astro      (01 — featured photos + lightbox)
│   │   ├── CupboardsSection.astro     (02 — real photo once one exists, else placeholder)
│   │   ├── VanitiesSection.astro      (03 — same)
│   │   ├── DecorSection.astro         (04 — same)
│   │   ├── ProcessSection.astro
│   │   ├── AboutPreviewSection.astro
│   │   └── ContactSection.astro       (the quote-request form)
│   ├── about/                   # AboutHeader, AboutPhoto, AboutStory
│   └── projects/                # ProjectsHeader (filter pills),
│                                   PhotoGridPanel (generic real-photo grid),
│                                   KitchensGridPanel (always real),
│                                   CupboardsGridPanel / VanitiesGridPanel /
│                                   DecorGridPanel (real once photos exist,
│                                   else PlaceholderGridPanel)
├── data/
│   ├── site-config.js          # phone/email/WhatsApp — edit this, not the pages
│   ├── photo-library.js         # auto-loads every photo in assets/images/*/
│   ├── photo-meta.js            # optional caption/featured/hero overrides
│   └── suppliers.js
├── styles/global.css            # design tokens (colors, type, shadows) + resets
└── assets/images/                # the client's photos + logo (optimized by Astro)
    ├── kitchens/  cupboards/  vanities/  decor/   (see "Adding photos" above)
    └── ndi-logo.png
```

Sections have no client-side framework — just Astro components with a plain
`<script>` where interactivity is needed (hero autoplay, lightbox, nav
transition, project filters). That keeps the site fast and dependency-light,
which is what a mostly-static, photography-led site like this wants.

## Known placeholders — see `../README.md` "Open items for the client"

- **Contact details are dummy.** Edit `src/data/site-config.js` once the
  client confirms phone/email/WhatsApp number/workshop address.
- **Built-in cupboards, vanities and home decor have no real photographs
  yet** (only the 10 original kitchen photos are real) — see "Adding photos"
  above for how that resolves itself once photos exist.
- **The contact form isn't wired to anything** — submitting it just swaps
  the button label client-side (matches the original design handoff exactly).
  `ContactSection.astro`'s `<script>` has a `TODO` marking where to POST to a
  real endpoint once the client decides where enquiries should land.
- **Business facts** ("25+ years", "5000+ clients", "established early
  1990s") are the client's stated figures per the handoff, not yet confirmed.
