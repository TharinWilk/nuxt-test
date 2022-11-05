// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",

  router: {
    base: "/nuxt-test/",
  },

  generate: {
    routes: ["/nuxt-test/"],
  },

  modules: ["nuxt-icon"],
});
