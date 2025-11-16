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

export const mealTypes = [
  { value: 'breakfast' as const, label: 'Breakfast' },
  { value: 'lunch' as const, label: 'Lunch' },
  { value: 'dinner' as const, label: 'Dinner' },
]

export type MealType = (typeof mealTypes)[number]['value']
