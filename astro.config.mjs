import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Because the repo is named `utoledo-swim-club.github.io`, the site
  // deploys to the root of the org's github.io domain. No base path needed.
  // If you ever rename the repo to something else, add: base: '/repo-name'
  site: 'https://utoledo-swim-club.github.io',
  trailingSlash: 'ignore',
});
