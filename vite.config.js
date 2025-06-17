import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/CV-builder-/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["fsevents"], // ✅ Tell Vite not to optimize/bundle this
  },
});
