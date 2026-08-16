// Auto-loads every photo dropped into src/assets/images/<category>/ so
// adding a new photo never requires an import statement, a component edit,
// or touching this file. See src/assets/images/*/README.md for the
// drop-photos-in workflow, and photo-meta.js for the optional caption
// overrides this merges in.
import { photoMeta } from './photo-meta.js';

const CATEGORIES = ['kitchens', 'cupboards', 'vanities', 'decor'];
const CATEGORY_NOUN = {
  kitchens: 'kitchen',
  cupboards: 'built-in cupboard',
  vanities: 'vanity',
  decor: 'home decor piece',
};

// One static glob call per category — import.meta.glob's pattern has to be a
// literal string (Vite resolves it at build time), so this can't be a loop.
const filesByCategory = {
  kitchens: import.meta.glob('/src/assets/images/kitchens/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }),
  cupboards: import.meta.glob('/src/assets/images/cupboards/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }),
  vanities: import.meta.glob('/src/assets/images/vanities/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }),
  decor: import.meta.glob('/src/assets/images/decor/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }),
};

function prettify(filename) {
  return filename
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function filenameOf(path) {
  const base = path.split('/').pop() || path;
  return base.replace(/\.[^./]+$/, '');
}

const byCategory = {};

for (const category of CATEGORIES) {
  const raw = Object.entries(filesByCategory[category]).map(([path, image]) => {
    const filename = filenameOf(path);
    const meta = photoMeta[`${category}/${filename}`] || {};
    return { filename, image, meta };
  });

  // Explicit `order` wins; unordered photos fall back to filename, so a
  // consistent (if arbitrary) position rather than glob/filesystem order.
  raw.sort((a, b) => {
    const ao = a.meta.order ?? null;
    const bo = b.meta.order ?? null;
    if (ao !== null && bo !== null) return ao - bo;
    if (ao !== null) return -1;
    if (bo !== null) return 1;
    return a.filename.localeCompare(b.filename);
  });

  byCategory[category] = raw.map(({ filename, image, meta }, index) => {
    // Only a real `caption` in photo-meta.js counts as "captioned" — a
    // caption auto-generated from the filename (e.g. a WhatsApp export like
    // "IMG-20260816-WA0060.jpg") is a fallback for `alt` text, not something
    // to print on the page, so callers check `hasCaption` before showing it.
    const hasCaption = Boolean(meta.caption);
    const caption = meta.caption || prettify(filename);
    const alt = meta.alt || `${caption} — ${CATEGORY_NOUN[category]} by N.D.I.`;
    // Every 5th photo (by final sort position) spans two grid columns by
    // default, so a gallery of plain, un-annotated photos still gets some
    // masonry-style rhythm instead of a flat grid.
    const wide = meta.wide ?? (index + 1) % 5 === 0;
    return {
      key: `${category}/${filename}`,
      filename,
      image,
      caption,
      hasCaption,
      // The Home page's small preview grid uses a shorter caption than the
      // full Projects gallery where there's room for detail — falls back to
      // the regular caption if no shorter one is given.
      homeCaption: meta.homeCaption || caption,
      alt,
      heroAlt: meta.heroAlt || alt,
      featured: meta.featured ?? false,
      hero: meta.hero ?? false,
      heroOrder: meta.heroOrder ?? meta.order ?? index,
      wide,
    };
  });
}

/** All photos in a category, in display order. */
export function getPhotos(category) {
  return byCategory[category] || [];
}

/** Whether any real photos exist for a category yet (vs. still a placeholder). */
export function hasPhotos(category) {
  return getPhotos(category).length > 0;
}

/** Up to `count` photos marked `featured: true`; falls back to the first `count` if none are marked. */
export function getFeatured(category, count) {
  const all = getPhotos(category);
  const marked = all.filter((p) => p.featured);
  const picked = marked.length ? marked : all;
  return picked.slice(0, count);
}

/** Up to `count` kitchen photos marked `hero: true`, in heroOrder; falls back to the first `count`. */
export function getHeroPhotos(count = 6) {
  const all = getPhotos('kitchens');
  const marked = all.filter((p) => p.hero).sort((a, b) => a.heroOrder - b.heroOrder);
  const picked = marked.length ? marked : all;
  return picked.slice(0, count);
}

/** A single named photo, e.g. for a fixed (non-gallery) placement. Returns null if not found. */
export function getPhotoByFilename(category, filename) {
  return getPhotos(category).find((p) => p.filename === filename) || null;
}
