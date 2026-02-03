export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  modules: ["@nuxt/image"],
  image: {
    provider: "ipx",
    screens: {
      xs: 375,
      sm: 640,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  runtimeConfig: {
    public: {
      siteName: process.env.NUXT_PUBLIC_SITE_NAME ?? "Casa rural",
    },
  },
});
