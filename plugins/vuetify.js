import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
// import colors from 'vuetify/es5/util/colors'
import VueAnime from 'vue-animejs'

Vue.use(VueAnime)

Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
      themes: {
        light: {
          primary: '#423C6D',
          secondary: '#FFC519',
          accent: '#E8D7F1',
          error: '#D2484B',
          warning: '#FFC519',
          info: '#808AA9',
          success: '#3D881B'
        }
      }
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
