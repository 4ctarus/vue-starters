<template>
  <div class="flex min-h-screen p-4">
    <div
      class="
        auth-card
        w-96
        max-w-full
        flex flex-col
        gap-4
        align-self-center
        m-auto
      "
    >
      <NuxtChild />

      <Separator class="px-2">{{ $t("ou") }}</Separator>

      <Button icon outlined>
        <Icon name="google" stroke="none" />
        <span>{{ $t("Continuer avec Google") }}</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $t } = useNuxtApp();
</script>
