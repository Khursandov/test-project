/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    include: ['**/*.{test,spec,cy}.?(c|m)[jt]s?(x)'],
    globals: true,
    environment: 'jsdom'
  },
  optimizeDeps: {
    include: ['vue', '@vue/test-utils']
  }
})
