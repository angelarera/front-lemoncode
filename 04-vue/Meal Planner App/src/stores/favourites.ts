import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MealType } from '@/types'
import { useMealPlanStore } from './meal-plan'

export type FavouriteMeal = {
  id: string
  name: string
  emoji?: string
  type: MealType
}

export const useFavouriteStore = defineStore(
  'favourites',
  () => {
    const favouriteMeals = ref<FavouriteMeal[]>([])

    const addFavouriteMeal = (meal: Omit<FavouriteMeal, 'id'>) => {
      const existing = favouriteMeals.value.find(
        (fav) => fav.name === meal.name && fav.type === meal.type,
      )

      if (!existing) {
        const newFavourite: FavouriteMeal = {
          ...meal,
          id: crypto.randomUUID(),
        }
        favouriteMeals.value.push(newFavourite)
      }
    }

    const deleteFavouriteMeal = (id: string) => {
      const index = favouriteMeals.value.findIndex((meal) => meal.id === id)
      if (index !== -1) {
        const deletedMeal = favouriteMeals.value[index]
        if (deletedMeal) {
          favouriteMeals.value.splice(index, 1)
          const mealPlanStore = useMealPlanStore()
          mealPlanStore.syncFavouriteStatus(deletedMeal.name, deletedMeal.type, false)
        }
      }
    }

    const isFavouriteMeal = (name: string, type: MealType): boolean => {
      return favouriteMeals.value.some((meal) => meal.name === name && meal.type === type)
    }

    const getFavouriteMeals = () => {
      return favouriteMeals.value
    }

    return {
      favouriteMeals,
      addFavouriteMeal,
      deleteFavouriteMeal,
      isFavouriteMeal,
      getFavouriteMeals,
    }
  },
  {
    persist: true,
  },
)
