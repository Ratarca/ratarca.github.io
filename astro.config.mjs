import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ratarca.github.io',
  output: 'static',
  build: {
    // Cached HTML must retain its styles after GitHub Pages replaces a deployment.
    inlineStylesheets: 'always'
  }
});
