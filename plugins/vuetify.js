import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  theme: {
    primary: '#423C6D',
    secondary: '#F6D97B',
    accent: '#E8D7F1',
    error: '#D2484B',
    warning: '#FFC519',
    info: '#808AA9',
    success: '#3D881B'
  }
})
