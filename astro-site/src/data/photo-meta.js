// Optional per-photo overrides, keyed by "<category>/<filename-without-extension>".
// A photo with NO entry here still works everywhere — it just gets an
// auto-generated caption (its filename, prettified) and falls in wherever
// the default sort/layout puts it. Add an entry only to improve on that.
//
// Fields (all optional):
//   caption    — label shown on the Projects gallery tile and in its lightbox
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
//                Projects gallery; omit to let every 5th photo do this
//                automatically
//   aspect     — explicit CSS aspect-ratio for the Projects gallery tile,
//                e.g. "16/10"; omit to use a sensible default
//
// See src/assets/images/*/README.md for how to actually add photo files.
export const photoMeta = {
  'kitchens/kitchen-01': {
    caption: 'Marble island, walnut fronts',
    homeCaption: 'Marble island',
    alt: 'Marble island kitchen with walnut cabinetry, fitted by N.D.I.',
    heroAlt: 'Marble island kitchen with walnut cabinetry',
    featured: true,
    hero: true,
    order: 1,
    heroOrder: 1,
    wide: true,
    aspect: '16/10',
  },
  'kitchens/kitchen-04': {
    caption: 'Lit island, travertine',
    homeCaption: 'Lit island',
    alt: 'Lit island kitchen with travertine finishes, fitted by N.D.I.',
    featured: true,
    order: 2,
    aspect: '3/4',
  },
  'kitchens/kitchen-07': {
    caption: 'Tall units to ceiling',
    homeCaption: 'Tall units',
    alt: 'Tall kitchen units fitted to the ceiling by N.D.I.',
    heroAlt: 'Contemporary kitchen with tall units',
    featured: true,
    hero: true,
    order: 3,
    heroOrder: 3,
  },
  'kitchens/kitchen-08': {
    caption: 'Full-width run, stone tops',
    alt: 'Full-width fitted kitchen with stone tops, by N.D.I.',
    heroAlt: 'Wide fitted kitchen with stone tops',
    hero: true,
    order: 4,
    heroOrder: 2,
    wide: true,
    aspect: '2/1',
  },
  'kitchens/kitchen-02': {
    caption: 'Compact galley',
    homeCaption: 'Galley run',
    alt: 'Compact galley kitchen fitted by N.D.I.',
    featured: true,
    order: 5,
  },
  'kitchens/kitchen-05': {
    caption: 'Integrated appliances',
    alt: 'Kitchen with integrated appliances, fitted by N.D.I.',
    heroAlt: 'Kitchen detail with integrated appliances',
    hero: true,
    order: 6,
    heroOrder: 5,
  },
  'kitchens/kitchen-10': {
    caption: 'Open-plan living kitchen',
    alt: 'Open-plan living kitchen fitted by N.D.I.',
    heroAlt: 'Open-plan kitchen and living space',
    hero: true,
    order: 7,
    heroOrder: 4,
    wide: true,
    aspect: '5/4',
  },
  'kitchens/kitchen-03': {
    caption: 'Cupboards and scullery door',
    alt: 'Cupboards and scullery door fitted by N.D.I.',
    heroAlt: 'Built-in cupboards in a fitted kitchen',
    hero: true,
    order: 8,
    heroOrder: 6,
  },
  'kitchens/kitchen-06': {
    caption: 'Scullery and pantry wall',
    homeCaption: 'Scullery',
    alt: 'Scullery and pantry wall fitted by N.D.I.',
    featured: true,
    order: 9,
  },
  'kitchens/kitchen-09': {
    caption: 'Door and handle detail',
    homeCaption: 'Cupboard detail',
    alt: 'Door and handle detail, cabinetry by N.D.I.',
    featured: true,
    order: 10,
  },
};
