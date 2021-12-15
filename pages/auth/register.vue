<template>
  <div>
    <h1>{{ $t("Connexion") }}</h1>

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
