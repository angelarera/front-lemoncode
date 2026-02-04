<script setup lang="ts">
const config = useRuntimeConfig();
const { data: houses } = await useFetch("/api/houses");

const searchName = ref("");
const searchLocation = ref("");

useSeoMeta({
  title: `${config.public.siteName} - Home`,
  description: "Listado de casas rurales disponibles para tus vacaciones.",
});

// Ubicaciones para el filtro
const uniqueLocations = computed(() => {
  if (!houses.value) return [];
  return [...new Set(houses.value.map((house) => house.city))].sort();
});

// Filtrar las casas
const filteredHouses = computed(() => {
  if (!houses.value) return [];

  return houses.value.filter((house) => {
    const matchesName =
      searchName.value === "" ||
      house.name.toLowerCase().includes(searchName.value.toLowerCase());

    const matchesLocation =
      searchLocation.value === "" || house.city === searchLocation.value;

    return matchesName && matchesLocation;
  });
});

const hasResults = computed(() => filteredHouses.value.length > 0);
</script>

<template>
  <h1 class="list-title">Casas rurales disponibles</h1>
  <div class="filters">
    <NameSearch v-model="searchName" placeholder="Buscar casa por nombre..." />
    <LocationFilter v-model="searchLocation" :locations="uniqueLocations" />
  </div>
  <ul v-if="hasResults" class="house-list">
    <HouseCard v-for="house in filteredHouses" :key="house.id" :house="house" />
  </ul>
  <div v-else class="no-results">
    <p class="no-results__text">
      No se encontraron casas con los filtros aplicados.
    </p>
    <button
      v-if="searchName || searchLocation"
      @click="
        searchName = '';
        searchLocation = '';
      "
      class="no-results__clear-btn"
    >
      Limpiar filtros
    </button>
  </div>
</template>

<style scoped>
.list-title {
  margin: var(--spacing-lg);
  font-size: var(--font-size-xxlarge);
  font-weight: 800;
  line-height: 115%;
  text-transform: uppercase;
  text-align: center;
}

.house-list {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: var(--spacing-xl);
  row-gap: var(--spacing-xxl);
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.no-results__text {
  margin-bottom: var(--spacing-sm);
}

.no-results__clear-btn {
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--colour-white);
  background-color: var(--colour-primary);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.no-results__clear-btn:hover {
  background-color: var(--colour-accent);
}

@media (min-width: 768px) {
  .filters {
    display: flex;
    justify-content: stretch;
    gap: var(--spacing-xl);
  }

  .house-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .house-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
