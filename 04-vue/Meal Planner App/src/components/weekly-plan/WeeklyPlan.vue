<script setup lang="ts">
import { useMealPlanStore } from '@/stores/meal-plan'
import DayColumn from './DayColumn.vue'
import { daysOfWeek } from '@/utils/constants'

const emit = defineEmits<{
  'add-meal': [{ day: string; mealType: string }]
  'edit-meal': [meal: any]
  'delete-meal': [id: string]
  'toggle-favourite': [id: string]
}>()

const mealPlanStore = useMealPlanStore()

const getMealsByDay = (day: string) => {
  return mealPlanStore.getMealsByDay(day)
}

const handleEditMeal = (meal: any) => {
  emit('edit-meal', meal)
}

const handleDeleteMeal = (id: string) => {
  mealPlanStore.deleteMeal(id)
}

const handleToggleFavourite = (id: string) => {
  mealPlanStore.toggleFavourite(id)
}

const handleAddMeal = ({ day, mealType }: { day: string; mealType: string }) => {
  emit('add-meal', { day, mealType })
}
</script>

<template>
  <div class="weekly-plan">
    <div class="days-container flex flex-col gap-6">
      <DayColumn
        v-for="day in daysOfWeek"
        :key="day"
        :day="day"
        :meals="getMealsByDay(day)"
        @add-meal="handleAddMeal"
        @edit-meal="handleEditMeal"
        @delete-meal="handleDeleteMeal"
        @toggle-favourite="handleToggleFavourite"
      />
    </div>
  </div>
</template>
