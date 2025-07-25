import { defineConfig } from 'astro/config';

export default defineConfig({
  style: {
    scss: {
      includePaths: ['./src/styles'],
    },
  },
});
