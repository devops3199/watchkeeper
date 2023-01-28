<script setup lang="ts">
const { data } = await useAsyncData("users", () => $fetch("/api/user"));
</script>
<template>
  <NuxtLayout name="default">
    <div>
      <h1>Home</h1>
    </div>
    <div>
      <h2>Data</h2>
      <p v-if="data">{{ data[0].name }}</p>
    </div>
  </NuxtLayout>
</template>
<style scoped></style>
