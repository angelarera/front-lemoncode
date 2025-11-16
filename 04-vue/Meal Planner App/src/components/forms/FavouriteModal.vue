<script setup lang="ts">
import { reactive } from 'vue'
import { useFavouriteStore } from '@/stores'
import { mealTypes } from '@/types'

// Props and emits
interface Props {
  show: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  save: []
}>()

const favouritesStore = useFavouriteStore()

// Form
const form = reactive({
  name: '',
  emoji: '',
  type: '' as 'breakfast' | 'lunch' | 'dinner',
})

const handleSubmit = async () => {
  if (!form.name || !form.type) return

  await favouritesStore.addFavouriteMeal({
    name: form.name,
    emoji: form.emoji,
    type: form.type,
  })

  emit('save')
  emit('close')
  resetForm()
}

const resetForm = () => {
  form.name = ''
  form.emoji = ''
  form.type = '' as 'breakfast' | 'lunch' | 'dinner'
}

const handleClose = () => {
  emit('close')
  resetForm()
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
  >
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
      <div class="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">Add Favourite Meal</h2>
        <button @click="handleClose" class="text-gray-400 hover:text-gray-600 transition-colors">
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

      <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
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

        <div class="flex justify-end gap-3 pt-4">
          <button
            type="button"
            @click="handleClose"
            class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Add Favourite
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
