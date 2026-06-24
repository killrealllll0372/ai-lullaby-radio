import { defineConfig } from "vite";

export default defineConfig({
  base: "/ai-lullaby-radio/",
  publicDir: "music",
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
