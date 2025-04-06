import react from "@vitejs/plugin-react";
import { defineConfig, UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.js",
    css: true,
    include: ["**/*.test.tsx"],
    exclude: ["node_modules", "**/*.stories.tsx"],
  },
} as UserConfig);
