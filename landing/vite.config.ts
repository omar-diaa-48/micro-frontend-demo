import federation from "@originjs/vite-plugin-federation";
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [
    vue(),
    federation({
      name: 'landing',
      filename: 'remoteEntry.js',
      exposes: {
        './LandingApp': './src/main.ts'
      },
      shared: packageJson.dependencies
    })
  ],
})
