<script setup lang="ts">
const { loginViaGoogle } = useAuth();
</script>
<template>
  <NuxtLayout name="default">
    <div>
      <button @click="loginViaGoogle">구글 로그인</button>
    </div>
  </NuxtLayout>
</template>
<style scoped></style>
