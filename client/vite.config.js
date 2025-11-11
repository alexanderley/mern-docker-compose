import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // optional, but good to have
  plugins: [react()],
  server: {
    port: 5173, // ← Must be 5173 unless you change it
    host: "0.0.0.0", // ✅ Must be 0.0.0.0 so Docker can reach it
    strictPort: true,
    // host: "0.0.0.0", // ✅ This is the key!
    // origin: "http://0.0.0.0:5173", // ❌ Don't use `origin` here
  },
  preview: {
    port: 5173, // or 5137 if you want to use that
    host: "0.0.0.0", // ✅ Must be 0.0.0.0
  },
});
