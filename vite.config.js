import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Faz o Vite escutar todas as interfaces de rede
    port: 5173,      // Define a porta 5173, que você já liberou
  },
});
