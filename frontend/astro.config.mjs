// @ts-check
// https://astro.build/config
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';



import node from "@astrojs/node";
import clerk from "@clerk/astro";
import { neobrutalism } from "@clerk/themes";
import { esMX } from '@clerk/localizations'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    clerk({
      appearance: {
        captcha: {
          theme: "dark",
          size: "flexible",
          language: "es-MX",
        },
        baseTheme: neobrutalism,
      },
      localization: esMX,
    }),
  ],

  adapter: node({
    mode: "standalone",
  }),
});