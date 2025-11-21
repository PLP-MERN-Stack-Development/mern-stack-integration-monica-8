// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configure proxy to forward API requests to the Express server
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Assuming server runs on 5000
        changeOrigin: true,
        secure: false,
      },
    },
  },
});