import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Meal, MealInsert } from '@/types'

export const useMealPlanStore = defineStore('meal-plan', () => {
  const meals = ref<Meal[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Add meal
  const addMeal = async (mealInsert: MealInsert) => {
    try {
      loading.value = true
      error.value = null

      const newMeal: Meal = {
        ...mealInsert,
        id: crypto.randomUUID(),
        isFavourite: false,
      }

      meals.value.push(newMeal)
      return newMeal
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to add meal'
      return null
    } finally {
      loading.value = false
    }
  }

  // Delete meal
  const deleteMeal = async (id: string) => {
    try {
      error.value = null
      meals.value = meals.value.filter((meal) => meal.id !== id)
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to delete meal'
    }
  }

  // Update meal
  const updateMeal = async (id: string, updates: Partial<Omit<MealInsert, 'id'>>) => {
    try {
      error.value = null
      const index = meals.value.findIndex((meal) => meal.id === id)
      if (index !== -1) {
        meals.value[index] = {
          ...meals.value[index],
          ...updates,
        } as Meal
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to update meal'
    }
  }

  // Favourites
  const toggleFavourite = async (id: string) => {
    try {
      error.value = null
      const meal = meals.value.find((meal) => meal.id === id)
      if (meal) {
        meal.isFavourite = !meal.isFavourite
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to toggle favourite'
    }
  }

  // Clear week
  const clearWeek = async () => {
    try {
      error.value = null
      meals.value = []
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to clear week'
    }
  }

  // Get meals by days
  const getMealsByDay = (day: string) => {
    return meals.value.filter((meal) => meal.day === day)
  }

  // Get meal by id
  const getMealById = (id: string) => {
    return meals.value.find((meal) => meal.id === id)
  }

  // Get favourite meals
  const getFavouriteMeals = () => {
    return meals.value.filter((meal) => meal.isFavourite)
  }

  return {
    meals,
    loading,
    error,
    addMeal,
    deleteMeal,
    updateMeal,
    toggleFavourite,
    clearWeek,
    getMealsByDay,
    getMealById,
    getFavouriteMeals,
  }
})
