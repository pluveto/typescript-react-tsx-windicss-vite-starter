import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS(),
  ],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src'),
      "@/assets": path.resolve(__dirname, './src/assets'),
      "@/components": path.resolve(__dirname, './src/components'),
      "@/utils": path.resolve(__dirname, './src/utils'),
      "@/lib": path.resolve(__dirname, './src/lib'),
    }
  }
})
