<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <main class="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row gap-8">
        <section class="weekly-calendar md:w-3/5 xl:w-4/5">
          <h2 class="text-1xl font-bold mb-3 text-gray-800">This Week's Plan</h2>
          <div class="bg-white rounded-lg shadow p-6">
            <!-- Aquí irá tu componente WeeklyPlan -->
            <p class="text-gray-500">Content...</p>
          </div>
        </section>

        <aside class="favourite-meals md:w-2/5 xl:w-1/5">
          <h2 class="text-1xl font-bold mb-3 text-gray-800">Favourite Meals</h2>
          <div class="bg-white rounded-lg shadow p-6">
            <!-- Aquí irá tu componente FavouriteMeals -->
            <p class="text-gray-500">List...</p>
          </div>
        </aside>
      </div>
    </main>

    <RouterView />
  </div>
</template>
