// GitHub Pages serves this site from a subpath (github.io/<repo-name>/),
// not the domain root — see astro.config.mjs's `base` and the comment
// there. Every internal link/absolute asset path needs that prefix, or it
// 404s once deployed. Local dev keeps `base` at "/" (see astro.config.mjs),
// so this is a no-op there — nothing about local testing changes.
//
// Usage: withBase('/about'), withBase('projects'), withBase('/#contact'),
// withBase('favicon.ico') — leading slash optional, always normalized.
// Doesn't assume BASE_URL has (or lacks) a trailing slash — normalizes
// both sides itself so a stray double/missing slash can't sneak in.
export function withBase(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, ''); // "" locally, "/NewDimensionInteriors" in prod
  const clean = path.replace(/^\/+/, '');
  if (!clean) return base || '/';
  return `${base}/${clean}`;
}
