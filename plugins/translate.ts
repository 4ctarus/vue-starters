import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      t: (key: string) => key,
    },
  };
});
