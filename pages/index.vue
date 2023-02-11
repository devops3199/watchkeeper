<script setup lang="ts">
const { loginViaGoogle } = useAuth();
</script>
<template>
  <NuxtLayout name="default">
    <v-btn @click="loginViaGoogle">구글 로그인</v-btn>
  </NuxtLayout>
</template>
<style scoped></style>
