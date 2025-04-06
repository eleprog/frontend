import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteSingleFile } from "vite-plugin-singlefile"
import { ViteMinifyPlugin } from 'vite-plugin-minify'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteSingleFile(),
    ViteMinifyPlugin({}),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
