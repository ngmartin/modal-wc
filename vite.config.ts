import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/lib/Modal.svelte",
      name: "ModalWC",
    },
  },
  plugins: [
    svelte({
      exclude: ["./src/lib/Modal.svelte"],
    }),
    svelte({
      exclude: ["./src/Example.svelte"],
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
