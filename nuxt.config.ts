// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  tailwindcss : {
    exposeConfig : true,
    viewer : true, 
  },

  modules: ['@nuxtjs/tailwindcss', '@ant-design-vue/nuxt']
})