// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Повна адреса вашого сайту (БЕЗ назви репозиторію в кінці)
  site: 'https://calc-astro-v1.pages.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});