import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/my-portfolio/",  // Must match your repo name
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
})
