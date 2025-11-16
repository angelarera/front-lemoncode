<script setup lang="ts">
import { computed } from 'vue'

// Props
interface Props {
  filled?: boolean
  size?: number
  color?: string
  filledColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  filled: false,
  size: 20,
  color: 'currentColor',
  filledColor: '#ef4444',
})

// Emit
defineEmits<{
  toggle: []
}>()

// Path
const heartPath =
  'M43.8,16.7c0,7.1-7.4,14.1-18.5,24.7l-.2.2-.2-.2C13.6,30.8,6.2,23.8,6.2,16.7s3.5-8.6,8.2-8.6,7.1,2.4,8.4,5.8h4.4c1.2-3.4,4.7-5.8,8.4-5.8s8.2,3.7,8.2,8.6Z'

// Computeds
const buttonClasses = computed(() => ({
  'text-gray-500 hover:text-red-500': !props.filled,
  'text-red-500 hover:text-red-600': props.filled,
}))

const strokeColor = computed(() => (props.filled ? props.filledColor : props.color))
</script>

<template>
  <button
    class="heart-button transition-all duration-200 focus:outline-none"
    :class="buttonClasses"
    @click="$emit('toggle')"
    aria-label="Toggle favourite"
  >
    <svg class="heart-svg" :width="size" :height="size" viewBox="0 0 50 50">
      <path
        class="heart-path"
        :class="{ 'heart-path--filled': filled }"
        :d="heartPath"
        fill="none"
        :stroke="strokeColor"
        stroke-width="4.1"
        stroke-miterlimit="10"
      />
    </svg>
  </button>
</template>

<style scoped>
.heart-button {
  transform-origin: center;
  transition: all 0.2s ease-in-out;
}

.heart-svg {
  transform-origin: center;
  transition: transform 0.2s ease-in-out;
}

.heart-path {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: center;
}

.heart-path--filled {
  fill: v-bind('props.filledColor');
  stroke: v-bind('props.filledColor');
  transform: scale(1.05);
  animation: heartbeat 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.heart-button:active .heart-svg {
  transform: scale(0.95);
}

/* Animation */
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1.05);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.05);
  }
}
</style>
