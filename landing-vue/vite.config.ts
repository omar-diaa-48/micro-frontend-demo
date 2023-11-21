import federation from "@originjs/vite-plugin-federation";
import vue from '@vitejs/plugin-vue';
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
    port: 8001
  },
  plugins: [
    federation({
      name: 'landing-vue-project',
      filename: 'remoteEntry.js',
      exposes: {
        './LandingApp': './src/main.ts'
      },
      shared: packageJson.dependencies
    }),
    vue(),
  ],
})
