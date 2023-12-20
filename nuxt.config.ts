// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  devtools: { enabled: true },
  css: ["/globals.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content','nuxt-icon'
  ],
  content: {
    // ... options
  }
});
