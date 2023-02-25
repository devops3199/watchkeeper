<script setup lang="ts">
import {onAuthStateChanged} from 'firebase/auth';

const {$auth} = useNuxtApp();

onAuthStateChanged($auth, (user) => {
  if (user) {
    console.log(user, 'yes');
  }
});
</script>
<template>
  <NuxtLayout name="default" />
</template>
<style scoped></style>
