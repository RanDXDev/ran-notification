import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "./",
  resolve: {
    alias: {
      $utils: resolve(__dirname, "src/lib/utils"),
      $store: resolve(__dirname, "src/lib/store"),
      $lib: resolve(__dirname, "src/lib"),
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "js/[name].js",
        entryFileNames: "js/[name].js",
      },
    },
  },
});
