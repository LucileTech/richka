// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/richka/", // Correct base path for GitHub Pages deployment
  build: {
    outDir: "dist", // Output directory
    assetsDir: ".", // Relative to outDir
  },
});
