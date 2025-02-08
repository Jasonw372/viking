import {coverageConfigDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom as the testing environment
    globals: true, // Allow using global variables like "describe" and "it"
    setupFiles: './vitest.setup.ts', // Optional: path to setup file
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'json-summary'],
      reportsDirectory: './coverage',
      reportOnFailure: true,
      exclude: [
        '**/*.stories.tsx',
        ...coverageConfigDefaults.exclude,
        'src/index.tsx',
        'storybook-static',
      ],
      thresholds: {
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 60,
      },
    },
  },
});