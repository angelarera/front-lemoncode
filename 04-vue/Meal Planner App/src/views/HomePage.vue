<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMealPlanStore } from '@/stores/meal-plan'
import { WeeklyPlan, FavouritesList, MealModal, WeeklySummary } from '@/components'

const mealPlanStore = useMealPlanStore()

const handleAddMeal = ({ day, mealType }: { day: string; mealType: string }) => {
  mealPlanStore.openAddModal(day, mealType)
}

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
            <WeeklyPlan @edit-meal="handleEditMeal" @add-meal="handleAddMeal" />
          </div>
        </section>

        <aside class="favourite-meals lg:w-2/5 xl:w-1/5">
          <div class="favourite-meals mb-5">
            <h2 class="text-1xl font-bold mb-3 text-gray-800">Favourite Meals</h2>
            <div class="bg-white rounded-lg shadow p-6">
              <FavouritesList />
            </div>
          </div>

          <div class="weekly-summary-section">
            <h2 class="text-1xl font-bold mb-3 text-gray-800">Weekly Summary</h2>
            <div class="bg-white rounded-lg shadow p-6">
              <WeeklySummary />
            </div>
          </div>
        </aside>
      </div>
    </main>

    <MealModal
      v-if="mealPlanStore.isModalOpen"
      :meal="mealPlanStore.editingMeal"
      :default-day="mealPlanStore.selectedDay"
      :default-meal-type="mealPlanStore.selectedMealType"
      @close="mealPlanStore.closeModal"
      @save="mealPlanStore.closeModal"
    />

    <RouterView />
  </div>
</template>
