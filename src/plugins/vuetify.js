import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    // primary: '#9652ff',
    // success: '#3cd1c2',
    // info: '#ffaa2c',
    // warning: '#ffa500',
    // error: '#f83e70',
    primary: "#9652ff",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
})
