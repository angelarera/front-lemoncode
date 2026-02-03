<script setup lang="ts">
import type { House } from "~/types/house";

interface Props {
  house: House;
}

const { house } = defineProps<Props>();

const averageRating = computed(() => {
  if (house.ratingAverage !== undefined && house.ratingAverage !== null) {
    return house.ratingAverage.toFixed(1);
  }

  // Fallback
  if (!house.reviews || house.reviews.length === 0) return "0.0";
  const total = house.reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / house.reviews.length).toFixed(1);
});
</script>

<template>
  <li class="house">
    <NuxtLink class="link" :to="`/houses/${house.id}`">
      <figure class="house__image-container">
        <NuxtImg
          :src="house.image"
          :alt="`Foto de ${house.name}`"
          width="400"
          height="300"
          :sizes="'(max-width: 768px) 100vw, (max-width: 1200px) 550px, 360px'"
          fit="cover"
          loading="lazy"
          quality="90"
          class="house__image"
        />
      </figure>
      <div class="house__title-rating">
        <h2 class="house__title">{{ house.name }}</h2>
        <p class="house__rating">⭐ {{ averageRating }}</p>
      </div>
      <div class="house__details">
        <p>{{ house.city }}, {{ house.country }}</p>
        <p>{{ house.price }} €</p>
      </div>
    </NuxtLink>
  </li>
</template>

<style>
.house * {
  transition: 0.3s ease-in-out;
}

.house:hover * {
  color: var(--colour-accent);
}

.house__image-container {
  position: relative;
  margin-bottom: var(--spacing-sm);
  max-width: 100%;
  height: 300px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.house__image {
  width: auto;
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center center;
}

.house__title-rating {
  display: flex;
  justify-content: space-between;
}

.house__title,
.house__rating {
  color: var(--colour-black);
  font-size: var(--font-size-large);
  font-weight: 600;
}

.house__details {
  color: var(--colour-grey-dark);
  font-size: var(--font-size-small);
  font-weight: 500;
  line-height: 150%;
}
</style>
