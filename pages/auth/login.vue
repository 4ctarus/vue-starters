<template>
  <div class="flex flex-col gap-2">
    <h1>{{ $t("Connexion") }}</h1>

    <Input type="text" />
    <Input icon filled type="password">
      <Icon name="google" stroke="none" />
    </Input>
    <Input outlined type="password" />
    <Input icon outlined type="password">
      <Icon name="google" stroke="none" />
    </Input>

    <Button filled>
      <span>{{ $t("Se connecter") }}</span>
    </Button>
    <NuxtLink to="/auth/register">
      <Button>
        <span>{{ $t("S'inscrire") }}</span>
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { $t } = useNuxtApp();
</script>
