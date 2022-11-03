// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  router: {
    base: "/nuxt-test/",
  },
  app: {
    baseURL: "http://tharinwilk.github.io/nuxt-test/",
  },
  modules: ["nuxt-icon"],
});
