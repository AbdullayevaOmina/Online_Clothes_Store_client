import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@components", replacement: "/src/components" },
      { find: "@ui", replacement: "/src/components/ui" },
      { find: "@icons", replacement: "/src/assets/icons.tsx" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@service", replacement: "/src/service" },
      { find: "@store", replacement: "/src/store/index" },
      {
        find: "@register-interfaces",
        replacement: "/src/interfaces/register.ts",
      },
      {
        find: "@like-interfaces",
        replacement: "/src/interfaces/like.ts",
      },
      {
        find: "@products-interface",
        replacement: "/src/interfaces/products.ts",
      },
      { find: "@router", replacement: "/src/router" },
      { find: "@routes", replacement: "/src/router/routes.tsx" },
      { find: "@token-service", replacement: "/src/utils/token-service.ts" },
      { find: "@service", replacement: "/src/service" },
      { find: "@modals", replacement: "/src/components/modals/index.tsx" },
    ],
  },
});
