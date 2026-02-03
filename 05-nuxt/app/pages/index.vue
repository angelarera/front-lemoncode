<script setup lang="ts">
const config = useRuntimeConfig();
const { data: houses } = await useFetch("/api/houses");

useSeoMeta({
  title: `${config.public.siteName} - Home`,
  description: "Listado de casas rurales disponibles para tus vacaciones.",
});
</script>

<template>
  <h1 class="list-title">Casas rurales disponibles</h1>
  <ul class="house-list">
    <HouseCard v-for="h in houses" :key="h.id" :house="h" />
  </ul>
</template>

<style>
.list-title {
  margin: var(--spacing-lg);
  font-size: var(--font-size-xxlarge);
  font-weight: 800;
  line-height: 115%;
  text-transform: uppercase;
  text-align: center;
}

.house-list {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: var(--spacing-xl);
  row-gap: var(--spacing-xxl);
}

@media (min-width: 768px) {
  .house-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .house-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
