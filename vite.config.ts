import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/lib/Counter.svelte',
      name: 'ModalWC',
    },
  },
  plugins: [
    svelte({
      exclude: ['./src/lib/Counter.svelte'],
    }),
    svelte({
      exclude: ['./src/App.svelte'],
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
