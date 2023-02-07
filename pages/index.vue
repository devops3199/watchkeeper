<script setup lang="ts">
const { loginWithGoogle } = useAuth();
</script>
<template>
  <NuxtLayout name="default">
    <div>
      <button @click="loginWithGoogle">구글 로그인</button>
    </div>
  </NuxtLayout>
</template>
<style scoped></style>
