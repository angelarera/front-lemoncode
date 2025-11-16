<script setup lang="ts">
import { computed } from 'vue'
import { IconHeart, IconEdit, IconDelete } from '@/components/icons'

interface Props {
  meal: any
}

const props = defineProps<Props>()

defineEmits<{
  edit: []
  delete: []
  'toggle-favourite': []
}>()

const cardColour = computed(() => {
  switch (props.meal.type) {
    case 'breakfast':
      return 'bg-amber-200'
    case 'lunch':
      return 'bg-emerald-200'
    case 'dinner':
      return 'bg-sky-200'
    default:
      return 'bg-gray-200'
  }
})
</script>

<template>
  <div
    class="meal-card rounded-lg p-3 flex items-center justify-between transition-all duration-200"
    :class="cardColour"
  >
    <div class="meal-info flex items-center gap-3">
      <span v-if="meal.emoji" class="emoji text-lg">{{ meal.emoji }}</span>
      <span class="meal-name font-medium text-gray-800">{{ meal.name }}</span>
    </div>

    <div class="meal-actions flex items-center gap-1">
      <IconHeart :filled="meal.isFavourite" @toggle="$emit('toggle-favourite')" class="p-1" />
      <button
        @click="$emit('edit')"
        class="p-1 text-gray-500 hover:text-blue-600 transition-colors"
      >
        <IconEdit />
      </button>
      <button
        @click="$emit('delete')"
        class="p-1 text-gray-500 hover:text-red-600 transition-colors"
      >
        <IconDelete />
      </button>
    </div>
  </div>
</template>
