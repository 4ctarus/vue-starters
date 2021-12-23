import { RouteLocationRaw } from 'vue-router';
import { useState } from '#app';

export default function () {
  return useState<RouteLocationRaw>('routeAfterAuth', () => ({
    name: 'home',
  }));
}
