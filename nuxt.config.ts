// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //components: true,
  // Set ssr true when deploying, only set it false because it was messing with my dev preview
  ssr: false,
  devtools: { enabled: true },
  css: ["/globals.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content','nuxt-icon','@nuxt/image'
  ],
  
  content: {
    markdown: {
      anchorLinks: false,
    }
    // ... options
  }
});
