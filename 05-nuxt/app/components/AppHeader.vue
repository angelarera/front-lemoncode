<template>
  <header>
    <nav class="header">
      <NuxtLink to="/" class="header__title">
        <NuxtImg
          src="/home-logo.png"
          alt="Logo Casa Rural"
          width="125"
          height="auto"
          loading="eager"
          format="webp"
          quality="85"
          :modifiers="{ fit: 'contain' }"
        />
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  margin-bottom: var(--spacing-xl);
  padding-top: var(--spacing-xxl);
  padding-bottom: var(--spacing-xxl);
  background-color: var(--colour-grey-light);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
