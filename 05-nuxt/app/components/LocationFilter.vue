<script setup lang="ts">
interface Props {
  modelValue: string;
  locations: string[];
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
};

// Eliinar duplicados
const uniqueLocations = computed(() => {
  return [...new Set(props.locations)].sort();
});
</script>

<template>
  <form class="location-filter">
    <label for="location-filter" class="location-filter__label">
      Busca por localización
    </label>
    <select
      id="location-filter"
      :value="modelValue"
      @change="handleChange"
      class="location-filter__select"
      aria-label="Filtrar por ubicación"
    >
      <option value="">Todas las ubicaciones</option>
      <option
        v-for="location in uniqueLocations"
        :key="location"
        :value="location"
      >
        {{ location }}
      </option>
    </select>
  </form>
</template>

<style scoped>
.location-filter {
  margin-bottom: var(--spacing-xl);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.location-filter__select {
  margin-top: var(--spacing-xs);
  padding: var(--spacing-sm);
  border: 1px solid var(--colour-grey-dark);
  border-radius: var(--border-radius-lg);
}

.location-filter__select:focus {
  border: 2px solid var(--colour-accent);
}
</style>
