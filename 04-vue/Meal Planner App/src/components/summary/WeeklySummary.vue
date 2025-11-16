<script setup lang="ts">
import { useCounterStore } from '@/stores'

const counterStore = useCounterStore()
</script>

<template>
  <div class="weekly-summary space-y-4">
    <div class="space-y-3">
      <div
        class="summary-item bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between md:flex-col"
      >
        <div class="summary-info flex items-center gap-3 flex-1 md:mb-2">
          <span class="summary-label font-medium text-gray-800 leading-tight">Planned Meals</span>
        </div>
        <div
          class="summary-count bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-bold"
        >
          {{ counterStore.plannedMealsCount }}
        </div>
      </div>

      <div
        class="summary-item bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between md:flex-col"
      >
        <div class="summary-info flex items-center gap-2 flex-1 md:mb-2">
          <span class="summary-label font-medium text-gray-800 leading-tight">Favourite Meals</span>
        </div>
        <div
          class="summary-count bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-bold"
        >
          {{ counterStore.favouriteMealsCount }}
        </div>
      </div>
    </div>
  </div>
</template>
