<script setup lang="ts">
import {Brand} from '@/model/brand';

const props = defineProps<{data: Brand}>();

const {data} = toRefs(props);
</script>
<template>
  <v-card width="300">
    <template #title>
      {{ data.engName }}
      {{ data.korName && `(${data.korName})` }}
    </template>

    <template #subtitle>
      <div>
        <a :href="data.website" target="_blank">온라인 부티크</a>
      </div>
    </template>

    <template #text>
      <div>
        <a :href="data.wiki" target="_blank">나무위키 (설명)</a>
      </div>
    </template>
  </v-card>
</template>
<style lang="scss" scoped></style>
