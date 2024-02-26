import { defineConfig, devices } from '@playwright/test';

const port = 5173;
const baseURL = `http://localhost:${port}`;

export default defineConfig({
  testDir: './src/__tests__/e2e',
  timeout: 30 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  maxFailures: process.env.CI ? 10 : undefined,

  webServer: {
    command: 'npm run dev',
    reuseExistingServer: !process.env.CI,
    url:
      process.env.PLAYWRIGHT_TEST_BASE_URL ||
      baseURL ||
      'http://localhost:5173',
  },

  use: {
    ignoreHTTPSErrors: true,
    baseURL:
      process.env.PLAYWRIGHT_TEST_BASE_URL ||
      baseURL ||
      'http://localhost:5173',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    ...(process.env.CI
      ? [
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
          },
          {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
          },
        ]
      : []),
  ],
});
