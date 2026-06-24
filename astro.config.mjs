// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://candidato-amauri.com.br',
  integrations: [
    tailwind({
      // Global styles are imported manually in the Layout for control over @layer order
      applyBaseStyles: false,
    }),
  ],
});
