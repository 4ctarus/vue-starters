<template>
  <div class="flex min-h-screen p-4">
    <div
      class="auth-card flex flex-col gap-4 max-w-full align-self-center m-auto"
    >
      <NuxtChild />

      <Separator>{{ $t("ou") }}</Separator>

      <Button icon outlined>
        <Icon name="google" stroke="none" />
        <span>{{ $t("continue_with_google") }}</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $t } = useNuxtApp();
</script>
