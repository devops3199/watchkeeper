<script setup lang="ts">
const {getBrands} = useDocs();
const {data: brands} = useAsyncData(getBrands);
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
