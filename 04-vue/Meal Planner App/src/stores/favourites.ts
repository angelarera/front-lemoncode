import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MealType } from '@/types'

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
        favouriteMeals.value.splice(index, 1)
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
