import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "lib",
    lib: {
      entry: 'src/ba-calendar.js',
      formats: ['es'],
      name: 'Ba Calendar',
    },
    // rollupOptions: {
    //   external: /^lit/
    // }
  }
})
