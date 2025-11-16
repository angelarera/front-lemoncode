import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useMealPlanStore } from './meal-plan'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const mealPlanStore = useMealPlanStore()

    const plannedMealsCount = computed(() => {
      return mealPlanStore.meals.length
    })

    const favouriteMealsCount = computed(() => {
      return mealPlanStore.getFavouriteMeals().length
    })

    return {
      plannedMealsCount,
      favouriteMealsCount,
    }
  },
  {
    persist: true,
  },
)
