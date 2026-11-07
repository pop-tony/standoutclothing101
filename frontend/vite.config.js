import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, proxy: { '/api': 'http://localhost:5000' } }
})
// DO NOT add tailwindcss / postcss here.
// The exact preview uses Tailwind CDN inside index.html.
// Adding Tailwind build is what broke the style last time.
