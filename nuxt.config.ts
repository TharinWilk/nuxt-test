// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",
  router: {
    base: "/nuxt-test/",
  },
  modules: ["nuxt-icon"],
  runtimeConfig: {
    public: {
      apiBase: "/nuxt-test/",
    },
  },
});
