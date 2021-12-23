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
    <use :href="imageUrl" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>();

const imageUrl = computed(() => {
  return `/assets/icons.svg#${props.name}`;
});
</script>
