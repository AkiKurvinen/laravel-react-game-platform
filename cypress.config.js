import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    defaultCommandTimeout: 20000, // 20 seconds
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
