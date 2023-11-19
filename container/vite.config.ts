import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        'landing': 'landing@http://localhost:3001/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ],
})
