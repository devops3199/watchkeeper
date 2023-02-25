<script setup lang="ts"></script>
<template>
  <div class="pinned-message">
    <slot />
  </div>
  <v-divider />
</template>
<style lang="scss" scoped>
.pinned-message {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #1187cf;
  user-select: none;
}
</style>
