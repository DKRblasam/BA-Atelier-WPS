// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname, // Alias para src/
        "@cmp": new URL("./src/components", import.meta.url).pathname, // Alias para src/components/
        "@lyt": new URL("./src/layouts", import.meta.url).pathname, // Alias para src/layouts/
        "@pgs": new URL("./src/pages", import.meta.url).pathname, // Alias para src/pages/
        "@uts": new URL("./src/utils", import.meta.url).pathname, // Alias para src/utils/
        "@sty": new URL("./src/styles", import.meta.url).pathname, // Alias para src/styles/
        "@ast": new URL("./src/assets", import.meta.url).pathname, // Alias para src/assets/
      },
    },
  },
  integrations: [clerk()],
  adapter: node({ mode: "standalone" }),
  output: "server",
});
