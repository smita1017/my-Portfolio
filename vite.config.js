import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/my-Portfolio/', // 🔥 This is crucial for GitHub Pages deployment

  plugins: [react(),tailwindcss()],
})
