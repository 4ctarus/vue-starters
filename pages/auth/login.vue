<template>
  <h1 class="title-large">{{ $t("Connexion") }}</h1>

  <form class="flex flex-col gap-2" novalidate @submit.prevent="onSubmit">
    <label class="label flex flex-col gap-1">
      {{ $t("Email") }}
      <Input type="text" />
    </label>

    <label class="label flex flex-col gap-1">
      {{ $t("Password") }}
      <Input type="password" />
    </label>

    <Button filled type="submit">
      <span>{{ $t("Se connecter") }}</span>
    </Button>
    <NuxtLink to="/auth/register">
      <Button>
        <span>{{ $t("S'inscrire") }}</span>
      </Button>
    </NuxtLink>
  </form>
</template>

<script setup lang="ts">
import useToken from "~~/composables/useToken";

const { $t } = useNuxtApp();
const token = useToken();

function onSubmit(evt: Event) {
  const htmlFormEl = evt.target as HTMLFormElement;
  if (htmlFormEl.checkValidity()) {
    token.value = "token";
  }
}
</script>
