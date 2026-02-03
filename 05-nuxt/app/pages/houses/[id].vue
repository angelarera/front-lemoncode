<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const id = route.params.id as string;

const { data: house } = await useFetch(`/api/houses/${id}`);

useSeoMeta({
  title: `${house.value?.name} - ${config.public.siteName}`,
  description: "house.value?.description",
});

if (!house.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Casa no encontrada",
  });
}
</script>

<template>
  <NuxtLink to="/" class="back-btn">← Volver al listado </NuxtLink>
  <HouseDetail v-if="house" class="house-detail" :house="house" />
</template>

<style scoped>
.back-btn {
  align-self: flex-start;
  padding-bottom: var(--spacing-md);
  color: var(--colour-primary);
  font-size: var(--font-size-large);
  font-weight: 600;
  transition: 0.3s ease-in-out;
}

.back-btn:hover {
  color: var(--colour-accent);
}
</style>
