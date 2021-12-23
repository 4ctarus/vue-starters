import { defineNuxtConfig } from 'nuxt3';
import postcssOptions from './postcss.config';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions,
    },
  },
  css: ['@/assets/css/variables.css', '@/assets/css/main.css'],
});
