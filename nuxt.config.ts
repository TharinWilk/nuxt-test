// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",

  router: {
    base: "/nuxt-test/",
  },

  app: {
    baseURL: "/nuxt-test/",
    buildAssetsDir: "/nuxt-test/_nuxt/",
  },

  modules: ["nuxt-icon"],
});
