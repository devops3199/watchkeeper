<script setup lang="ts">
const {getPinnedMessage} = useDocs();
const {data: message} = useAsyncData(getPinnedMessage);
</script>
<template>
  <PinnedMessages v-if="message">{{ message }}</PinnedMessages>
  <Navbar></Navbar>
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
