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

  <section v-if="house?.reviews?.length" class="reviews-section">
    <div class="reviews-section__top-section">
      <h2 class="reviews-section__title">Reviews</h2>
      <span class="reviews-section__rating"
        >⭐ {{ house.ratingAverage.toFixed(1) }}/5</span
      >
    </div>
    <div class="reviews-section__reviews-list">
      <ReviewCard
        v-for="review in house.reviews"
        :key="review.id"
        :review="review"
      />
    </div>
  </section>
  <div v-else class="no-reviews">
    <p>Esta casa aún no tiene reseñas.</p>
  </div>
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

.reviews-section {
  padding-top: var(--spacing-lg);
  border-top: 3px solid var(--colour-grey-light);
}

.reviews-section__rating {
  font-size: var(--font-size-xlarge);
  font-weight: 600;
}

.reviews-section__top-section {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 992px) {
  .reviews-section {
    padding-top: var(--spacing-xxl);
  }
}
</style>
