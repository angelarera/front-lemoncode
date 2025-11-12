export type Meal = {
  id: string
  name: string
  day: string
  type: 'breakfast' | 'lunch' | 'dinner'
  emoji?: string
  isFavourite: boolean
}

export type MealInsert = {
  name: string
  day: string
  type: 'breakfast' | 'lunch' | 'dinner'
  emoji?: string
}
