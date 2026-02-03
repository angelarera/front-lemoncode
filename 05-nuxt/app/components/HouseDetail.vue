<script setup lang="ts">
import type { House } from "~/types/house";

interface Props {
  house: House;
}

const { house } = defineProps<Props>();
</script>

<template>
  <div v-if="house" class="house-detail">
    <!-- Title + img -->
    <div class="house-detail__title">
      <h1 class="house-detail__name">{{ house.name }}</h1>
      <p class="house-detail__price">{{ house.price }} €</p>
    </div>

    <!-- Main info -->
    <div class="house-detail__main-info">
      <!-- Image -->
      <div class="house-detail__image-column">
        <figure class="house-detail__image-container">
          <NuxtImg
            :src="house.image"
            :alt="`Foto de ${house.name}`"
            width="700"
            height="500"
            :sizes="'(max-width: 992px) 100vw, 700px'"
            fit="cover"
            loading="lazy"
            quality="90"
            class="house-detail__image"
          />
        </figure>
      </div>

      <!-- Rest of the info -->
      <div class="house-detail__info-column">
        <!-- Description -->
        <section class="house-detail__section">
          <h2 class="house-detail__section-title">Descripción</h2>
          <p class="house-detail__description">{{ house.description }}</p>
        </section>
        <!-- Details -->
        <section class="house-detail__section">
          <h2 class="house-detail__section-title">Detalles de la casa</h2>
          <div class="house-detail__details-grid">
            <div class="house-detail__detail-item">
              <span class="house-detail__detail-label">Dirección: </span>
              <span class="house-detail__detail-value"
                >{{ house.address }}, {{ house.city }},
                {{ house.country }}</span
              >
            </div>
            <div class="house-detail__detail-item">
              <span class="house-detail__detail-label">Habitaciones: </span>
              <span class="house-detail__detail-value">{{
                house.bedrooms
              }}</span>
            </div>
            <div class="house-detail__detail-item">
              <span class="house-detail__detail-label">Baños: </span>
              <span class="house-detail__detail-value">{{
                house.bathrooms
              }}</span>
            </div>
          </div>
        </section>

        <!-- Amenities -->
        <section
          v-if="house.amenities && house.amenities.length > 0"
          class="house-detail__section"
        >
          <h2 class="house-detail__section-title">Comodidades</h2>
          <ul class="house-detail__amenities-list">
            <li
              v-for="(amenity, index) in house.amenities"
              :key="index"
              class="house-detail__amenity-item"
            >
              ✅ {{ amenity }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.house-detail__name {
  font-size: var(--font-size-xxlarge);
  font-weight: 800;
  line-height: 115%;
  text-transform: uppercase;
}

.house-detail__price,
.house-detail__reviews-section .house-detail__section-title,
.house-detail__rating {
  font-size: var(--font-size-xlarge);
  font-weight: 600;
}

.house-detail__image-container {
  position: relative;
  width: 100%;
  height: 50vw;
  max-width: 100%;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.house-detail__title,
.house-detail__main-info,
.house-detail__image-container,
.house-detail__section {
  margin-bottom: var(--spacing-lg);
}

.house-detail__image {
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center center;
}

.house-detail__section-title {
  font-size: var(--font-size-large);
  font-weight: 600;
}

.house-detail__detail-item,
.house-detail__amenity-item {
  margin-bottom: var(--spacing-xs);
}

.house-detail__detail-label {
  font-weight: 500;
}

.house-detail__reviews-section {
  padding-top: var(--spacing-lg);
  border-top: 3px solid var(--colour-grey-light);
}

.house-detail__section-top {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 992px) {
  .house-detail__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .house-detail__main-info {
    margin-bottom: var(--spacing-xxl);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xxl);
    align-items: stretch;
  }

  .house-detail__image-container {
    height: 100%;
  }

  .house-detail__section:last-of-type {
    margin-bottom: 0;
  }

  .house-detail__reviews-section {
    padding-top: var(--spacing-xxl);
  }
}
</style>
