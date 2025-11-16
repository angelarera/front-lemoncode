<script setup lang="ts">
import { ref } from 'vue'
import { IconCalendar, IconHeartStatic, IconStats } from '@/components/icons'

const activeSection = ref('weekly-plan')

const sections = [
  { id: 'weekly-plan', label: 'Plan', icon: IconCalendar },
  { id: 'favourites', label: 'Favourites', icon: IconHeartStatic },
  { id: 'summary', label: 'Summary', icon: IconStats },
]

const scrollToSection = (sectionId: string) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <nav class="bottom-nav lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
    <div class="bg-white rounded-full shadow-2xl border border-gray-200 px-4 py-3">
      <div class="flex space-x-6">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          class="flex flex-col items-center justify-center transition-all duration-200"
          :class="{
            'text-blue-600': activeSection === section.id,
            'text-gray-500 hover:text-gray-700': activeSection !== section.id,
          }"
        >
          <component :is="section.icon" class="w-6 h-6 mb-1" />
          <span
            class="text-xs transition-all duration-200"
            :class="activeSection === section.id ? 'font-bold' : 'font-medium'"
          >
            {{ section.label }}
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bottom-nav {
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
}

.bottom-nav button {
  min-width: 60px;
}
</style>
