import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Meal, MealInsert } from '@/types'
import { useFavouriteStore } from './favourites'

export const useMealPlanStore = defineStore(
  'meal-plan',
  () => {
    const meals = ref<Meal[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const isModalOpen = ref(false)
    const editingMeal = ref<Meal | null>(null)
    const selectedDay = ref<string>('')
    const selectedMealType = ref<string>('')

    // Modal
    const openAddModal = (
      day?: string,
      mealType?: string,
      predefinedMeal?: { name: string; emoji?: string },
    ) => {
      selectedDay.value = day || ''
      selectedMealType.value = mealType || ''
      editingMeal.value = null
      isModalOpen.value = true

      if (predefinedMeal) {
        const favouritesStore = useFavouriteStore()
        const isFavourite = favouritesStore.isFavouriteMeal(
          predefinedMeal.name,
          mealType as 'breakfast' | 'lunch' | 'dinner',
        )

        editingMeal.value = {
          id: '',
          name: predefinedMeal.name,
          emoji: predefinedMeal.emoji || '',
          day: day || '',
          type: (mealType as 'breakfast' | 'lunch' | 'dinner') || '',
          isFavourite: isFavourite,
        } as Meal
      }
    }

    const openEditModal = (meal: Meal) => {
      editingMeal.value = meal
      selectedDay.value = meal.day
      selectedMealType.value = meal.type
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      editingMeal.value = null
      selectedDay.value = ''
      selectedMealType.value = ''
    }

    // Add meal
    const addMeal = async (mealInsert: MealInsert) => {
      try {
        loading.value = true
        error.value = null

        const favouritesStore = useFavouriteStore()
        const isFavourite = favouritesStore.isFavouriteMeal(mealInsert.name, mealInsert.type)

        const newMeal: Meal = {
          ...mealInsert,
          id: crypto.randomUUID(),
          isFavourite: isFavourite,
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
          const favouritesStore = useFavouriteStore()

          if (!meal.isFavourite) {
            favouritesStore.addFavouriteMeal({
              name: meal.name,
              emoji: meal.emoji,
              type: meal.type,
            })
            meal.isFavourite = true
          } else {
            const favourite = favouritesStore
              .getFavouriteMeals()
              .find((fav) => fav.name === meal.name && fav.type === meal.type)
            if (favourite) {
              favouritesStore.deleteFavouriteMeal(favourite.id)
            }
            meal.isFavourite = false
          }
        }
      } catch (e) {
        error.value = e instanceof Error ? e.message : 'Failed to toggle favourite'
      }
    }

    const updateMealFavouriteStatus = (id: string, isFavourite: boolean) => {
      const meal = meals.value.find((meal) => meal.id === id)
      if (meal) {
        meal.isFavourite = isFavourite
      }
    }

    const syncFavouriteStatus = (name: string, type: string, isFavourite: boolean) => {
      meals.value.forEach((meal) => {
        if (meal.name === name && meal.type === type) {
          meal.isFavourite = isFavourite
        }
      })
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
      isModalOpen,
      editingMeal,
      selectedDay,
      selectedMealType,
      openAddModal,
      openEditModal,
      closeModal,
      addMeal,
      deleteMeal,
      updateMeal,
      toggleFavourite,
      updateMealFavouriteStatus,
      syncFavouriteStatus,
      clearWeek,
      getMealsByDay,
      getMealById,
      getFavouriteMeals,
    }
  },
  {
    persist: true,
  },
)
