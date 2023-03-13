<script setup lang="ts">
const user = useUser();
</script>
<template>
  <NuxtLayout name="default">
    <div class="content">
      <section class="my-info">
        <h3>내 정보</h3>
        <div v-if="user">
          <div>이메일: {{ user.email }}</div>
          <div>이름: {{ user.name }}</div>
        </div>
      </section>
      <section class="my-posts">
        <h3>내가 쓴 글</h3>
        <div></div>
      </section>
    </div>
  </NuxtLayout>
</template>
<style scoped lang="scss">
.content {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  max-width: 1080px;

  .my-info {
    width: 300px;
  }

  .my-posts {
    width: 500px;
  }
}
</style>
