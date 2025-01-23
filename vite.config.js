import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/vite-deployment/",
  base: "http://localhost:3001/",
  dev: {
    host: true,
    port: 8080,
  },
});
