<script setup lang="ts">
import type { Review } from "~/types/house";

interface Props {
  review: Review;
}

const { review } = defineProps<Props>();
</script>

<template>
  <div v-if="review" class="review-card">
    <div class="review-card__header">
      <h3>{{ review.author }}</h3>
      <div class="review-card__rating">
        <span class="review-card__rating-number">
          {{ review.rating.toFixed(1) }}
        </span>
        {{ "⭐".repeat(review.rating) }}
      </div>
    </div>
    <p class="review-card__date">{{ review.date }}</p>
    <p class="review-card__comment">{{ review.comment }}</p>
  </div>
</template>

<style scoped>
.review-card {
  padding: var(--spacing-lg);
  margin-top: var(--spacing-md);
  border: 3px solid var(--colour-grey-light);
  border-radius: var(--border-radius-lg);
}

.review-card__header {
  font-size: var(--font-size-large);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}

.review-card__rating-number {
  margin-right: var(--spacing-sm);
}

.review-card__date {
  margin-bottom: var(--spacing-sm);
  color: var(--colour-grey-dark);
}
</style>
