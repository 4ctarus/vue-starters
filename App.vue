<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const isLogged = useIsLogged();
const routeAfterAuth = useRouteAfterAuth();

const restrictedRouteName = ['home'];

if (!isLogged.value && restrictedRouteName.includes(route.name)) {
  // access to need auth page but is not logged
  routeAfterAuth.value = { name: route.name };
  router.push({ name: 'auth-login' });
}

watch(
  () => isLogged.value,
  (isLogged, prevIsLogged) => {
    console.log(isLogged, prevIsLogged, routeAfterAuth.value);
    if (isLogged && !prevIsLogged) {
      // has logged
      router.push(routeAfterAuth.value);
    }
  },
);

router.beforeEach((to) => {
  console.log(to.name);

  if (!isLogged.value && restrictedRouteName.includes(to.name)) {
    routeAfterAuth.value = to;
    return { name: 'auth-login' };
  }
});
</script>
