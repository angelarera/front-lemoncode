<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useMealPlanStore } from '@/stores/meal-plan'
import { mealTypes } from '@/types'
import { daysOfWeek } from '@/utils/constants'
import { IconHeart, IconDelete } from '@/components/icons'

// Props and emits
interface Props {
  meal?: any
  defaultDay?: string
  defaultMealType?: string
}

const props = withDefaults(defineProps<Props>(), {
  meal: null,
  defaultDay: '',
  defaultMealType: '',
})

const emit = defineEmits<{
  close: []
  save: []
}>()

const mealPlanStore = useMealPlanStore()

// Form
const form = reactive({
  name: '',
  emoji: '',
  day: props.defaultDay || '',
  type: (props.defaultMealType as 'breakfast' | 'lunch' | 'dinner') || '',
  isFavourite: false,
})

watch(
  () => props.meal,
  (newMeal) => {
    if (newMeal) {
      form.name = newMeal.name
      form.emoji = newMeal.emoji || ''
      form.day = newMeal.day
      form.type = newMeal.type
      form.isFavourite = newMeal.isFavourite
    } else {
      form.name = ''
      form.emoji = ''
      form.day = props.defaultDay || ''
      form.type = (props.defaultMealType as 'breakfast' | 'lunch' | 'dinner') || ''
      form.isFavourite = false
    }
  },
  { immediate: true },
)

const handleSubmitMeal = async () => {
  if (!form.name || !form.day || !form.type) return

  if (props.meal) {
    await mealPlanStore.updateMeal(props.meal.id, {
      name: form.name,
      emoji: form.emoji,
      day: form.day,
      type: form.type,
    })

    if (form.isFavourite !== props.meal.isFavourite) {
      await mealPlanStore.toggleFavourite(props.meal.id)
    }
  } else {
    await mealPlanStore.addMeal({
      name: form.name,
      emoji: form.emoji,
      day: form.day,
      type: form.type,
    })
    if (form.isFavourite) {
      const lastMeal = mealPlanStore.meals[mealPlanStore.meals.length - 1]
      if (lastMeal) {
        await mealPlanStore.toggleFavourite(lastMeal.id)
      }
    }
  }

  emit('save')
  emit('close')
}

const handleDeleteMeal = async () => {
  if (props.meal) {
    await mealPlanStore.deleteMeal(props.meal.id)
    emit('close')
  }
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
      <div class="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">
          {{ meal ? 'Edit Meal' : 'Add New Meal' }}
        </h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form @submit.prevent="handleSubmitMeal" class="p-6 space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1"> Meal Name </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter meal name"
          />
        </div>

        <div>
          <label for="emoji" class="block text-sm font-medium text-gray-700 mb-1"> Emoji </label>
          <input
            id="emoji"
            v-model="form.emoji"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add an emoji 😊"
            maxlength="2"
          />
          <p class="text-xs text-gray-500 mt-1">Type an emoji using your keyboard</p>
        </div>

        <div>
          <label for="day" class="block text-sm font-medium text-gray-700 mb-1"> Day </label>
          <select
            id="day"
            v-model="form.day"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a day</option>
            <option v-for="day in daysOfWeek" :key="day" :value="day">
              {{ day }}
            </option>
          </select>
        </div>

        <div>
          <label for="type" class="block text-sm font-medium text-gray-700 mb-1"> Meal Type </label>
          <select
            id="type"
            v-model="form.type"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select meal type</option>
            <option v-for="mealType in mealTypes" :key="mealType.value" :value="mealType.value">
              {{ mealType.label }}
            </option>
          </select>
        </div>

        <div class="flex justify-between items-center pt-4">
          <div class="flex items-center gap-2">
            <IconHeart :filled="form.isFavourite" @toggle="form.isFavourite = !form.isFavourite" />
            <button
              v-if="meal"
              type="button"
              @click="handleDeleteMeal"
              class="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
              title="Delete meal"
            >
              <IconDelete />
            </button>
          </div>

          <div class="flex gap-3">
            <button
              type="button"
              @click="$emit('close')"
              class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              {{ meal ? 'Update' : 'Add' }} Meal
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
