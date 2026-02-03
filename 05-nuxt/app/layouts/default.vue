<!-- layouts/default.vue es el layout que se usará por defecto en la aplicación cuando no configuramos uno manualmente -->
<template>
  <AppHeader />
  <main class="container">
    <slot />
  </main>
</template>
