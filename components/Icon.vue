<template>
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <use :href="`/assets/icons.svg#${name}`" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>
