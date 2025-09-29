// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    modules: [
    // ...
    '@pinia/nuxt',
  ],
   css: ['~/assets/css/input.css'], // you'll have to create this file
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
