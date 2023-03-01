<script setup lang="ts"></script>
<template>
  <pinned-messages>안녕하세요. 서비스 개발 중 입니다.</pinned-messages>
  <navbar></navbar>
  <div class="default-layout">
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.default-layout {
  margin: 0 auto;
}
.content {
  max-width: 1080px;
}
</style>
