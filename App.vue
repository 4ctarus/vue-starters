<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const router = useRouter();
const user = useUser();

watch(
  () => user.value,
  (user, prevUser) => {
    if (user && !prevUser) {
      router.push({ path: "/home" });
    }
  }
);

router.beforeEach((to, from) => {
  console.log(to.name);
  switch (to.name) {
    // need login
    case "home":
      if (!user.value) {
        return "/auth/login";
      }
      break;

    default:
      return;
  }
});
</script>
