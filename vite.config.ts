import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    exclude: ['**/node_modules/**', './src/__tests__/e2e/**'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
  },
};

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
    tsconfigPaths(),
  ],
  test: vitestConfig.test,
  base: '/food-menu-frontend-challenge/',
});
