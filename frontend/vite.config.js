import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser on server start
  },
  resolve: {
    alias: {
      // Set up path aliases if needed
      '@': '/src',
    },
  },
})
