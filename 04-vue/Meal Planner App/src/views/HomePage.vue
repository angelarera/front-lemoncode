<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMealPlanStore } from '@/stores/meal-plan'
import WeeklyPlan from '@/components/weekly-plan/WeeklyPlan.vue'
import FavouritesList from '@/components/favourites/FavouritesList.vue'
import MealModal from '@/components/forms/MealModal.vue'

const mealPlanStore = useMealPlanStore()

const handleEditMeal = (meal: any) => {
  mealPlanStore.openEditModal(meal)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <main class="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <section class="weekly-calendar lg:w-3/5 xl:w-4/5">
          <h2 class="text-1xl font-bold mb-3 text-gray-800">This Week's Plan</h2>
          <div>
            <WeeklyPlan @edit-meal="handleEditMeal" />
          </div>
        </section>

        <aside class="favourite-meals lg:w-2/5 xl:w-1/5">
          <h2 class="text-1xl font-bold mb-3 text-gray-800">Favourite Meals</h2>
          <div class="bg-white rounded-lg shadow p-6">
            <FavouritesList />
          </div>
        </aside>
      </div>
    </main>

    <MealModal
      v-if="mealPlanStore.isModalOpen"
      :meal="mealPlanStore.editingMeal"
      :default-day="mealPlanStore.selectedDay"
      @close="mealPlanStore.closeModal"
      @save="mealPlanStore.closeModal"
    />

    <RouterView />
  </div>
</template>
