<script setup lang="ts">
import { IconAdd, IconDelete } from '@/components/icons'
import { useMealPlanStore } from '@/stores/meal-plan'

const mealPlanStore = useMealPlanStore()

const clearWeek = () => {
  mealPlanStore.clearWeek()
}

const addMeal = () => {
  mealPlanStore.openAddModal()
}
</script>

<template>
  <header class="header">
    <div
      class="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-4 lg:flex-row md:items-center md:justify-between"
    >
      <div class="header__main mb-3 flex flex-col lg:flex-row justify-center items-center">
        <img src="@/assets/logo.svg" alt="Logo" class="w-20 h-20 mb-2 md:mr-4" />
        <div class="header__main-texts">
          <h1 class="header__title text-3xl font-bold text-center md:text-start">
            Weekly Meal Planner
          </h1>
          <p class="header__subtitle text-center md:text-start">
            Plan your meals for the week ahead
          </p>
        </div>
      </div>

      <div class="header__btns-container flex justify-center">
        <button
          @click="clearWeek"
          class="header__delete-btn px-4 py-2 me-3 border-[3px] border-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors flex items-center duration-200 font-medium"
        >
          <IconDelete class="me-1" />
          Clear Week
        </button>
        <button
          @click="addMeal"
          class="header__add-btn px-4 py-2 border-[3px] bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white rounded-lg flex items-center transition-colors duration-200 font-medium"
        >
          <IconAdd class="me-1" />
          Add New Meal
        </button>
      </div>
    </div>
  </header>
</template>
