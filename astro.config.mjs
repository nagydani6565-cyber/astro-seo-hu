// playground/astro.config.mjs
import { defineConfig } from 'astro/config';
import seoHu from 'astro-seo-hu';

export default defineConfig({
  integrations: [
    seoHu({
      thresholds: {
        titleMax: 60,
        descriptionMax: 155,
      },
      report: {
        console: true,
        json: true,   
        html: true,   
      },
      licenseKey: 'SEOHU-ABCD-1234-WXYZ', // Most már aktív!
    }),
  ],
});