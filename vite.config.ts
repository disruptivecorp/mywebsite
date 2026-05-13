import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config — minimal. React plugin provides JSX/fast-refresh. The custom
// domain (alejandroscaffa.com) serves from the root, so `base` is "/".
// If we ever fall back to deploying at github.io/mywebsite, change base to "/mywebsite/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
