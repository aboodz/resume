import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'dev-csr',
      apply: 'serve',
      transformIndexHtml: () => [
        {
          tag: 'script',
          attrs: { type: 'module', src: '/src/dev-entry.tsx' },
          injectTo: 'body',
        },
      ],
    },
  ],
});
