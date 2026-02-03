// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  runtimeConfig: {
    public: {
      // Public runtime config: exposed to the client bundle.
      siteName: process.env.NUXT_PUBLIC_SITE_NAME ?? "Casa rural",
    },
  },
});
