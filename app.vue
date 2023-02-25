<script setup lang="ts">
import {onAuthStateChanged} from 'firebase/auth';

const {$auth} = useNuxtApp();
const user = useUser();

const isCheckingAuth = ref(true);

onBeforeMount(() => {
  onAuthStateChanged($auth, (currentUser) => {
    if (currentUser) {
      user.value = {
        name: currentUser.displayName ?? '익명',
        email: currentUser.email ?? undefined,
        role: 'user',
      };
    }

    isCheckingAuth.value = false;
  });
});
</script>
<template>
  <v-app>
    <!-- TODO: Skeleton -->
    <v-progress-linear
      v-if="isCheckingAuth"
      color="primary"
      height="10"
      indeterminate
    ></v-progress-linear>
    <NuxtPage v-else></NuxtPage>
  </v-app>
</template>
