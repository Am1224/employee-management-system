import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> fe3a3eb2d16ea3a8f3be2ceca003d99dec90c76b
})
