import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true, // Ensures polyfills are imported for protocols like `node:buffer`
    }),
  ],
  resolve: {
    alias: {
      buffer: 'buffer/', // Ensure `Buffer` is aliased to the polyfill
    },
  },
});
