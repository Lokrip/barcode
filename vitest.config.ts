import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    pool: 'threads',
    env: {
      FORCE_COLOR: '1',
    },
    hideSkippedTests: true,
    exclude: [
      // default
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      // some artifacts in the fixtures have spec files that we're not using
      '**/*.spec.js',
    ],
  },
});
