import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'D:/Project/github/new-ruman-v2/frontend',
        'D:/Project/github/new-ruman-v2/node_modules/@fortawesome/fontawesome-free/webfonts'
      ]
    }
  }
})
