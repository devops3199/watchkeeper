<script setup lang="ts">
import {Brand} from '@/model/brand';

const brands: Array<Brand> = [
  {
    engName: 'Tudor',
    korName: '튜더',
    website: 'https://www.tudorwatch.com/ko',
    wiki: 'https://namu.wiki/w/TUDOR',
    thumbnail: '',
  },
  {
    engName: 'Longines',
    korName: '론진',
    website: 'https://www.longines.com/kr/',
    wiki: 'https://namu.wiki/w/Longines',
    thumbnail: '',
  },
  {
    engName: 'IWC',
    website: 'https://www.iwc.com/kr/ko/home.html',
    wiki: 'https://namu.wiki/w/IWC',
    thumbnail: '',
  },
];
</script>
<template>
  <NuxtLayout name="default">
    <section class="brand-cards">
      <BrandCard
        v-for="(brand, index) in brands"
        :key="`brand-${index}`"
        :data="brand"
      />
    </section>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.brand-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin: 32px 0;
}
</style>
