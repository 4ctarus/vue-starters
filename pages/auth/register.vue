<template>
  <h1 class="title-large">{{ $t("Inscription") }}</h1>

  <div class="flex flex-col gap-2">
    <label class="label flex flex-col gap-1">
      {{ $t("Email") }}
      <Input type="text" />
    </label>

    <label class="label flex flex-col gap-1">
      {{ $t("Password") }}
      <Input type="password" />
    </label>

    <label class="label flex flex-col gap-1">
      {{ $t("Password") }}
      <Input type="password" />
    </label>

    <Button filled>
      <span>{{ $t("S'inscrire") }}</span>
    </Button>
    <NuxtLink to="/auth/login">
      <Button>
        <span>{{ $t("Se connecter") }}</span>
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { $t } = useNuxtApp();
</script>
