import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],

  server: {
    port: 3000,
    host: true,
    open: "/",
  },

  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
