import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PORT ?? 3100);

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 60_000,
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    launchOptions: process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : undefined,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    {
      command: "node tests/e2e/mock-webhook.mjs",
      url: "http://localhost:3199/health",
      reuseExistingServer: true,
    },
    {
      command: `npm run start -- -p ${PORT}`,
      url: `http://localhost:${PORT}`,
      reuseExistingServer: true,
      env: { LEAD_WEBHOOK_URL: "http://localhost:3199/lead", LEAD_WEBHOOK_SECRET: "e2e-secret" },
    },
  ],
});
