import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 8000
  },
  plugins: [
    federation({
      name: 'container-project',
      remotes: {
        'landing': 'http://localhost:8001/dist/assets/remoteEntry.js'
      },
      shared: packageJson.dependencies
    }),
    react(),
  ],
})
