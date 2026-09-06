// Optional per-photo overrides, keyed by "<category>/<filename-without-extension>".
// A photo with NO entry here still works everywhere — its accessible `alt`
// text just falls back to the filename, prettified, which is never printed on
// the page but does read poorly to a screen reader for a raw camera/WhatsApp
// filename like "IMG-20260816-WA0060".
// Add an entry to give a photo real alt text or to feature it.
//
// Fields (all optional):
//   caption    — a short human description of the photo. Nothing on the site
//                prints it: the Projects gallery deliberately shows no label
//                on any tile or in the lightbox. It is still worth writing,
//                because `alt` defaults to it, and a real sentence makes far
//                better alt text than a prettified WhatsApp filename
//   homeCaption — a shorter caption for the Home page's small preview grid,
//                if `caption` is too long to sit comfortably there; defaults
//                to `caption`
//   alt        — accessible description (defaults to "<caption> — <category> by N.D.I.")
//   heroAlt    — alt text used only when this photo appears in the homepage
//                hero carousel, if you want different wording there
//   featured   — true to include this photo in the Home page's small
//                category preview (Kitchens' 6-tile grid, etc.)
//   hero       — true (kitchens only) to include this photo in the
//                homepage hero carousel
//   order      — explicit sort position within its category (lower first);
//                omit to sort by filename instead
//   heroOrder  — explicit position within the hero carousel specifically;
//                omit to reuse `order`
//   wide       — true to make this tile span two grid columns on the
//                Projects gallery (every tile is the same fixed height —
//                see .projects-panel__grid's `grid-auto-rows` — so a wide
//                tile is just proportionally wider, never taller, and never
//                leaves a gap); omit to let every 5th photo do this
//                automatically
//
// See src/assets/images/*/README.md for how to actually add photo files.
export const photoMeta = {
  // The homepage hero carousel, in order (Spotlight1 → Spotlight6).
  'kitchens/Spotlight1': {
    caption: 'Double-volume kitchen, glass splashback',
    alt: 'Double-volume kitchen with a teal glass splashback and island seating, fitted by N.D.I.',
    hero: true,
    heroOrder: 1,
  },
  'kitchens/Spotlight2': {
    caption: 'Charcoal cabinetry, hex-tile splashback',
    alt: 'Charcoal kitchen cabinetry with an oak waterfall island and hexagon tile splashback, fitted by N.D.I.',
    hero: true,
    heroOrder: 2,
  },
  'kitchens/Spotlight3': {
    caption: 'Backlit onyx island, walnut trim',
    alt: 'Kitchen with a backlit onyx waterfall island and walnut cabinetry trim, fitted by N.D.I.',
    hero: true,
    heroOrder: 3,
  },
  'kitchens/Spotlight4': {
    caption: 'Open shelving, industrial-style kitchen',
    alt: 'Industrial-style kitchen with open steel-framed shelving, fitted by N.D.I.',
    hero: true,
    heroOrder: 4,
  },
  'kitchens/Spotlight5': {
    caption: 'Matte black & oak, waterfall island',
    alt: 'Matte black and oak kitchen with a timber waterfall island, fitted by N.D.I.',
    hero: true,
    heroOrder: 5,
  },
  'kitchens/Spotlight6': {
    caption: 'Gloss white kitchen, black island base',
    alt: 'Gloss white kitchen with a black island base and stone waterfall top, fitted by N.D.I.',
    hero: true,
    heroOrder: 6,
  },

  // The single photo in each category's Home page split-layout section.
  'kitchens/MainKitchen': {
    caption: 'Oak & matte grey kitchen, mirror splashback',
    alt: 'Light oak and matte grey kitchen with lit glass display cabinets above a black mirror splashback, by N.D.I.',
    featured: true,
  },
  'cupboards/MainCupboard': {
    caption: 'Study desk & media wall',
    alt: 'Built-in study desk and media wall unit with a slatted timber feature wall, by N.D.I.',
    featured: true,
  },
  'vanities/MainVanity': {
    caption: 'Floating double vanity, backlit mirror',
    alt: 'Floating black double vanity with a backlit LED mirror, by N.D.I.',
    featured: true,
  },
  'decor/MainDecor': {
    caption: 'Home bar & wine wall',
    alt: 'Fitted home bar with integrated wine fridges and glass display shelving, by N.D.I.',
    featured: true,
  },
};
