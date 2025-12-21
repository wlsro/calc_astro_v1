// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Повна адреса вашого сайту (БЕЗ назви репозиторію в кінці)
  site: 'https://wlsro.github.io',

  // 2. Назва вашого репозиторію з початковим слешем
  // Наприклад, якщо репозиторій називається "baget-site", то '/baget-site'
  base: '/calc_astro_v1',
  vite: {
    plugins: [tailwindcss()]
  }
});