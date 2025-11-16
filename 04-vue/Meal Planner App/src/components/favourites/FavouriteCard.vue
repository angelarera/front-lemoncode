<script setup lang="ts">
import type { FavouriteMeal } from '@/stores/favourites'
import { IconAdd, IconDelete } from '@/components/icons'

interface Props {
  meal: FavouriteMeal
}

defineProps<Props>()

defineEmits<{
  add: [meal: FavouriteMeal]
  delete: [id: string]
}>()
</script>

<template>
  <div
    class="favourite-card bg-white rounded-lg border border-gray-200 p-3 flex items-center justify-between xl:flex-col xl:items-start"
  >
    <div class="meal-info flex items-center gap-3 flex-1">
      <span v-if="meal.emoji" class="emoji text-2xl">{{ meal.emoji }}</span>
      <div class="flex flex-col">
        <span class="meal-name font-medium text-gray-800 leading-tight">{{ meal.name }}</span>
        <span class="meal-type text-sm text-gray-500 capitalize">{{ meal.type }}</span>
      </div>
    </div>

    <div class="meal-actions flex items-center gap-1 xl:self-end">
      <button
        @click="$emit('add', meal)"
        class="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
        title="Add to calendar"
      >
        <IconAdd />
      </button>
      <button
        @click="$emit('delete', meal.id)"
        class="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
        title="Remove from favourites"
      >
        <IconDelete />
      </button>
    </div>
  </div>
</template>
