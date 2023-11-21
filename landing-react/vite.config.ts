import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'dist',
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 8002
  },
  plugins: [
    federation({
      name: 'landing-react-project',
      filename: 'remoteEntry.js',
      exposes: {
        './LandingApp': './src/main.tsx'
      },
      shared: packageJson.dependencies
    }),
    react()
  ],
})
