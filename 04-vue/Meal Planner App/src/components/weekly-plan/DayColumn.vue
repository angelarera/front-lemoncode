<script setup lang="ts">
import MealCard from './MealCard.vue'
import { mealTypes } from '@/types'
import { IconAdd } from '@/components/icons'

interface Props {
  day: string
  meals: any[]
}

defineProps<Props>()

defineEmits<{
  'edit-meal': [meal: any]
  'delete-meal': [id: string]
  'toggle-favourite': [id: string]
  'add-meal': [{ day: string; mealType: string }]
}>()
</script>

<template>
  <div class="day-column bg-white rounded-lg border border-gray-200 p-4">
    <div class="day-header mb-4 pb-3 border-b border-gray-100">
      <h3 class="font-semibold text-lg text-gray-800">{{ day }}</h3>
    </div>

    <div class="meals-container space-y-4 xl:flex xl:space-y-0 xl:space-x-4 xl:items-stretch">
      <div
        v-for="mealType in mealTypes"
        :key="mealType.value"
        class="meal-type-section xl:w-1/3 xl:flex xl:flex-col"
      >
        <h4 class="text-sm font-medium text-gray-600 mb-2">
          {{ mealType.label }}
        </h4>

        <div class="meal-card space-y-2 xl:flex-1 xl:flex xl:flex-col">
          <MealCard
            v-for="meal in meals.filter((m) => m.type === mealType.value)"
            :key="meal.id"
            :meal="meal"
            @edit="$emit('edit-meal', meal)"
            @delete="$emit('delete-meal', meal.id)"
            @toggle-favourite="$emit('toggle-favourite', meal.id)"
          />

          <button
            v-if="meals.filter((m) => m.type === mealType.value).length === 0"
            @click="$emit('add-meal', { day, mealType: mealType.value })"
            class="phantom-card min-h-[56px] w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 cursor-pointer xl:flex-1"
          >
            <IconAdd class="w-4 h-4 text-gray-400" />
            <span class="text-gray-400 text-sm">{{ mealType.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
