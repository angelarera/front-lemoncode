<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFavouriteStore, useMealPlanStore, type FavouriteMeal } from '@/stores'
import FavouriteCard from './FavouriteCard.vue'
import FavouriteModal from '@/components/forms/FavouriteModal.vue'
import { IconAdd } from '@/components/icons'

const favouritesStore = useFavouriteStore()
const mealPlanStore = useMealPlanStore()

const showFavouriteModal = ref(false)

const favouriteMeals = computed(() => favouritesStore.getFavouriteMeals())

const handleAddFavourite = () => {
  showFavouriteModal.value = true
}

const handleAddToCalendar = (meal: FavouriteMeal) => {
  mealPlanStore.openAddModal('', meal.type, {
    name: meal.name,
    emoji: meal.emoji,
  })
}

const handleDeleteFavourite = (id: string) => {
  favouritesStore.deleteFavouriteMeal(id)
}

const handleCloseModal = () => {
  showFavouriteModal.value = false
}

const handleSaveModal = () => {
  showFavouriteModal.value = false
}
</script>

<template>
  <div class="favourites-list space-y-4">
    <div v-if="favouriteMeals.length > 0" class="space-y-3">
      <FavouriteCard
        v-for="meal in favouriteMeals"
        :key="meal.id"
        :meal="meal"
        @add="handleAddToCalendar"
        @delete="handleDeleteFavourite"
      />
    </div>

    <div v-else class="text-center text-gray-500 py-8">
      <p>No favourite meals yet</p>
      <p class="text-sm mt-2">
        Click the heart icon on any meal or use the button below to add favourites
      </p>
    </div>

    <button
      @click="handleAddFavourite"
      class="phantom-card min-h-[56px] w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
    >
      <IconAdd class="w-4 h-4 text-gray-400" />
      <span class="text-gray-400 text-sm">Add Favourite</span>
    </button>

    <FavouriteModal :show="showFavouriteModal" @close="handleCloseModal" @save="handleSaveModal" />
  </div>
</template>
