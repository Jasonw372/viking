import {coverageConfigDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom as the testing environment
    globals: true, // Allow using global variables like "describe" and "it"
    setupFiles: './vitest.setup.ts', // Optional: path to setup file
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
      exclude: [ '**/*.stories.tsx',...coverageConfigDefaults.exclude],
    }
  }
});