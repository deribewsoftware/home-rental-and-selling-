// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      
      title:"Bete Home Rental"
      
    },
    pageTransition:{
name:"page",
mode:"out-in"
    }
  },
  modules:["@nuxt/ui",'@vueuse/motion/nuxt'],

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }
})
