import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/chat-service/ws": {
        target: "http://61.77.108.167:8000/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  define: {
    global: {},
  },
});
