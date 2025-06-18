// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import { esMX } from "@clerk/localizations";
import { neobrutalism } from "@clerk/themes";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    clerk({
      localization: esMX,
      appearance: {
        baseTheme: neobrutalism,
      },
    }),
  ],
  adapter: node({ mode: "standalone" }),
  output: "server",
});
