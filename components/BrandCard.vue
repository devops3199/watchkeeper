<script setup lang="ts">
import {Brand} from '@/model/brand';

const props = defineProps<{data: Brand}>();

const {data} = toRefs(props);
</script>
<template>
  <v-card width="300">
    <div class="brand-logo">
      <img :src="data.thumbnail" :alt="data.engName" />
    </div>

    <v-divider></v-divider>

    <v-card-title>
      {{ data.engName }}
      {{ data.korName && `(${data.korName})` }}
    </v-card-title>

    <v-card-actions>
      <div class="actions">
        <v-btn :href="data.website" target="_blank" color="secondary">
          온라인 부티크
        </v-btn>
        <v-btn :href="data.wiki" target="_blank" color="secondary">
          나무위키 (설명)
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<style lang="scss" scoped>
.brand-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;

  img {
    height: 100px;
  }
}

.actions {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
