<script setup lang="ts">
interface Props {
  modelValue: string;
  placeholder?: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Casa rural en...",
});

const emit = defineEmits<Emits>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <form class="name-search">
    <label for="name-search" class="name-search__label">
      Busca por nombre de casa
    </label>
    <input
      id="name-search"
      type="text"
      :value="modelValue"
      @input="handleInput"
      :placeholder="placeholder"
      class="name-search__input"
      aria-label="Buscar casas por nombre"
    />
  </form>
</template>

<style scoped>
.name-search {
  margin-bottom: var(--spacing-md);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.name-search__input {
  margin-top: var(--spacing-xs);
  padding: var(--spacing-sm);
  border: 1px solid var(--colour-grey-dark);
  border-radius: var(--border-radius-lg);
}

.name-search__input:focus {
  border: 2px solid var(--colour-accent);
}
</style>
