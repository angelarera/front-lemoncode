import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { analyzer } from "vite-bundle-analyzer";
import compression from "vite-plugin-compression";

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false,
    },
  },
  plugins: [
    checker({ typescript: true }),
    analyzer(),
    compression({ algorithm: "gzip", ext: ".gz", threshold: 0 }),
    compression({ algorithm: "brotliCompress", ext: ".br", threshold: 0 }),
  ],
});
