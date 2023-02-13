/// <reference types="vitest" />
/// <reference types="vite/client" />
import solid from "solid-start/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid(
    { ssr: true, rootEntry: "src/root.tsx", serverEntry: "src/entry-server.tsx", clientEntry: "src/entry-client.tsx" },


  )],
  test: {
    deps: {
      registerNodeLoader: true,
      inline: [/solid-js/],
    },
    environment: "jsdom",
    globals: true,
    setupFiles: [
      "node_modules/@testing-library/jest-dom/extend-expect",
      "./setupVitest.js",
    ],
    transformMode: { web: [/\.[jt]sx?$/] },
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
