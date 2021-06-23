import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    proxy: {
      "^/webhooks/.*": "http://localhost:4000/webhooks",
      "^/graphql/.*": "http://localhost:4000/graphql",
    },
  },
});
