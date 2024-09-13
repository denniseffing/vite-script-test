/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    clearMocks: true,
    environment: "happy-dom",
    globals: true,
    reporters: [
      ["default"],
      ["vitest-sonar-reporter", { outputFile: "reports/sonar-report.xml" }],
    ],
    setupFiles: ["vitest.setup.ts"],
  },
});
