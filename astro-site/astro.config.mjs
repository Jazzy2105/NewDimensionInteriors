// @ts-check
import { defineConfig } from 'astro/config';

// Deployed via GitHub Pages as a project site (not a custom domain), which
// serves everything under /NewDimensionInteriors/ rather than the domain
// root — see .github/workflows/deploy.yml. `GITHUB_ACTIONS` is set
// automatically by every GitHub Actions runner, so this only affects the
// production build; `npm run dev`/`npm run build` locally still use "/",
// unchanged. Every internal link/absolute asset path in the site goes
// through src/lib/url.js's `withBase()` so it works in both cases.
const isGithubActionsBuild = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://Jazzy2105.github.io',
  base: isGithubActionsBuild ? '/NewDimensionInteriors' : '/',
});
