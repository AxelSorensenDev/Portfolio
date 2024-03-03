/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./content/**/*.vue",
  ],
  theme: {
    extend: {
      
      dropShadow: {
        'md': '0 0px 10px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
  modules: ["@nuxtjs/tailwindcss"],
};
