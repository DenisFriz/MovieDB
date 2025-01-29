/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Inspect from "vite-plugin-inspect";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Inspect()],
  base: "/MovieDB",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@api",
        replacement: fileURLToPath(new URL("./src/api", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("./src/hooks", import.meta.url)),
      },
      {
        find: "@redux",
        replacement: fileURLToPath(new URL("./src/redux", import.meta.url)),
      },
      {
        find: "@routes",
        replacement: fileURLToPath(new URL("./src/routes", import.meta.url)),
      },
      {
        find: "@themeContext",
        replacement: fileURLToPath(
          new URL("./src/themeContext", import.meta.url)
        ),
      },
      {
        find: "@ui",
        replacement: fileURLToPath(new URL("./src/ui", import.meta.url)),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
    ],
  },
});
